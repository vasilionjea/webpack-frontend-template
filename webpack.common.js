import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  mode: 'none',
  entry: {
    app: './src/main.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.html$/,
        loader: 'html-loader'
      },

      // https://webpack.js.org/guides/asset-modules
      // All images will be emitted into the assets folder
      // within the output directory.
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      },

      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html',
      favicon: 'src/favicon.ico',
      inject: 'body',
    }),
  ],
};
