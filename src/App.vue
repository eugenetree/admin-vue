<template>
  <v-app>
  <MainLayout />
  </v-app>

</template>

<script>

import MainLayout from '@/js/layouts/MainLayout';
export default {
  name: 'App',
  components: {MainLayout},
  data: () => ({
    //
  }),
};
</script>
<style>
</style>

<!--если соблюдать твою структуру, то папку components нужно закинуть в папку js, хотя, как понимаю-->
<!--её содержимое пока нигде не используется (тогда в папке js создать components)-->