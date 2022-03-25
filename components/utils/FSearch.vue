<template>
  <div>
    <form @submit.prevent="goToSearchPage" class="mb-7">
      <v-text-field clearable v-model="search" :append-icon="mdiMagnify" @click:append="goToSearchPage" />
    </form>
    <f-products :products="products" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mdiMagnify } from '@mdi/js'
export default {
  props: {
    value: String,
    embed: Boolean
  },
  methods: {
    goToSearchPage() {
      if (this.embed) {
        this.fetch()
      } else {
        this.$emit('submit', `/${this.$i18n.locale}/products/${this.search}`)
      }
    },
    fetch() {
      if (!this.embed) {
        try {
          this.search = this.$route.params.id || ''
        } catch (error) {
          this.search = ''
        }
      }
      this.load(true)
      this.$store
        .dispatch('products/searchForProducts', { params: this.search })
        .then(() => (this.search = this.search))
        .finally(() => this.load(false))
    }
  },
  data() {
    return {
      mdiMagnify,
      search: ''
    }
  },
  created() {
    this.fetch()
  },
  computed: {
    ...mapState({
      products: state => state.products.products.products || []
    }),
    id: {
      get() {
        return this.avalue
      },
      set(v) {
        this.$emit('input', v)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
