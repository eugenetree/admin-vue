import api from '/src/js/api/index';

export default {
    namespaced: true,
    state: {
        info: null,
        products: null,
        pagination: [],
    },

    mutations: {
        SET_DATA: (s, data) => {
            s.products = data.data

        }

    },
    actions: {
        async getListProducts({ commit }, page) {
            try {
                const res = await api.products.getProducts(page);
                // console.log('res=>',res)
                commit('SET_DATA', res)
            } catch (e) {
                console.log('err=>', e)
            }
        },
    }
}