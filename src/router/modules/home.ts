/*
 * @since: 2022-05-30 10:58:54
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-30 11:00:39
 * @Author: ltm@xtoneict.com
 * @message: 首页模块
 */
import { RouteRecordRaw } from 'vue-router';
import { Layout } from '@/router/constant';

// 首页模块
const homeRouter: Array<RouteRecordRaw> = [
    {
        path: '/home',
        component: Layout,
        redirect: '/home/index',
        children: [
            {
                path: 'index',
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    keepAlive: true,
                    requiresAuth: true,
                    title: '首页',
                    key: 'home',
                },
            },
        ],
    },
];

export default homeRouter;
