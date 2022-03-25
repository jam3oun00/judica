export const state = () => ({
  products: [],
  categoryProducts: [],
  product: {}
})

export const mutations = {
  updateProducts(s, p) {
    s.products = p
  },
  updateProduct(s, p) {
    s.product = p
  },
  updateCategotyProducts(s, p) {
    s.categoryProducts = p
  },
  appendCategotyProducts(s, p) {
    try {
      p.products.map(v => s.categoryProducts.products.push(v))
    } catch (error) {
      s.categoryProducts = p
    }
  }
}

export const actions = {
  getProducts({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get('/products')
        .then(({ data }) => {
          commit('updateProducts', data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getProductByCategory({ commit }, { id, params, append }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`/products?category=${id}${params || ''}`)
        .then(({ data }) => {
          append ? commit('appendCategotyProducts', data) : commit('updateCategotyProducts', data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  searchForProducts({ commit }, { params }) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`/products${params ? `?search=${params}` : ''}`)
        .then(({ data }) => {
          commit('updateProducts', data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  getProductById({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios
        .get(`/products/${id}`)
        .then(({ data: { product } }) => {
          commit('updateProduct', product)
          resolve(product)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
