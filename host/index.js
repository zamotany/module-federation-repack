import * as React from 'react';
import {AppRegistry, Text, View, Platform} from 'react-native';
import { ChunkManager } from '@callstack/repack/client';
import {name as appName} from './app.json';

ChunkManager.configure({
  forceRemoteChunkResolution: true,
  resolveRemoteChunk: async (chunkId) => {
    const filename = {
      // containers
      app: 'app.container.bundle',
    }[chunkId] ?? `${chunkId}.chunk.bundle`

    return {
      url: `http://localhost:9000/${filename}?platform=${Platform.OS}`,
      excludeExtension: true,
    }
  }
})

async function loadComponent(scope, module) {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  // Download and execute container
  await ChunkManager.loadChunk(scope);

  const container = self[scope];

  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  const factory = await container.get(module);
  const exports = factory();
  return exports;
}

const App = React.lazy(
  () => loadComponent('app', './App.js')
);

function HostRoot() {
  return (
    
    <React.Suspense
      fallback={
        <View style={{ marginTop: 100, alignItems: 'center' }}>
          <Text>Loading App</Text>
        </View>
      }
    >
      <App />
    </React.Suspense>
  )
}

AppRegistry.registerComponent(appName, () => HostRoot);
