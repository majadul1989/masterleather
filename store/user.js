const state = () => ({
  REGISTRATION: [],
  SELF_TOKEN: '',
  WISHLIST: {
    products: []
  },
  ADD_TO_WISHLIST: {
    product: null
  },
  REMOVE_WISHLIST: null,
  REVIEWS: {
    reviews: []
  },
  ORDERS: {
    orders: []
  },
  ADDRESS_LIST: {},
  ADDRESS_STORE: {
    success: false
  },

  ADDRESS_UPDATE: {
    success: false
  },

  DEFAULT_BILLING_ADDRESS: {
    address: {
      id: null
    }
  },
  DEFAULT_SHIPPING_ADDRESS: {
    address: {
      id: null
    }
  },

  SAVE_DEFAULT_BILLING_ADDRESS: {
    success: null
  },

  SAVE_DEFAULT_SHIPPING_ADDRESS: {
    success: null
  },

  PROFILE_UPDATE: {
    success: false,
    message: null,
    user: null
  },

  CHANGE_PASSWORD: {
    success: false,
    message: null
  },

  SUBSCRIBE: {
    success: null
  },

  FORGOT_PASSWORD_SENT_LINK: {
    message: null
  },
  RESET_PASSWORD: {
    message: null
  }

})

const getters = {
  REGISTRATION: (state) => state.REGISTRATION,
  SELF_TOKEN: (state) => state.SELF_TOKEN,
  WISHLIST: (state) => state.WISHLIST,
  ADD_TO_WISHLIST: (state) => state.ADD_TO_WISHLIST,
  REMOVE_WISHLIST: (state) => state.REMOVE_WISHLIST,
  REVIEWS: (state) => state.REVIEWS,
  ORDERS: (state) => state.ORDERS,
  ADDRESS_LIST: (state) => state.ADDRESS_LIST,
  ADDRESS_STORE: (state) => state.ADDRESS_STORE,
  ADDRESS_UPDATE: (state) => state.ADDRESS_UPDATE,
  DEFAULT_BILLING_ADDRESS: (state) => state.DEFAULT_BILLING_ADDRESS,
  DEFAULT_SHIPPING_ADDRESS: (state) => state.DEFAULT_SHIPPING_ADDRESS,
  SAVE_DEFAULT_SHIPPING_ADDRESS: (state) => state.SAVE_DEFAULT_SHIPPING_ADDRESS,
  SAVE_DEFAULT_BILLING_ADDRESS: (state) => state.SAVE_DEFAULT_BILLING_ADDRESS,
  PROFILE_UPDATE: (state) => state.PROFILE_UPDATE,
  CHANGE_PASSWORD: (state) => state.CHANGE_PASSWORD,
  SUBSCRIBE: (state) => state.SUBSCRIBE,
  FORGOT_PASSWORD_SENT_LINK: (state) => state.FORGOT_PASSWORD_SENT_LINK,
  RESET_PASSWORD: (state) => state.RESET_PASSWORD
}


const mutations = {

  setRegistration: (state, data) => {
    return state.REGISTRATION = data
  },
  setSelfToken: (state, data) => {
    state.SELF_TOKEN = data
  },

  setWishlist: (state, data) => {
    state.WISHLIST = data
  },

  setAddToWishlist: (state, data) => {
    state.ADD_TO_WISHLIST = data
  },

  setRemoveWishlist: (state, data) => {
    state.REMOVE_WISHLIST = data
  },

  setReviews: (state, data) => {
    state.REVIEWS = data
  },

  setOrders: (state, data) => {
    state.ORDERS = data
  },

  setAddressList: (state, data) => {
    state.ADDRESS_LIST = data
  },

  setAddressStore: (state, data) => {
    state.ADDRESS_STORE = data
  },

  setAddressUpdate: (state, data) => {
    state.ADDRESS_UPDATE = data
  },

  setDefaultBillingAddress: (state, data) => {
    state.DEFAULT_BILLING_ADDRESS = data
  },

  setDefaultShippingAddress: (state, data) => {
    state.DEFAULT_SHIPPING_ADDRESS = data
  },

  setSaveDefaultBillingAddress: (state, data) => {
    state.SAVE_DEFAULT_BILLING_ADDRESS = data
  },

  setSaveDefaultShippingAddress: (state, data) => {
    state.SAVE_DEFAULT_SHIPPING_ADDRESS = data
  },

  setProfileUpdate: (state, data) => {
    state.PROFILE_UPDATE = data
  },

  setChangePassword: (state, data) => {
    state.CHANGE_PASSWORD = data
  },

  setSubscribe: (state, data) => {
    state.SUBSCRIBE = data
  },

  setForgotPasswordSentLink: (state, data) => {
    state.FORGOT_PASSWORD_SENT_LINK = data
  },

  setResetPassword: (state, data) => {
    state.RESET_PASSWORD = data
  }

}


const actions = {

  async fetchRegistration({ commit }, info) {
    const response = await this.$axios.$post('api/auth/register', info)

    return commit('setRegistration', response)
  },

  async fetchSelfToken({ commit }, info) {
    return commit('setSelfToken', info)
  },

  async fetchWishlist({ commit }, info) {
    const response = await this.$axios.$get('api/user/wishlist', { params: info })

    // if (response.success == true) {
    //
    //   if (data.success) {
    //     dataLayer.push({
    //       'event': 'addToWishlist',			//used for creating GTM trigger
    //       'ecommerce': {
    //         'currencyCode': 'BDT',
    //         'add': {
    //           'products': [{
    //             'id': info.pid,
    //             'name': response.product.title,
    //             'price': '0',
    //             'brand': 'MasterLeatherBD',
    //             'category': '',
    //             'variant': '',
    //             'dimension1': '',
    //             'position': 0,
    //             'quantity': 1
    //           }]
    //         }
    //       }
    //     })
    //   }
    //
    // }

    return commit('setWishlist', response)
  },

  async fetchAddToWishlist({ commit }, info) {
    const response = await this.$axios.$get('api/user/add-to-wishlist', { params: info })

    return commit('setAddToWishlist', response)
  },

  async fetchRemoveWishlist({ commit }, info) {
    const response = await this.$axios.$get('api/user/remove-wishlist', { params: info })

    return commit('setRemoveWishlist', response)
  },


  async fetchReviews({ commit }, info) {
    const response = await this.$axios.$get('api/user/reviews', { params: info })

    return commit('setReviews', response)
  },

  async fetchOrders({ commit }, info) {
    const response = await this.$axios.$get('api/user/orders', { params: info })

    return commit('setOrders', response)
  },

  async fetchAddressList({ commit }, info) {
    const response = await this.$axios.$get('api/user/address-list', { params: info })

    return commit('setAddressList', response)
  },

  async fetchAddressStore({ commit }, info) {
    const response = await this.$axios.$get('api/user/address-store', { params: info })

    return commit('setAddressStore', response)
  },

  async fetchAddressUpdate({ commit }, info) {
    const response = await this.$axios.$get('api/user/address-update', { params: info })

    return commit('setAddressUpdate', response)
  },

  async fetchDefaultBillingAddress({ commit }, info = {}) {
    const response = await this.$axios.$get('api/user/get-default-address', {
      params: {
        type: 'billing'
      }
    })
    commit('setDefaultBillingAddress', response)
  },

  async fetchDefaultShippingAddress({ commit }, info = {}) {
    const response = await this.$axios.$get('api/user/get-default-address', {
      params: {
        type: 'shipping'
      }
    })

    commit('setDefaultShippingAddress', response)
  },


  async fetchSaveDefaultBillingAddress({ commit }, id) {
    const response = await this.$axios.$get('api/user/set-default-address', {
      params: {
        type: 'billing',
        id: id
      }
    })
    commit('setSaveDefaultBillingAddress', response)
  },


  async fetchSaveDefaultShippingAddress({ commit }, id) {
    const response = await this.$axios.$get('api/user/set-default-address', {
      params: {
        type: 'shipping',
        id: id
      }
    })

    commit('setSaveDefaultShippingAddress', response)
  },

  async fetchProfileUpdate({ commit }, info) {
    const response = await this.$axios.$post('api/user/user-update', info)

    commit('setProfileUpdate', response)
  },


  async fetchChangePassword({ commit }, info) {
    const response = await this.$axios.$post('api/user/change-password', info)

    commit('setChangePassword', response)
  },

  async fetchSubscribe({ commit }, info) {
    const response = await this.$axios.$post('api/user/subscribe', info)

    commit('setSubscribe', response)
  },

  async fetchPasswordResetLink({ commit }, info) {
    const response = await this.$axios.$post('api/user/forgot-password-send-link', info)

    commit('setForgotPasswordSentLink', response)
  },


  async fetchResetPassword({ commit }, info) {
    const response = await this.$axios.$post('api/user/reset-password', info)

    commit('setResetPassword', response)
  }


}


export default {
  state,
  getters,
  actions,
  mutations
}
