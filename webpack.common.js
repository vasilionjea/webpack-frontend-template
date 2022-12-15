import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const isProd = process.env.NODE_ENV === 'production';
export const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

/**
 * This common Webpack config is used for both production and development.
 * https://webpack.js.org/configuration
 */
export default {
  // The environment in which the code will run
  target: 'web',

  // Tells webpack to use its built-in optimizations accordingly
  mode: 'none',

  // The entry file(s) from where Webpack will start resolving modules
  entry: {
    app: './src/main.ts',
  },

  module: {
    rules: [
      // Typescript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      // HTML
      {
        test: /\.html$/,
        loader: 'html-loader'
      },


      // Images will be emitted into the assets folder within the output directory
      // https://webpack.js.org/guides/asset-modules
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },

      // CSS
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,

          // Translates CSS into CommonJS
          'css-loader',

          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  plugins: [
    // Extract CSS source into its own file
    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[contenthash].css' : '[name].css',
    }),

    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      inject: 'body',
    }),
  ],
};
