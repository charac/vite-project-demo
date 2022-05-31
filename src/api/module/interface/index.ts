/*
 * @since: 2022-05-31 16:38:01
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-31 16:38:01
 * @Author: ltm@xtoneict.com
 * @message:
 */

// * 登录
export namespace Login {
    export interface ReqLoginForm {
        username: string;
        password: string;
    }
    export interface ResLogin {
        access_token: string;
    }
    export interface ResAuthButtons {
        [propName: string]: any;
    }
}
