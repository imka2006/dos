import { createStore } from "vuex";
import { config } from "./config";

export default createStore({
    state: {
        listEn: [
            {
                id: 0,
                name: "Projects",
                link: "/projects",
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
                id: 3,
                name: "Материалы",
                link: "/materials",
            },
            {
                id: 4,
                name: "Сообщество",
                link: "/community",
            },
        ],
        burger: false,
        modal: false,
        language: "ru",
        sciences: [],
        userInfo: JSON.parse(localStorage.getItem('user_info'))
    },
    getters: {},
    mutations: {
        setLanguage(state, data) {
            state.language = data
        },
        setSciences(state,data) {
            state.sciences = data
        },
        setUserInfo(state, data) {
            state.userInfo = data
        }
    },
    actions: {
        getSciences: async (store) => {
            const res = await fetch(config.baseUrl + "science/list")
            const data = await res.json();

            store.commit("setSciences", data.results)
        },
        signUp: async (store, data) => {
            localStorage.clear();

            try {
                const res = await fetch(config.baseUrl + "auth/register", {
                    method: "POST",
                    headers: config.headers,
                    body: JSON.stringify(data)
                });
                const result = await res.json();
    
                localStorage.setItem("access_token", JSON.stringify(result.access));
                localStorage.setItem("user_info", JSON.stringify(result.user));
                store.commit("setUserInfo", result.user)
            } catch (e) {
                console.log(e);
            }
        },
        signIn: async (store, data) => {
            localStorage.clear();

            const res = await fetch(config.baseUrl + "auth/login", {
                method: "POST",
                headers: config.headers,
                body: JSON.stringify(data)
            })
            const result = await res.json();

            if(result.detail) {
                console.log(result.detail);
            } else {
                localStorage.setItem("access_token", JSON.stringify(result.access));
                localStorage.setItem("user_info", JSON.stringify(result.user));
                store.commit("setUserInfo", result.user)
            }
        },
        getUserInfo: async (store, data) => {
            const res = await fetch(config.baseUrl + "person/list/?" + data)
            const result = await res.json();
        }
    },
    modules: {},
});
