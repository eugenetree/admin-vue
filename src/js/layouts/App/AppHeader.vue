<template>
  <nav>
    <v-app-bar flat app dark class="grey darken-2">
      <v-app-bar-nav-icon 
      @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase white--text">
        <span class="pink--text">My</span>
        <span>Logo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon class="hidden-md-and-down">
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app dark class="purple darken-1">
      
      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in links"
            :key="item.title"
            router 
            :to="item.path"
        >
      
            <v-list-item-icon>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "AppHeader",
 data() {
    return {
      drawer: true,
      links: [
        {
          title: 'Products',
          icon: 'mdi-view-dashboard',
          path: '/'
        },
        {
          title: 'About',
          icon: 'mdi-help-box',
          path: '/about'
        },
      ],
    }
  }
};
</script>

<style lang="scss">
.header {
  &__logo-link {
    color: white !important;
    text-decoration: none;
  }

  &__logout {
    color: white !important;
    text-decoration: none;
  }
}
</style>