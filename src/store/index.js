import { createStore } from "vuex";

export default createStore({
    state: {
        listEn: [
            {
                id: 0,
                name: "Projects",
                link: "/",
            },
            {
                id: 1,
                name: "Engineering",
                link: "/",
            },
            {
                id: 2,
                name: "Materials",
                link: "/",
            },
            {
                id: 3,
                name: "Community",
                link: "/",
            },
            {
                id: 4,
                name: "Account",
                link: "/",
            },
        ], 
        listRu: [
            {
                id: 0,
                name: "Проекты",
                link: "/",
            },
            {
                id: 1,
                name: "Инжиниринг",
                link: "/",
            },
            {
                id: 2,
                name: "Материалы",
                link: "/",
            },
            {
                id: 3,
                name: "Сообщество",
                link: "/",
            },
            {
                id: 4,
                name: "Личный кабинет",
                link: "/",
            },
        ],
        burger:false,
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
