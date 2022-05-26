/*
 * @since: 2022-05-16 16:19:27
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-26 17:05:31
 * @Author: ltm@xtoneict.com
 * @message: element-plus按需引入配置
 */
import { App } from 'vue';
import 'element-plus/lib/theme-chalk/base.css';
import {
    ElButton,
    ElTable,
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
} from 'element-plus';

const components = [
    ElButton,
    ElTable,
    ElAlert,
    ElAside,
    ElAutocomplete,
    ElAvatar,
    ElBacktop,
    ElBadge,
];

export function registerElement(app: App): void {
    for (const cpn of components) {
        app.component(cpn.name, cpn);
    }
}
