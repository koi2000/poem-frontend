import MainPage from "@/views/MainPage";
import WordConnect from "@/views/WordConnect";
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "MainPage",
        component: () => import("../views/HomePage.vue"),
    },
    {
        path: "/test",
        name: "test",
        component: () => import("../views/Test.vue"),
    },
    {
        path: "/index2",
        name: "index2",
        component: () => import("../views/index.vue"),
    },
    {
        path: "/ChinaMap",
        name: "ChinaMap",
        component: () => import("../views/subviews/ChinaMap.vue"),
    },
    {
        path: "/WordConnect",
        name: "WordConnect",
        component: () => import("../views/WordConnect.vue"),
    },
    {
        path: "/SentimentAnalysis",
        name: "SentimentAnalysis",
        component: () => import("../views/subviews/SentAnalysisSankey.vue"),
    },
    {
        path: "/SentAnalysisPie",
        name: "SentAnalysisPie",
        component: () => import("../views/subviews/SentAnalysisPie.vue"),
    },
    // {
    //     path: "Homepage2",
    //     name: "Homepage2",
    //     component: () => import("../views/HomePage2.vue"),
    // },
    {
        path: "/GeneratePoem",
        name: "GeneratePoem",
        component:()=> import("../views/GeneratePoem.vue")
    },
    {
        path: "/QueryPoem",
        name: "QueryPoem",
        component:()=> import("../views/QueryPoem.vue")
    },
    {
        path: "/DashBoard",
        name: "DashBoard",
        component:()=> import("../components/dashboard/dashboard.vue")
    },
    {
        path: "/StoryPage",
        name: "StoryPage",
        component:()=> import("../views/StoryPage.vue")
    },
    {
        path: "/temp",
        name: "temp",
        component:()=> import("../views/BarChart.vue")
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router
