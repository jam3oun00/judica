export default {
  computed: {
    global_user: {
      get() {
        try {
          const user = JSON.parse(localStorage.getItem('auth.user'))
          return user ? user : {}
        } catch (error) {
          return {}
        }
      },
      set(user) {
        this.$auth.$storage.setLocalStorage('user', user)
      }
    }
  },
  methods: {
    l(link) {
      return `${this.$i18n.locale || ''}${link}`
    },
    len(e) {
      try {
        return e.length || 0
      } catch (error) {
        return 0
      }
    },
    load(e) {
      this.$store.commit('utils/updateLoader', e ? true : false)
    },
    next() {
      try {
        this.$vuetify.rtl ? this.$refs.mySwiper.$swiper.slidePrev() : this.$refs.mySwiper.$swiper.slideNext()
      } catch (error) {}
    },
    prev() {
      try {
        this.$vuetify.rtl ? this.$refs.mySwiper.$swiper.slideNext() : this.$refs.mySwiper.$swiper.slidePrev()
      } catch (error) {}
    }
  }
}
