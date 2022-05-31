/*
 * @since: 2022-05-16 16:45:18
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-31 16:40:59
 * @Author: ltm@xtoneict.com
 * @message: 用户登录模块
 */
import cvRequest from '@/service/index';
import { Login } from '../interface/index';

/**
 *
 * @name login 用户登录接口
 */
export const login = (data: Login.ReqLoginForm) => {
    return request<Login.ResLogin>({
        url: '/api/auth/login',
        method: 'post',
        data,
    });
};
