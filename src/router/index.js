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
        path: "/recipient",
        name: "re-ceive",
        component: () => import("../pages/Recipient.vue")
    },
    {
        path: "/pro-vide",
        name: "provider",
        component: () => import("../pages/Provider.vue")
    },
    {
        path: "/provided",
        name: "pro-vided",
        component: () => import("../pages/Provided.vue")
    },
    {
        path: "/received",
        name: "re-ceived",
        component: () => import("../pages/Received.vue")
    },
    {
        path: "/location",
        name: "app-location",
        component: () => import("../pages/UserLocation")
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;