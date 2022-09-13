const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;
const customPlugin = require('./custom-plugin');

module.exports = {
  target: 'node',
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
  },
  performance: {
    hints: false,
  },
  devtool: 'nosources-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  externals: [
    /^firebase.+$/,
    /^@google.+$/,
    nodeExternals({
      allowlist: [/^@jackywxd/],
    }),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../../.build/functions'),
    libraryTarget: 'commonjs',
  },
  plugins: [
    new WatchExternalFilesPlugin({
      files: ['../domain/src/**/*.ts'],
    }),
    new customPlugin(),
  ],
};
