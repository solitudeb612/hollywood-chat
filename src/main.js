//组件
import common from './utils/common.js'




import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//点击特效
import '../src/utils/click-colorful.js'
import '../src/utils/click-colorful2.js'
//svg
import 'virtual:svg-icons-register'
//element
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//markdown
//v-md-editor
import VMdEditor from '@kangc/v-md-editor';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlightjs
import hljs from 'highlight.js';
//Axios
import axios from 'axios'



VMdEditor.use(githubTheme, {
  Hljs: hljs,
});
VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(VMdEditor);
app.use(VMdPreview);
app.config.globalProperties.$http = axios
app.config.globalProperties.$common = common


app.mount('#app')
