<!--
 * @since: 2022-05-13 15:51:54
 * @LastAuthor: Do not edit
 * @lastTime: 2022-05-27 16:47:24
 * @Author: ltm@xtoneict.com
 * @message:
-->
<template>
  <el-config-provider :button="config">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue';
// import { GlobalStore } from "@/store";  :size="assemblySize" :locale="i18nLocale"
// 配置element中英文
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
// const globalStore = GlobalStore();
// 配置element按钮文字中间是否有空格
const config = reactive({
    autoInsertSpace: false,
});
// // element 语言配置
// const i18nLocale = computed((): any => {
// 	if (globalStore.language && globalStore.language == "zh") return zhCn;
// 	if (globalStore.language == "en") return en;
// 	return "";
// });
// // 配置全局组件大小 (small/default(medium)/large)
// const assemblySize = computed((): string => globalStore.assemblySize);
</script>

<style lang="scss">
@import 'style/setting/variable.scss';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
