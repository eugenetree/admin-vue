import api from '/src/js/api/index';

export default {
    namespaced: true,
    state: {
        info: null,
        products: null,
        pagination: [],
        status: "idle" // "idle" | "loading" | "success" | "fail"
        // удобно для мониторинга того, всё ли ок с запросами использовать такой подход с переменной status
        // изначально, когда ещё никаких запросов не отправлялось - она в значении idle
        // когда запрос улетает (т.е. в нашей ситуации getProducts), значение должно быть loading
        // при успешном ответе и ошибке - success/fail соответственно
        // потом исходя из этой переменной, можно например отображать или не отображать какой-то лоадер в компоненте с продуктами
    },

    mutations: {
        SET_DATA: (s, data) => {
            s.products = data.data
        }

        // подробить мутации на SET_PRODUCTS, SET_STATUS, SET_PAGINATION
    },
    actions: {
        async getListProducts({ commit }, page) {
            try {
                commit('SET_STATUS', "loading")
                const res = await api.products.getProducts(page);
                // console.log('res=>',res)
                commit('SET_DATA', res)
                commit('SET_STATUS', "success")
            } catch (e) {
                commit('SET_STATUS', "fail")
                console.log('err=>', e)
            }
        },

        // хоть Смолин обычно юзает навание с префиксом get, но лучше использовать fetch или load
        // get обычно подразумевает что метод с таким префикисом вернёт нам в ответе какое - то значение
        // т.е. для того же api.products.getProducts - всё корректно т.к. он вернёт нам промис с продуктами
        // но экшн getListProducts ничего связанного с продуктами возвращать не должен, а должен просто
        // загружать их в стор, т.е. название loadProductsList / fetchProductsList будет более понятным человеку впервые зашедшему в этот проект
    }
}