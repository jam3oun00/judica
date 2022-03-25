<template>
  <!-- <f-loader height="50vh">
      <section>
        <v-row>
          <v-col cols="12" :md="i >= 2 ? 6 : 12" v-for="(item, i) in categories" :key="i">
            <nuxt-link :to="`/product-category/${item.id}`">
              <v-img eager gradient="to top, rgba(0,0,0,0.3), rgba(0,0,0,0.3)" height="360" :src="item.image || placeholderImg">
                <div class="w-full h-full d-flex align-center justify-center text-center white--text text-h2 font-weight-bold">
                  {{ item.name }}
                </div>
              </v-img>
            </nuxt-link>
          </v-col>
        </v-row>
      </section>
      <section class="mt-12">
        <v-container class="overflow-hidden">
          <swiper ref="mySwiper" :options="options" navigation>
            <swiper-slide v-for="(item, i) in products" :key="i">
              <div class="overflow-hidden bg-cover h-60 md:h-64 lg:h-32 bg-center" :style="`background-image: url(${item.image || placeholderImg})`"></div>
            </swiper-slide>
            <v-btn icon class="black--text button-next text-4xl white" slot="button-next" @click="next">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                <title>Chevron Forward</title>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144" />
              </svg>
            </v-btn>
            <v-btn icon class="black--text button-prev text-4xl white" slot="button-prev" @click="prev">
              <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                <title>Chevron Back</title>
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144" />
              </svg>
            </v-btn>
          </swiper>
        </v-container>
      </section>
    </f-loader> -->
  <div class="mt-n16" v-if="categories.length">
    <client-only>
      <vue-glide id="f-glide" class="mt-n1 f-glide" type="carousel" :perView="1" :autoplay="5000" :hoverpause="false" :gap="0">
        <vue-glide-slide v-for="(slide, i) in categories" :key="i" :style="`background:url(${slide.image.src})`">
          <div class="w-full h-full pa-10 d-flex align-center justify-center bg-white bg-opacity-10">
            <div
              @click="$router.push(`/${$i18n.locale}/product-category/${slide.id}`)"
              class="display-4 black--text font-weight-thin cursor-pointer"
            >
              {{ slide.name }}
            </div>
          </div>
        </vue-glide-slide>
      </vue-glide>
    </client-only>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Glide, GlideSlide } from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

export default {
  layout: 'home',
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },
  methods: {
    goToCategory(link) {
      // this.$router.push(link)
      console.log(link)
    },
    now() {
      console.log('hi')
    },
    after() {
      this.timeout = performance.now() - this.timeout
      console.log(this.timeout)
    }
  },
  created() {
    this.load(true)
    this.$store.dispatch('categories/getCustomeCategories').finally(() => this.load(false))
  },
  computed: {
    ...mapState({
      categories: state => state.categories.customeCategories || []
    })
  },
  data() {
    return {
      timeout: null
    }
  }
}
</script>

<style lang="scss">
.f-glide {
  .glide__slide {
    height: 100vh;
    width: 100vw;
    transform: translateX(-24px);
    background-size: cover !important;
    background-position: center center !important;
  }
  direction: ltr !important;
}
</style>
