/*
 * @since: 2022-05-16 17:52:19
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 18:07:29
 * @Author: ltm@xtoneict.com
 * @message:
 */
import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user', // id必填，且需要唯一
    state: () => {
        return {
            name: '张三',
        };
    },
    actions: {
        updateName(name) {
            this.name = name;
        },
    },
});
