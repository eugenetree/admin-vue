<template>
  <div class="products">
    <h1 class="subheading pink--text">Products</h1>
    <v-container class="my-5">
      <v-card flat class="pa-3">
        <v-layout row wrap justify-space-between>
          <v-flex xs12 md6>
            <div class="caption grey--text">Search</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Filters</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Filters</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Filters</div>
          </v-flex>
        </v-layout>
      </v-card>

      <ProductsCards />
    </v-container>
  </div>
</template>

<script>
import ProductsCards from "./ProductsCards";
export default {
  name: "Products",
  components: {
    ProductsCards,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
</style>
