import type { RuleSetRule } from 'webpack';
import type { BuildOptionsI } from './types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildLoaders = (options: BuildOptionsI): RuleSetRule[] => {
    const { isDev, paths } = options;

    const TypeScriptLoader: RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const generateSassImports = (sassPaths: typeof paths.sass) => {
        const validPaths = Array.isArray(sassPaths) ? sassPaths : [sassPaths];
        return `@use "${validPaths.join('" as *; @use "')}" as *;`;
    };
    const StyleLoader: RuleSetRule = {
        test: /\.(css|sass|scss)$/,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        namedExport: false,
                        auto: /\.module\.\w+$/,
                        localIdentName: isDev
                            ? '[path][name]__[local]'
                            : `[hash:base64:5]`,
                    },
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    additionalData: generateSassImports(paths.sass),
                },
            },
        ],
    };

    const SvgLoader: RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const FileLoader: RuleSetRule = {
        test: /\.(png|jpeg|jpg|gif)$/,
        use: ['file-loader'],
    };

    return [TypeScriptLoader, SvgLoader, FileLoader, StyleLoader];
};
