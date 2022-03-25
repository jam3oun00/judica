export const state = () => ({
  cart: null
})

export const mutations = {
  addToCart(state, cart) {
    state.cart = cart
  }
}

export const actions = {
  getCart({ commit }) {
    return new Promise((resolve, reject) => {
      if (process.client) {
        const cartId = localStorage.getItem('cartId')
        if (cartId) {
          this.$axios
            .get('/carts/' + cartId)
            .then(res => {
              commit('addToCart', res.data.cart)
              resolve(res.data.cart)
            })
            .catch(err => reject(err))
        } else reject()
      }
    })
  },
  updateCart({ commit }, { id, quantity, productId }) {
    return new Promise((resolve, reject) => {
      if (process.client) {
        this.$axios
          .put('/carts/' + id, { quantity, productId })
          .then(res => {
            resolve(res.data)
          })
          .catch(err => reject(err))
      }
    })
  },
  removeCart({ commit }, { id, productId }) {
    return new Promise((resolve, reject) => {
      // /carts/20/products/8907
      this.$axios
        .delete(`/carts/${id}/products/${productId}`)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => reject(err))
    })
  }
}
