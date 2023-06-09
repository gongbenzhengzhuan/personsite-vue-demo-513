import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import axios from 'axios'
import store from "./store/index";
import * as echarts from "./utils/echarts";
// import "element-plus/dist/index.css";
import "./assets/css/index.scss";
import "./assets/icons/index.js";
import { Store } from "vuex";
declare module "@vue/runtime-core" {
    interface State {
        count: number;
    }

    interface ComponentCustomProperties {
        $store: Store<State>;
    }
}
axios.defaults.withCredentials=true
const app = createApp(App)
app.config.globalProperties.$http = axios
app.config.globalProperties.$echarts = echarts
//axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
app.use(store).use(router).use(ElementPlus).mount('#app')
