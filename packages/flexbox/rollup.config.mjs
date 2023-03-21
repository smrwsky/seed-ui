import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

import externals from 'rollup-plugin-node-externals';
import typescript from '@rollup/plugin-typescript';

const outputOptions = {
  dir: 'dist',
  preserveModules: true,
  preserveModulesRoot: 'src',
  sourcemap: true,
  generatedCode: 'es2015',
  assetFileNames({ name }) {
    return name.replace(/^src\//, 'assets/');
  },
};

export default {
  input: 'src/index.ts',
  output: [
    {
      ...outputOptions,
      format: 'es',
      entryFileNames: ({ name }) => `es/${name.replace('.css', '.css.vanilla')}.js`
    },
    {
      ...outputOptions,
      format: 'commonjs',
      entryFileNames: ({ name }) => `cjs/${name.replace('.css', '.css.vanilla')}.js`
    },
  ],
  plugins: [
    externals(),
    typescript({
      noForceEmit: true,
    }),
    vanillaExtractPlugin({
      identifiers: 'short',
      esbuildOptions: { loader: { '.css': 'empty' } },
    }),
  ],
  treeshake: {
    moduleSideEffects: (id) => {
      return /\.css$/.test(id);
    },
  },
};
