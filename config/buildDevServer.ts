import { BuildOptionsI } from './types';
import { Configuration } from 'webpack';

type Server = Configuration['devServer'];
export const buildDevServer = (options: BuildOptionsI): Server => {
    return {
        open: true,
        port: options.port,
    };
};
