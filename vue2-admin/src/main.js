import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MOCK from "./mock/index"
import axios from 'axios'//引入axios
Vue.prototype.$axios = axios;//把axios挂载到vue上
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
