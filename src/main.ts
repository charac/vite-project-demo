/*
 * @since: 2022-05-13 15:51:54
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-27 16:50:30
 * @Author: ltm@xtoneict.com
 * @message: 配置引入
 */
import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue';
import { registerApp } from './global';
import 'normalize.css/normalize.css';
console.log(router);
const app = createApp(App);
// registerApp(app);
// app.use(store);
app.use(router);
app.mount('#app');
