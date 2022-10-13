import Vue from 'vue'
import App from './App.vue'
import "element-ui/lib/theme-chalk/index.css";

import ElementUI from "element-ui"
import router from "./router"

Vue.config.productionTip = false
Vue.use(ElementUI)

let mainVue = new Vue({
    router,
    render: function (h) {
        return h(App)
    }
}).$mount("#app");
//createApp(App).mount('#app')
export default mainVue