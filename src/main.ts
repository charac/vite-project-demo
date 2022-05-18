/*
 * @since: 2022-05-13 15:51:54
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 18:10:28
 * @Author: ltm@xtoneict.com
 * @message: 配置引入
 */
import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
// import { registerApp } from './global';
import 'normalize.css/normalize.css';

createApp(App)
    // .registerApp(app)
    .use(router)
    .use(store)
    .mount('#app');
