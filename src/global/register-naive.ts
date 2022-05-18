/*
 * @since: 2022-05-16 16:41:55
 * @LastAuthor: Please set LastEditors
 * @lastTime: 2022-05-16 16:41:55
 * @Author: ltm@xtoneict.com
 * @message: NaIveUI
 */
import { create, NButton, NCard, NConfigProvider, NInput } from 'naive-ui'

const naive = create({
  components: [NButton, NCard, NConfigProvider, NInput]
})

export function registerNaive(app: any) {
  app.use(naive)
}
