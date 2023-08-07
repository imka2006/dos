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
            path: "/signin",
            name: "signin",
            component: () => import("../views/SignIn.vue"),
        },
        {
            path: "/materials",
            name: "materials",
            component: () => import("../views/Materials.vue"),
        },
        {
            path: "/",
            name: "projects",
            component: () => import("../views/Projects.vue"),
        },
        {
            path: "/project/:id",
            name: "project",
            component: () => import("../views/Project.vue"),
        },
        {
            path: "/material/:id",
            name: "materials-own",
            component: () => import("../views/Material.vue"),
        },
        {
            path: "/create-project",
            name: "create-project",
            component: () => import("../views/CreateProject.vue"),
        }, 
        {
            path: "/create-matrerial",
            name: "create-matrerial",
            component: () => import("../views/CreateMatrerial.vue"),
        },
        {
            path: "/matrerial-create/:id",
            name: "matrerial-create",
            component: () => import("../views/MatrerialCreate.vue"),
        },
        {
            path: "/community",
            name: "community",
            component: () => import("../views/Community.vue"),
        },
        {
            path: "/chat",
            name: "chat",
            component: () => import("../views/Chat.vue"),
        },
        {
            path: "/another-cabinet/:id",
            name: "another-cabinet",
            component: () => import("../views/AnotherCabinet.vue"),
        },
    ],
});

export default router;
