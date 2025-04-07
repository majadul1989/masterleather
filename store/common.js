
const state = () =>  ({
    SEARCH_PRODUCTS: {
        search: []
    },
    HEADER: {
        menus: [],
    },
    FOOTER: {
        menus: [],
        support:''
    },

    PRODUCT_SET: {
        product_sets: []
    },

    TOP_OFFERS: {
        products: []
    },

    FLASH_SALE: {
        flash_schedule: null,
        flash_items: {}
    },

    DISTRICTS: {
        districts: []
    },

    SHOWROOMS: {
        showrooms: []
    },

    PAGE: {
        page: null
    },

    INTERIORS: {
        interiors: {
            data: []
        }
    },

    INTERIOR: {
        interior: {
            images: []
        }
    },

    INTERIOR_CATEGORY: {
        category: []
    },

    PRE_LOAD_ADS: {
        widget: null
    },

    CHATBUY: {
        chatbuy: []
    },

    WIDGET: {
        widget: null,
    },

    LOVE_FURNITURE_WIDGET: {
        widget: null
    },

    EMI_WIDGET: {
        widget: null
    },

    EMI_DETAILS_WIDGET: {
        widget: null
    },

    ALL_TERMS: {
        terms: []
    },

    MENU_ITEMS: {
        menu_items: []
    },

    SERVICE_WIDGET: {
        widget: null
    },



});

const getters = {
    SEARCH_PRODUCTS: (state) => state.SEARCH_PRODUCTS,
    HEADER: (state) => state.HEADER,
    FOOTER: (state) => state.FOOTER,
    PRODUCT_SET: (state) => state.PRODUCT_SET,
    TOP_OFFERS: (state) => state.TOP_OFFERS,
    FLASH_SALE: (state) => state.FLASH_SALE,
    DISTRICTS: (state) => state.DISTRICTS,
    SHOWROOMS: (state) => state.SHOWROOMS,
    PAGE: (state) => state.PAGE,
    INTERIORS: (state) => state.INTERIORS,
    INTERIOR: (state) => state.INTERIOR,
    INTERIOR_CATEGORY: (state) => state.INTERIOR_CATEGORY,
    PRE_LOAD_ADS: (state) => state.PRE_LOAD_ADS,
    WIDGET: (state) => state.WIDGET,
    LOVE_FURNITURE_WIDGET: (state) => state.LOVE_FURNITURE_WIDGET,
    EMI_WIDGET: (state) => state.EMI_WIDGET,
    EMI_DETAILS_WIDGET: (state) => state.EMI_DETAILS_WIDGET,
    CHATBUY: (state) => state.CHATBUY,
    ALL_TERMS: (state) => state.ALL_TERMS,
    MENU_ITEMS: (state) => state.MENU_ITEMS,
    SERVICE_WIDGET: (state) => state.SERVICE_WIDGET
}


const mutations = {

    setSearchProducts: (state,data) =>
    {
        return state.SEARCH_PRODUCTS = data
    },

    setHeader: (state,data) => 
    {
        return state.HEADER = data;
    },

    setFooter: (state,data) => 
    {
        return state.FOOTER = data;
    },

    setProductSet: (state,data) => 
    {
        return state.PRODUCT_SET = data;
    },

    setTopOffers: (state, data) => 
    {
        state.TOP_OFFERS = data
    },

    setFlashSale: (state, data) => 
    {
        state.FLASH_SALE = data
    },

    setDistricts: (state,data) =>
    {
        state.DISTRICTS = data
    },

    setShowrooms: (state,data) => 
    {
        state.SHOWROOMS = data
    },

    setPage: (state,data) => 
    {
        state.PAGE = data
    },

    setInteriors: (state,data) =>
    {
        state.INTERIORS = data
    },

    setInterior: (state,data) =>
    {
        state.INTERIOR = data
    },

    setInteriorCategory: (state,data) =>
    {
        state.INTERIOR_CATEGORY = data
    },

    setPreLoadAds: (state,data) =>
    {
        state.PRE_LOAD_ADS = data
    },

    setWidget: (state,data) =>
    {
        state.WIDGET = data
    },

    setChatbuy: (state,data) =>
    {
        state.CHATBUY = data
    },

    setLoveFurnitureWidget: (state,data) =>
    {
        state.LOVE_FURNITURE_WIDGET = data
    },

    setEmiWidget:( state, data) =>{
        state.EMI_WIDGET = data
    },

    setEmiDetailsWidget: (state, data) => {
        state.EMI_DETAILS_WIDGET = data
    },

    setAllTerms: (state,data) => {
        state.ALL_TERMS = data
    },

    setMenuItems: (state,data) => {
        state.MENU_ITEMS = data
    },

    setServiceWidget: (state, data) => {
        state.SERVICE_WIDGET = data
    }

}



const actions = {
    async fetchSearchProducts({commit},info)
    {
        const response = await this.$axios.$get('api/common/main-search-product',{params: info})

        return commit('setSearchProducts',response)
    },

    async fetchHeader({commit},info)
    {
        const response = await this.$axios.$get('api/common/header',{params: info})

        return commit('setHeader',response)
    },

    async fetchFooter({commit},info)
    {
        const response = await this.$axios.$get('api/common/footer',{params: info})

        return commit('setFooter',response)
    },

    async fetchProductSet({commit},info)
    {
        const response = await this.$axios.$get('api/common/product-set',{params: info})

        return commit('setProductSet',response)
    },

    async fetchTopOffers({commit},info)
    {
        const response = await this.$axios.$get('api/common/top-offers',{params: info})

        return commit('setTopOffers',response)
    },

    async fetchFlashSale({commit},info)
    {
        const response = await this.$axios.$get('api/common/flash-sales',{params: info})

        return commit('setFlashSale',response)
    },


    async fetchDistricts({commit},info)
    {
        const response = await this.$axios.$get('api/common/districts',{
            params: info
        })

        commit('setDistricts',response)
    },

    async fetchShowrooms({commit},info)
    {
        const response = await this.$axios.$get('api/common/showrooms',{
            params: info
        })

        commit('setShowrooms',response)
    },


    async fetchPage({commit},info)
    {
        const response = await this.$axios.$get('api/common/page',{
            params: info
        })

        commit('setPage',response)
    },

    async fetchInteriors({commit},info)
    {
        const response = await this.$axios.$get('api/interior/all',{
            params: info
        })

        commit('setInteriors',response)
    },

    async fetchInterior({commit},info)
    {
        const response = await this.$axios.$get('api/interior/show',{
            params: info
        })

        commit('setInterior',response)
    },

    async fetchInteriorCategory({commit}, info)
    {
        const response = await this.$axios.$get('api/interior/category',{
            params: info
        })
        
        commit('setInteriorCategory',response)
    },

    async fetchPreLoadAds({commit}, info)
    {
        const response = await this.$axios.$get('api/common/widget',{
            params: info
        })

        commit('setPreLoadAds',response)
    },

    async fetchWidget({commit}, info)
    {
        const response = await this.$axios.$get('api/common/widget',{
            params: info
        })

        commit('setWidget',response)
    },

    async fetchChatbuy({commit}, info)
    {
        const response = await this.$axios.$get('api/common/showroom-chatbuy',{
            params: info
        })

        commit('setChatbuy',response)
    },

    async fetchLoveFurnitureWidget({commit}, info = {})
    {
        const response = await this.$axios.$get('api/common/widget',{
            params: info
        })

        commit('setLoveFurnitureWidget',response)
    },



    async fetchEmiWidget({commit}, info = {})
    {
        const response = await this.$axios.$get('api/common/widget',{
            params: info
        })

        commit('setEmiWidget',response)
    },

    async fetchEmiDetailsWidget({commit}, info = {id: 22})
    {
        const response = await this.$axios.$get('api/common/widget',{
            params: info
        })

        commit('setEmiDetailsWidget',response)
    },


    async fetchAllTerms({commit}, info = {})
    {
        const response = await this.$axios.$get('api/common/all-terms', {
            params: info
        })

        commit('setAllTerms',response)
    },

    async fetchMenuItems({commit}, info = {})
    {
        const response = await this.$axios.$get('api/common/menu_items',{
            params: info
        })

        commit('setMenuItems',response)
    },

    async fetchServiceWidget({commit}, info = {})
    {
        const response = await this.$axios.$get('api/common/widget',{
            params: info
        })

        commit('setServiceWidget', response)
    }


}



export default {
    state,
    getters,
    actions,
    mutations
}