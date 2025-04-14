<template>
    <div>
        <Breadcrumb/>
        <div class="container">
            <div v-if="!loading && post" class="blog-details-wrap">
                <div class="row">
                    <div class="col-md-8 col-lg-9 col-12">
                        <div class="blog-details-head">
                            <div class="section-title">
                                <h2 class="title">{{post.title}}</h2>
                            </div>
                        </div>
                        <div class="blog-details-content">
                            <span class="details-time">
                                {{post.time}}
                            </span>
                            <div class="details-img">
                                <a href="javascript:void(0)">
                                    <lazy-image :src="post?.image" class="img-fluid xw-100 xh-100" alt=""/>
                                </a>
                            </div>
                            <h3>{{post.short_description}}</h3>
                            <div v-html="post.description">

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-lg-3 col-12">
                        <div class="blog-related-post d-none">
                            <h2>latest news</h2>
                            <ul>
                                <li>
                                    <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis!</a>
                                    <span class="details-time">
                                        6 hours ago
                                    </span>
                                </li>
                                <li>
                                    <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis!</a>
                                    <span class="details-time">
                                        6 hours ago
                                    </span>
                                </li>
                                <li>
                                    <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis!</a>
                                    <span class="details-time">
                                        6 hours ago
                                    </span>
                                </li>
                                <li>
                                    <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis!</a>
                                    <span class="details-time">
                                        6 hours ago
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div class="blog-related-post d-none">
                            <h2>latest news</h2>
                            <div class="blog-related-img">
                                <a href="#">
                                    <lazy-image src="/public/nuxt/assets/images/single-product-img5.webp" class="w-100 h-100" alt=""/>
                                </a>
                            </div>
                            <ul>
                                <li>
                                    <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis!</a>
                                    <span class="details-time">
                                        6 hours ago
                                    </span>
                                </li>
                                <li>
                                    <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, reiciendis!</a>
                                    <span class="details-time">
                                        6 hours ago
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center" v-else-if="!loading && !post">
                Nothing founds.
            </div>
            <div v-else-if="loading" class="text-center">
                Loading..
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
export default {
    auth: false,
    //Meta SEO
    async asyncData({query, store, params}){
      await store.dispatch('home/fetchBlogDetails', {
        seo_url: params.slug
      })
      let simple_info = await store.state.home.BLOG_DETAILS.post
      const data = {
        'post_id' : simple_info.id ?? null,
        'post_type' : 'post'
      }
      console.log(simple_info)
      const seoSetting =  await store.dispatch('settings/seoSetting', data)
      return {
        metatitle: seoSetting.meta_title ?? simple_info.title + ` | Master Leather BD`,
        metadescription: seoSetting.meta_description,
        metakeywords: seoSetting.meta_keywords,
        ogImage : simple_info?.images,
      };
    },

    head(){

        return {
            title: this.metatitle,
            description: this.metadescription,
            keywords: this.metakeywords,
            meta: [
              {
                hid: 'description',
                name: 'description',
                content: this.metadescription,
              },
              {
                hid: 'og:title',
                name: 'og:title',
                content:  this.metatitle,
              },
              {
                hid: 'og:image',
                name: 'og:image',
                content: "https://admin.masterleatherbd.com/" + this.ogImage,
              },
              {
                hid: 'og:site_name',
                name: 'og:site_name',
                content: 'Master Leather BD',
              },
              {
                hid: 'keywords',
                name: 'keywords',
                content: this.metakeywords,
              },
            ],
        }
    },
    data() {

        return {
            loading: true,
            post: null
        }
    },
    async created(){
        this.loading = true

        await this.$store.dispatch('home/fetchBlogDetails',{
            seo_url: this.$route.params.slug
        })

        this.post = this.$store.state.home.BLOG_DETAILS.post

        this.loading = false
    }
}
</script>

<style scoped>
    .blog-details-content .details-img{
        /*height: 600px;*/
        /*overflow: hidden;*/
    }
    .blog-details-content .details-img img{
        /*object-fit: cover;*/
      width: auto !important;
    }
     span.details-time,
    .blog-details-content span.img-sub-text{
        font-size: 15px;
        margin-bottom: 30px;
        display: block;
        color: rgba(51, 51, 51, 0.788);
    }
    .blog-details-content span.img-sub-text{
        border-left: 1px solid  rgba(51, 51, 51, 0.507);
        margin: 8px 0;
        padding-left: 8px;
    }
    .blog-details-content h3{
        font-size: 25px;
        margin: 30px 0;
   }
    .blog-details-content p{
       font-size: 15px;
       margin-bottom: 30px;
       text-align: justify;
    }
    .blog-details-content p:last-child{
        margin-bottom: 0;
    }
    .blog-related-post h2{
        margin-bottom: 15px;
        color:#000;
        font-size: 30px;
        font-weight: bold;
    }
    .blog-related-post{
        margin-bottom:40px ;
    }
    .blog-related-post ul li{
        margin-bottom: 0px;
        list-style: none;
    }
    .blog-related-post ul li a{
        font-size:18px;
        color: #333;
        line-height: 20px;
        font-weight: 500;
    }
    .blog-related-post ul li a:hover{
        text-decoration: underline;
        color:#000
    }
    .blog-related-post ul li span,
    .blog-related-img{
        margin-bottom: 10px;
    }
    .blog-related-img{
        height: 200px;
        width: 300px;
        overflow: hidden;
    }



</style>
