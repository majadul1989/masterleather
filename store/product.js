const state = () => ({
  SIMPLE_INFO: {
    product: {}
  },
  INFO: {
    product: {}
  },

  IMAGES: {
    images: []
  },

  VIEW_360_DEGREE: {
    images: []
  },

  SIMILAR_PRODUCTS: {
    similar_products: []
  },

  SAME_CATEGORY_PRODUCTS: {
    products: []
  },

  GOES_WELL_PRODUCTS: {
    products: []
  },

  OTHER_ALSO_SEE: {
    products: []
  },

  RECENT_VIEW_PRODUCTS: {
    products: []
  },

  STORE_QUESTION: {
    success: false
  },

  LIST_QUESTION: {
    questions: []
  },

  STORE_COMMENT: {
    success: false
  },

  LIST_COMMENT: {
    comments: []
  },

  PRODUCT_SET_PRODUCTS: {
    products: []
  },

  PRODUCT_SET_INFO: {
    product_set: {}
  },

  PRODUCT_SET_FABRICS: {
    fabrics: []
  },

  PRODUCT_SET_ADDITIONAL_INFO: {
    infos: []
  },

  PRODUCT_VARIATION: {
    productVariationsList: []
  }
})

const getters = {
  SIMPLE_INFO: (state) => state.SIMPLE_INFO,
  INFO: (state) => state.INFO,
  IMAGES: (state) => state.IMAGES,

  VIEW_360_DEGREE: (state) => state.VIEW_360_DEGREE,

  SIMILAR_PRODUCTS: (state) => state.SIMILAR_PRODUCTS,
  SAME_CATEGORY_PRODUCTS: (state) => state.SAME_CATEGORY_PRODUCTS,
  GOES_WELL_PRODUCTS: (state) => state.GOES_WELL_PRODUCTS,
  OTHER_ALSO_SEE: (state) => state.OTHER_ALSO_SEE,
  RECENT_VIEW_PRODUCTS: (state) => state.RECENT_VIEW_PRODUCTS,


  STORE_QUESTION: (state) => state.STORE_QUESTION,
  LIST_QUESTION: (state) => state.LIST_QUESTION,

  STORE_COMMENT: (state) => state.STORE_COMMENT,
  LIST_COMMENT: (state) => state.LIST_COMMENT,
  PRODUCT_SET_PRODUCTS: (state) => state.PRODUCT_SET_PRODUCTS,
  PRODUCT_SET_INFO: (state) => state.PRODUCT_SET_INFO,

  PRODUCT_SET_FABRICS: (state) => state.PRODUCT_SET_FABRICS,

  PRODUCT_SET_ADDITIONAL_INFO: (state) => state.PRODUCT_SET_ADDITIONAL_INFO,

  PRODUCT_VARIATION: (state) => state.PRODUCT_VARIATION


}


const mutations = {

  setSimpleInfo: (state, data) => {
    return state.SIMPLE_INFO = data
  },

  setInfo: (state, data) => {
    return state.INFO = data
  },

  setImages: (state, data) => {
    return state.IMAGES = data
  },

  setView360Images: (state, data) => {
    state.VIEW_360_DEGREE = data
  },

  setSimilarProducts: (state, data) => {
    return state.SIMILAR_PRODUCTS = data
  },

  setSameCategoryProducts: (state, data) => {
    return state.SAME_CATEGORY_PRODUCTS = data
  },

  setGoesWellProducts: (state, data) => {
    return state.GOES_WELL_PRODUCTS = data
  },

  setOtherAlsoSee: (state, data) => {
    return state.OTHER_ALSO_SEE = data
  },

  setRecentViewProducts: (state, data) => {
    return state.RECENT_VIEW_PRODUCTS = data
  },


  setStoreQuestion: (state, data) => {
    return state.STORE_QUESTION = data
  },

  setListQuestion: (state, data) => {
    state.LIST_QUESTION = data
  },


  setStoreComment: (state, data) => {
    return state.STORE_COMMENT = data
  },

  setListComment: (state, data) => {
    state.LIST_COMMENT = data
  },

  setProductSetProducts: (state, data) => {
    state.PRODUCT_SET_PRODUCTS = data
  },

  setProductSetInfo: (state, data) => {
    state.PRODUCT_SET_INFO = data
  },

  setProductSetFabrics: (state, data) => {
    state.PRODUCT_SET_FABRICS = data
  },

  setProductSetAdditionalInfo: (state, data) => {
    state.PRODUCT_SET_ADDITIONAL_INFO = data
  },

  setProductVariation: (state, data) => {
    state.PRODUCT_VARIATION = data
  }

}


const actions = {

  async fetchSimpleInfo({ commit }, info) {
    const response = await this.$axios.$get('api/product/simple-info', { params: info })


    return commit('setSimpleInfo', response)
  },

  async fetchInfo({ commit }, info) {
    const response = await this.$axios.$get('api/product/info', { params: info })

    return commit('setInfo', response)
  },

  async fetchImages({ commit }, info) {
    const response = await this.$axios.$get('api/product/images', { params: info })

    return commit('setImages', response)
  },


  async fetch360Images({ commit }, info) {
    const response = await this.$axios.$get('api/product/360degreeImages', {
      params: info
    })

    commit('setView360Images', response)
  },

  async fetchSimilarProducts({ commit }, info) {
    const response = await this.$axios.$get('api/product/similar-products', { params: info })

    //console.log(response)

    return commit('setSimilarProducts', response)
  },

  async fetchSameCategoryProducts({ commit }, info) {
    const response = await this.$axios.$get('api/product/same-category-products', { params: info })

    //console.log(response)

    return commit('setSameCategoryProducts', response)
  },


  async fetchGoesWellProducts({ commit }, info) {
    const response = await this.$axios.$get('api/product/goes-well-with', { params: info })

    return commit('setGoesWellProducts', response)
  },

  async fetchOtherAlsoSee({ commit }, info) {
    const response = await this.$axios.$get('api/product/other-also-see', { params: info })

    return commit('setOtherAlsoSee', response)
  },

  async fetchRecentViewProducts({ commit }, info) {
    const response = await this.$axios.$get('api/product/recent-views-product', { params: info })

    return commit('setRecentViewProducts', response)
  },


  async fetchStoreQuestion({ commit }, info) {
    const response = await this.$axios.$post('api/product/question-store', info)

    return commit('setStoreQuestion', response)
  },

  async fetchListQuestion({ commit }, info) {
    const response = await this.$axios.$get('api/product/question-index', { params: info })

    return commit('setListQuestion', response)
  },

  async fetchStoreComment({ commit }, info) {
    const response = await this.$axios.$post('api/product/comment-store', info)

    return commit('setStoreComment', response)
  },

  async fetchListComment({ commit }, info) {
    const response = await this.$axios.$get('api/product/comment-index', { params: info })

    return commit('setListComment', response)
  },

  async fetchProductSetProducts({ commit }, info) {
    const response = await this.$axios.$get('api/product/product-set-products', {
      params: info
    })

    commit('setProductSetProducts', response)
  },

  async fetchProductSetInfo({ commit }, info) {
    const response = await this.$axios.$get('api/product/product-set-info', {
      params: info
    })

    commit('setProductSetInfo', response)
  },

  async fetchProductSetFabrics({ commit }, info) {

    const response = await this.$axios.$get('api/product/product-set-fabrics', {
      params: info
    })

    commit('setProductSetFabrics', response)
  },

  async fetchProductSetAdditionalInfo({ commit }, info) {
    const response = await this.$axios.$get('api/product/product-set-additional-info', {
      params: info
    })

    commit('setProductSetAdditionalInfo', response)
  },

  async fetchProductSetVariation({ commit }, info) {
    const response = await this.$axios.$get('api/product/product-variation', {
      params: info
    })

    commit('setProductVariation', response)
  }

}


export default {
  state,
  getters,
  actions,
  mutations
}
