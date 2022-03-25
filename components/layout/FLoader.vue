<template>
  <div>
    <div
      :style="`height:${height};display:${loader || infinite ? '' : 'none!important'}`"
      :class="`d-flex align-center justify-center ${contentClass}`"
    >
      <!-- <v-progress-circular :value="tall" :width="width" :size="size" class="loader" color="primary" /> -->
      <f-loader-child ref="child" />
    </div>
    <transition name="page">
      <div v-if="loader || infinite"></div>
      <div v-else-if="dataCheck && !data.length && !loader" class="align-center justify-center d-flex">
        <div
          class="h-40 w-40 rounded-full bg-black bg-opacity-10 opacity-70 text-center align-center justify-center d-flex flex-column"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="ionicon text-5xl mb-1 opacity-60" viewBox="0 0 512 512">
            <title>Alert Circle</title>
            <path
              d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm0 319.91a20 20 0 1120-20 20 20 0 01-20 20zm21.72-201.15l-5.74 122a16 16 0 01-32 0l-5.74-121.94v-.05a21.74 21.74 0 1143.44 0z"
            />
          </svg>
          <div class="mb-2 caption font-weight-bold px-5">{{ $t(title) }}</div>
        </div>
      </div>
      <div v-else>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    infinite: Boolean,
    title: {
      type: String,
      default: 'utils.noDataAvailable'
    },
    value: Boolean,
    contentClass: {
      type: String,
      default: ''
    },
    width: {
      type: [String, Number],
      default: 2
    },
    tall: {
      type: [String, Number],
      default: 40
    },
    size: {
      type: [String, Number],
      default: 40
    },
    height: {
      type: [String, Number],
      default: 'auto'
    },
    data: {
      type: [Object, Array, Boolean],
      default: false
    },
    dataCheck: Boolean
  },
  watch: {
    loader(val) {
      val ? this.$refs.child.animate() : null
    }
  },
  computed: {
    loader: {
      get() {
        return this.$store.state.utils.loader
      },
      set(value) {
        this.$store.commit('utils/updateLoader', value)
      }
    }
  }
}
</script>

<style lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loader {
  animation: rotate 0.8s infinite cubic-bezier(0.73, 0, 0.18, 0.97);
}
</style>
