const state = () => ({})

const getters = {}


const mutations = {}


const actions = {

  async globalSetting() {
    const res = await this.$axios.get('/api/home/settings')
    // console.log(res.data.setting)
    let commonSetting = res.data.setting
    // this.metatitle = commonSetting.com_metatitle;
    return commonSetting
  },

  async seoSetting({ commit }, info) {
    const res = await this.$axios.post('/api/common/get-seo-content', { params: info })

    // console.log(res.data)
    let seoSetting = res.data.setting
    // this.metatitle = commonSetting.com_metatitle;
    return seoSetting
    //console.log(info)
  }

}


export default {
  state,
  getters,
  actions,
  mutations
}

