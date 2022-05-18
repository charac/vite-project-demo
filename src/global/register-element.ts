/*
 * @since: 2022-05-16 16:19:27
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 16:19:27
 * @Author: ltm@xtoneict.com
 * @message: element-plus按需引入配置
 */
import 'element-plus/lib/theme-chalk/base.css'
import { App } from 'vue'
import {
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  ElAlert,
  ElAside,
  ElAutocomplete,
  ElAvatar,
  ElBacktop,
  ElBadge
]

export function registerElement(app: App): void {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
