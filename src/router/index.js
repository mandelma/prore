/* eslint-disable */

import { createRouter, createWebHashHistory } from "vue-router";
//import { createRouter, createWebHistory } from "vue-router";

import providerService from '../service/providers'
import recipientService from '../service/recipients'
import loginService from '../service/login'
import validation from '../helpers/loginValidation.js'
import axios from "axios";

// let authenticated
// const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
// if (loggedUserJSON) {
//     const user = JSON.parse(loggedUserJSON)
//
//     console.log("User token in router: " + user.token)
//     authenticated = user
// }

const validateToken = async () => {
    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')

    if (loggedUserJSON) {
        const user = JSON.parse(loggedUserJSON)
        const tokenValid = await loginService.verifyToken(user.token)
        if (!tokenValid) {
            window.localStorage.removeItem('loggedAppUser')
        }
    }

}


const routes = [
    {
        path: "/admin",
        name: "admin-panel",
        component: () => import("../pages/AdminPanel.vue")
    },
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
        path: "/profile",
        name: "user-profile",
        component: () => import("../pages/Profile.vue")
    },
    {
        path: "/pay-plan",
        name: "pay-plan",
        component: () => import("../pages/PayPlan")

    },
    {
        path: "/recipient-public",
        name: "recipient-public",
        component: () => import("../pages/RecipientPublic")
    },
    {
        path: "/recipient-form",
        name: "recipient-form",
        component: () => import("../pages/RecipientForm.vue"),
        props: true,
        beforeEnter: async (to, from, next) => {
            const isAuthenticated = window.localStorage.getItem('loggedAppUser')

            const user = JSON.parse(isAuthenticated)
            const results = await recipientService.getOwnBookings(user.id)

            if (results.length > 0) {
                return next('/received');
            } else {
                next();
            }
        },
        meta: {
            requiresAuth: true
        }


    },
    {
        path: "/received",
        name: "recipient-panel",
        component: () => import("../pages/RecipientPanel.vue"),


    },
    {
        path: "/recipient-result",
        name: "recipient-result",
        component: () => import("../pages/RecipientPanelResult")
    },
    {
        path: "/received-final/:data",
        name: "recipient-final",
        component: () => import("../pages/RecipientPanelFinal"),
        props: true
    },
    {
        path: '/rf',
        name: 'r-form',
        component: () => import("../pages/RecipientForm.vue"),
    },
    {
        path:  "/provider-public",
        name: "provider-public",
        component:() => import("../pages/ProviderPublic"),
        beforeEnter: async (to, from, next) => {
            const isAuthenticated = window.localStorage.getItem('loggedAppUser')



            if (!isAuthenticated){
                return next()
            } else {
                const user = JSON.parse(isAuthenticated)
                const isProvider = await providerService.getProvider(user.id)
                if (isProvider) {
                    return next('/provider-panel');
                } else next();

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

            const user = JSON.parse(isAuthenticated)
            //const isProvider = null;
            const isProvider = await providerService.getProvider(user.id)

            if (isProvider){
                return next('/provider-panel')
            } else {
                next()
            }

        }
    },
    {
        path: "/provider-panel",
        name: "provider-panel",
        component: () => import("../pages/ProviderPanel.vue"),
        // beforeEnter: async (to, from, next) => {
        //     const isAuthenticated = window.localStorage.getItem('loggedAppUser')
        //
        //     const providers = await providerService.getProviders();
        //
        //     if (!isAuthenticated){
        //         return next('/login')
        //     } else {
        //         const user = JSON.parse(isAuthenticated)
        //         console.log("user id index: " + user.id)
        //         providers.some(provider => {
        //             if (provider.user.id === user.id){
        //                 return next('/provider-panel');
        //             } else {
        //                 next('/provider-form');
        //             }
        //         })
        //         next();
        //     }
        //     next()
        // },
        props: true

    },

    {
        path: "/location",
        name: "user-location",
        component: () => import("../pages/UserLocation")
    },
    {
        path: "/notification",
        name: "client-notifications",
        component: () => import("../pages/Notification.vue")
    },
    // {
    //     path: "/chat",
    //     name: "chat-panel",
    //     component: () => import("../pages/LiveChat.vue"),
    //     // meta: {
    //     //     reload: true,
    //     // },
    // },
    {
        path: "/chat",
        name: "live-chat",
        component: () => import("../pages/LiveChat")
    },
    {
        path: "/history",
        name: "user-history",
        component: () =>import("../pages/History.vue")
    },
    {
        path: "/feedback",
        name: "Feedback",
        component: () => import("../pages/Feedback.vue")
    }


];

const protectedRoutes = [
    "recipient-form",
    "provider-form"
    //"provider-panel"
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach(async (to, from, next) => {
    const isAuthenticated = window.localStorage.getItem('loggedAppUser');

    if (isAuthenticated) {
        const user = JSON.parse(isAuthenticated)

    }

    //window.localStorage.removeItem('loggedAppUser')


    const isProtected = protectedRoutes.includes(to.name);
    // isAuthenticated
    if(isProtected && !isAuthenticated){
        next({
            path: '/login',
            query: { redirect: to.fullPath }
        })
    } else next()

    // if(isProtected && !isAuthenticated){
    //     next({
    //         path: '/login',
    //         query: { redirect: to.fullPath }
    //     })
    // }else next()
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