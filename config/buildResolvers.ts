import { ResolveOptions } from 'webpack';
import { BuildOptionsI } from './types';

export const buildResolvers = (options: BuildOptionsI): ResolveOptions => {
    const { paths } = options;

    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [paths.src, 'node_modules'],
        preferAbsolute: true,
        alias: {},
    };
};
