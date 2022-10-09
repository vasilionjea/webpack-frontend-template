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
      {
        test: /\.(png|svg|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
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
    })
  ],
};
