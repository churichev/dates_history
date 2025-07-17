import type { BuildOptionsI } from './types';
import { type Configuration, ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

type Plugins = Configuration['plugins'];
export const buildPlugins = (options: BuildOptionsI): Plugins => {
    const { paths, isDev } = options;
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new ProgressPlugin(),
    ];

    if (isDev) {
        // plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: true }));
    }

    if (!isDev) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:4].css',
            }),
        );
    }

    return plugins;
};
