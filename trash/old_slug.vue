<template>
  <div>
    <Breadcrumb/>
       <!-- product page wrapper -->
      <section class="product-page-wrapper clear-cache">
        <div class="container">
        	<!-- product page top content -->
                <div class="pd-pg-top-content">
                  <div class="row">
                    <div class="col-md-7 col-lg-4 col-xl-5">
                      <LazyProductImage/>
                    </div>
                    <div class="col-md-12 col-lg-8 col-xl-7">
                      <div class="row">
                        <div class="col-md-7">
                          <product-simple-info :simple_info="simple_info" :info="info"/>
                        </div>
                        <div class="col-md-5">
                          <LazySingleInfo :info="info"/>
                        </div>
                        <div class="col-md-12">
                          <product-info :info='info'/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              <!-- single page product info -->

                 <!-- similar products wrap -->
                <similar-product/>
                    <!-- single product banner wrap -->
					      <!-- <LazyProductBanner/> -->
            <!-- product most views wrap-->
              <div class="single-rltd-pd-wrap section-grap2">
                <LazyMostView/>
                <LazySuggestion/>
                <LazySameCategory/>
              </div>
			  <LazyRecentProduct/>
      </div>
      </section>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import MostView from '~/components/single-product/MostView.vue'
import ProductBanner from '~/components/single-product/ProductBanner.vue'
import ProductImage from '~/components/single-product/ProductImage.vue'
import ProductInfo from '~/components/single-product/ProductInfo.vue'
import ProfileInfo from '~/components/single-product/ProfileInfo.vue'
import RecentProduct from '~/components/single-product/RecentProduct.vue'
import SameCategory from '~/components/single-product/SameCategory.vue'
import SimilarProduct from '~/components/single-product/SimilarProduct.vue'
import SingleInfo from '~/components/single-product/SingleInfo.vue'
import SomeText from '~/components/single-product/SomeText.vue'
import Suggestion from '~/components/single-product/Suggestion.vue'
import ProductSimpleInfo from '~/components/single-product/ProductSimpleInfo.vue'

export default {
  auth: false,
  name: 'page-product-index',
  head(){

    return {
      title: this.simple_info?this.simple_info.title+` | Master Leather BD`:'Master Leather BD'
    }
  },
  components: {Breadcrumb, RecentProduct, MostView, Suggestion, SameCategory, SomeText, ProductImage, ProductInfo, ProfileInfo, SimilarProduct, ProductBanner, SingleInfo,ProductSimpleInfo },
    data(){
      return {
        simple_info: null,
        info: null
      }
    } ,

  // async fetch(){
  //   await this.$store.dispatch('product/fetchSimpleInfo',{
  //     seo_url: this.$route.params.slug
  //   })

  //   this.simple_info = this.$store.state.product.SIMPLE_INFO.product
  // },
  async created(){
      await this.$store.dispatch('product/fetchSimpleInfo',{
        seo_url: this.$route.params.slug
      })

      this.simple_info = this.$store.state.product.SIMPLE_INFO.product

      await this.$store.dispatch('product/fetchInfo',{
        seo_url: this.$route.params.slug
      })

      this.info = this.$store.state.product.INFO.product

  }

  }
</script>

<style>

  .zoomer-base-container.scroller-at-bottom {
    height: 100% !important;
    border: 1px solid #ddd;
    padding: 3px;
    width: 100%!important;
  }
  .zoomer-base-container .preview-box{
    width:100%;
    max-height: 100%!important;
  }
  .zoomer-base-container .thumb-list {
    height: auto!important;;
    width: 100%!important;
    padding: 3px;
  }

  .zoomer-base-container .thumb-list img{
    margin-right: 3px;
    max-width: 150px;
  }

  .zoomer-base-container .thumb-list img:last-child,
  .zoomer-base-container .thumb-list img:first-child{
    max-width: 60px;
  }
  .zoomer-base-container .thumb-list img:last-child{
    right: 0;
  }
  .pd-pg-details-tab{
    margin-top: 30px;
  }

  .responsive-image.choosed-thumb{
    border: 1px solid #0058a3;
    box-shadow: none!important;
    padding: 2px;
  }
  .zoomer-bounding-box {
    opacity: 0.4;
    background-color: white;
    border: 1px solid rgb(0, 0, 0);
    z-index: 4;
  }
   #zoomer-pane-container {
    max-width: 100%!important;
    height: 100%!important;
    top: 2px!important;
    left: 100% !important;
    border: 1px solid #ddd;
    padding: 3px;
  }
  .single-page-quality_img {
    margin-bottom: 20px;
  }
  .position-sticky{
    top:0;
    z-index: 3;
  }
</style>
