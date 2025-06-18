import { mergeConfig } from 'vite';
import path from 'path';

export default {
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          'react-router': path.resolve(__dirname, '../__mocks__/react-router.ts'),
        },
      },
    });
  },
};
