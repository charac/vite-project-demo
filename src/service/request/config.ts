/*
 * @since: 2022-05-16 16:35:26
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 16:36:41
 * @Author: ltm@xtoneict.com
 * @message: 环境变量--接口前缀配置
 */
let BASE_URL = ''
const TIME_OUT = 8000

// 生产
if (process.env.NODE_ENV === 'development') {
  // 如果没有接口代理，这里可以使用真实的接口地址，例如：https://192.168.22.1:8899
  BASE_URL = '/api'
  // 上线环境
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = '/prod'
} else {
  // 测试环境
  BASE_URL = '/'
}

export { BASE_URL, TIME_OUT }
