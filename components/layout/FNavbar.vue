<template>
  <div id="navbar-parent">
    <div :class="{ 'fixed-navbar': fixed, transparent: true }" id="navbar">
      <div class="border-b transparent pt-7 mb-10">
        <div class="px-6 d-flex align-center transparent">
          <div class="w-full d-flex align-center justify-space-between">
            <div>
              <div class="text-3xl d-flex align-center gap-2 cursor-pointer" style="z-index: 4">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon me-4" viewBox="0 0 512 512" @click="drawer = true">
                  <title>Menu</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="32"
                    d="M80 160h352M80 256h352M80 352h352"
                  />
                </svg>
                <nuxt-link :to="`/${$i18n.locale}`">
                  <img
                    @mouseenter="drawer = true"
                    @click="drawer = true"
                    width="70"
                    src="@/assets/logo/logo.jpg"
                    class="relative d-none d-lg-inline hide-transition"
                    :class="{ 'hide-it': drawer }"
                  />
                </nuxt-link>
                <v-dialog
                  v-model="dialog"
                  :width="$vuetify.breakpoint.smAndDown ? '95vw' : '80vw'"
                  transition="scroll-y-reverse-transition"
                  scrollable
                >
                  <template v-slot:activator="{ on, attrs }">
                    <div v-bind="attrs" v-on="on" class="ms-2">
                      <v-btn icon class="bg-white" v-if="$vuetify.breakpoint.smAndDown">
                        <v-icon>
                          {{ mdiMagnify }}
                        </v-icon>
                      </v-btn>
                      <v-text-field
                        v-else
                        readonly
                        class="bg-white cursor-pointer"
                        hide-details
                        outlined
                        rounded
                        :prepend-inner-icon="mdiMagnify"
                        dense
                        light
                        :placeholder="$t('utils.searchForProducts')"
                      />
                    </div>
                  </template>
                  <v-card :height="$vuetify.breakpoint.smAndDown ? '95vh' : '80vh'" tile flat style="border: none">
                    <v-card-text>
                      <f-search embed />
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
            </div>

            <!-- <div class="d-flex justify-center pa-0">
              <v-text-field
                outlined
                rounded
                :prepend-inner-icon="mdiMagnify"
                dense
                dark
                :placeholder="$t('utils.searchForProducts')"
              />
              <nuxt-link class="outline-none" to="/products">
                <v-icon size="30" class="d-md-none">
                  {{ mdiMagnify }}
                </v-icon>
                <span class="d-none d-md-inline">
                  {{ $t('utils.searchForProducts') }}
                </span>
              </nuxt-link>
            </div> -->

            <div class="d-flex align-center">
              <div class="d-flex gap-3">
                <lang-switcher class="nav-child" />
                <nuxt-link
                  :to="global_user ? '/my-account' : '/auth/login'"
                  class="text-uppercase font-weight-bold text-xs d-flex align-center me-3 d-flex gap-2 nav-child"
                  :class="{ 'flex-wrap': $i18n.locale !== 'ar' && $i18n.locale !== 'he' }"
                  style="width: min-content"
                >
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="22"
                    height="22"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="#000000"
                      d="M9.5 11c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zM9.5 1c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5c2.481 0 4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5z"
                    ></path>
                    <path
                      fill="#000000"
                      d="M17.5 20h-16c-0.827 0-1.5-0.673-1.5-1.5 0-0.068 0.014-1.685 1.225-3.3 0.705-0.94 1.67-1.687 2.869-2.219 1.464-0.651 3.283-0.981 5.406-0.981s3.942 0.33 5.406 0.981c1.199 0.533 2.164 1.279 2.869 2.219 1.211 1.615 1.225 3.232 1.225 3.3 0 0.827-0.673 1.5-1.5 1.5zM9.5 13c-3.487 0-6.060 0.953-7.441 2.756-1.035 1.351-1.058 2.732-1.059 2.746 0 0.274 0.224 0.498 0.5 0.498h16c0.276 0 0.5-0.224 0.5-0.5-0-0.012-0.023-1.393-1.059-2.744-1.382-1.803-3.955-2.756-7.441-2.756z"
                    ></path>
                  </svg>
                </nuxt-link>
                <div class="d-flex gap-3 cursor-pointer hover:opacity-70 nav-child" @click="updateCartDrawer">
                  <v-badge :content="`${items}`" overlap>
                    <svg
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill="#000000"
                        d="M8 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM8 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
                      ></path>
                      <path
                        fill="#000000"
                        d="M15 20c-1.103 0-2-0.897-2-2s0.897-2 2-2 2 0.897 2 2-0.897 2-2 2zM15 17c-0.551 0-1 0.449-1 1s0.449 1 1 1 1-0.449 1-1-0.449-1-1-1z"
                      ></path>
                      <path
                        fill="#000000"
                        d="M17.539 4.467c-0.251-0.297-0.63-0.467-1.039-0.467h-12.243l-0.099-0.596c-0.131-0.787-0.859-1.404-1.658-1.404h-1c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h1c0.307 0 0.621 0.266 0.671 0.569l1.671 10.027c0.131 0.787 0.859 1.404 1.658 1.404h10c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-10c-0.307 0-0.621-0.266-0.671-0.569l-0.247-1.48 9.965-0.867c0.775-0.067 1.483-0.721 1.611-1.489l0.671-4.027c0.067-0.404-0.038-0.806-0.289-1.102zM16.842 5.404l-0.671 4.027c-0.053 0.316-0.391 0.629-0.711 0.657l-10.043 0.873-0.994-5.962h12.076c0.117 0 0.215 0.040 0.276 0.113s0.085 0.176 0.066 0.291z"
                      ></path>
                    </svg>
                  </v-badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiMagnify } from '@mdi/js'
import { mapState } from 'vuex'
export default {
  props: {
    home: Boolean
  },
  data() {
    return {
      fixed: true,
      dialog: false,
      mdiMagnify
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart || {}
    }),
    drawer: {
      get() {
        return this.$store.state.utils.drawer
      },
      set(value) {
        this.$store.commit('utils/setDrawer', value)
      }
    },
    totalPrice() {
      try {
        return this.cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)
      } catch (error) {
        return 0
      }
    },
    items() {
      try {
        return this.cart.items.length || 0
      } catch (error) {
        return 0
      }
    }
  },
  methods: {
    updateDrawer(v) {
      this.$nuxt.$emit('updateDrawer', v)
    },
    updateCartDrawer() {
      this.$nuxt.$emit('updateCartDrawer')
    }
  },
  mounted() {
    // const navbarParent = document.getElementById('navbar-parent')
    // const navbar = document.getElementById('navbar')
    // navbarParent.style.height = navbar.offsetHeight + 'px'
    // if (process.client) {
    //   window.addEventListener('scroll', () => {
    //     if (window.scrollY > 100) {
    //       this.fixed = true
    //     } else {
    //       this.fixed = false
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss">
.hide-transition {
  transition: all 0.85s ease-in-out;
}
.hide-it {
  opacity: 0;
  transform: translateX(35px);
}
#navbar-parent {
  .nav-child,
  .nav-child *:not(.v-badge__badge) {
    color: var(--v-primary-base) !important;
  }
}

.search-icon {
  margin: 0 -2px;
  position: relative;
  z-index: 3;
}
.search-input {
  width: 100%;
  height: 100%;
  box-shadow: inset 0px 0px 0px 2px #e6e6e6 !important;
  border: none !important;
  border-radius: 0;
  font-size: 16px;
  color: #333;
  outline: none;
  &,
  &::placeholder {
    font-weight: normal !important;
  }
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background: white;
  animation: fadeInUp 0.3s ease-in-out;
}
.navbar-parent {
  width: 100vw;
}
</style>
