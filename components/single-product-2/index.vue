<template>
         <!-- single page wrapper 2 -->
     <section class="single-page_wrapper_2 clear-cache">
        <div class="container">

            <fabric-options :fabrics="fabrics"/>

            <banner-gallery/>

            <!--  prodect select set box -->
            <div class="pd-select-set_box section-grap2">
               <div class="title-bar">
                 <h3>Select Your Set</h3>
                 <p> 
                     Choose from our pre-sets or create a custom one according to your needs.                         
                 </p>
               </div>
               <div class="select-choose_box">
                  <div class="row">
                     <div class="col-sm-6 col-md-8">
                        <div class="select-preview-info">
                           <h6>Choose from our pre-sets</h6>
                           <full-product-set/>
                           <h6>or, Create your own set</h6>
                           <div class="row">
                              <set-product/>
                              <set-product/>
                              <set-product/>
                              <set-product/>
                           </div>
                        </div>
                     </div>


                     <product-set-buy/>
                  </div>
               </div>
            </div>

            <product-set-info/>
        </div>
     </section>
     
</template>
<script>
import BannerGallery from './BannerGallery.vue'
import FabricOptions from './FabricOptions.vue'
import FullProductSet from './FullProductSet.vue'
import ProductSetBuy from './ProductSetBuy.vue'
import ProductSetInfo from './ProductSetInfo.vue'
import SetProduct from './SetProduct.vue'
export default {
  components: { FabricOptions, BannerGallery,SetProduct, ProductSetInfo, ProductSetBuy, FullProductSet },

  data(){

    return {
      fabrics: null,
      info: null,
      products: []
    }
  },

  async created(){

    await this.$store.dispatch('product/fetchProductSetInfo', {
      slug: this.$route.params.slug
    })

    console.log('fabrics',this.fabrics)

    this.info = this.$store.state.product.PRODUCT_SET_INFO.product_set


    await this.$store.dispatch('product/fetchProductSetProducts', {
      slug: this.$route.params.slug
    })

    this.products = this.$store.state.product.PRODUCT_SET_PRODUCTS.products
  }
  
}
</script>






<style>
.addTo_cart button {
    background: #0058A3;
    font-weight: 500;
    font-size: .875rem;
    line-height: 1.42857;
    border-radius: 52px;
    padding: 0 2rem;
    border: 1px solid #dfdfdf;
    color: #fff;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    display: block;
    width: 100%;
    margin-top: 20px;
}

    /*product select set box*/
    .pd-select-set_box {
        border-top: 1px solid #cccccc;
        margin-top: 4rem;
    }
    .pd-select-set_box .title-bar {
        text-align: center;
        padding-bottom: 35px;
        max-width: 760px;
        margin: auto;
    }
    .pd-select-set_box .title-bar h3 {
        line-height: 35px;
        color: #3b3a3c;
        padding-bottom: 20px;
    }
    .pd-select-set_box .title-bar p {
        font-size: 13px;
        line-height: 19px;
        font-weight: 400;
        color: #626366;
    }
    .select-preview-info h6 {
        color: #a7a9ab;
        padding-bottom: 15px;
    }
    .select-preview-info .seater-box {
        padding: 15px 10px 10px 10px;
        margin-bottom: 30px;
        background: #fff;
        border: 1px solid #dfdfdf;
        text-align: center;
        transition: background 0.2s;
        cursor: pointer;
        min-height: 250px;
    }
    .select-preview-info .small-preview-box {
        height: 100px;
        max-height: 100px;
        padding: 5px;
        overflow: hidden;
        background: #f9f9f9;
        margin-bottom: 10px;
        position: relative;
        text-align: center;
    }
    .select-preview-info .seater-box .info-seater {
        color: #a7a9ab;
        font-size: 13px;
    }
    .select-preview-info .seater-box:hover {
        border: 1px solid #333;
    }
    .select-preview-info .seater-box:hover h6 a {
        color: #000;
    }
    .select-preview-info .seater-box .btn-group {
        margin-top: 20px;
        text-align: center;
    }
    .select-preview-info .seater-box .btn-group .btn {
        height: 30px;
        width: 30px;
        padding: 5px;
        color: #3b3a3c;
        border-top: 1px solid #d4d2d2;
        border-bottom: 1px solid #d4d2d2;
        line-height: 12px;
    }
    .select-preview-info .seater-box .btn-group .btn:first-child {
        border-left: 1px solid #d4d2d2;
        border-right: 0;
        border-radius: 4px 0 0 4px;
    }
    .select-preview-info .seater-box .btn-group .btn:last-child {
        border-radius: 0 4px 4px 0;
        border-left: 0;
        border-right: 1px solid #d4d2d2;
    }
    .select-preview-info .seater-box .btn-group .btn i.fa {
        font-size: 12px;
    }
    .select-preview-info .seater-box .btn[disabled] {
        cursor: not-allowed;
    }
    .select-preview-info .seater-box .btn-group input[type="text"] {
        float: left;
        position: relative;
        font-size: 13px;
        line-height: 18px;
        padding: 5px;
        color: #A7A9AB;
        height: 30px;
        width: 65px;
        border: 1px solid #d4d2d2;
        text-shadow: none;
        box-shadow: none;
        text-align: center;
    }
    .select-preview-info .seater-box.individual-box .present-amount {
        margin: 20px 0;
    }
    .individual-right-box .featured-side-preview {
        max-height: 160px;
        height: 160px;
        background: #f9f9f9;
        position: relative;
        overflow: hidden;
        border: 1px solid #dfdfdf;
        text-align: center;
        margin-bottom: 15px;
        margin-top: 35px;
    }

    .individual-right-box .featured-side-blocks h6 {
        text-align: center;
        max-width: 90%;
        margin: auto;
        font-weight: 600;
        margin-bottom: 40px;
    }
    .individual-right-box .featured-side-blocks h6 a {
        color: #3b3a3c;
        font-weight: 600;
    }
    .individual-right-box .individual-side-box-small {
        text-align: center;
    }
    .individual-right-box .price-range-box-small .amount-box {
        font-size: 28px;
        line-height: 32px;
        display: inline-block;
        color: #3b3a3c;
    }
    .individual-right-box .price-range-box-small .amount-box_sub {
        font-size: 11px;
        line-height: 14px;
        color: #626366;
    }

 /* select product */
    .single-page_wrapper_2 .product-choose_box {
        text-align: center;
        padding-right: 35px;
        border-right: 1px solid #e0e0e0;
        float: right;
        margin: 0 0 70px 0;
    }
    .single-page_wrapper_2 .product-choose_box label {
        text-align: center;
        font-size: #616161;
        padding-bottom: 10px;
        font-size: 15px;
    }
    .single-page_wrapper_2 .product-choose_box ul li {
        margin: 0 15px;
        display: inline-block;
        position: static;
    }
    .single-page_wrapper_2 .product-choose_box ul li a {
        display: block;
        touch-action: manipulation;
        cursor: pointer;
    }
    .single-page_wrapper_2 .product-choose_box ul li a span.color-box {
        width: 43px;
        border-radius: 50%;
        height: 43px;
        border: 2px solid #fff;
        display: inline-block;
        transition: all 0.5s;
    }
    .single-page_wrapper_2 .product-choose_box ul li a span.color-box:hover,
    .single-page_wrapper_2 .product-choose_box ul li a span.color-box.active {
        border: 2px solid #827f7e;
    }
    .single-page_wrapper_2 .product-choose_box ul li a span.color-box img {
        border-radius: 50%;
    }




    /*product service info*/
    .product-service_info .section-title h2 {
    text-align: center;
    font-weight: 400;
    }
    .product-info_tabs .tab-content {
    padding-left: 60px;
    }
    .product-info_tabs .tab-content .tab-pane ul li {
    color: #3b3a3c;
    font-size: 13px;
    line-height: 19px;
    font-weight: 400;
    }
    .product-info_tabs .nav-pills a {
    color: #b1b4b8;
    padding: 0;
    padding-bottom: 10px;
    cursor: pointer;
    margin-bottom: 12px;
    font-size: 13px;
    border-bottom: 1px solid #d4d2d2;
    border-radius: 0;
    transition: all 0.3s linear;
    }
    .product-info_tabs .nav-pills .nav-link.active,
    .nav-pills .show > .nav-link,
    .product-info_tabs .nav-link:hover {
    color: #3b3a3a;
    background-color: transparent;
    }
</style>