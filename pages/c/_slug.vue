<template>
  <div>
    <LazyBreadcrumb :pathList="pathList" />
    <!-- <LazyAllView v-if="sub_category.length > 0" :sub_category="sub_category" :main_category="category" />
    <LazyModularView v-if="sub_category.length > 0" :products="recommended_products" :main_category="category" />
    <LazyGridView v-if="sub_category.length > 0" /> -->
    <LazyProductView :category="category" :sub_category="sub_category" />
    <loading :loading="loading" />
  </div>
</template>

<script>
import AllView from '~/components/category/AllView.vue'
import BannerView from '~/components/category/BannerView.vue'
import CategoryDescription from '~/components/category/CategoryDescription.vue'
import GridView from '~/components/category/GridView.vue'
import ModularView from '~/components/category/ModularView.vue'
import ProductView from '~/components/category/ProductView.vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue'
import { baseFrontUrl } from '~/helpers/common'

export default {
  name: 'page-category-index',
  components: { Breadcrumb, AllView, GridView, ModularView, BannerView, ProductView, CategoryDescription, Loading },
  auth: false,


  //Meta Seo
  async asyncData({ route, query, store }) {
    const globalSetting = await store.dispatch('settings/globalSetting', {})


    await store.dispatch('category/fetchCategory', {
      seo_url: route.params.slug,
      ...route.query
    })

    const pageInfo = await store.state.category.CATEGORY.info

    //console.log(globalSetting);
    const data = {
      'post_id': pageInfo.id ?? null,
      'post_type': 'category'
    }
    //console.log(pageInfo)
    const seoSetting = await store.dispatch('settings/seoSetting', data)
    return {
      metatitle: seoSetting.meta_title ?? pageInfo.name + ' - Master Leather BD',
      metadescription: seoSetting.meta_description ?? globalSetting.com_metadescription,
      metakeywords: seoSetting.meta_keywords ?? globalSetting.com_metakeywords
    }
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
          content: this.metatitle
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.ogLogo
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'Master Leather BD'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.metakeywords
        }
      ]
    }
  },

  data() {

    return {
      loading: true,
      sub_category: [],
      category: null,
      onlyProduct: false,
      recommended_products: [],

      pathList: []

      // schema: {
      //   '@context': 'https://schema.org',
      //   '@type': 'ItemList',
      //   '@id': '',
      //   'url': 'https://www.example.com/cat?pg=1',
      //   'name': 'Running Shoes',
      //   // "numberOfItems":"490",
      //   'mainEntityOfPage': 'https://www.example.com/cat?pg=1',
      //   'itemListElement':
      //     [
      //       {
      //         'name': '',
      //         '@type': 'ListItem',
      //         'position': '1',
      //         'url': ''
      //       }
      //     ]
      // }
    }
  },

  methods: {
    async fetchData() {
      this.loading = true

      if (!this.$route.query.keyword) {

        await this.$store.dispatch('category/fetchSubCategory', {
          seo_url: this.$route.params.slug,
          ...this.$route.query
        })

        this.sub_category = this.$store.state.category.SUB_CATEGORY.category

      } else {
        this.sub_category = []
      }

      if (this.sub_category.length > 0) {
        await this.$store.dispatch('category/fetchRecommended', {
          seo_url: this.$route.params.slug,
          ...this.$route.query
        })
        this.recommended_products = this.$store.state.category.RECOMMENDED.products.data
      }
      this.loading = false

    }
  },

  watch: {
    '$route': {
      handler() {
        if (this.$route.query.keyword) {
          this.sub_category = []
        }
      },
      deep: true
    }
  },

  async created() {
    await this.fetchData()
  },

  async fetch() {
    await this.$store.dispatch('category/fetchCategory', {
      seo_url: this.$route.params.slug,
      ...this.$route.query
    })

    this.category = this.$store.state.category.CATEGORY.info
    this.title = this.$store.state.category.CATEGORY.info.name
    // this.schema['@id'] = baseFrontUrl() + '/c/' + this.$store.state.category.CATEGORY.info.seo_url
    // this.schema['url'] = baseFrontUrl() + '/c/' + this.$store.state.category.CATEGORY.info.seo_url
    // this.schema['mainEntityOfPage'] = baseFrontUrl() + '/c/' + this.$store.state.category.CATEGORY.info.seo_url
    // this.schema['itemListElement'][0]['url'] = baseFrontUrl() + '/c/' + this.$store.state.category.CATEGORY.info.seo_url
    // this.schema['itemListElement'][0]['name'] = this.$store.state.category.CATEGORY.info.name
    // this.schema['name'] = this.$store.state.category.CATEGORY.info.name

    this.pathList = [{
      link: this.$store.state.category.CATEGORY.info.seo_url,
      label: this.$store.state.category.CATEGORY.info.name
    }]
  }
}
</script>
