import MainPage from "@/views/MainPage";
import WordConnect from "@/views/WordConnect";
const routes = [
    {
        path: "",
        name: "MainPage",
        component: () => import("../views/HomePage.vue"),
    },
    {
        path: "index2",
        name: "index2",
        component: () => import("../views/index.vue"),
    },
    {
        path: "WordConnect",
        name: "WordConnect",
        component: () => import("../views/WordConnect.vue"),
    },
    {
        path: "SentimentAnalysis",
        name: "SentimentAnalysis",
        component: () => import("../views/subviews/SentAnalysisSankey.vue"),
    },
    {
        path: "Homepage2",
        name: "Homepage2",
        component: () => import("../views/HomePage2.vue"),
    },
    {
        path: "GeneratePoem",
        name: "GeneratePoem",
        component:()=> import("../views/GeneratePoem.vue")
    },
    {
        path: "QueryPoem",
        name: "QueryPoem",
        component:()=> import("../views/QueryPoem.vue")
    },
    {
        path: "DashBoard",
        name: "DashBoard",
        component:()=> import("../components/dashboard/dashboard.vue")
    },
    {
        path: "StoryPage",
        name: "StoryPage",
        component:()=> import("../views/StoryPage.vue")
    },
    {
        path: "temp",
        name: "temp",
        component:()=> import("../views/BarChart.vue")
    }
]
export default routes
