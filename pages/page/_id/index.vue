<template>

   <div>
        <Breadcrumb/>
         <div class="container">
            <div v-if="page" v-html="page.description">
            </div>
         </div>
        <loading :loading="loading"/>
   </div>

</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue'
export default {
   auth: false,
   data() {
      return {
         loading: false,
         page: null
      }
   },

  async asyncData({route ,query, store}){
    const globalSetting =  await store.dispatch('settings/globalSetting', {})
    await store.dispatch('common/fetchPage',{
      id: route.params.id,
      ...route.query
    })
    const pageInfo = store.state.common.PAGE.page;


    const data = {
      'post_id' : pageInfo.id,
      'post_type' : 'page'
    }
    //console.log(pageInfo)
    const seoSetting =  await store.dispatch('settings/seoSetting', data)
    // console.log(seoSetting)
    return {
      metatitle: seoSetting.meta_title ?? pageInfo.title +' - Master Leather BD',
      metadescription: seoSetting.meta_description ?? globalSetting.com_metadescription,
      metakeywords:  seoSetting.meta_keywords ?? globalSetting.com_metakeywords,
      ogLogo : globalSetting.com_logourl,
      pageInfo : pageInfo
    };
  },

   head() {
      return {
        title: this.metatitle,
        description: this.metadescription,
        keywords: this.metakeywords,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.metadescription
          },
          {
            hid: 'og:title',
            name: 'og:title',
            content: this.metatitle,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content:  this.ogLogo
          },
          {
            hid: 'og:site_name',
            name: 'og:site_name',
            content: this.metatitle,
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.metakeywords
          },
        ],
      }

   },

   async created(){

      this.loading = true

      await this.$store.dispatch('common/fetchPage',{
         id: this.$route.params.id,
         ...this.$route.query
      })

      this.page = this.$store.state.common.PAGE.page
      this.loading = false
   }
}
</script>

<style>
   .thumb-banner1 img{
      width: 100%;
   }
</style>
