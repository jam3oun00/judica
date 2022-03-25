export default function ({ redirect, route, i18n }) {
  const fallbackLocale = i18n.locales.find(locale => locale.isCatchallLocale)
  console.wanr('fallbackLocale', fallbackLocale)
  //     if (route.fullPath.includes(i18n.locale)) {
  //       return false
  //     } else {
  //       this.$router.push(`/${i18n.locale}${route.fullPath}`)
  //     }
}
