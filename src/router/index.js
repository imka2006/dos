import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/Home.vue"),
        }, 
        {
            path: "/signup",
            name: "signup",
            component: () => import("../views/SignUp.vue"),
        }, 
        {
            path: "/signin",
            name: "signin",
            component: () => import("../views/SignIn.vue"),
        }, 
        {
            path: "/materials",
            name: "materials",
            component: () => import("../views/Materials.vue"),
        }, 
    ],
});

export default router;
