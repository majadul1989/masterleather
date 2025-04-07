<template>
    <div>
        <Breadcrumb :pathList="[...pathList,...currentPath]"/>
        <div class="container">
            <div class="interiors-full-wrapper">
                 <div class="section-title" >
                            <h2 class="title" >{{$store.state.common.INTERIORS.category?$store.state.common.INTERIORS.category.name:'Interiors'}}</h2>
                        </div>
                <div class="interior-post-content">
                    <!-- <aside class="interior-sidebar">

                        <div :class="[category.length > 0 ? '':'d-none']" class="sidebar-content desktop-view">
                            <div class="sidebar_title">Categroy Link :</div>
                            <div class="sidebar-list">
                                <ul>
                                    <li v-for="(cat,key) in category" :key="key"><nuxt-link :to="'/interiors?slug='+cat.seo_url">{{cat.name}}</nuxt-link></li>
                                </ul>
                            </div>
                        </div>

                        <div :class="[category.length > 0 ? '':'d-none']" class="mobile-view">
                            <accordion :accordionRequest="'will-later'" accordion_container="key-accordion">
                                <template v-slot:header>
                                    <h4>Category Link</h4>
                                </template>
                                <template v-slot:content>
                                    <div class="footer-links">
                                            <ul>
                                                <li v-for="(cat,key) in category" :key="key"><nuxt-link :to="'/interiors?slug='+cat.seo_url">{{cat.name}}</nuxt-link></li>
                                            </ul>
                                    </div>
                                </template>
                            </accordion>
                        </div>

                    </aside> -->


                    <div class="post-list" :class="[loading || $route.query.slug ?'d-none':'']">
                        <nuxt-link v-for="(cat,ckey) in category" :key="ckey" :to="'/interiors?slug='+cat.seo_url" class="interior-product-items active">
                            <div class="products-img">
                                <lazy-image :src="cat.image_url" classList="w-100 h-100"/>
                                <!-- <img src="https://www.concrete-beton.com/assets/img/others/projects/thumbs/concrete_5cd934212695f_concrete-lcda-espace-dart-era-paris-mini-web.jpg" alt="" class="w-100 h-100">  -->
                            </div>
                            
                            <!-- <div class="products-item-hover">
                                <div class="post-item-hover-bg"></div>
                                 <div class="post-details-view_btn">
                                    <div class="view_btn">view</div>
                                </div> 
                            </div>  -->
                        
                            <div class="interior-grid-box">
                                <h2 class="post-item-hover-title-wrapper">
                                    <div class="post-item-hover-title">{{cat.name}}</div>
                                </h2>
                                <div class="pd-offers-read-btn">
                                    <a href="#" class="common-btn_color">View</a>
                                </div>
                            </div>
                        </nuxt-link>
                        <!-- <div v-if="interiors.length > 0" class="post-list-btn">
                            <button v-if="interiorRes.total != interiorRes.to" class="common-btn_color">
                                See More
                            </button>
                        </div> -->
                    </div>


                   <div class="post-list" :class="[loading || !$route.query.slug ?'d-none':'']">
                        <loading :loading="itemLoading" :empty="!(interiors.length > 0)"/>
                        <a v-for="(interior,key) in interiors" @click="toggleModal(interior)" :key="key" :to="'/interiors/'+interior.slug" class="interior-product-items active">
                            <div class="products-img">
                                <lazy-image :src="interior.image.full_size_directory" classList="w-100 h-100"/>
                                <!-- <img src="https://www.concrete-beton.com/assets/img/others/projects/thumbs/concrete_5cd934212695f_concrete-lcda-espace-dart-era-paris-mini-web.jpg" alt="" class="w-100 h-100">  -->
                            </div>
                            
                            <!-- <div class="products-item-hover">
                                <div class="post-item-hover-bg"></div>
                                 <div class="post-details-view_btn">
                                    <div class="view_btn">view</div>
                                </div> 
                            </div>  -->
                        
                            <div class="interior-grid-box">
                                <h2 class="post-item-hover-title-wrapper">
                                    <div class="post-item-hover-title">{{interior.title}}</div>
                                </h2>
                                <div class="pd-offers-read-btn">
                                    <a href="#" class="common-btn_color">View</a>
                                </div>
                            </div>
                        </a>
                        <div v-if="interiors.length > 0" class="post-list-btn">
                            <button v-if="interiorRes.total != interiorRes.to" class="common-btn_color">
                                See More
                            </button>
                        </div>

                        <gallery-modal :images="galleryImgs"/>

                    </div>

 
                   
                </div>
                 <loading :loading="loading && !created"/>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import GalleryModal from '~/components/common/GalleryModal.vue'
import LazyImage from '~/components/common/LazyImage.vue'
import Loading from '~/components/common/Loading.vue'
export default {
  components: { LazyImage, Loading, GalleryModal },
    auth:false,

    data(){

        return {
            created: false,
            loading: false,
            itemLoading: false,
            pathList: [{
                link: '/interiors',
                label: 'Interiors'
            }],
            currentPath: [],
            interiors: [],
            interiorRes: {},
            category: [],

            galleryImgs: []
        }
    },

    methods: {

       async catInteriors(){
                this.itemLoading = true
                this.interiors = []
                this.interiorRes = {}

                if(this.$route.query.slug){
                    await this.$store.dispatch('common/fetchInteriors',{
                        seo_url: this.$route.query.slug
                    })

                }

                if(this.$store.state.common.INTERIORS.category){
                    this.currentPath = [{
                        link: '/interiors?slug=' + this.$store.state.common.INTERIORS.category.seo_url,
                        label: this.$store.state.common.INTERIORS.category.name
                    }]
                }

                this.interiors = this.$store.state.common.INTERIORS.interiors.data
                this.interiorRes = this.$store.state.common.INTERIORS.interiors
                this.itemLoading = false
        },

        toggleModal(interior){
            const images = interior.images.map((item) => {

                return item.image?.full_size_directory;
            })
            this.galleryImgs = images
            console.log('toggle-modal',images)
            this.$nuxt.$emit('toggle-gallery-modal',true)
        }
    },

    watch: {
        '$route': {
            immediate: true,
            handler(){
                this.catInteriors()
            }
        }
    },

    async created(){
        this.loading = true

        await this.$store.dispatch('common/fetchInteriorCategory',{
            seo_url: 'interiors'
        })
        this.created = true
        this.category = this.$store.state.common.INTERIOR_CATEGORY.category

        await this.catInteriors()


        this.loading = false
        
    }
}
</script>

<style>
 
    .interiors-full-wrapper{
       height: 100%;
    }
    ul{
        list-style: none;
    }
     /* .interior-sidebar{
        width: 250px;
        background-color: #fff;
        transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        z-index: 1;
        
       
    }
    .sidebar_title{
        color:#595552;
        font-weight: bold;
        margin-bottom:30px;
    }
    .sidebar-list ul li a {
        display: block;
        position: relative;
        line-height: 16px;
        padding: 5px 20px;
        cursor: pointer;
        color:#595552;
        font-size: 14px;
    }
    .sidebar-list ul li a:before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        height: 1px;
        margin-top: 1px;
        background-color: #c6c6c6;
        width: 14px;
    }  */
    .interior-post-list{
        position: relative;
        width: 100%;
        padding: 50px 0 50px 0;
        box-sizing: border-box;
        overflow: hidden;
    }

    .post-list {
        margin-bottom: 30px;
        margin: 0 -15px;
    }
    .interior-product-items{
        display: inline-block;
        position: relative;
        width: 33.33%;
        padding: 0 15px;
        margin-bottom: 25px;
       
    }
    .interior-product-items.active::before {
        position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        content: '';
        opacity: 0;
        bottom: 0;
        left: 0;
    }
    .interior-product-items::after {
        content: "";
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%;
        border: 1px solid #fff;
    }
    .products-item-hover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    /* .post-item-hover-bg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 20px;
        background-color: #000;
        opacity: 0;
        transition: all 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .interior-product-items.active:hover .post-item-hover-bg {
        opacity: 0.5;
        transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    } */
   
    .post-item-hover-title-wrapper {
        font-size: 22px;
        color: #000;
        text-align: center;
        padding: 15px 0 0;
    }
    /* .post-item-hover-title {
        opacity: 0;
        transform: translateY(-30px);
        transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1);
    } */
    /* .interior-product-items.active:hover .post-item-hover-title {
        opacity: 1;
        transform: translateY(0);
        transition: all 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    } */
    .post-details-view_btn {
        bottom: 10px;
        position: absolute;
        text-transform: lowercase;
        color: #fff;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        opacity: 0;
        text-align: center;
    }
    .interior-product-items.active:hover .post-details-view_btn {
        opacity: 1;
        transition: all 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
        right: 0;
    }
    .post-list-btn {
        text-align: center;
        clear: both;
    }
    .post-list-btn button{
        border:0;
        margin-top: 30px;
    }
    .interior-grid-box{
        text-align: center;
        border: 1px solid rgba(61, 60, 60, 0.205);
        margin-top: -2px;
        margin-bottom: 2px;
        padding-bottom: 15px;
    }
    .interior-product-items  .pd-offers-read-btn{
        margin-top: 25px;
    }
    .interior-product-items .pd-offers-read-btn a {
        font-size: 16px;
        font-weight: 700;
    }
    .interior-product-items .products-img {
        border: 1px solid rgba(61, 60, 60, 0.205);
        margin-top: 2px;
    }
</style>