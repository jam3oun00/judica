<template>
  <v-container>
    <f-loader data-check :data="cart.items" title="checkout.cart_is_empty">
      <div class="text-h1"></div>
      <v-row>
        <v-col cols="12" md="8">
          <v-form v-model="valid" class="mt-md-15">
            <v-row>
              <v-col class="py-0" cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.first_name') }} <b class="text-red-700">*</b></div>
                <v-text-field
                  class="bordered mt-0 pt-0"
                  v-model="form.firstName"
                  :rules="[v => !!v || $t('utils.field_required')]"
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.last_name') }} <b class="text-red-700">*</b></div>
                <v-text-field
                  class="bordered mt-0 pt-0"
                  v-model="form.lastName"
                  :rules="[v => !!v || $t('utils.field_required')]"
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">
                  {{ $t('checkout.email_address') }} <b class="text-red-700">*</b>
                </div>
                <v-text-field
                  class="bordered mt-0 pt-0"
                  v-model="form.email"
                  :rules="[v => !!v || $t('utils.field_required'), v => /^\S+@\S+\.\S+$/.test(v) || $t('utils.input_not_valid')]"
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.phone') }} <b class="text-red-700">*</b></div>
                <v-text-field
                  class="bordered mt-0 pt-0"
                  v-model="form.phone"
                  :rules="[v => !!v || $t('utils.field_required'), v => /^\d+$/.test(v) || $t('utils.input_not_valid')]"
                />
              </v-col>
              <!-- <v-col class="py-0" cols="6">
              <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.id_number') }} <b class="text-red-700">*</b></div>
              <v-text-field class="bordered mt-0 pt-0" v-model="form.id_number" :rules="[v => !!v || $t('utils.field_required'), v => /^\d+$/.test(v) || $t('utils.input_not_valid')]" />
            </v-col> -->
              <v-col class="py-0" cols="12">
                <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.address') }} <b class="text-red-700">*</b></div>
                <v-text-field
                  class="bordered mt-0 pt-0"
                  v-model="form.addressLine1"
                  :rules="[v => !!v || $t('utils.field_required')]"
                />
              </v-col>
              <v-col class="py-0" cols="6">
                <div class="text-sm font-weight-medium mb-2">
                  {{ $t('checkout.address_line2') }}
                  <b class="text-red-700">*</b>
                </div>
                <v-text-field
                  :rules="[v => !!v || $t('utils.field_required')]"
                  class="bordered mt-0 pt-0"
                  v-model="form.addressLine2"
                />
              </v-col>
              <v-col class="py-0" cols="6">
                <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.postcode') }} <b class="text-red-700">*</b></div>
                <v-text-field
                  class="bordered mt-0 pt-0"
                  v-model="form.postcode"
                  :rules="[v => !!v || $t('utils.field_required')]"
                />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.city') }} <b class="text-red-700">*</b></div>
                <v-text-field class="bordered mt-0 pt-0" v-model="form.city" :rules="[v => !!v || $t('utils.field_required')]" />
              </v-col>
              <v-col class="py-0" cols="12" md="6">
                <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.country') }}</div>
                <v-text-field class="bordered mt-0 pt-0" v-model="form.country" />
                <!-- <f-list-of-countries v-model="form.country" /> -->
              </v-col>
              <!-- <v-col class="py-0" cols="12">
              <div class="text-sm font-weight-medium mb-2">{{ $t('checkout.country_region') }} <b class="text-red-700">*</b></div>
              <b>Israel</b>
              <v-checkbox v-model="checkbox" :label="$t('checkout.join_club_p')" :class="`${$vuetify.rtl ? 'text-right' : 'text-left'}`" />
            </v-col> -->
            </v-row>
          </v-form>
          <v-row>
            <v-col cols="12" md="6">
              <v-card tile outlined>
                <v-card-title class="text-capitalize font-weight-bold"> {{ $t('checkout.shipping') }} </v-card-title>
                <v-card-text>
                  {{ $t('checkout.how_do_you_want_your_order_delivered') }}
                  <f-shipping-card :totalPrice="totalPrice" />
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card tile outlined>
                <v-card-title class="text-capitalize font-weight-bold"> {{ $t('checkout.payment_method') }} </v-card-title>
                <v-card-text>
                  {{ $t('checkout.how_do_you_want_to_pay_for_your_order') }}
                  <f-payment-method-card :totalPrice="totalPrice" />
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <div class="bg-black bg-opacity-5 pa-7 h-full d-flex flex-column">
            <div class="font-weight-bold text-2xl text-center mb-4">
              {{ $t('checkout.order_details') }}
            </div>
            <v-card tile flat outlined>
              <v-card-title class="font-weight-bold">
                {{ $t('checkout.interim_amount') }} <v-spacer /> {{ $t('checkout.product') }}
              </v-card-title>
              <v-divider />
              <v-card-text class="d-flex">
                {{ $t('cart.interim_amount') }}
                <v-spacer />
                {{ totalPrice }} ₪
              </v-card-text>
              <v-divider />
              <v-card-title class="font-weight-bold text-xl">
                {{ $t('cart.total') }}
                <v-spacer />
                {{ totalPrice }} ₪
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-checkbox
                  v-model="checkbox"
                  :label="$t('checkout.join_club_p')"
                  :class="`${$vuetify.rtl ? 'text-right' : 'text-left'}`"
                />
              </v-card-text>
            </v-card>
            <v-spacer />
            <div>
              <v-btn tile large color="primary" @click="submit" block class="mt-4" :loading="loading" :disabled="!valid">
                {{ $t('checkout.proceed_to_payment') }}
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </f-loader>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      checkbox: false,
      valid: false,
      form: {
        phone: '',
        email: '',
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        country: '',
        postcode: ''
      },
      loading: false
      // listOfCountries: ['israel']
    }
  },
  computed: {
    cart() {
      return this.$store.state.cart.cart.items || []
    }
  },
  computed: {
    ...mapState({
      cart: state => state.cart.cart || []
    }),
    totalPrice() {
      try {
        return this.cart.items.reduce((acc, item) => acc + item.product.price * item.quantity, 0).toFixed(2)
      } catch (error) {
        return 0
      }
    }
  },
  methods: {
    submit() {
      this.loading = true
      this.$axios
        .post(`/carts/${this.cart.id}/checkout`, {
          items: this.cart.items.map(v => v.productId),
          storePaymentMethodId: null,
          storeShippingProviderId: null,
          billingDetails: null,
          shippingDetails: this.form
        })
        .then(({ data }) => {
          if (data.approvalLink) {
            window.open(data.approvalLink, '_blank')
            localStorage.removeItem('cart')
            localStorage.removeItem('cartId')
          }
          console.warn(data)
        })
        .catch(err => {
          console.log(err)
          this.$notify({ title: this.$t('warning'), text: this.$t('checkout.error_while_purchasing_please_try_again') })
        })
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style lang="scss" scoped></style>
