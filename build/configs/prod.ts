/**
 * Prod config
 * @author VenDream
 * @since 2020-4-24
 */

import webpackMerge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

import baseConfig from './base';
import getPlugins from '../plugins';
import getLoaders from '../loaders';

const prodConfig = webpackMerge(baseConfig, {
  mode: 'production',
  module: {
    rules: getLoaders(false),
  },
  plugins: getPlugins(false),
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
  },
});

export default prodConfig;
