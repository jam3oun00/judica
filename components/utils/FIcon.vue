<template>
  <ion-icon :name="name"></ion-icon>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
