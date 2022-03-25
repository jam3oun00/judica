<template>
  <v-navigation-drawer width="350" v-model="drawer" app fixed mobile-breakpoint="999999999999999">
    <f-loader height="30vh" class="mt-5" v-model="loading" data-check :data="cart.items">
      <div class="d-flex align-center justify-space-between pa-4 border-b text-2xl font-weight-bold">
        {{ $t('cart.shoppingCart') }}
        <button @click="drawer = false" class="d-flex align-center justify-center outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
            <title>Close</title>
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" />
          </svg>
        </button>
      </div>
      <div class="border-b d-flex align-center gap-4 px-2" v-for="(item, i) in cart.items" :key="i">
        <v-img contain aspect-ratio="1" width="100" max-width="100" :src="item.product.image" />
        <div class="d-flex flex-column justify-space-around">
          <b>{{ item.product.title }}</b>
          <div>
            <b>{{ $t('utils.color') }}:</b> orange
          </div>
          <div class="d-flex gap-2">
            <div class="text-grey">{{ item.quantity }}</div>
            <b>{{ item.product.price }} ₪</b>
          </div>
        </div>
      </div>
      <div class="border-b text-2xl font-weight-bold text-center pa-4">{{ $t('cart.temporaryAmount') }}: {{ totalPrice }} ₪</div>
    </f-loader>
    <div class="d-flex flex-column gap-4 pa-4">
      <v-btn tile color="primary" large block nuxt to="/cart">
        <span class="text-white">{{ $t('cart.beyondShoppingCart') }}</span>
      </v-btn>
      <v-btn tile color="primary" large block nuxt to="/checkout">
        <div class="white--text">
          {{ $t('cart.payment') }}
        </div>
      </v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      loading: false
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart || {}
    }),
    totalPrice() {
      try {
        return this.cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)
      } catch (error) {
        return 0
      }
    }
  },
  created() {
    this.$nuxt.$on('updateCartDrawer', () => (this.drawer = !this.drawer))
    this.loadng = true
    this.$store.dispatch('cart/getCart').finally(() => (this.loading = false))
  }
}
</script>

<style lang="scss" scoped></style>
