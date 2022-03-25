<template>
  <v-container class="mt-7 mb-10">
    <v-row>
      <v-col cols="12" md="6" class="px-8 py-10">
        <nuxt />
      </v-col>
      <v-col cols="12" md="6" class="text-center px-8 py-10" :class="$vuetify.breakpoint.mdAndUp ? `border-${$vuetify.rtl ? 'r' : 'l'}` : ''">
        <div class="text-h5 font-weight-bold mb-7 text-capitalize">{{ $t('auth.registration') }}</div>
        <p>
          {{ $t('auth.p') }}
        </p>
        <v-btn class="bg-black bg-opacity-10 font-weight-medium" tile nuxt :to="btnTxt.to">{{ $t(btnTxt.title) }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  fetch() {
    console.log(this.global_user)
    if (this.global_user) {
      this.$router.push('/my-account')
    } else {
      if (this.$route.name === 'auth') {
        this.$router.push('/auth/login')
      }
    }
  },
  computed: {
    btnTxt() {
      if (this.$route.name === 'auth-login') {
        return { title: 'auth.register', to: '/auth/register' }
      } else {
        return { title: 'auth.login', to: '/auth/login' }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
