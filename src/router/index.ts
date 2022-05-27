/*
 * @since: 2022-05-16 11:29:39
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-27 16:56:59
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

// 仅做示例，根据业务修改路径等
const Login = () => import('@/view/login/index.vue');
import HelloWorld from '@/components/HelloWorld.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: { name: 'login' },
    },
    // {
    //     path: '/',
    //     name: 'HelloWorld',
    //     component: HelloWorld,
    // },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            title: '登录页',
        },
    },
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

// 前置路由
router.beforeEach((to, from, next) => {});

export default router;
