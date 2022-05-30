/*
 * @since: 2022-05-30 11:00:00
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-30 11:00:01
 * @Author: ltm@xtoneict.com
 * @message: 过滤需要缓存的路由
 */
import { RouteRecordRaw, RouteRecordName } from 'vue-router';
import { routerArray } from '@/router/router';

// * 过滤需要缓存的路由
let cacheRouter: any[] = [];
const filterKeepAlive = (
    _route: RouteRecordRaw[],
    _cache: RouteRecordName[],
): void => {
    _route.forEach((item) => {
        item.meta?.keepAlive && item.name && _cache.push(item.name);
        item.children &&
            item.children.length !== 0 &&
            filterKeepAlive(item.children, _cache);
    });
};

filterKeepAlive(routerArray, cacheRouter);

export default cacheRouter;
