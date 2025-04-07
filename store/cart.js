const state = () => ({
  CART: {
    cart: null
  },
  REMOVE: null,
  ADD: null,
  UPDATE_CART: null,
  CHECKOUT_ADDRESS: null,
  CHECKOUT_DELIVERY_ADDRESS: null,
  STORE_PAYMENT_METHOD: null,
  ORDER_DETAILS: {
    order_masters: null,
    order_details: []
  },

  COMPARE: {
    products: []
  },
  ADD_TO_COMPARE: {
    product: null,
    success: false
  },
  REMOVE_COMPARE: {
    success: null
  },

  SET_PAYING_AMOUNT: {
    success: null
  },

  COUPON_APPLY: null,

  DELIVERY_CHARGE: {
    delivery_charge: 0
  },

  TRACK_ORDER: {
    success: null,
    order_masters: {},
    order_details: null
  },

  countNotification: {
    compareCount: 0,
    wishCount: 0,
    cartCount: 0
  },

  CASH_ON_DELIVERY: {
    uri: null
  }
})

const getters = {
  CART: (state) => state.CART,
  REMOVE: (state) => state.REMOVE,
  ADD: (state) => state.ADD,
  UPDATE_CART: (state) => state.UPDATE_CART,
  CHECKOUT_ADDRESS: (state) => state.CHECKOUT_ADDRESS,
  CHECKOUT_DELIVERY_ADDRESS: (state) => state.CHECKOUT_DELIVERY_ADDRESS,
  STORE_PAYMENT_METHOD: (state) => state.STORE_PAYMENT_METHOD,
  ORDER_DETAILS: (state) => state.ORDER_DETAILS,
  COMPARE: (state) => state.COMPARE,
  ADD_TO_COMPARE: (state) => state.ADD_TO_COMPARE,
  REMOVE_COMPARE: (state) => state.REMOVE_COMPARE,
  SET_PAYING_AMOUNT: (state) => state.SET_PAYING_AMOUNT,
  COUPON_APPLY: (state) => state.COUPON_APPLY,

  DELIVERY_CHARGE: (state) => state.DELIVERY_CHARGE,

  TRACK_ORDER: (state) => state.TRACK_ORDER,
  countNotification: (state) => state.countNotification,

  CASH_ON_DELIVERY: (state) => state.CASH_ON_DELIVERY
}


const mutations = {

  setCart: (state, data) => {
    return state.CART = data
  },

  setRemove: (state, data) => {
    return state.REMOVE = data
  },

  setAdd: (state, data) => {
    return state.ADD = data
  },

  setUpdateCart: (state, data) => {
    state.UPDATE_CART = data
  },

  setCheckoutAddress: (state, data) => {
    return state.CHECKOUT_ADDRESS = data
  },

  setCheckoutDeliveryAddress: (state, data) => {
    return state.CHECKOUT_DELIVERY_ADDRESS = data
  },

  setStorePaymentMethod: (state, data) => {
    return state.STORE_PAYMENT_METHOD = data
  },

  setOrderDetails: (state, data) => {
    return state.ORDER_DETAILS = data
  },

  setCompare: (state, data) => {
    return state.COMPARE = data
  },

  setAddToCompare: (state, data) => {
    return state.ADD_TO_COMPARE = data
  },

  setRemoveCompare: (state, data) => {
    return state.REMOVE_COMPARE = data
  },

  setSetPayingAmount: (state, data) => {
    state.SET_PAYING_AMOUNT = data
  },

  setCouponApply: (state, data) => {
    state.COUPON_APPLY = data
  },

  setDeliveryCharge: (state, data) => {
    state.DELIVERY_CHARGE = data
  },

  setTrackOrder: (state, data) => {
    state.TRACK_ORDER = data
  },

  setCountNotification: (state, data) => {
    state.countNotification = data
  },

  setCashOnDelivery: (state, data) => {
    state.CASH_ON_DELIVERY = data
  }
}


const actions = {

  async fetchCart({ commit }, info) {
    const response = await this.$axios.$get('api/cart/view', { params: info })
    return commit('setCart', response)

  },

  async fetchRemove({ commit }, info) {
    const response = await this.$axios.$get('api/cart/remove-cart-item', { params: info })

    // if (dataLayer && info.info && response.success == true) {
    //   return
    //   console.log(info.info.product_category[0].term_name)
    //   dataLayer.push({
    //     'event': 'remove_from_cart',
    //     'ecommerce': {
    //       'items': [{
    //         'item_id': info.pcode,
    //         'item_name': info.info.title,
    //         'currency': 'BDT',
    //         'price': parseFloat(info.item.purchaseprice),
    //         'item_category': info.info.product_category[0].term_name ?? 'Furniture',
    //         'quantity': parseInt(info.item.qty),
    //         'affiliation': 'MasterLeatherBD',
    //         'discount': parseFloat(0.00),
    //         'index': 0,
    //         'item_list_id': info.pcode.toLocaleString(),
    //         'item_list_name': info.item.sub_title
    //       }]
    //     }
    //   })
    //
    // }

    return commit('setRemove', response)
  },

  async fetchAdd({ commit }, info) {
    const response = await this.$axios.$get('api/cart/add-to-cart', { params: info })
    //if(dataLayer && response.success == true){
    // if(dataLayer && response.success == true){
    //   //console.log(response)
    //     // Google Datalayer
    //     dataLayer.push({
    //         'event': 'add_to_cart',
    //          ecommerce: {
    //             'value': response.purchaseprice,
    //             'currency': "BDT",
    //             'shipping_tier': "Ground",
    //             'items': [{
    //                 item_name: response.title,
    //                 item_id: response.product_code.toLocaleString(),
    //                 currency: "BDT",
    //                 price: parseFloat(response.purchaseprice),
    //                 affiliation: 'MasterLeatherBD',
    //                 discount:parseFloat(0.00),
    //                 index: 0,
    //                 item_brand:'MasterLeatherBD',
    //                 item_category: response.cat_name,
    //                 quantity: parseInt(info.qty),
    //                 item_list_id:  response.product_code.toLocaleString(),
    //                 item_list_name:  response.sub_title,
    //                 coupon: "",
    //            }]
    //         }
    //     });
    //
    // }

    return commit('setAdd', response)
  },

  async fetchUpdateCart({ commit }, info) {
    const response = await this.$axios.$post('api/cart/update', info)
    return commit('setUpdateCart', response)
  },

  async fetchCheckoutAddress({ commit }, info) {
    //console.log(info)
    const response = await this.$axios.$get('/api/cart/checkout-address', { params: info })
    return commit('setCheckoutAddress', response)
  },

  async fetchCheckoutDeliveryAddress({ commit }, info) {
    const response = await this.$axios.$post('/api/cart/checkout-delivery-address', info)

    return commit('setCheckoutDeliveryAddress', response)
  },

  async fetchStorePaymentMethod({ commit }, info) {
    const response = await this.$axios.$post('/api/cart/store-payment-method', info)

    return commit('setStorePaymentMethod', response)
  },

  async fetchOrderDetails({ commit }, info) {
    const response = await this.$axios.$get('/api/cart/order-details', {
      params: info
    })

    return commit('setOrderDetails', response)
  },

  async fetchCompare({ commit }, info) {
    const response = await this.$axios.$get('/api/common/compare', {
      params: info
    })

    return commit('setCompare', response)
  },

  async fetchAddToCompare({ commit }, info) {
    const response = await this.$axios.$get('/api/common/add-to-compare', {
      params: info
    })

    return commit('setAddToCompare', response)
  },

  async fetchRemoveCompare({ commit }, info) {
    const response = await this.$axios.$get('/api/common/remove-compare', {
      params: info
    })

    return commit('setRemoveCompare', response)
  },

  async fetchSetPayingAmount({ commit }, info) {
    const response = await this.$axios.$post('/api/cart/set-paying-amount', info)

    return commit('setSetPayingAmount', response)
  },

  async fetchCouponApply({ commit }, info = {}) {
    const response = await this.$axios.$post('/api/cart/coupon-apply', info)
    return commit('setCouponApply', response)
  },

  async fetchDeliveryCharge({ commit }, info) {
    const response = await this.$axios.$get('/api/cart/get-delivery-charge', {
      params: info
    })
    return commit('setDeliveryCharge', response)
  },

  async fetchTrackOrder({ commit }, info) {
    const response = await this.$axios.$get('/api/cart/track-order', {
      params: info
    })

    return commit('setTrackOrder', response)
  },

  async fetchCountNotification({ commit }, info = {}) {
    const response = await this.$axios.$get('/api/cart/count-notification', {
      params: info
    })

    return commit('setCountNotification', response)
  },

  async fetchCashOnDelivery({ commit }, info = {}) {
    const response = await this.$axios.$post('/api/cod-place-order', info)

    return commit('setCashOnDelivery', response)
  }

}


export default {
  state,
  getters,
  actions,
  mutations
}
