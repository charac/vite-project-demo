/*
 * @since: 2022-05-16 16:35:49
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 16:37:03
 * @Author: ltm@xtoneict.com
 * @message: 封装AXIOS用到的类型
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CVRequestInterceptors {
  requestInterceptors: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch: (error: any) => any
  responseInterceptors: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch: (error: any) => any
}

export interface CVRequestConfig extends AxiosRequestConfig {
  // 自定义拦截器
  interceptors?: CVRequestInterceptors
  // 是否显示Loading
  showLoading?: boolean
}
