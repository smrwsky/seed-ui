import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';
import postcssEnv from 'postcss-preset-env';

import packageJson from './package.json' assert { type: "json" };

const external = [
  ...Object.keys(packageJson.dependencies),
  ...Object.keys(packageJson.peerDependencies),
]

const extensions = ['.js', '.ts', '.tsx'];

const outputConfig = {
  preserveModules: true,
  preserveModulesRoot: 'src',
  generatedCode: {
    constBindings: true,
  },
};

export default {
  input: 'src/index.ts',
  output: [
    {
      ...outputConfig,
      dir: 'dist/cjs',
      format: 'cjs',
    },
    {
      ...outputConfig,
      dir: 'dist/es',
      format: 'esm',
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs({ include: '**/node_modules/**' }),
    babel({
      babelHelpers: 'runtime',
      configFile: true,
      extensions,
      include: ['src/**/*'],
      exclude: ['node_modules/**', '**/*.css'],
    }),
    postcss({
      plugins: [postcssImport(), postcssEnv()],
      namedExports: true,
      extract: true,
    }),
  ],
  external: (id) => external.some(ext => id.startsWith(ext)) || /@babel\/runtime/.test(id),
};
