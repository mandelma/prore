import { createRouter, createWebHashHistory } from "vue-router";

// let authenticated
// const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
// if (loggedUserJSON) {
//     const user = JSON.parse(loggedUserJSON)
//
//     console.log("User token in router: " + user.token)
//     authenticated = user
// }


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
        path: "/recipient-form",
        name: "recipient-form",
        component: () => import("../pages/RecipientForm.vue"),
        beforeEnter: async (to, from, next) => {
            const isAuthenticated = window.localStorage.getItem('loggedAppUser')

            if (!isAuthenticated){
                return next('/login')
            } else {
                next()
            }

        }
    },
    {
        path:  "/provider-public",
        name: "provider-public",
        component:() => import("../pages/ProviderPublic")
    },
    {
        // path: "/provider-form",
        // name: "provider-form",
        // component: () => import("../pages/ProviderForm.vue")
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
        component: () => import("../pages/RecipientPanel.vue"),


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

// router.beforeEach((to, from, next) => {
//     const isAuthenticated = window.localStorage.getItem('loggedAppUser')
//     if (to.name !== 'received' && !isAuthenticated) next({ name: 'login-register' })
//     else next({name: 'received'})
// })



// {
//     path: "/",
//         name: "Login",
//     component: () =>
//     import ("../views/auth/Login.vue"),
//     beforeEnter: async (to, from, next) => {
//     const isLoggedIn = store.getters["isLoggedin"];
//
//     if (isLoggedIn) {
//         return next("/dashboard");
//     }
//
//     next();
// },
//},

export default router;