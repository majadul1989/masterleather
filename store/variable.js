const state = () => ({
    LOADING: false,
    REQUEST_ABORT: false,
    MODAL_OPEN: false,


    //HOME_LOADED
    SLIDER_LOADED: false,
    FEATURE_SLIDER_LOADED: false,
    TOP_CATEGORY_LOADED: false,
    
  })
  
  const getters = {
    LOADING: (state) => state.LOADING,
    REQUEST_ABORT: (state) => state.REQUEST_ABORT,
    MODAL_OPEN: (state) => state.MODAL_OPEN,

    SLIDER_LOADED: (state) => state.SLIDER_LOADED,
    FEATURE_SLIDER_LOADED: (state) => state.FEATURE_SLIDER_LOADED,
    TOP_CATEGORY_LOADED: (state) => state.TOP_CATEGORY_LOADED,
  }
  
  const mutations = {
    setLoading: (state, data) => {
      return state.LOADING = data
    },
    setRequestAbort: (state,data) =>
    {
      state.REQUEST_ABORT = data
    },

    setModalOpen: (state, data) =>
    {
      state.MODAL_OPEN = data
    },

    setSliderLoaded: (state,data) =>
    {
      state.SLIDER_LOADED = data
    },

    setFeatureSliderLoaded:(state,data) =>
    {
      state.FEATURE_SLIDER_LOADED = data
    },

    setTopCategoryLoaded:(state,data) =>
    {
      state.TOP_CATEGORY_LOADED = data
    }

  }
  
  const actions = {
    loading({commit}, info) {
      return commit('setLoading', info)
    },

    setRequestAbort({commit}, info){

      commit('setRequestAbort', info)
      
    },

    setModalOpen({commit},info)
    {
      commit('setModalOpen',info)
    },

    sliderLoaded({commit},info)
    {
      commit('setSliderLoaded',info)
    },

    featureSliderLoaded({commit},info)
    {
      commit('setFeatureSliderLoaded',info)
    },

    topCategoryLoaded({commit},info)
    {
      commit('setTopCategoryLoaded',info)
    }
  
  }
  
  export default {
    state,
    getters,
    mutations,
    actions
  }