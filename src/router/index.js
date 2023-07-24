import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/cabinet",
            name: "cabinet",
            component: () => import("../views/Cabinet.vue"),
        }, 
        {
            path: "/signup",
            name: "signup",
            component: () => import("../views/SignUp.vue"),
        }, 
        {
            path: "/",
            name: "signin",
            component: () => import("../views/SignIn.vue"),
        }, 
        {
            path: "/materials",
            name: "materials",
            component: () => import("../views/Materials.vue"),
        }, 
        {
            path: "/projects",
            name: "projects",
            component: () => import("../views/Projects.vue"),
        }, 
        {
            path: "/material/:id",
            name: "materials-own",
            component: () => import("../views/Material.vue"),
        }, 
        {
            path: "/project/:id",
            name: "project",
            component: () => import("../views/Project.vue"),
        }, 
        {
            path: "/community",
            name: "community",
            component: () => import("../views/Community.vue"),
        }, 
    ],
});

export default router;
