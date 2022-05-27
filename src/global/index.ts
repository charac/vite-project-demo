/*
 * @since: 2022-05-16 16:20:19
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-27 10:45:42
 * @Author: ltm@xtoneict.com
 * @message:
 */
import { App } from 'vue';
import { registerElement } from './register-element';
// import {registerNaive} from "./register-naive";

export function registerApp(app: App): void {
    registerElement(app);
}
