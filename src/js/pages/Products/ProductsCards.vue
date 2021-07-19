<template>
  <div class="products-cards">
    <div class="products-cards__container">
      <div class="products__pagination">
        <paginate
          :page-count="2"
          :page-range="2"
          :margin-pages="2"
          :click-handler="getListProducts"
          prev-text="＜"
          :next-text="'＞'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </div>

      <v-card flat class="pa-3">
        <v-layout row wrap justify-center>
          <v-flex xs12 sm4 md3 lg2 v-for="item in  _products" :key="item.id">
            <v-card class="mx-2 my-5" max-width="240">
              <v-card-text>
                <div class="black--text">name: {{ item.name }}</div>
                <div class="black--text">price: {{ item.price }}</div>
                <div class="black--text">country: {{ item.country }}</div>
              </v-card-text>
              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text> More detail </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsCards",
  components: {},
  data() {
    return {
      products: [],
      currentPage: 1,
      pageCount: 2,
      perPage: 50,
      totalCount: 100,
    };
  },
  mounted(){
    this.products = this._products
  },
  computed: {
    _products() {
      return this.$store.state.products.products;
    },
  },

  created() {
    this.getListProducts(this.page);
    console.log("_products=>", this._products);
  
  },

  methods: {
    getListProducts(page) {
      this.$store
        .dispatch("products/getListProducts", page || 1)
        .catch((err) => {
          console.log("error=>", err);
        });
    },
  },
};
</script>

<style lang="scss">
.products-cards {
  &__container {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
  }

  .pagination {
    display: flex;
    justify-content: flex-end;
  }

  .pagination li {
    width: 50px;
    margin-right: 10px;
    list-style: none;
  }

  .pagination a {
    display: block;
    text-decoration: none;
    text-align: center;
    border: 1px solid #ddd;
    background-color: white;
  }

  .pagination > .page-item > a.active {
    background-color: green;
  }

  .pagination a:hover:not(.active) {
    background-color: yellow;
  }

  .pagination a:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  .pagination a:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>