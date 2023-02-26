import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "dash-board",
        component: () => import("../pages/Home.vue"),
    },
    {
        path: "/register",
        name: "re-gister",
        component: () => import("../pages/Register.vue")
    },
    {
        path: "/login",
        name: "log-in",
        component: () => import("../pages/Login.vue")
    },
    {
        path: "/re-ceive",
        name: "recipient",
        component: () => import("../pages/Recipient.vue")
    },
    {
        path: "/pro-vide",
        name: "provider",
        component: () => import("../pages/Provider.vue")
    },

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;