import type { Configuration } from 'webpack';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { BuildOptionsI } from './types';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';
import 'webpack-dev-server';

export const buildConfig = (options: BuildOptionsI): Configuration => {
    const { paths, mode, isDev } = options;
    return {
        entry: paths.entry,
        mode,
        output: {
            filename: '[name].[contenthash:4].js',
            path: paths.build,
            clean: true,
        },
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    };
};
