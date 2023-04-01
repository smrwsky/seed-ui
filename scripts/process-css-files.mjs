import path from 'path';
import postcss from 'rollup-plugin-postcss';

/**
 * It takes an array of CSS files, and returns an array of Rollup configurations
 * for each file
 * @param {string[]} files - An array of file names.
 * @return {object} An array of objects.
 */
function processCssFiles(files) {
  return files
    .map((file) => path.basename(file, '.css'))
    .map((file) => ({
      input: `src/assets/${file}.css`,
      output: {
        file: `css/${file}.css`,
      },
      plugins: [
        postcss({
          extract: true,
          modules: false,
          minimize: true,
          sourceMap: true,
        }),
      ],
      onwarn(warning, warn) {
        if (warning.code === 'FILE_NAME_CONFLICT') return;
        warn(warning);
      },
    }));
}

export { processCssFiles };
