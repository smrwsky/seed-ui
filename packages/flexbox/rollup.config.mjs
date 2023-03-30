import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import externals from 'rollup-plugin-node-externals';

const outputSharedOptions = {
  dir: '.',
  exports: 'named',
  generatedCode: {
    constBindings: true,
    preset: 'es2015',
  },
  preserveModules: true,
  sourcemap: true,
};

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        ...outputSharedOptions,
        assetFileNames({ name }) {
          return name.replace(/^src\//, 'dist/es/');
        },
        entryFileNames({ name }) {
          return `dist/es/${name}.js`;
        },
        format: 'es',
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      nodeResolve(),
      externals(),
      typescript({
        noForceEmit: true,
      }),
    ],
  },
  {
    input: 'dist/es/index.js',
    output: [
      {
        ...outputSharedOptions,
        format: 'es',
        preserveModulesRoot: 'dist/es',
        assetFileNames({ name }) {
          return name;
        },
        entryFileNames({ name }) {
          return `dist/es/${name}.js`;
        },
      },
      {
        ...outputSharedOptions,
        format: 'commonjs',
        preserveModulesRoot: 'dist/es',
        assetFileNames({ name }) {
          return name;
        },
        entryFileNames({ name }) {
          return `dist/cjs/${name}.js`;
        },
      },
    ],
    plugins: [
      nodeResolve(),
      externals(),
      copy({
        targets: [
          { src: 'src/assets/*', dest: 'css' },
        ],
      }),
    ],
  },
];
