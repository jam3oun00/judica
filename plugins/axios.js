export default function ({ $axios, store /* i18n*/ }) {
  // start
  $axios.onRequest(config => {
    config.headers.common['x-store-token'] = 'e36fd13fd49d43838b4b9c3a015ea13f7c421751ffe495a522d71c6db6a8c5f8'
    config.headers.common['x-api-key'] = 'ak_1e829d5863ff392b38fae7502b24dbc1'

    // if (store.state.layout.loading.active) {
    //   store.commit('layout/loading/set', true)
    // }
  })
  $axios.onResponse(response => {
    // store.commit('layout/loading/set', false)
    store.commit('utils/updateLoader', false)
  })

  $axios.onError(error => {
    store.commit('utils/updateLoader', false)
    console.warn(error, error.response.data)
    // store.commit('layout/loading/set', false)
    // try {
    // 	if (error.response.data.message) {
    // 		if (store.state.layout.loading.tostActive) {
    // 			Vue.notify({ title: i18n.t('warning'), text: error.response.data.message })
    // 		}
    // 	} else {
    // 		if (store.state.layout.loading.tostActive) {
    // 			Vue.notify({ title: i18n.t('warning'), text: 'error' })
    // 		}
    // 	}
    // } catch (error) {
    // 	if (store.state.layout.loading.tostActive) {
    // 		Vue.notify({ title: i18n.t('warning'), text: 'error' })
    // 	}
    // }
    // store.commit('layout/loading/tostActivation', true)
  })
}
