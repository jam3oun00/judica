<template>
  <v-container>
    <div class="display-1 font-weight-bold mb-7">
      {{ $t('cart.shoppingCart') }}
    </div>
    <f-loader height="50vh" data-check :data="[cart]">
      <v-row>
        <v-col cols="12" md="4">
          <v-card tile outlined>
            <v-card-title>
              {{ $t('cart.total_in_shopping_cart') }}
            </v-card-title>
            <v-card-text>
              <div class="d-flex">
                {{ $t('cart.interim_amount') }}
                <v-spacer />
                {{ totalPrice }} ₪
              </div>
              <div class="mt-2 caption">
                {{ $t('cart.delivery_options_will_be_updated_during_payment_at_checkout') }}
              </div>
            </v-card-text>
            <v-divider />
            <v-card-title>
              {{ $t('cart.total') }}
              <v-spacer />
              {{ totalPrice }} ₪
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-btn large color="primary" tile block nuxt to="/checkout">
                <div class="white--text">
                  {{ $t('cart.checkout') }}
                </div>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="8">
          <v-card tile outlined :disabled="loading || dloading">
            <v-data-table hide-default-footer disable-sort :headers="headers" :items="cart.items" :items-per-page="5">
              <template v-slot:item.action="{ item }">
                <v-btn class="me-n4" fab x-small color="primary" @click="removeCart(item)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon text-white text-xl" viewBox="0 0 512 512">
                    <title>Trash</title>
                    <path
                      d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 112h352" />
                    <path
                      d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </v-btn>
              </template>
              <template v-slot:item.self_product="{ item }">
                <img :src="item.product.image" class="my-2 object-contain h-16" />
              </template>
              <template v-slot:item.price="{ item }"> {{ item.product.price }} ₪ </template>
              <template v-slot:item.amount="{ item }">
                <lazy-f-counter v-model="item.quantity" @input="updateCounter(item)" />
              </template>
              <template v-slot:item.interim_amount="{ item }">{{ item.quantity }}</template>
            </v-data-table>
          </v-card>
          <v-btn tile class="mt-6 bg-black bg-opacity-10 font-weight-medium" @click="updateCart" :loading="loading" :disabled="!amount.length">
            {{ $t('cart.update_shopping_cart') }}
          </v-btn>
        </v-col>
      </v-row>
    </f-loader>
  </v-container>
</template>

<script>
export default {
  computed: {
    cart: {
      get() {
        return this.$store.state.cart.cart || {}
      },
      set(val) {
        this.$store.commit('cart/addToCart', val)
      }
    },
    headers() {
      return [
        { text: '', value: 'action', width: '40' },
        { text: this.$t('cart.product'), value: 'self_product' },
        { text: this.$t('cart.price'), value: 'price' },
        { text: this.$t('cart.amount'), value: 'amount' },
        { text: this.$t('cart.interim_amount'), value: 'interim_amount' }
      ]
    },
    totalPrice() {
      return this.cart.items ? this.cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2) : null
    }
  },
  created() {
    this.fetch()
  },
  data() {
    return {
      amount: [],
      loading: false,
      dloading: false
    }
  },
  methods: {
    fetch() {
      this.load(true)
      this.$store.dispatch('cart/getCart').finally(() => this.load(false))
    },
    updateCounter({ productId, quantity }) {
      const i = this.amount.findIndex(item => item.productId === productId)
      i > -1 ? (this.amount[i].quantity = quantity) : this.amount.push({ productId, quantity })
    },
    updateCart() {
      if (this.amount.length) {
        this.loading = true
        this.amount.forEach(item => {
          this.$store
            .dispatch('cart/updateCart', {
              productId: item.productId,
              quantity: item.quantity,
              id: this.cart.id
            })
            .finally(() => (this.loading = false))
        })
      }
    },
    removeCart(item) {
      this.dloading = true
      this.$store.dispatch('cart/removeCart', { productId: item.productId, id: item.cartId }).finally(() => {
        this.dloading = false
        this.fetch()
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
