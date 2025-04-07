<template>
  <div>
    <LazySlider :sliders="sliders"/>
    <LazyFeature :sliders="featureSliders" v-view.once="featureSliderViewHandler"/>
    <LazyTopCategory :category="categoryTop" v-view.once="topCategoryViewHanlder"/>
    <LazyFlashSale v-if="flashSale.flash_schedule" :products="flashSale.flash_items"
                   :flashSchedule="flashSale.flash_schedule" v-view.once="flashViewHandler"/>
    <LazyOffer :products="topOffers" v-view.once="offerViewHandler"/>
    <LazyPrebooking v-if="prebookings_info && prebookings_info.is_active" :products="prebookings"
                    :info="prebookings_info"/>
    <!-- <LazyProductSetHome :product_sets="product_sets"/> -->
    <LazyGuides :products="newArrivals" v-view.once="newArrivalHandler"/>
    <LazyProductTab :GALLERY="tagGallery" v-view.once="tagGalleryHandler"/>
    <!-- <LazyRecentProductHome/> -->
    <LazyCategoryProduct :posts="newsEvents" v-view.once="newsEventHandler"/>
    <!--    <LazyCategoryBlog :posts="blogPosts" :count="blogPosts.length" v-view.once="blogPostHandler"/>-->
<!--    <LazyService v-if="!loading" :widget="serviceWidget"/>-->
    <LazyBrand :loading="loading"/>
    <Loading :loading="loading"/>


    <!-- Modal -->
    <modal class="cart-modal_wrap showroom_modal" key="showroomModal" :modalRequest="showroomModal" modal_title="">
      <div>
        <h3 style="padding: 0px 6px;">Our nearest showroom in your area</h3>
        <div class="product-showroom-services">
          <ul>
            <li v-for="(showroom,key) in showrooms" :key="key">
              <div class="showroom-details">
                {{ key + 1 }}. {{ showroom.title }}
                <br>
                {{ showroom.address }}
                <br>
                Phone: {{ showroom.phone }}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </modal> <!-- End -->


  </div>
</template>

<script>
import checkView from 'vue-check-view'
import Vue from 'vue'

Vue.use(checkView)
import Loading from '~/components/common/Loading.vue'
import Brand from '~/components/home/Brand.vue'
import CategoryProduct from '~/components/home/CategoryProduct.vue'
import CategoryBlog from '~/components/home/CategoryBlog.vue'
import Feature from '~/components/home/Feature.vue'
import Guides from '~/components/home/Guides.vue'
import FlashSale from '~/components/home/FlashSale.vue'
import Offer from '~/components/home/Offer.vue'
import Prebooking from '~/components/home/Prebooking.vue'
import ProductSetHome from '~/components/home/ProductSetHome.vue'
import ProductTab from '~/components/home/ProductTab.vue'
import RecentProductHome from '~/components/home/RecentProductHome.vue'
import Service from '~/components/home/Service.vue'
import Slider from '~/components/home/Slider.vue'
import TopCategory from '~/components/home/TopCategory.vue'
import Modal from '~/components/common/Modal.vue'

export default {

  name: 'page-home-index',
  components: {
    Slider,
    TopCategory,
    Offer,
    Guides,
    ProductTab,
    RecentProductHome,
    CategoryProduct,
    CategoryBlog,
    Service,
    Brand,
    Feature,
    Loading,
    ProductSetHome,
    Prebooking,
    FlashSale,
    Modal
  },
  auth: false,
  data() {

    return {
      loading: false,
      sliders: [],
      featureSliders: [],
      categoryTop: [],
      flashSale: {},
      topOffers: [],
      prebookings: [],
      prebookings_info: null,
      product_sets: [],
      newArrivals: [],
      tagGallery: {
        tag_gallary: [],
        terms: []
      },
      newsEvents: [],
      blogPosts: [],
      serviceWidget: {
        widget1: null,
        widget2: null,
        widget3: null
      },
      apicall: {
        // featureSliderApiCalled: false,
        topCategoryApiCalled: false,
        flashSaleOfferApiCalled: false,
        topOfferApiCalled: false,
        prebookingApiCalled: false,
        newArrivalApiCalled: false,
        tagGalleryApiCalled: false,
        newsEventApiCalled: false,
        blogPostApiCalled: false,
        serviceWidgetApiCalled: false,
        allTermsApiCalled: false

      },

      showroomModal: false,
      showrooms: [],
      showroomName: false,
    }
  },

  //Meta SEO
  async asyncData({query, store}) {
    const globalSetting = await store.dispatch('settings/globalSetting', {})
    //console.log(globalSetting);
    return {
      metatitle: globalSetting.com_metatitle,
      metadescription: globalSetting.com_metadescription,
      metakeywords: globalSetting.com_metakeywords,
      ogLogo: globalSetting.com_logourl,
      showroom_location_popup: globalSetting.showroom_location_popup
    };
  },

  head() {
    return {
      title: this.metatitle,
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
          content: this.metatitle,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.metakeywords
        },
      ],
    }
  }, //END

  methods: {


    async featureSliderViewHandler() {

      const self = this

      // top category
      if (self.$store.state.variable.TOP_CATEGORY_LOADED == false) {

        self.loading = true
        await self.$store.dispatch('home/fetchTopCategory', {
          sum: 0,
          ...this.$route.query
        })
        self.$store.dispatch('variable/topCategoryLoaded', true)
        self.loading = false


        self.categoryTop = self.$store.state.home.TOP_CATEGORY.category
      }


    },

    async topCategoryViewHanlder() {
      console.log('viewing top cat')

      const self = this

      //  tof offers
      if (self.$store.state.home.TOP_OFFERS.products.length == 0) {
        self.apicall.topOfferApiCalled = true


        self.loading = true
        await self.$store.dispatch('home/fetchTopOffers', {
          sum: 0,
          ...this.$route.query
        })
        self.loading = false
        self.topOffers = self.$store.state.home.TOP_OFFERS.products
      }


      //  tof offers
      if (self.apicall.flashSaleOfferApiCalled == false) {
        self.apicall.flashSaleOfferApiCalled = true


        self.loading = true
        await self.$store.dispatch('home/fetchFlashSales', {
          sum: 0,
          ...this.$route.query
        })
        self.loading = false
        self.flashSale = self.$store.state.home.FLASH_SALE
      }


    },

    async flashViewHandler() {
      console.log('viewing flash')
    },

    async offerViewHandler() {

      const self = this
      if (self.$store.state.home.PREBOOKINGS.info == null) {

        self.loading = true
        await self.$store.dispatch('home/fetchPrebookings', {
          sum: 0,
          ...this.$route.query
        })
        self.loading = false

        self.prebookings = self.$store.state.home.PREBOOKINGS.products
        self.prebookings_info = self.$store.state.home.PREBOOKINGS.info
      }


      if (self.$store.state.home.NEW_ARRIVALS.products.length == 0) {
        self.loading = true
        await self.$store.dispatch('home/fetchNewArrivals', {
          ...this.$route.query
        })
        self.loading = false
        self.newArrivals = self.$store.state.home.NEW_ARRIVALS.products
      }

    },

    async newArrivalHandler() {
      const self = this
      // tag gallery
      if (self.$store.state.home.TAG_GALLARY.tag_gallary.length == 0) {
        self.loading = true
        await self.$store.dispatch('home/fetchTagGallary', {
          ...this.$route.query
        })
        self.loading = false
        self.tagGallery = self.$store.state.home.TAG_GALLARY;
      }
    },

    async tagGalleryHandler() {
      // news events
      console.log('news-events')
      const self = this
      if (self.$store.state.home.NEWS_EVENTS.posts.length == 0) {
        self.loading = true
        await self.$store.dispatch('home/fetchNewsEvents', {
          ...this.$route.query
        })
        self.newsEvents = self.$store.state.home.NEWS_EVENTS.posts
        self.loading = false
      }
    },

    async blogPostHandler() {
      // blog posts
      console.log('blog-post')
      const self = this
      if (self.$store.state.home.BLOG_POSTS.posts.length == 0) {
        self.loading = true
        await self.$store.dispatch('home/fetchBlogPosts', {
          ...this.$route.query
        })
        self.blogPosts = self.$store.state.home.BLOG_POSTS.posts
        self.loading = false
      }
    },

    async newsEventHandler() {
      // all terms
      const self = this
      if (self.$store.state.home.ALL_TERMS.terms.length == 0) {
        self.apicall.allTermsApiCalled == true
        self.loading = true
        await self.$store.dispatch('home/fetchAllTerms', {
          ...this.$route.query
        })

        self.loading = false
        self.$eventBus.$emit('loadingFooter', false)
      }

      if (!this.apicall.serviceWidgetApiCalled) {

        this.apicall.serviceWidgetApiCalled = true

        await self.$store.dispatch('common/fetchServiceWidget', {
          ...this.$route.query,
          id: 19
        })
        this.serviceWidget.widget1 = this.$store.state.common.SERVICE_WIDGET.widget

        await self.$store.dispatch('common/fetchServiceWidget', {
          ...this.$route.query,
          id: 20
        })
        this.serviceWidget.widget2 = this.$store.state.common.SERVICE_WIDGET.widget

        await self.$store.dispatch('common/fetchServiceWidget', {
          ...this.$route.query,
          id: 21
        })
        this.serviceWidget.widget3 = this.$store.state.common.SERVICE_WIDGET.widget


      }


    },

    async fetchCommon() {

      const self = this

      // load static data
      self.sliders = self.$store.state.home.SLIDERS.sliders
      self.featureSliders = self.$store.state.home.FEATURED.sliders
      self.categoryTop = self.$store.state.home.TOP_CATEGORY.category

      if (self.$store.state.variable.SLIDER_LOADED == false) {
        self.loading = true
        await self.$store.dispatch('home/fetchSliders', {
          device: 0,
          type: 0,
          ...this.$route.query
        })
        self.sliders = self.$store.state.home.SLIDERS.sliders

        self.loading = false
        self.$store.dispatch('variable/sliderLoaded', true)

      }


      if (self.$store.state.variable.FEATURE_SLIDER_LOADED == false) {
        self.loading = true
        await self.$store.dispatch('home/fetchFeatured', {
          device: 0,
          type: 1,
          ...this.$route.query
        })
        self.loading = false
        self.$store.dispatch('variable/featureSliderLoaded', true)
        self.featureSliders = self.$store.state.home.FEATURED.sliders
      }
      self.loading = false

    },

    async fetchData() {


    },

    async showroomLoad(districtThana) {
      await this.$store.dispatch('common/fetchShowrooms', {
        district: districtThana.district,
        thana: districtThana.thana,
        ...this.$route.query
      })
      this.showrooms = this.$store.state.common.SHOWROOMS.showrooms
    }

  },
  beforeMount() {
    // self.$eventBus.$emit('loadingFooter',self.loading)
  },


  async created() {
    const self = this
    this.fetchCommon()

    self.categoryTop = self.$store.state.home.TOP_CATEGORY.category
    self.topOffers = self.$store.state.home.TOP_OFFERS.products
    self.prebookings = self.$store.state.home.PREBOOKINGS.products
    self.prebookings_info = self.$store.state.home.PREBOOKINGS.info
    self.newArrivals = self.$store.state.home.NEW_ARRIVALS.products
    self.tagGallery = self.$store.state.home.TAG_GALLARY;
    self.newsEvents = self.$store.state.home.NEWS_EVENTS.posts
    self.blogPosts = self.$store.state.home.BLOG_POSTS.posts

    if (self.$store.state.home.ALL_TERMS.terms.length == 0) {
      self.$eventBus.$emit('loadingFooter', true)
    }

    self.$nuxt.$on('load-tag-gallery', async function (tg) {
      self.tagGallery = tg;
    });


  },

  async mounted() {
    //LOcation
    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      let ty = null;
      const thiss = this;
      let loc = this.$axios.$get('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + latitude + '&longitude=' + longitude, {}).then(function (resp) {
        let latlong = {'latitude': latitude, 'longitude': longitude, 'location': resp.locality};
        let res = thiss.$axios.$post('/api/user-location', latlong).then(function (response) {
          if (response) {
            thiss.showroomModal = new Date(),
              thiss.showroomName = response
            thiss.showroomLoad(response)
          }//End if
        }.bind(thiss));
      })

    };

    let getSt = localStorage.getItem("setSrToken")
    let rt = document.cookie;
    let show = false;
    let parts = rt.split('; auth.self_token=')
    // if (parts.length === 2 ) {
    let getSts = parts.pop().split(';').shift();
    if (getSt != getSts) {
      localStorage.setItem("setSrToken", getSts);
      localStorage.getItem("setSrToken")
      show = true;
    } else {

    }
    // }
    // alert(parts.length)
    if (show && this.showroom_location_popup == 'show') {
      navigator.geolocation.getCurrentPosition(success);
    }

  },


}
</script>

<style>
.product-showroom-services {
  margin-top: 5px !important;
}

.product-showroom-services ul {
  height: 512px;
  overflow: auto;
  list-style: none;
}

.product-showroom-services ul li {
  padding: 7px 10px !important;
  font-size: 15px;
  color: #000;
  line-height: 25px;
  position: relative;
  border: 1px solid #ededed;
  margin: 5px;
  background: #f3f3f3;
}
</style>
