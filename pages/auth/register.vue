<template>
  <div>
    <v-row>
      <v-col cols="12" md="6" class="py-0">
        <div class="text-sm font-weight-medium mb-2">{{ $t('auth.firstName') }} <span class="text-red-700 font-weight-bold">*</span></div>
        <v-text-field class="bordered mt-0 pt-0" />
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <div class="text-sm font-weight-medium mb-2">{{ $t('auth.lastName') }} <span class="text-red-700 font-weight-bold">*</span></div>
        <v-text-field class="bordered mt-0 pt-0" />
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <div class="text-sm font-weight-medium mb-2">{{ $t('auth.username2') }} <span class="text-red-700 font-weight-bold">*</span></div>
        <v-text-field class="bordered mt-0 pt-0" />
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <div class="text-sm font-weight-medium mb-2">{{ $t('auth.email') }} <span class="text-red-700 font-weight-bold">*</span></div>
        <v-text-field class="bordered mt-0 pt-0" />
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <div class="text-sm font-weight-medium mb-2">{{ $t('auth.password') }} <span class="text-red-700 font-weight-bold">*</span></div>
        <v-text-field class="bordered mt-0 pt-0" />
      </v-col>
      <v-col cols="12" md="6" class="py-0">
        <div class="text-sm font-weight-medium mb-2">{{ $t('auth.confirmPassword') }} <span class="text-red-700 font-weight-bold">*</span></div>
        <v-text-field class="bordered mt-0 pt-0" />
      </v-col>
    </v-row>
    <div class="text-sm font-weight-medium mb-2 mt-5">{{ $t('auth.passwordWillBeSentToYourEmailAddress') }}</div>
    <v-btn block color="primary" large tile>{{ $t('auth.register') }}</v-btn>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped></style>
