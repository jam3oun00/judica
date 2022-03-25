<template>
  <div>
    <nuxt-link :to="`/product/${id}`">
      <v-responsive aspect-ratio="1" class="relative left-menu-hover">
        <div class="w-full h-full pr-img" :style="`background:url(${imgSrc})`">
          <div class="bg-white opacity-7 py-1 px-3 caption absolute top-4 right-0 font-weight-bold" style="z-index: 4">
            7.5 CM
          </div>
          <div class="box absolute top-3 left-3 bg-white shadow py-1 px-3 text-2xl d-flex flex-column">
            <v-tooltip right transition="fade-transition">
              <template v-slot:activator="{ on, attrs }">
                <div class="my-2" v-bind="attrs" v-on="on">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                    <title>Cart</title>
                    <circle
                      cx="176"
                      cy="416"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle
                      cx="400"
                      cy="416"
                      r="16"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M48 80h64l48 272h256"
                    />
                    <path
                      d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </div>
              </template>
              <span>{{ $t('hardcodedWords.test') }}</span>
            </v-tooltip>
            <v-tooltip right transition="fade-transition">
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">
                  <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
                    <title>Search</title>
                    <path
                      d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M338.29 338.29L448 448"
                    />
                  </svg>
                </div>
              </template>
              <span>{{ $t('hardcodedWords.test') }}</span>
            </v-tooltip>
            <v-tooltip right transition="fade-transition">
              <template v-slot:activator="{ on, attrs }">
                <div class="my-2 mb-1" v-bind="attrs" v-on="on">
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
              </template>
              <span>{{ $t('hardcodedWords.test') }}</span>
            </v-tooltip>
          </div>
        </div>
      </v-responsive>
      <div class="text-center my-4">
        <span class="font-weight-bold hover:opacity-70">
          {{ $t('hardcodedWords.titleHere') }}
        </span>
      </div>
      <div class="d-flex">
        <div class="d-flex gap-2 flex-wrap">
          <template v-for="i in Math.ceil(Math.random() * 5)">
            <div :key="i">
              <v-img
                height="38"
                width="38"
                aspect-ratio="1"
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
              />
            </div>
            <div v-if="i >= 5" :key="i + 's'">
              <v-responsive height="38" width="38" aspect-ratio="1" class="bg-zinc-900 rounded-full">
                <b class="w-full h-full d-flex align-center justify-center white--text text-md text-center">+2</b>
              </v-responsive>
            </div>
          </template>
        </div>
        <v-spacer />
      </div>
    </nuxt-link>
    <div class="price font-weight-bold mt-10">269.1 ₪</div>
    <div class="text-red-800 font-weight-bold">{{ $t('productCategory.PriceForClubMembers') }} : 240 ₪</div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    id: String,
    imgSrc: {
      type: String,
      default:
        'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80'
    }
  }
}
</script>

<style lang="scss" scoped></style>
