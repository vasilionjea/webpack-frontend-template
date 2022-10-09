import path from 'path';
import url from 'url';
import {merge} from 'webpack-merge';
import common from './webpack.common.js';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
  mode: 'production',
  output: {
    filename: '[name]-[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
});
