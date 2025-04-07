const state = () => ({
  SelectedvariationImage: false,//added new test
  xyz: false
})

const getters = {
  getSamrat(state) {
    return state.xyz
  }
}


const mutations = {
  //added new test
  setSelectedvariationImage(state, value) {
    state.SelectedvariationImage = value
  }, //end
  setSamrat(state, newValue) {
    state.xyz = newValue
  }
}


const actions = {

  async nuxtServerInit({ dispatch }, { route }) {
    const availeableCookie = this.$auth.$storage.getCookie('self_token'),
      selfToken = availeableCookie ? availeableCookie : ((new Date().getTime()) + Math.random().toString(36))

    if (availeableCookie == undefined) {
      this.$auth.$storage.setCookie('self_token', selfToken, true)
    }

    await dispatch('user/fetchSelfToken', selfToken)

  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
