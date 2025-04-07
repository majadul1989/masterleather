const state = () => ({
  CATEGORY: {
    info: null
  },
  SUB_CATEGORY: {
    category: []
  },
  PRODUCTS: {},
  RECOMMENDED: {
    products: []
  },
  FILTERS: {
    filters_cat: [],
    filters_att: []
  },
  TAG_GALLERY: {
    tag_gallery: []
  },

  PRODUCT_SET: {
    product_sets: []
  }
})

const getters = {
  CATEGORY: (state) => state.CATEGORY,
  SUB_CATEGORY: (state) => state.SUB_CATEGORY,
  PRODUCTS: (state) => state.PRODUCTS,
  RECOMMENDED: (state) => state.RECOMMENDED,
  FILTERS: (state) => state.FILTERS,
  TAG_GALLERY: (state) => state.TAG_GALLERY,
  PRODUCT_SET: (state) => state.PRODUCT_SET
}


const mutations = {

  setCategory: (state, data) => {
    return state.CATEGORY = data
  },

  setSubCategory: (state, data) => {
    return state.SUB_CATEGORY = data
  },

  setProducts: (state, data) => {

    return state.PRODUCTS = data
  },

  setRecommended: (state, data) => {

    return state.RECOMMENDED = data
  },

  setFilters: (state, data) => {

    return state.FILTERS = data
  },

  setTagGallery: (state, data) => {
    return state.TAG_GALLERY = data
  },

  setProductSet: (state, data) => {
    return state.PRODUCT_SET = data
  }
}


const actions = {

  async fetchCategory({ commit }, info) {
    const response = await this.$axios.$get('api/category/info', { params: info })

    return commit('setCategory', response)
  },


  async fetchSubCategory({ commit }, info) {
    const response = await this.$axios.$get('api/category/sub-category', { params: info })

    return commit('setSubCategory', response)
  },

  async fetchProducts({ commit }, info) {
    const catname = info.cat_name
    const response = await this.$axios.$get('api/category/products', { params: info })

    //if (dataLayer && response.products) {
    if (response.products) {

      const productItems = response.products.data.map((item, index) => {

        let itm = {
          item_name: item.title,
          item_id: item.product_code,
          affiliation: 'MasterLeatherBD',
          currency: 'BDT',
          price: parseFloat(item.product_price_now),
          item_brand: 'MasterLeatherBD',
          item_category: info.seo_url ? info.seo_url : 'Search Results',
          quantity: 1,
          discount: 0.00,
          index: index,
          item_variant: 'regular',
          location_id: 'L_12345',
          item_list_id: item.product_code,
          item_list_name: item.sub_title,
          coupon: 'NONE'
        }

        // if(!info.cat_name)
        // {
        //     itm.item_list_name = "Search Results";
        // }

        return itm
      })

      //console.log(productItems)
      // console.log(productItems);

      // Google Datalayer
      // dataLayer.push({ ecommerce: null });
      // dataLayer.push({
      //     event: 'view_item_list',
      //     ecommerce: {
      //         items: [productItems]
      //     }
      // });

    }

    return commit('setProducts', response)
  },

  async fetchRecommended({ commit }, info) {
    const response = await this.$axios.$get('api/category/recommended', { params: info })

    return commit('setRecommended', response)
  },

  async fetchFilters({ commit }, info) {
    const response = await this.$axios.$get('api/category/filters', { params: info })

    return commit('setFilters', response)
  },

  async fetchTagGallery({ commit }, info) {
    const response = await this.$axios.$get('api/category/tag-gallery', { params: info })

    return commit('setTagGallery', response)
  },

  async fetchProductSet({ commit }, info) {
    const response = await this.$axios.$get('api/category/product-set', { params: info })

    return commit('setProductSet', response)
  }

}


export default {
  state,
  getters,
  actions,
  mutations
}
