/*
 * @since: 2022-05-16 16:44:51
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 17:19:57
 * @Author: ltm@xtoneict.com
 * @message:
 */
// 查询队列
export interface QueryQueuePage {
  page: number
  size: number
  name: string
}

// 方式消息
export interface SendMessageReq {
  content: string
  queueName: string
}
