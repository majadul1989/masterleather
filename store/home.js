import const_sliders from '../constant/sliders.json'
import feature_sliders from '../constant/feature_sliders.json'
import const_top_category from '../constant/top-category.json'

const state = () => ({
  SLIDERS: const_sliders,
  FEATURED: feature_sliders,
  TOP_CATEGORY: const_top_category,
  TOP_OFFERS: {
    products: []
  },
  PREBOOKINGS: {
    products: [],
    info: null
  },
  NEW_ARRIVALS: {
    products: []
  },
  FLASH_SALE: {
    flash_schedule: null,
    flash_items: []
  },
  TAG_GALLARY: {
    terms: [],
    tag_gallary: []
  },
  NEWS_EVENTS: {
    posts: []
  },
  BLOG_POSTS: {
    posts: []
  },
  BLOG_DETAILS: {
    post: null
  },
  ALL_TERMS: {
    terms: []
  },
  PRODUCT_SET: {
    product_sets: []
  }
})

const getters = {
  SLIDERS: (state) => state.SLIDERS,
  FEATURED: (state) => state.FEATURED,
  TOP_CATEGORY: (state) => state.TOP_CATEGORY,
  TOP_OFFERS: (state) => state.TOP_OFFERS,
  PREBOOKINGS: (state) => state.PREBOOKINGS,
  NEW_ARRIVALS: (state) => state.NEW_ARRIVALS,
  FLASH_SALE: (state) => state.FLASH_SALE,
  TAG_GALLARY: (state) => state.TAG_GALLARY,
  NEWS_EVENTS: (state) => state.NEWS_EVENTS,
  BLOG_POSTS: (state) => state.BLOG_POSTS,
  BLOG_DETAILS: (state) => state.BLOG_DETAILS,
  ALL_TERMS: (state) => state.ALL_TERMS,
  PRODUCT_SET: (state) => state.PRODUCT_SET
}


const mutations = {

  setSliders: (state, data) => {
    return state.SLIDERS = data
  },

  setFeatured: (state, data) => {
    return state.FEATURED = data
  },

  setTopCategory: (state, data) => {
    return state.TOP_CATEGORY = data
  },

  setTopOffers: (state, data) => {
    return state.TOP_OFFERS = data
  },

  setPrebookings: (state, data) => {
    return state.PREBOOKINGS = data
  },

  setNewArrivals: (state, data) => {
    return state.NEW_ARRIVALS = data
  },

  setFlashSale: (state, data) => {
    state.FLASH_SALE = data
  },

  setTagGallary: (state, data) => {
    return state.TAG_GALLARY = data
  },


  setNewsEvents: (state, data) => {
    return state.NEWS_EVENTS = data
  },

  setBlogPosts: (state, data) => {
    return state.BLOG_POSTS = data
  },

  setBlogDetails: (state, data) => {
    return state.BLOG_DETAILS = data
  },

  setAllTerms: (state, data) => {
    return state.ALL_TERMS = data
  },

  setProductSet: (state, data) => {
    state.PRODUCT_SET = data
  }

}


const actions = {
  async fetchSliders({ commit }, info) {
    const response = await this.$axios.$get('api/home/sliders', { params: info })
    // this.$axios.setHeader('SELF-TOKEN','store.state.user.SELF_TOKEN')

    return commit('setSliders', response)
  },

  async fetchFeatured({ commit }, info) {
    const response = await this.$axios.$get('api/home/sliders', { params: info })

    return commit('setFeatured', response)
  },


  async fetchTopCategory({ commit }, info) {
    const response = await this.$axios.$get('api/home/top-category', { params: info })

    return commit('setTopCategory', response)
  },


  async fetchTopOffers({ commit }, info) {
    const response = await this.$axios.$get('api/home/top-offers', { params: info })

    return commit('setTopOffers', response)
  },

  async fetchPrebookings({ commit }, info) {
    const response = await this.$axios.$get('api/home/prebookings', { params: info })

    return commit('setPrebookings', response)
  },


  async fetchNewArrivals({ commit }, info) {
    const response = await this.$axios.$get('api/home/new-arrivals', { params: info })

    return commit('setNewArrivals', response)
  },


  async fetchFlashSales({ commit }, info) {
    const response = await this.$axios.$get('api/home/flash-sales', { params: info })

    return commit('setFlashSale', response)
  },


  async fetchTagGallary({ commit }, info) {
    const response = await this.$axios.$get('api/home/tag-gallary', { params: info })

    return commit('setTagGallary', response)
  },

  async fetchNewsEvents({ commit }, info) {
    const response = await this.$axios.$get('api/home/news-events', { params: info })

    return commit('setNewsEvents', response)
  },

  async fetchBlogPosts({ commit }, info) {
    const response = await this.$axios.$get('api/home/blog-posts', { params: info })

    return commit('setBlogPosts', response)
  },

  async fetchBlogDetails({ commit }, info) {
    const response = await this.$axios.$get('api/home/blog-details', { params: info })

    return commit('setBlogDetails', response)
  },

  async fetchAllTerms({ commit }, info) {

    const response = await this.$axios.$get('api/home/terms', { params: info })

    return commit('setAllTerms', response)
  },

  async fetchProductSet({ commit }, info) {
    const response = await this.$axios.$get('api/home/product-set', {})

    commit('setProductSet', response)
  }

}


export default {
  state,
  getters,
  actions,
  mutations
}
