export type BuildMode = 'development' | 'production';

export interface BuildPathI {
    html: string;
    entry: string;
    build: string;
    src: string;
    sass: string | string[];
}
export interface BuildOptionsI {
    paths: BuildPathI;
    mode: BuildMode;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}
