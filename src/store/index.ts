/*
 * @since: 2022-05-16 11:37:41
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 18:04:38
 * @Author: ltm@xtoneict.com
 * @message: vuex
 */
import { InjectionKey } from 'vue';
import { createPinia } from 'pinia';

const store = createPinia();

export default store;

export const key: InjectionKey<Store<State>> = Symbol();
