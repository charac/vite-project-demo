/*
 * @since: 2022-05-13 15:51:54
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-30 15:56:49
 * @Author: ltm@xtoneict.com
 * @message: 配置引入
 */
import { createApp } from 'vue';
import App from './App.vue';
// reset style sheet
import 'normalize.css/normalize.css';
// CSS common style sheet
import '@/style/index.scss';
// import '@/style/setting/variable.scss';
// iconfont css
import '@/assets/iconfont/iconfont.scss';
// font css
import '@/assets/fonts/font.scss';

// vue Router
import router from '@/router/index';
// pinia store
import pinia from '@/store/index';
// elementUi-plus 注册
import { registerApp } from './global';

const app = createApp(App);

registerApp(app);
app.use(router).use(pinia).mount('#app');
