<template>
  <h1 class="ml12 font-weight-bold text-base" style="direction: ltr !important">ZARA HOME</h1>
</template>

<script>
export default {
  methods: {
    animate() {
      var textWrapper = document.querySelector('.ml12')
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")
      anime
        .timeline({ loop: true })
        .add({
          targets: '.ml12 .letter',
          translateX: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: (el, i) => 500 + 30 * i
        })
        .add({
          targets: '.ml12 .letter',
          translateX: [0, -30],
          opacity: [1, 0],
          easing: 'easeInExpo',
          duration: 1100,
          delay: (el, i) => 100 + 30 * i
        })
    }
  },
  mounted() {
    this.animate()
  }
}
</script>

<style lang="scss">
.ml12 {
  text-transform: uppercase;
  letter-spacing: 0.3em;
}

.ml12 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
