import path from 'path';
import url from 'url';
import {merge} from 'webpack-merge';
import common from './webpack.common.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'inline-source-map',

  // https://webpack.js.org/guides/development/
  devServer: {
    static: './dist',
    port: 3000,
    watchFiles: ['src/*.html'],
  },
  optimization: {
    runtimeChunk: 'single',
  },
});
