<template>
  <v-app>
    <AppHeader />

    <v-main class="mx-4 gray">
      <AppContent />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from "@/js/layouts/App/AppHeader";
import AppContent from "@/js/layouts/App/AppContent";

export default {
  name: "MainLayout",
  components: { AppContent, AppHeader },
};
</script>

<style lang="scss">
</style>