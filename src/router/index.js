import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "dash-board",
        component: () => import("../pages/Home.vue"),
    },
    {
        path: "/register",
        name: "app-register",
        component: () => import("../components/RegisterForm.vue")
    },
    {
        path: "/login",
        name: "login-register",
        component: () => import("../pages/LoginRegister.vue")
    },
    {
        path: "/recipient",
        name: "recipient-form",
        component: () => import("../pages/RecipientForm.vue")
    },
    {
        path: "/provider-form",
        name: "provider-form",
        component: () => import("../pages/ProviderForm.vue")
    },
    {
        path: "/provided",
        name: "provider-panel",
        component: () => import("../pages/ProviderPanel.vue")
    },
    {
        path: "/received",
        name: "recipient-panel",
        component: () => import("../pages/RecipientPanel.vue")
    },
    {
        path: "/location",
        name: "user-location",
        component: () => import("../pages/UserLocation")
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;