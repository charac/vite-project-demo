/*
 * @since: 2022-05-16 11:29:39
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 18:40:21
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
const Login = () => import('../layout/Login.vue');

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: Login,
        name: 'Login',
        meta: {
            title: '登录页',
        },
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 前置路由
router.beforeEach((to, from, next) => {});

export default router;
