<template>
  <v-card
      class="mx-auto my-12"
      max-width="200"
  >
    <template slot="progress">
      <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        height="200"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <v-row
          align="center"
          class="mx-0"
      >

      </v-row>

      <div class="my-4 text-subtitle-1">
        $ • Price
      </div>

      <div>Country:</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
          color="deep-purple lighten-2"
          text
          @click="moreDateil"
      >
        More detail
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
name: "ProductsCard"
}
</script>

<style scoped>

</style>