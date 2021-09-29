import { AppRegistry } from 'react-native';
import App from './src/App';
import { ChunkManager } from '@callstack/repack/client';
import { name as appName } from './app.json';

// Not needed but can be customized
// ChunkManager.configure({
//   forceRemoteChunkResolution: true, // for development
//   resolveRemoteChunk: async (chunkId) => {
//     return {
//       url: `http://localhost:${process.env.__PUBLIC_PORT__}/${chunkId}`,
//     }
//   }
// })

AppRegistry.registerComponent(appName, () => App);
