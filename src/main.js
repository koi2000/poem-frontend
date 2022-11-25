import Vue from 'vue'
import App from './App.vue'
import "element-ui/lib/theme-chalk/index.css";

import ElementUI from "element-ui"
import router from "./router"
import Vuex from 'vuex'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI)

import * as Tableau from 'tableau-api-js'
Vue.prototype.$tableau = Tableau

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        color: ['#325B69', '#698570', '#AE5548', '#6D9EA8', '#9CC2B0', '#C98769']
    }
});

let mainVue = new Vue({
    router,
    store,
    render: function (h) {
        return h(App)
    },
    data: {
        eventHub: new Vue(),
        charts: []
    }
}).$mount("#app");
//createApp(App).mount('#app')
export default mainVue
