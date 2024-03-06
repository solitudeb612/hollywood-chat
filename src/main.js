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


const app = createApp(App)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
