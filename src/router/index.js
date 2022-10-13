import Vue from 'vue'
import VueRouter from "vue-router";
import routerConfig from "./routerConfig"

Vue.use(VueRouter)

let routes = []
routerConfig.forEach((item) => {
    routes.push({
        path: "/" + item.path,
        name: item.name,
        component: item.component,
        children: item.children ? item.children : "",
        meta: item.meta ? item.meta : ""
    });
})
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
})
export default router