import { createApp } from 'vue'
import App from './App.vue'
//import App from './views/LoginView.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import axios from 'axios'
axios.defaults.withCredentials=true
const app = createApp(App)
app.config.globalProperties.$http = axios
//axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
app.use(router).use(ElementPlus).mount('#app')
