import axios from "axios";

const BASE_URL = 'https://back-td.herokuapp.com'
// нужно создать instance аксиоса, и в него добавить BASE_URL, что бы не прописывать его повсюду
// пример создание инстанса - https://gitlab.com/zloyleva-pro/topdevs-3/-/blob/develop/admin/src/js/api/fetchData.js

const products = {
  async getProducts(page) {
    try {
      const res = await axios.get(`${BASE_URL}/products?page=${page}`)
      return res.data
    } catch (e) {
      console.log('eee=>',e)
    } // на этом уровне обрабатывать ошибку нет необходимости, т.к. если здесь ты её ловишь в catch, то
      // компоненты / модули, использующие этот запрос - не узнают о том что произошла ошибка и не смогут
      // на это отреагировать. лучше просто сделать сразу return axios.get("...")
  }
}

export {
  products
}

