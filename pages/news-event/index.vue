<template>
  <div>
    <Breadcrumb/>
    <!--        <div class="container">-->
    <!--            <div v-if="posts.length > 0 && !loading" class="blog-wrap">-->
    <!--                <div class="blog-head">-->
    <!--                    <div class="section-title">-->
    <!--                        <h2 class="title">Blogs</h2>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--                <div class=" row blog-content-wrap">-->
    <!--                    <div v-for="(post,key) in posts" :key="key" class="col-md-4 col-lg-3 col-sm-6">-->
    <!--                        <div class="blog-post">-->
    <!--                            <div class="blog-post-img">-->
    <!--                                &lt;!&ndash; <nuxt-link :to="'/blogs/'+post.seo_url">-->
    <!--                                    <lazy-image :src="post.image_url" class="w-100 h-100" alt=""/>-->
    <!--                                </nuxt-link> &ndash;&gt;-->
    <!--                                <a href="javascript:void(0)">-->
    <!--                                    <lazy-image :src="post.image_url" class="w-100 h-100" alt=""/>-->
    <!--                                </a>-->
    <!--                            </div>-->
    <!--                            <div class="blog-content-text">-->
    <!--                              <a v-bind:href="'/blogs/'+post.seo_url">-->
    <!--                                <h3>{{post.title}}</h3>-->
    <!--                              </a>-->
    <!--                                <p>{{post.short_description}}</p>-->
    <!--                            </div>-->
    <!--                        </div>-->
    <!--                    </div>-->
    <!--                </div>-->
    <!--            </div>-->
    <!--            <div v-else-if="!loading" class="text-center">-->
    <!--                Nothing founds-->
    <!--            </div>-->
    <!--            <div class="text-center" v-else-if="loading">-->
    <!--                Loading...-->
    <!--            </div>-->


    <!--        </div>-->


    <div class="container">
      <div class="row">
        <div class="col text-center mb-5">
          <h1 class="display-4">News & Events</h1>
        </div>
      </div>

      <div class="xrow cards">
        <div class="xcol-lg-3 xcol-md-12 mb-4 card-mas mb-4" v-for="(post, index) in posts">
          <div class="card">
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <lazy-image :src="post.image_url" class="img-fluid" alt=""/>
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
              </a>
            </div>
            <div class="card-body xtext-center">
              <small class="text-muted">
                {{ post.created_at }}
              </small>
              <a v-bind:href="'/blogs/'+post.seo_url">
                <h5 class="card-title">
                  {{ post.title }}
                </h5>
              </a>
              <p class="card-text">
                {{ post.short_description }}
              </p>

              <small>
                <a v-bind:href="'/blogs/'+post.seo_url" class="text-danger">
                  Read More
                </a>
              </small>
            </div>
          </div>
        </div>

      </div>


      <div class="row">
        <div class="col text-center mt-5">
          <a v-if='paginate < totalblog' href="javascript:void(0)" target="_self" class="btn btn-dark"
             @click.prevent="loadBlog(pagePerreview)">
            <span class="qodef-btn-text">Load more</span>
          </a>
        </div>
      </div>

    </div>


    <!-- End -->
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import {baseUrl} from "~/helpers/common";

export default {
  auth: false,

  head() {

    return {
      title: 'Blogs | Master Leather BD',

    }
  },

  data() {

    return {
      loading: true,
      posts: [],
      //baseUrl : 'https://admin.masterleatherbd.com/',
      baseUrl: baseUrl(),
      paginate: 0,
      pagePerreview: 10,
      totalblog: 0,
    }
  },
  methods: {
    async loadBlog(LoadData = 0) {
      // let paginate = this.paginate + load
      let paginate = this.paginate == 0 ? this.pagePerreview : this.paginate + LoadData
      await this.$store.dispatch('home/fetchNewsEvents', {limit: paginate})
      this.posts = this.$store.state.home.NEWS_EVENTS.posts
      this.paginate = this.posts.length
      this.totalblog = this.$store.state.home.NEWS_EVENTS.dataInfo.total_count

    }
  },
  async created() {
    this.loading = true

    await this.loadBlog()

    this.loading = false;

  },
  mounted() {


  }

}
</script>

<style scoped>

.blog-post {
  margin-bottom: 30px;

}

.blog-content-text h3 {
  font-weight: 700;
  padding: 10px 0;
}

.blog-content-text p {
  font-size: 15px;
  color: #333333;
}

.blog-post:last-child {
  margin-right: 0;
}


/* blog */

.card {
  border: 0;
  box-shadow: 0 2px 15px -3px rgb(0 0 0 / 7%), 0 10px 20px -2px rgb(0 0 0 / 4%);
}

.card .bg-image {
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.bg-image {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

.card-title {
  margin-bottom: 0.5rem;
  line-height: 1.7em;
  font-size: 20px;
}

.card-text {
  font-size: 14px;
}

@media only screen and (min-width: 991px) {
  .cards {
    column-count: 4;
    column-gap: 1em;
  }

  .card-mas {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 10px;
    break-inside: avoid;
    grid-row: 1 / -1;
    grid-column: 1;
  }
}

</style>





