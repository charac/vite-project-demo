/*
 * @since: 2022-05-13 15:51:54
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 22:43:56
 * @Author: ltm@xtoneict.com
 * @message: ts配置
 */
/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    VITE_API_URL: string;
    VITE_APP_PORT: string;
    // 更多环境变量...
    // VITE_APP_TITLE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
