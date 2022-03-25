<template>
  <f-loader height="50vh" data-check :data="products">
    <v-row>
      <v-col cols="6" md="4" lg="3" v-for="(item, i) in products" :key="i">
        <!--  -->
        <v-carousel height="18rem" v-if="item && item.media.length" hide-delimiter-background hide-delimiters>
          <v-carousel-item v-for="(slide, i) in item.media" :key="i">
            <img class="object-cover w-full h-72" :src="slide.src" />
          </v-carousel-item>
        </v-carousel>
        <img v-else class="object-cover w-full h-72" :src="item.image || placeholderImg" />
        <nuxt-link :to="`/${$i18n.locale}/product/${item.id}`">
          <!--  -->
          <div class="text-center my-4">
            <span class="font-weight-bold hover:opacity-70">
              {{ item.title }}
            </span>
          </div>
          <!-- <div class="d-flex">
            <div class="d-flex gap-2 flex-wrap">
              <template v-for="i in 2">
                <div :key="i">
                  <v-img height="38" width="38" aspect-ratio="1" :src="item.image" />
                </div>
                <div v-if="i >= 5" :key="i + 's'">
                  <v-responsive height="38" width="38" aspect-ratio="1" class="bg-zinc-900 rounded-full">
                    <b class="w-full h-full d-flex align-center justify-center white--text text-md text-center">+2</b>
                  </v-responsive>
                </div>
              </template>
            </div>
            <v-spacer />
          </div> -->
        </nuxt-link>
        <div class="price font-weight-bold mt-5 text-xl" v-if="item && item.advancePrice && item.advancePrice.basePrice">
          {{ item.advancePrice.basePrice }} ₪
        </div>
        <!-- <div class="text-red-800 font-weight-bold">{{ $t('productCategory.PriceForClubMembers') }} : 240 ₪</div> -->
      </v-col>
    </v-row>
  </f-loader>
</template>

<script>
import placeholderImg from '@/assets/utils/placeholder.webp'
export default {
  props: {
    products: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      placeholderImg
    }
  }
}
</script>

<style lang="scss" scoped></style>
