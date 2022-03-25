<template>
  <div>
    <v-navigation-drawer
      width="300"
      v-model="drawer"
      fixed
      app
      :right="$vuetify.rtl"
      hide-overlay
      mobile-breakpoint="999999999999"
    >
      <div @mouseleave="drawer = false" @mouseenter="drawer = true" class="w-full h-full">
        <nuxt-link :to="`/${$i18n.locale}`" class="d-block text-center pa-4">
          <v-slide-x-transition>
            <img v-if="drawer" width="100" src="@/assets/logo/logo.jpg" class="zara-logo transition-transform mx-auto" />
          </v-slide-x-transition>
        </nuxt-link>
        <div class="py-7 mt-1">
          <v-list dense nav class="f-nav-list">
            <template v-for="(child, i) in navigations">
              <!--  -->
              <v-list-group v-if="child.$children.length" :key="i" no-action>
                <template v-slot:activator>
                  <v-list-item-content class="px-6">
                    <v-list-item-title v-text="child.name"></v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                  v-for="(c, i) in child.$children"
                  :key="`${i}_sub`"
                  :to="`/${$i18n.locale}/product-category/${c.categoryId}`"
                >
                  <v-list-item-content class="px-6">
                    <v-list-item-title v-text="c.name"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <!--  -->
              <!--  -->
              <!--  -->
              <v-list-item v-else :key="i" :to="`/${$i18n.locale}/product-category/${child.categoryId}`">
                <v-list-item-content class="px-6">
                  <v-list-item-title v-text="child.name"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      navigations: state => state.categories.navigation.$children || []
    }),
    drawer: {
      get() {
        return this.$store.state.utils.drawer
      },
      set(value) {
        this.$store.commit('utils/setDrawer', value)
      }
    }
  },
  data() {
    return {
      search: '',
      itemsNavigation: [
        {
          name: 'חדר שינה'
        },
        {
          name: 'בגדים ונעליים'
        },
        {
          name: 'מטבח'
        },
        {
          name: 'חדר אוכל'
        },
        {
          name: 'ילדים'
        }
      ]
    }
  },

  // @fetch-on-server
  created() {
    this.load(true)
    this.$store.dispatch('categories/getNavigation').finally(() => this.load(false))
  }
}
</script>

<style lang="scss">
.f-nav-list {
  .v-list-item__icon {
    transform: scale(0.7) !important;
  }
}
.v-navigation-drawer {
  transition-duration: 1s;
}
// .zara-logo {
//   position: fixed;
//   top: 33px;
//   right: 75px;
// }
</style>
