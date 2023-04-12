import { createRouter, createWebHashHistory } from "vue-router";

import providerService from '../service/providers'

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
        component: () => import("../pages/Home.vue")
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

        },
        meta: {
            requiresAuth: true
        }


    },
    {
        path:  "/provider-public",
        name: "provider-public",
        component:() => import("../pages/ProviderPublic"),
        beforeEnter: async (to, from, next) => {
            const isAuthenticated = window.localStorage.getItem('loggedAppUser')

            const providers = await providerService.getProviders();

            if (!isAuthenticated){
                return next()
            } else {
                const user = JSON.parse(isAuthenticated)
                console.log("user id index: " + user.id)
                providers.some(provider => {
                    if (provider.user.id === user.id){
                        return next('/provider-panel');
                    } else {
                        next();
                    }
                })
                next();
            }

        }
    },
    {
        // path: "/provider-form",
        // name: "provider-form",
        // component: () => import("../pages/ProviderForm.vue")
        path: "/provider-form",
        name: "provider-form",
        component: () => import("../pages/ProviderForm.vue"),
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
        path: "/provider-panel",
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

const protectedRoutes = [
    "recipient-form",
    "provider-form"
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = window.localStorage.getItem('loggedAppUser');
    const isProtected = protectedRoutes.includes(to.name);
    if(isProtected && !isAuthenticated){
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    }else next()
})



// router.beforeEach((to, from, next) => {
//     const isAuthenticated = window.localStorage.getItem('loggedAppUser')
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//
//     if (requiresAuth && !isAuthenticated) {
//         //const loginpath = window.location.pathname;
//         const loginpath = ('/recipient-form')
//         next({ name: 'login-register', query: { from: loginpath } });
//     }
//     else next();
// });

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (!localStorage.getItem('loggedAppUser')) {
//             next({
//                 path: '/login',
//                 query: {
//                     redirectedFrom: to.fullPath
//                 }
//             })
//         } else {
//             next()
//         }
//     } else {
//         next()
//     }
// })





export default router;