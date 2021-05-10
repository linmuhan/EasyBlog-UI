import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import axios from "axios";

const app = createApp(App);

// 给Vue实例添加一个是个属性，这样在每个实例中就可以使用this.$axios来访问axios实例了
app.config.globalProperties.$axios = axios;
app.config.productionTip = false

app.use(store)
    .use(router)
    .use(ElementPlus)
    .mount('#app')

