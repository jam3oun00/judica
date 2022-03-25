<template>
  <div class="d-inline-flex border-y-2">
    <div class="border-x-2">
      <button @click="counter++" class="text-lg outline-none font-weight-bold w-10 h-10" text>+</button>
    </div>
    <div class="px-2 d-flex align-center text-center justify-center w-10 h-10">
      {{ counter }}
    </div>
    <div class="border-x-2">
      <button @click="counter <= 1 ? null : counter--" class="text-lg outline-none font-weight-bold w-10 h-10" text>-</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: [String, Number]
  },
  computed: {
    counter: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
