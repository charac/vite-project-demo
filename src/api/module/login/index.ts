/*
 * @since: 2022-05-16 16:45:18
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 18:00:09
 * @Author: ltm@xtoneict.com
 * @message:
 */
import cvRequest from '@/service/index';
import { IResponseType, ILogin } from './type';

/**
 * 查询队列内容
 * @param query 队列页数、每页条数、队列名称
 */
export const login = (username: string, password: string) => {
    return request<IResponseType<ILogin>>({
        url: '/api/auth/login',
        method: 'post',
        data: {
            username,
            password,
        },
    });
};
