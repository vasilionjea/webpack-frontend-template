import path from 'path';
import { merge } from 'webpack-merge';
import common, { __dirname } from './webpack.common.js';

/**
 * Webpack config for development.
 * https://webpack.js.org/guides/development
 */
export default merge(common, {
  mode: 'development',

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  devtool: 'cheap-module-source-map',

  // Web server with live reload
  devServer: {
    static: './dist',
    port: 3000,
    watchFiles: ['src/*.html'],
  },

  optimization: {
    runtimeChunk: 'single',
  },
});
