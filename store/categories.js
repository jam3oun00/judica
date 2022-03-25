const navigationId = '217'
const categorySildesId = '214'
export const state = () => ({
  categories: [],
  navigation: {},
  customeCategories: []
})

export const mutations = {
  updateCategories(state, categories) {
    state.categories = categories
  },
  updateNavigations(state, navigation) {
    state.navigation = navigation
  },
  updateCustomeCategories(state, customeCategories) {
    state.customeCategories = customeCategories
  }
}

export const actions = {
  getCategories({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('/categories')
        .then(({ data: { categories } }) => {
          commit('updateCategories', categories)
          resolve(categories)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getNavigation({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`/navigations/${navigationId}`)
        .then(res => {
          commit('updateNavigations', res.data.navigation)
          resolve(res.data.navigation)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getCustomeCategories({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`/navigations/${categorySildesId}`)
        .then(res => {
          const children = res.data.navigation.$children
          const data = []
          console.log(children)
          children.map((v, i) => {
            this.$axios.get(`/categories/${v.categoryId}`).then(res => {
              data.push(res.data.category)
              if (i === children.length - 1) {
                commit('updateCustomeCategories', data)
                resolve(data)
              }
            })
          })
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
