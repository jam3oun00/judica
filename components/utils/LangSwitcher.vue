<template>
  <div>
    <v-menu open-on-hover offset-y dense max-width="200" transition="scroll-y-reverse-transition">
      <template v-slot:activator="{ on, attrs }">
        <a v-bind="attrs" v-on="on" class="d-flex align-center gap-1 text-uppercase">
          {{ currentLang }}
          <svg xmlns="http://www.w3.org/2000/svg" style="color: #555" class="ionicon" viewBox="0 0 512 512">
            <title>Chevron Down</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M112 184l144 144 144-144"
            />
          </svg>
        </a>
      </template>
      <v-list>
        <v-list-item-group v-model="model" color="primary" style="direction: ltr">
          <v-list-item v-for="(lang, i) in $i18n.locales" :key="i" @click="onChange(lang.code)">
            <v-list-item-title>{{ lang.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: this.$i18n.locales.map((lang, i) => (this.$i18n.locale === lang.code ? i : false)).filter(v => v !== false)[0]
    }
  },
  computed: {
    currentLang() {
      const lang = this.$i18n.locales.filter(v => v.code === this.$i18n.locale)[0].code
      switch (lang) {
        case 'en':
          return 'English'
        case 'ar':
          return 'العربية'
        case 'de':
          return 'Deutsch'
        case 'es':
          return 'Español'
        case 'fr':
          return 'Français'
        case 'it':
          return 'Italiano'
        case 'ja':
          return '日本語'
        case 'ko':
          return '한국어'
        case 'nl':
          return 'Nederlands'
        case 'pt':
          return 'Português'
        case 'ru':
          return 'Русский'
        case 'tr':
          return 'Türkçe'
        case 'zh':
          return '中文'
        case 'he':
          return 'עברית'
        default:
          return 'English'
      }
    }
  },
  methods: {
    onChange(locale) {
      if (locale) {
        const language = locale.toLocaleLowerCase()
        this.$i18n.setLocale(language)
        this.$vuetify.lang.current = language
        this.$vuetify.rtl = language === 'ar' || language === 'he'
        // window.location.reload()
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
