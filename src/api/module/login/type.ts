/*
 * @since: 2022-05-16 16:44:51
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 17:59:48
 * @Author: ltm@xtoneict.com
 * @message: 登录页
 */

interface IResponseType<P = {}> {
    code?: number;
    status: number;
    msg: string;
    data: P;
}
interface ILogin {
    token: string;
    expires: number;
}
