<template>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            class="sidebar__item"
        >
          <router-link :to="item.path" class="sidebar__item-link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
  name: "AppSidebar",
  data() {
    return {
    
      items: [
        {
          title: 'Home',
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
  },
 
}
</script>

<style lang="scss">
.sidebar {
  padding-top: 80px;
  position: fixed;
  left: 0;
  top: 0;

  &__item-link {
    width: 100%;
    text-decoration: none;
    display: flex;
    color: var(--red-main);
    font-size: 20px;
  }
}
</style>