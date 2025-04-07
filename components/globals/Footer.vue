<template>
  <!--footer wrapper-->
  <section v-if="menus.length" class="footer-wrapper section-grap clear-cache" :class="[loading?'d-nonex':'']">
    <div v-if="menus.length > 0 || support" class="container">
      <div class="row">
        <div v-if="support" class="col-md-12  col-lg-4">
          <div class="footer-content footer-sec1">
            <h3>SUPPORT</h3>
            <!-- <p>Bring your ideas to life with special discounts, inspiration, and lots of good things in store. It's all free. <a href="#">See more.</a></p> -->
            <div class="" v-html="support"></div>
          </div>
        </div>
        <div v-for="(menu,mkey) in menus" :key="mkey" class="col-md-12 col-lg-2 col-sm-12">

          <div class="footer-content footer-sec2 desktop-view">
            <h4>{{ menu.title }}</h4>
            <div class="footer-links">
              <ul>
                <li v-for="(list,lkey) in menu.data" :key="lkey">
                  <a :href="list.link">{{ list.label }}</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="mobile-view footer-accordion">
            <accordion :accordionRequest="'will-later'" accordion_container="key-accordion">
              <template v-slot:header>
                <h4>{{ menu.title }}</h4>
              </template>
              <template v-slot:content>
                <div class="footer-links">
                  <ul>
                    <li v-for="(list,lkey) in menu.data" :key="lkey">
                      <a :href="list.link">{{ list.label }}</a>
                    </li>
                  </ul>
                </div>
              </template>
            </accordion>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="footer-social-links">
            <ul>
              <li>
                <a target="_blank" href="https://www.facebook.com/masterleather61">
                  <i class="icon-facebook-circled"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i class="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i class="icon-youtube-play"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div class="footer-bottom row">
        <div class="col-md-4">
          © {{ (new Date().getFullYear()) }} Master Leather BD. All right reserved.
          Developed by <a href="https://mathmozo.com">Mathmozo IT</a>
        </div>
        <div class="col-md-8"><img class="w-100" src="~/assets/images/ssl.jpeg" alt=""></div>
      </div>
    </div>
  </section>
</template>
<script>
import Modal from '../common/Modal.vue'

export default {
  components: {Modal},

  data() {

    return {
      menus: [],
      support: '',
      loading: false,
      routeLoading: ['page-home-index', 'page-category-index', 'page-product-index']
    }
  },
  methods: {

    loadingFooter(value) {
      this.loading = value
    },

  },
  async created() {
    this.loading = true

    await this.$store.dispatch('common/fetchFooter', {
      ...this.$route.query
    })
    this.menus = this.$store.state.common.FOOTER.menus
    this.support = this.$store.state.common.FOOTER.support

    this.loading = false

    // this.$nuxt.$on('loadingFooter',this.loadingFooter)
  },
  watch: {
    '$route': {
      handler(value) {
        //console.log(value.name)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style>
.footer-content.footer-sec1 li {
  color: #000;
  font-size: 16px;
  margin-bottom: 8px;
}

.footer-accordion .accordion-header {
  padding: 2rem 0;
  border-top: 1px solid #dfdfdf;
}

.footer-accordion .accordion-header h4 {
  line-height: 2rem;
  font-weight: 500;
}

.footer-accordion .footer-links {
  padding-bottom: 20px;
}

.footer-accordion .footer-links i {
  color: #000;
  user-select: none;
}
</style>
