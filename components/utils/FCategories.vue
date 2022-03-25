<template>
  <div class="border-b">
    <v-container class="d-flex flex-wrap gap-4 select-none">
      <template v-for="(item, i) in navigations">
        <template v-if="item.$children.length">
          <v-menu offset-y :key="i" :transition="`scroll-y-${$vuetify.rtl ? 'reverse-' : ''}transition`">
            <template #activator="{ on, attrs }">
              <a v-bind="attrs" v-on="on" class="available-width d-flex align-center gap-1 font-weight-bold text-uppercase">
                {{ item.name }}
                <svg xmlns="http://www.w3.org/2000/svg" style="color: #555" class="ionicon" viewBox="0 0 512 512">
                  <title>Chevron Down</title>
                  <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144" />
                </svg>
              </a>
            </template>
            <v-list>
              <v-list-item v-for="(child, index) in item.$children" :key="index">
                <v-list-item-title class="text-capitalize cursor-pointer" @click.stop="goTo(child)" v-if="!child.$children.length">{{ child.name }}</v-list-item-title>
                <v-menu v-else offset-x :left="$vuetify.rtl" :right="!$vuetify.rtl" :transition="`scroll-x-${$vuetify.rtl ? 'reverse-' : ''}transition`">
                  <template #activator="{ on, attrs }">
                    <v-list-item-title class="d-flex align-center text-capitalize" v-bind="attrs" v-on="on">
                      {{ child.name }}
                      <v-spacer />
                      <svg v-if="$vuetify.rtl" xmlns="http://www.w3.org/2000/svg" class="ionicon ms-2" style="color: #555" viewBox="0 0 512 512">
                        <title>Chevron Back</title>
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" />
                      </svg>
                      <svg v-else xmlns="http://www.w3.org/2000/svg" class="ionicon ms-2" style="color: #555" viewBox="0 0 512 512">
                        <title>Chevron Forward</title>
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" />
                      </svg>
                    </v-list-item-title>
                  </template>
                  <v-list>
                    <v-list-item v-for="(babychild, babyindex) in child.$children" :key="babyindex">
                      <v-list-item-title v-if="!babychild.$children.length" class="text-capitalize cursor-pointer" @click.stop="goTo(babychild)">{{ babychild.name }}</v-list-item-title>
                      <v-menu v-else offset-x :left="$vuetify.rtl" :right="!$vuetify.rtl" :transition="`scroll-x-${$vuetify.rtl ? 'reverse-' : ''}transition`">
                        <template #activator="{ on, attrs }">
                          <v-list-item-title class="d-flex align-center text-capitalize" v-bind="attrs" v-on="on">
                            {{ babychild.name }}
                            <v-spacer />
                            <svg v-if="$vuetify.rtl" xmlns="http://www.w3.org/2000/svg" class="ionicon ms-2" style="color: #555" viewBox="0 0 512 512">
                              <title>Chevron Back</title>
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" />
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" class="ionicon ms-2" style="color: #555" viewBox="0 0 512 512">
                              <title>Chevron Forward</title>
                              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" />
                            </svg>
                          </v-list-item-title>
                        </template>
                        <v-list>
                          <!-- <v-list-item v-for="(bch, bi) in babychild.$children" :key="bi">
                            <v-list-item-title class="text-capitalize cursor-pointer" @click.stop="goTo(bch)" v-if="!bch.$children.length">{{ bch.name }}</v-list-item-title>
                            <v-menu v-else offset-x :left="$vuetify.rtl" :right="!$vuetify.rtl" :transition="`scroll-x-${$vuetify.rtl ? 'reverse-' : ''}transition`">
                              <template #activator="{ on, attrs }">
                                <v-list-item-title class="d-flex align-center text-capitalize" v-bind="attrs" v-on="on">
                                  {{ bch.name }}
                                  <v-spacer />
                                  <svg v-if="$vuetify.rtl" xmlns="http://www.w3.org/2000/svg" class="ionicon ms-2" style="color: #555" viewBox="0 0 512 512">
                                    <title>Chevron Back</title>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" />
                                  </svg>
                                  <svg v-else xmlns="http://www.w3.org/2000/svg" class="ionicon ms-2" style="color: #555" viewBox="0 0 512 512">
                                    <title>Chevron Forward</title>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" />
                                  </svg>
                                </v-list-item-title>
                              </template>
                              <v-list>
                                <v-list-item v-for="(b, ind) in bch.$children" :key="ind">
                                  <v-list-item-title class="text-capitalize cursor-pointer" @click.stop="goTo(b)">{{ b.name }}</v-list-item-title>
                                </v-list-item>
                              </v-list>
                            </v-menu>
                          </v-list-item> -->
                        </v-list>
                      </v-menu>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
        <a v-else :key="i" class="available-width select-none font-weight-bold text-uppercase">
          {{ item.name }}
        </a>
      </template>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  // @fetch-on-server
  created() {
    this.$store.dispatch('categories/getNavigation')
  },
  computed: {
    ...mapState({
      navigations: state => state.categories.navigation.$children || []
    })
  },
  methods: {
    goTo(item) {
      this.$router.push(`/product-category/${item.id}`)
    }
  }
}
</script>

<style lang="scss">
.v-menu__content {
  .v-item--active,
  .v-list-item--active {
    &,
    .v-list-item__title {
      color: var(--v-primary-base) !important;
    }
  }
  .v-list {
    padding: 8px 0px !important;
    font-weight: 700 !important;
    .v-list-item {
      padding: 0 1.2rem !important;
      color: var(--v-primary-lighten5) !important;
      min-height: 38px;
      &:hover {
        color: var(--v-primary-base) !important;
      }
    }
  }
}
.available-width {
  white-space: nowrap;
  font-size: 13px !important;
}
</style>
