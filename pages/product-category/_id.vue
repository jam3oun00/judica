<template>
  <v-container>
    <div class="d-flex flex-column flex-md-row">
      <div>
        <v-select
          :append-icon="mdiChevronDown"
          :items="showItems"
          v-model="show"
          :label="$t('productCategory.show')"
          :value="filterItems[0]"
          :menu-props="['offset-y']"
          class="me-5 w-24"
        />
      </div>
      <!-- <div>
        <v-select :append-icon="mdiChevronDown" :items="filterItems" item-text="title" item-value="id" :value="filterItems[0]" :menu-props="['offset-y']" />
      </div> -->
      <v-spacer />
      <div class="d-block d-md-flex gap-4 align-end">
        <div class="d-flex flex-wrap gap-3" v-if="attributes.length">
          <v-select
            v-for="attr in attributes"
            :key="attr.id"
            :items="attr.options"
            v-model="filter"
            :append-icon="mdiChevronDown"
            hide-details
            :style="`width:${$vuetify.breakpoint.smAndDown ? '100%' : '200px'}`"
            small-chips
            deletable-chips
            multiple
            item-text="value"
            item-value="id"
            :menu-props="['offset-y']"
            :label="attr.name"
          />
        </div>
        <v-btn @click="applyTheFilter" color="primary" class="mt-2 mt-md-0" tile :block="$vuetify.breakpoint.smAndDown">
          {{ $t('utils.applyFilter') }}
        </v-btn>
      </div>
    </div>
    <v-divider class="mt-10 mb-13" />
    <f-products :products="products" />
    <f-loader v-if="pagination" infinite height="13rem" />
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import { mdiChevronDown } from '@mdi/js'
export default {
  created() {
    const filter = this.$route.query.filters
    this.fetch()
    this.$axios.get(`/categories/${this.$route.params.id}`).then(res => {
      this.attributes = res.data.category.attributes
      if (filter) {
        const pars = JSON.parse(filter)
        this.filter = pars.attributes
      }
    })
  },
  computed: {
    ...mapState({
      products: state => state.products.categoryProducts.products || []
    }),
    lintAttr() {
      let arr = []
      this.attributes.map(a => a.options).map(o => o.map(i => arr.push(i)))
      console.clear()
      console.warn('😎', this.attributes)
      return arr
    }
  },
  methods: {
    scroll() {
      const scrollPosition = window.pageYOffset + window.innerHeight
      const bottomOfElement = document.querySelector('.v-main').offsetHeight
      if (this.pagination || this.endOfLoad) {
        return false
      } else {
        if (scrollPosition > bottomOfElement) {
          this.page++
          this.fetch({ load: false })
        }
      }
    },
    fetch(p) {
      const filter = this.$route.query.filters
      this.pagination = true
      p && p.load === false ? null : this.load(true)
      const size = 0
      const params = `${filter ? `&filters=${filter}` : ''}${size ? `&size=${size}` : ''}${this.page ? `&page=${this.page}` : ''}`
      const arg = { id: this.$route.params.id, params, append: this.page > 1 ? true : false }
      this.$store
        .dispatch('products/getProductByCategory', arg)
        .then(data => {
          if (data && data.products && data.products.length) {
            return false
          } else {
            this.endOfLoad = true
          }
        })
        .catch(() => (this.endOfLoad = true))
        .finally(() => {
          this.load(false)
          this.pagination = false
        })
    },
    applyTheFilter() {
      this.$router.push(`/product-category/${this.$route.params.id}?filters={"attributes":[${this.filter}]}`)
      const filter = this.$route.query.filters
      this.load(true)
      this.$store
        .dispatch('products/getProductByCategory', { id: this.$route.params.id, params: `filters${filter}` })
        .finally(() => this.load(false))
    }
  },
  // watch filter
  watch: {
    filter: {
      handler() {
        this.page = 1
        this.pagination = false
        this.endOfLoad = false
        this.$router.push(
          `${this.$i18n.locale}/product-category/${this.$route.params.id}?filters={"attributes":[${this.filter}]}`
        )
      },
      deep: true
    }
  },
  data() {
    return {
      endOfLoad: false,
      pagination: false,
      page: 1,
      mdiChevronDown,
      filter: [],
      attributes: [],
      showItems: [9, 24, 36],
      show: 24,
      filterItems: [
        {
          id: 'default',
          title: this.$t('productCategory.sort.default')
        },
        {
          id: 'popularity',
          title: this.$t('productCategory.sort.popularity')
        },
        {
          id: 'mostUpToDate',
          title: this.$t('productCategory.sort.mostUpToDate')
        },
        {
          id: 'cheapestToLiqueur',
          title: this.$t('productCategory.sort.cheapestToLiqueur')
        },
        {
          id: 'expensiveToCheap',
          title: this.$t('productCategory.sort.expensiveToCheap')
        }
      ]
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener('scroll', this.scroll, true)
    }
  }
}
</script>

<style lang="scss"></style>
