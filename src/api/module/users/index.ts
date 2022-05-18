/*
 * @since: 2022-05-16 16:45:18
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 16:45:18
 * @Author: ltm@xtoneict.com
 * @message:
 */
import request from '@/service/index';
import { QueryQueuePage, SendMessageReq } from './type';

/**
 * 查询所有队列名称
 */
export function findAllQueueRequest() {
    return request.get({
        url: '/broker/count/queue/name',
    });
}

/**
 * 查询队列内容
 * @param query 队列页数、每页条数、队列名称
 */
export function findQueueByNameRequest(query: QueryQueuePage) {
    return request.get({
        url: `/broker/queue/content/${query.page}/${query.size}?name=${query.name}`,
    });
}

/**
 * 发送消息
 * @param message 队列名称 消息内容
 */
export function sendMsgRequest(message: SendMessageReq) {
    return request.post({
        url: `/broker/add/message`,
        data: message,
    });
}
