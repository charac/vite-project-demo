/*
 * @since: 2022-05-16 16:20:19
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 18:07:02
 * @Author: ltm@xtoneict.com
 * @message:
 */
import { App } from 'vue';
import { registerElement } from './register-element';
// import {registerNaive} from "./register-naive";

export function registerApp(app: App): void {
    registerElement(app);
}
