export const state = () => ({
  loader: false,
  drawer: false,
  inside: false
})

export const mutations = {
  updateLoader(state, loader) {
    state.loader = loader
  },
  setDrawer(state, drawer) {
    state.drawer = drawer
  },
  setInside(state, inside) {
    state.inside = inside
  }
}
