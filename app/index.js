/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './src/App';
import {name as appName} from './app.json';

ChunkManager.configure({
  forceRemoteChunkResolution: true, // for development
  resolveRemoteChunk: async (chunkId) => {
    return {
      url: `http://localhost:${process.env.__PUBLIC_PORT__}/${chunkId}`,
    }
  }
})

AppRegistry.registerComponent(appName, () => null);
