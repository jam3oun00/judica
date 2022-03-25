<template>
  <div class="overflow-hidden min-h-screen px-4">
    <f-loader height="50vh" data-check :data="[product]">
      <v-row>
        <v-col cols="12" md="6" class="aside-product-page">
          <div>
            <Photoswipe :lazy="false" class="relative" v-for="(m, index) in product.media" :key="index">
              <img class="object-cover w-full" v-if="m && m.src" :src="m.src" v-pswp="{ src: m.src }" />
            </Photoswipe>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <div class="text-h4">
            {{ product.title }}
          </div>
          <div class="mt-5 d-block text-h5 font-weight-bold">{{ product.price }}₪</div>
          <!-- <div class="mt-1 d-block text-h6 font-weight-bold text-red-800">{{ $t('productCategory.PriceForClubMembers') }} : 191.2 ₪</div> -->
          <!-- <v-row class="font-weight-bold mt-6" no-gutters>
            <v-col cols="12" md="3" class="d-flex align-center">{{ $t('utils.color') }} : </v-col>
            <v-col cols="12" md="9">
              <v-item-group v-model="colors">
                <v-item v-slot="{ active, toggle }" :key="i" v-for="(v, i) in product.variants || []">
                  <v-tooltip top transition="fade-transition">
                    <template v-slot:activator="{ on, attrs }">
                      <v-img
                        @click="toggle"
                        class="me-2 cursor-pointer relative border-white border-2 hover:border-red-700"
                        :class="{ 'border-red-700': active, 'float-right': $vuetify.rtl, 'float-left': !$vuetify.rtl }"
                        v-bind="attrs"
                        v-on="on"
                        contain
                        height="60"
                        width="60"
                        aspect-ratio="1"
                        :src="v.image"
                      />
                    </template>
                    <span>{{ v.title }}</span>
                  </v-tooltip>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row> -->
          <!-- <v-row class="font-weight-bold mt-5" no-gutters>
            <v-col cols="12" md="3" class="d-flex align-center">{{ $t('utils.measure') }} : </v-col>
            <v-col cols="12" md="9">
              <v-item-group v-model="measure" class="d-flex flex-wrap gap-2">
                <v-item v-slot="{ active, toggle }" v-for="i in [35, 36, 37, 38, 39, 40, 41, 42, 43]" :key="i">
                  <div
                    @click="toggle"
                    class="border-2 d-flex align-center justify-center py-1 px-2 text-sm hover:border-red-700 cursor-pointer"
                    :class="{ 'border-red-700': active }"
                    :key="i"
                  >
                    {{ i }}
                  </div>
                </v-item>
              </v-item-group>
            </v-col>
          </v-row> -->
          <div class="mt-5">
            <!-- <div class="font-weight-bold">{{ $t('utils.inStock') }}</div> -->
            <lazy-f-counter v-model="counter" class="mt-1" />
          </div>

          <div class="mt-8">
            <v-btn block tile color="primary" @click="addToCart" :loading="loading">{{ $t('utils.AddToCart') }}</v-btn>
            <v-btn text tile color="primary" class="mt-2 font-weight-bold">
              <div class="text-xl me-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                  <title>Heart</title>
                  <path
                    d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </div>
              {{ $t('utils.AddToWishList') }}
            </v-btn>
          </div>
          <div class="mt-5">
            <lazy-f-accordion id="accordion-example-1" :content="data" />
          </div>
          <v-row class="mt-3">
            <v-col cols="12" md="3" class="d-flex align-center font-weight-bold">{{ $t('utils.sku') }} : </v-col>
            <v-col cols="12" md="9">{{ product.sku }}</v-col>
          </v-row>
          <v-row class="mt-3">
            <v-col cols="12" md="3" class="d-flex align-center font-weight-bold">{{ $t('utils.categories') }} : </v-col>
            <v-col cols="12" md="9"
              >הסדרה הירוקה, הקולקציה החדשה אביב 2022, כללי, לכל קטגוריות נעלי נשים, נעליים שטוחות, סנדלים</v-col
            >
          </v-row>
        </v-col>
      </v-row>
    </f-loader>
    <!-- <div class="text-h5 mt-7 font-weight-bold text-uppercase">
      {{ $t('utils.relatedProductsTitle') }}
    </div>
    <div class="w-10 black mt-2" style="height: 2px"></div>
    <swiper ref="mySwiper" :options="options" navigation class="mt-7">
      <swiper-slide v-for="i in 10" :key="i">
        <product id="123" />
      </swiper-slide>
      <v-btn icon class="black--text button-next" slot="button-next" @click="next">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon text-3xl" viewBox="0 0 512 512"><title>Chevron Forward</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/></svg>
      </v-btn>
      <v-btn icon class="black--text button-prev" slot="button-prev" @click="prev">
        <svg xmlns="http://www.w3.org/2000/svg" class="ionicon text-3xl" viewBox="0 0 512 512"><title>Chevron Back</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/></svg>
      </v-btn>
    </swiper> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  created() {
    this.load(true)
    this.$store.dispatch('products/getProductById', this.$route.params.id).finally(() => this.load(false))
  },
  computed: {
    ...mapState({
      product: state => state.products.product || []
    }),
    vPswp() {
      return { src: this.product.image, title: this.product.title }
    },

    // this is the data for the accordion, not the vue data
    data() {
      return [
        {
          id: 1,
          active: true,
          title: this.$t('utils.description'),
          details: this.product.longDescription
        }
        // {
        //   id: 2,
        //   active: false,
        //   title: this.$t('utils.deliveryAndChipments'),
        //   details:
        //     'אספקת המוצרים המצויים במלאי תבוצע באמצעות חברת שליחויות ובתוך 4-14 ימי עסקים מביצוע ההזמנה וקבלת התשלום בגינה. החלפות/החזרות תתאפשרנה בכל אחת מחנויות הרשת תוך 14 יום מיום קבלת המשלוח בצירוף החשבונית בכפוף לתקנון או בפניה אלינו דרך צור קשר באתר. בהזמנה מעל 250 ש"ח, המשלוח חינם ובסכום נמוך מ 250 ש"ח עלות המשלוח 25 ש"ח. הזמנה שכוללת יותר מזוג נעלים אחד, ייתכן ותתקבל ביותר ממשלוח אחד.'
        // }
      ]
    }
  },
  data() {
    return {
      loading: false,
      counter: 1,
      colors: undefined,
      measure: undefined,
      options: {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 5,
        breakpoints: {
          1024: {
            slidesPerView: 4
          },
          768: {
            slidesPerView: 3
          },
          640: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 2
          }
        }
      }
    }
  },
  methods: {
    createNewCart() {
      this.loading = true
      this.$axios
        .post('/carts', {})
        .then(res => {
          localStorage.setItem('cartId', res.data.cart.id)
          this.addCartItem(res.data.cart.id)
        })
        .finally(() => (this.loading = false))
    },
    addCartItem(cartId) {
      this.loading = true
      this.$axios
        .post(`/carts/${cartId}`, {
          productId: this.product.id,
          quantity: this.counter,
          $placeholders: { id: cartId }
        })
        .then(({ data: { item } }) => {
          if (item) {
            localStorage.setItem('cart', JSON.stringify(item))
            this.$notify({ title: this.$t('success'), text: this.$t('cart.productAddedToCartSuccessfully') })
            this.$store.dispatch('cart/getCart')
          }
        })
        .catch(() => this.$notify({ title: this.$t('warning'), text: this.$t('cart.ErrorAddingProductToCart') }))
        .finally(() => (this.loading = false))
    },
    addToCart() {
      const cartId = localStorage.getItem('cartId')
      cartId ? this.addCartItem(cartId) : this.createNewCart()
    }
  }
}
</script>

<style lang="scss">
@import '~vuetify/src/styles/settings/_variables';
@media #{map-get($display-breakpoints, 'md-and-up')} {
  .aside-product-page {
    & > div {
      position: fixed;
      top: 0;
      left: 0;
      width: calc(50vw - 1rem);
      height: 100vh;
      max-height: 100vh;
      min-height: 100vh;
      overflow: auto;
      -ms-overflow-style: none !important; /* for Internet Explorer, Edge */
      scrollbar-width: none !important; /* for Firefox */
      &::-webkit-scrollbar {
        display: none !important; /* for Chrome, Safari, and Opera */
      }
      img {
        height: 100vh;
      }
    }
  }
  .v-application--is-rtl {
    .aside-product-page {
      & > div {
        right: 0 !important;
        left: unset !important;
      }
    }
  }
}
</style>
