import MainPage from "@/views/MainPage";
import WordConnect from "@/views/WordConnect";
const routes = [
    {
        path: "",
        name: "MainPage",
        component: () => import("../views/MainPage.vue"),
    },
    {
        path: "WordConnect",
        name: "WordConnect",
        component: () => import("../views/WordConnect.vue"),
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
    }
]
export default routes
