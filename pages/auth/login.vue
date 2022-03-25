<template>
  <div>
    <div class="text-sm font-weight-medium mb-2">
      {{ $t('auth.username') }} <span class="text-red-700 font-weight-bold">*</span>
    </div>
    <v-text-field class="bordered mt-0 pt-0" v-model="loginForm.email" />
    <div class="text-sm font-weight-medium mb-2 mt-1">
      {{ $t('auth.password') }} <span class="text-red-700 font-weight-bold">*</span>
    </div>
    <v-text-field class="bordered mt-0 pt-0 mb-2" v-model="loginForm.password" type="password" />
    <v-btn block color="primary" large tile @click="login">{{ $t('auth.login') }}</v-btn>
    <div class="d-flex mt-2 f-form align-center">
      <v-checkbox class="mt-0 pt-0" hide-details dense :label="$t('auth.rememberMe')" />
      <v-spacer />
      <!-- <nuxt-link to="/auth/forgot-password" class="text-sm font-weight-medium">{{ $t('auth.forgotPassword') }}</nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('local', { data: this.loginForm }).then(({ data }) => (this.global_user = data.user))
    }
  },
  mounted() {}
}
</script>

<style lang="scss"></style>
