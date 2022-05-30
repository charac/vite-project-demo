/*
 * @since: 2022-05-30 10:09:21
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-30 14:39:15
 * @Author: ltm@xtoneict.com
 * @message: 路由配置
 */
import {
    createRouter,
    createWebHistory,
    createWebHashHistory,
    RouteRecordRaw,
} from 'vue-router';
// createWebHistory 方法返回的是 History 模式
// createWebHashHistory 方法返回的是 Hash 模式

// * 导入所有router
const metaRouters = import.meta.globEager('./modules/*.ts');

// * 处理路由
export const routerArray: RouteRecordRaw[] = [];
Object.keys(metaRouters).forEach((item) => {
    Object.keys(metaRouters[item]).forEach((key: any) => {
        routerArray.push(...metaRouters[item][key]);
    });
});

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: { name: 'login' },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            requiresAuth: false,
            title: '登录页',
            key: 'login',
        },
    },
    // ...routerArray,
    // {
    //     // 找不到路由重定向到404页面
    //     path: '/:pathMatch(.*)',
    //     redirect: { name: '404' },
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes as RouteRecordRaw[],
    strict: false,
    // 刷新时，滚动条位置还原
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
