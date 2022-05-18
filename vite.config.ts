/*
 * @since: 2022-05-13 15:51:54
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 22:42:37
 * @Author: ltm@xtoneict.com
 * @message:
 */
import { UserConfig, ConfigEnv, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// @ts-ignore
import { createStyleImportPlugin } from 'vite-plugin-style-import';
//使用 vite-plugin-compression 可以 gzip 或 brotli 的方式来压缩资源，这一步需要服务器端的配合，vite 只能帮你打包出 .gz 文件。此插件使用简单，你甚至无需配置参数，引入即可。
//开启 gzip 可以极大的压缩静态资源，对页面加载的速度起到了显著的作用。
// import viteCompression from "vite-plugin-compression"; //gzip必备插件,开启gzip、br压缩

// https://vitejs.dev/config/
// @see: https://gitee.com/holysheng/vite2-config-description/blob/master/vite.config.ts
export default ({ command, mode }: ConfigEnv): UserConfig => {
    // 获取 .env 环境配置文件
    const env = loadEnv(mode, process.cwd());
    return {
        //开发或生产环境服务的公共基础路径
        base: './',
        //作为静态资源服务的文件夹。并在构建期间复制到 outDir 的根目录，并且始终按原样提供或复制而无需进行转换。
        publicDir: 'public',
        //用于加载 .env 文件的目录。
        // envDir:"root",
        //控制台输出的级别 info 、warn、error、silent
        logLevel: 'info',
        // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
        clearScreen: true,
        //plugins配置需要使用的插件列表&&注册插件
        plugins: [
            vue(),
            createStyleImportPlugin({
                libs: [
                    {
                        libraryName: 'element-plus',
                        esModule: true,
                        ensureStyleFile: true,
                        resolveStyle: (name) => {
                            name: name.slice(3);
                            return `element-plus/packages/theme-chalk/src/${name}.scss`;
                        },
                        resolveComponent: (name) => {
                            return `element-plus/lib/${name}`;
                        },
                    },
                ],
            }),
        ],
        // 本地运行配置，以及反向代理配置
        server: {
            open: true,
            port: Number(env.VITE_APP_PORT), //指定开发服务器端口
            //   host: "0.0.0.0",//指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
            //   strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
            //   https: false,//是否启用 http 2
            //   open: true,//服务启动时自动在浏览器中打开应用
            //   cors: true,//为开发服务器配置 CORS , 默认启用并允许任何源
            //   force: true,//是否强制依赖预构建
            //   hmr: false,//禁用或配置 HMR 连接
            //   // 传递给 chockidar 的文件系统监视器选项
            //   watch: {
            //     ignored: ["!**/node_modules/your-package-name/**"]
            //   },
            //   // 反向代理配置
            //   proxy: {
            //     '/api': {
            //       target: "https://xxxx.com/",// 所要代理的目标地址
            //       target: 'http://localhost:8080',
            //       changeOrigin: true,
            //       rewrite: (path) => path.replace("/^/api /", '') //重写地址
            //     }
            //   }
        },
        resolve: {
            alias: {
                // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
                '@': path.resolve(__dirname, 'src'),
                comps: path.resolve(__dirname, 'src/components'),
            },
        },
        //配置全局css变量
        // css: {
        // 	preprocessorOptions: {
        // 		scss: {
        // 			additionalData: '@import "@/assets/styles/mixin.scss";',//多个全局样式直接分号引用就行了
        // 		},
        // 	},
        // },
        //打包配置
        /***
         * 注意事项：
         */
        //  ● 假设不配置 base 时，打包之后，访问时出现白屏。
        //  ● alias 不配置的时候，每次引入文件需要找根目录，比较麻烦。
        build: {
            //传递给 Terser 的更多 minify 选项。 生产环境去除 console debugger
            terserOptions: {
                compress: {
                    drop_console: true,
                    drop_debugger: true,
                },
            },

            //   //浏览器兼容性  "esnext"|"modules"
            //   target: "modules",
            //指定输出路径
            outDir: 'dist',
            //   //生成静态资源的存放路径
            //   assetsDir: "assets",
            //   //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
            //   assetsInlineLimit: 4096,
            //   //启用/禁用 CSS 代码拆分
            //   cssCodeSplit: true,
            //   //构建后是否生成 source map 文件
            //   sourcemap: false,
            //   //自定义底层的 Rollup 打包配置
            //   rollupOptions: {
            //   },
            //   //@rollup/plugin-commonjs 插件的选项
            //   commonjsOptions: {
            //   },
            //   //构建的库
            //   lib: {
            //   },
            //   //当设置为 true，构建后将会生成 manifest.json 文件
            //   manifest: false,
            //   // 设置为 false 可以禁用最小化混淆，
            //   // 或是用来指定使用哪种混淆器
            // boolean | 'terser' | 'esbuild'
            minify: 'terser', //terser 构建后文件体积更小
            //   //设置为 false 来禁用将构建后的文件写入磁盘
            //   write: true,
            //   //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
            //   emptyOutDir: true,
            //   //启用/禁用 brotli 压缩大小报告
            //   brotliSize: true,
            //   //chunk 大小警告的限制
            //   chunkSizeWarningLimit: 500
        },
    };
};
