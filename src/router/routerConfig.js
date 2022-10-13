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
    }
]
export default routes