import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';
import glob from 'glob';
import del from 'rollup-plugin-delete';
import externals from 'rollup-plugin-node-externals';
import postcss from 'rollup-plugin-postcss';
import { processCssFiles } from '../../scripts/process-css-files.mjs';

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

const cssFiles = glob.sync('./src/assets/*.css');

export default [
  {
    input: 'src/index.ts',
    output: {
      ...outputSharedOptions,
      assetFileNames({ name }) {
        return name.replace(/^src\//, 'dist/es/');
      },
      entryFileNames({ name }) {
        return `dist/es/${name.replace(/\.css$/, '.css.vanilla')}.js`;
      },
      format: 'es',
      preserveModulesRoot: 'src',
    },

    plugins: [
      nodeResolve(),
      externals(),
      typescript({
        noForceEmit: true,
      }),
      vanillaExtractPlugin({
        identifiers: 'short',
      }),
    ],
    treeshake: {
      moduleSideEffects(id) {
        return /\.css$/.test(id);
      },
    },
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
      postcss({
        extract: 'css/elements.css',
        sourceMap: true,
      }),
      del({
        targets: ['dist/es/**/*.css'],
        hook: 'buildEnd',
      }),
    ],
  },
  {
    input: 'css/elements.css',
    output: {
      file: 'css/elements.min.css',
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        modules: false,
        sourceMap: true,
      }),
    ],
    onwarn(warning, warn) {
      if (warning.code === 'FILE_NAME_CONFLICT') return;
      warn(warning);
    },
  },
  ...processCssFiles(cssFiles),
];
