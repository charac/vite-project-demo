/*
 * @since: 2022-05-13 15:51:54
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-26 17:04:47
 * @Author: ltm@xtoneict.com
 * @message: 配置引入
 */
import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { registerApp } from './global';
import 'normalize.css/normalize.css';
import consola from 'consola';
consola.log(registerApp);
createApp(App)
    // .registerApp(app)
    .use(router)
    .use(store)
    .mount('#app');
