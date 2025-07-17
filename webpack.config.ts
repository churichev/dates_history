import path from 'path';
import { buildConfig } from './config/buildConfig';
import { BuildEnv, BuildOptionsI } from './config/types';

export default (env: BuildEnv) => {
    const MODE = env.mode || 'production';
    const PORT = env.port || 8000;

    const options: BuildOptionsI = {
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            src: path.resolve(__dirname, 'src'),
            sass: 'app/styles/media-breakpoints',
        },
        mode: MODE,
        isDev: MODE === 'development',
        port: PORT,
    };

    const config = buildConfig(options);
    return config;
};
