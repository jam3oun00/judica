<template>
  <v-app>
    <client-only>
      <notifications :position="`top ${$vuetify.rtl ? 'left' : 'right'}`" class="ma-5" />
    </client-only>
    <lazy-f-navbar :home="home" v-if="!empty" />
    <lazy-f-home-side-bare v-if="!empty" />
    <lazy-f-cart-sidebare v-if="!empty" />
    <v-main class="ma-0 pa-0 mt-16" :class="{ 'pt-16': !home }">
      <slot />
    </v-main>
    <lazy-f-footer v-if="!empty" class="mt-8" />
  </v-app>
</template>

<script>
export default {
  props: {
    empty: Boolean,
    home: Boolean
  },
  watch: {
    $route(to) {
      if (to.fullPath.includes(this.$i18n.locale)) {
        console.log('1')
        return false
      } else {
        console.log('2')
        this.$router.push(`/${this.$i18n.locale}${to.fullPath}`)
      }
    }
  },
  created() {
    // rtl for arabic
    if (this.$i18n.locale === 'ar' || this.$i18n.locale === 'he') {
      this.$vuetify.rtl = true
    } else {
      this.$vuetify.rtl = false
    }
    this.$vuetify.lang.current = this.$i18n.locale
  }
}
</script>

<style lang="scss" scoped></style>
