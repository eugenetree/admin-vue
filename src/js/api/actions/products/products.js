import axios from "axios";

const BASE_URL = 'https://back-td.herokuapp.com'

const products = {
  async getProducts(page) {
    try {
      const res = await axios.get(`${BASE_URL}/products?page=${page}`)
      return res.data
    } catch (e) {
      console.log('eee=>',e)
    }
  }
}

export {
  products
}

