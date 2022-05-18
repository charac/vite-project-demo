/*
 * @since: 2022-05-16 16:37:19
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 16:37:19
 * @Author: ltm@xtoneict.com
 * @message: axios 封装
 */
import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { CVRequestConfig, CVRequestInterceptors } from './type'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'

class CVRequest {
  instance: AxiosInstance
  interceptors?: CVRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  // 类的构造器
  constructor(config: CVRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? true
    this.interceptors = config.interceptors

    // request拦截器，这里解释一下->这里是接收外界传递过来的拦截器，为了增强我们Axios灵活度设定的
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    // response拦截器，这里解释一下->这里是接收外界传递过来的拦截器，为了增强我们Axios灵活度设定的
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // TODO 这里使用了ElmentPlus的组件，可以自行更换
        this.loading = ElLoading.service({
          lock: true,
          text: '数据请求中...'
        })
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (config) => {
        // 移除loading
        this.loading?.close()

        // 说明，后端提供的接口，如果经过规范化处理，一般包含 状态码，提示信息，核心内容
        // 这里的意思，根据后端设定，如果状态码不等于20000则说明错误，我们在页面显示错误信息，具体的显示未做实现，自行解决
        const data = res.data()
        if (data.code !== 20000) {
          // TODO 页面显示错误信息
          console.log(data.msg)
        } else {
          return data
        }
        return config
      },
      (err) => {
        // 移除loading
        this.loading?.close()
        let msg = showStatus(status)
        response.data.msg = msg
        return err
      }
    )
  }

  request<T>(config: CVRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors(config)) {
        config = config.interceptors?.requestInterceptors(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.requestInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }

          // 将 showLoading 值重置，不影响下一次请求
          this.showLoading = true
        })
        .catch((err) => {
          this.showLoading = true
          return err
        })
    })
  }
}

const showStatus = (status: number) => {
  let message = ''
  switch (status) {
    case 400:
      message = '请求错误(400)'
      break
    case 401:
      message = '未授权，请重新登录(401)'
      break
    case 403:
      message = '拒绝访问(403)'
      break
    case 404:
      message = '请求出错(404)'
      break
    case 408:
      message = '请求超时(408)'
      break
    case 500:
      message = '服务器错误(500)'
      break
    case 501:
      message = '服务未实现(501)'
      break
    case 502:
      message = '网络错误(502)'
      break
    case 503:
      message = '服务不可用(503)'
      break
    case 504:
      message = '网络超时(504)'
      break
    case 505:
      message = 'HTTP版本不受支持(505)'
      break
    default:
      message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}
export default CVRequest
