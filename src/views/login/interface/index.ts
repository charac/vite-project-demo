/*
 * @since: 2022-05-31 14:48:38
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-31 16:38:12
 * @Author: ltm@xtoneict.com
 * @message:
 */
export interface LoginFormExpose {
    count: number;
    consoleNumber: (name: string) => void;
}

export interface InjectProps {
    name: string;
    age: string;
    changeName: () => void;
    [key: string]: any;
}
