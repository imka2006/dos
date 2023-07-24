import { createStore } from "vuex";

export default createStore({
    state: {
        listEn: [
            {
                id: 0,
                name: "Projects",
                link: "/projects",
            },
            {
                id: 1,
                name: "Business",
                link: "/",
            },
            {
                id: 2,
                name: "Engineering",
                link: "/",
            },
            {
                id: 3,
                name: "Materials",
                link: "/materials",
            },
            {
                id: 4,
                name: "Community",
                link: "/community",
            },
            {
                id: 5,
                name: "Personal Cabinet",
                link: "/cabinet",
            },
        ],
        listRu: [
            {
                id: 0,
                name: "Проекты",
                link: "/projects",
            },
            {
                id: 1,
                name: "Бизнес",
                link: "/",
            },
            {
                id: 2,
                name: "Инжиниринг",
                link: "/",
            },
            {
                id: 3,
                name: "Материалы",
                link: "/materials",
            },
            {
                id: 4,
                name: "Сообщество",
                link: "/community",
            },
            {
                id: 5,
                name: "Личный кабинет",
                link: "/cabinet",
            },
        ],
        burger: false,
        modal: false,
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
