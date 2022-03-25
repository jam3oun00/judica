<template>
  <div>
    <div class="text-sm font-weight-medium mb-2">
      {{ $t('checkout.country') }} <span class="text-red-700 font-weight-bold">*</span>
    </div>
    <v-select
      @focus="fetch"
      item-text="label"
      :items="countries"
      class="bordered mt-0 pt-0"
      v-model="selected"
      :rules="[v => !!v || $t('utils.field_required')]"
    />
  </div>
</template>
<script>
export default {
  props: {
    value: Boolean
  },
  methods: {
    fetch() {
      if (!this.countries) {
        // const countries = require('i18n-iso-countries')
        // const locale = this.$i18n.locale
        // countries.registerLocale(require(`i18n-iso-countries/langs/${locale}.json`))
        // const list = countries.getNames(locale, { select: 'official' })
        // this.countries = Object.keys(list).map(key => ({ value: key, label: list[key] }))
      }
    }
  },
  computed: {
    selected: {
      get() {
        return this.value
      },
      set() {
        this.$emit('input', value)
      }
    }
  },
  data() {
    return {
      selected: null,
      countries: null
    }
  }
}
</script>
