import path from 'path';
import {merge} from 'webpack-merge';
import common, {__dirname} from './webpack.common.js';

/**
 * Webpack config for production.
 * https://webpack.js.org/guides/production
 */
export default merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});
