<template>
  <!-- category product tab -->

  <section class="category-product-tab product-tab-1 section-grap2 clear-cache">
    <div class="container">
      <div class="ctg-product-tab_content">
        <div class="ctg-pd-tab_top_header" id="sticky-tab-range">
          <h1 v-if="!(sub_category.length > 0) && category">{{ category.name }}</h1>
          <h2 v-if="category && sub_category.length > 0">{{ category.name }}</h2>
          <div v-if="category">
            <div v-html="category.seo_h3"></div>
          </div>
        </div>
        <div v-if="selfLoaded" class="ctg-pd-tab_list" id="sticky-tab-list">
          <div class="product-tab-list">
            <ul class="product-tab-list_left">
              <!-- <li class="active"><button>Bedroom</button></li> -->
              <li @click="sidebarToggle('sorting')">
                <button>Sorting</button>
              </li>
              <li @click="sidebarToggle('price_range')">
                <button>Price Range</button>
              </li>
              <li @click="sidebarToggle('Color')">
                <button>Color</button>
              </li>
<!--              <li @click="sidebarToggle('Material')">-->
<!--                <button>Material</button>-->
<!--              </li>-->
              <li @click="sidebarToggle('More')">
                <button>More filters</button>
              </li>
            </ul>
            <ul class="product-tab-list_right">
              <li>
                <span>{{ $store.state.category.PRODUCTS.products ? $store.state.category.PRODUCTS.products.total : 0 }} items</span>
              </li>
              <li>
                <button class="active">Products</button>
              </li>
              <!-- <li><button>Room</button></li> -->
            </ul>
          </div>
        </div>
        <!-- open category product tab side nav -->
        <div id="full-page_overlay"></div>
        <div class="right-side-nav product-nav">
          <div id="productSideNav2" class="rightSidenav" :style="[sidebarOpen?{width: sidebarWidth}:{width:'0'}]">
            <div class="right-fixed-content">
              <a href="javascript:void(0)" class="productCloseNav2" @click="sidebarToggle()">&times;</a>
            </div>
            <div class="right-side-content">
              <div :style="{width:sidebarWidth}" class="right-sideNav-menu">
                <category-sidebar :filterKey="filterKey"/>
              </div>
              <!-- <div class="sideNav-value-btn">
                <button class="clear-btn" disabled>
                  <span>Clear All</span>
                </button>
                <button class="view-btn">
                  <span> <strong>View {{$store.state.category.PRODUCTS.products?$store.state.category.PRODUCTS.products.total:0}}</strong> </span>
                </button>
              </div> -->
            </div>
          </div>
        </div>

        <div v-if="slots.length > 0">
          <div v-for="(slot,key) in slots" :key="key"
               class="ctg-pd-btm-tab_post_content ctg-pd-btm-tab_post_1 common-section-border_class">
            <loading :loading="productLoading" v-if="key == 0"/>
            <div class="row">
              <product-design v-for="(product,pkey) in slot" :key="pkey" :product="product"
                              container_class="col-6 col-sm-6 col-lg-3 col-md-4"/>
            </div>
            <div v-if="key % 3  == 2">
              <div v-if="category.banner1" class="py-3 text-center">
                <img :src="category.banner1" class="" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <loading v-if="!(slots.length > 0) && selfLoaded" :loading="productLoading" :empty="!(slots.length > 0)"/>
        <div v-if="slots.length > 0" class="ctg-product-tab_content_btn">
          <loading :loading="productLoading"/>
          <button v-if="$store.state.category.PRODUCTS.products.to != $store.state.category.PRODUCTS.products.total"
                  @click="nextPage">See more
          </button>
          <span>Showing {{ $store.state.category.PRODUCTS.products.to }} of {{ $store.state.category.PRODUCTS.products.total }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Loading from '../common/Loading.vue'
import ProductDesign from '../common/ProductDesign.vue'
import CategorySidebar from './CategorySidebar.vue'

export default {
  components: {ProductDesign, CategorySidebar, Loading},
  props: ['category', 'sub_category'],
  data() {
    return {
      sidebarOpen: false,
      filterKey: null,
      sidebarWidth: '30rem',
      slots: [],
      page: 1,
      productLoading: false,
      selfLoaded: false,
      callingTimeout: null,
    }
  },
  methods: {
    sidebarToggle(key = null) {
      this.sidebarOpen = !this.sidebarOpen
      this.filterKey = key
    },
    async nextPage() {

      if (this.page >= this.$store.state.category.PRODUCTS.products.last_page || this.productLoading) {
        return
      }
      this.productLoading = true
      this.page += 1;
      await this.$store.dispatch('category/fetchProducts', {
        cat_name: this.category ? this.category.name : '',
        seo_url: this.$route.params.slug,
        page: this.page,
        ...this.$route.query
      })
      const slots = this.arrayChunk(this.$store.state.category.PRODUCTS.products.data, 4)
      this.slots = [...this.slots, ...slots]
      this.productLoading = false
    },


  },
  mounted() {

    window.onscroll = function () {
      var stickyList = document.getElementById("sticky-tab-list");
      var hideRange = document.getElementById("sticky-tab-range");

      if (hideRange != null && stickyList != null) {

        var sticky = hideRange.offsetTop + 100;
        if (window.pageYOffset > sticky) {
          stickyList.classList.add("sticky");
        } else {
          stickyList.classList.remove("sticky");
        }
      }

    }

    if (window.innerWidth < 576) {
      this.sidebarWidth = "100%";
    }
  },

  watch: {

    '$route': {
      async handler(route) {
        this.productLoading = true
        const self = this

        clearTimeout(this.callingTimeout)

        this.callingTimeout = setTimeout(async function () {
          await self.$store.dispatch('category/fetchProducts', {
            cat_name: this.category ? this.category.name : '',
            seo_url: self.$route.params.slug,
            ...self.$route.query
          })

          self.slots = self.arrayChunk(self.$store.state.category.PRODUCTS.products.data, 4)
          self.productLoading = false;

        }, 300)

      },

      deep: true,
      immediate: true
    }

  },

  async created() {
    //console.log('cat-sub-cat', this.category)

    const self = this;

    await this.$store.dispatch('category/fetchProducts', {
      cat_name: this.category ? this.category.name : '',
      seo_url: this.$route.params.slug,
      ...this.$route.query
    })

    this.slots = this.arrayChunk(this.$store.state.category.PRODUCTS.products.data, 4)
    this.slots = {}

    this.selfLoaded = true
  }
}
</script>


<style scoped>

.category-product-tab {
  padding-bottom: 0;
  padding-top: 0;
}

.ctg-pd-tab_top_header h1 {
  font-weight: bold;
  color: #111;
  font-size: 1.875rem;
  line-height: 1.3334;
  letter-spacing: -0.53px;
  margin-bottom: 15px;
}

.ctg-pd-tab_top_header {
  /* width: calc((100% / 13) * 5); */
}

.ctg-pd-tab_list.sticky {
  position: fixed;
  top: 0;
  max-width: 100%;
  margin-left: 120px;
  background: #fff;
  transition: all 0.5s linear;
  z-index: 99;
  left: 0;
  margin-right: 30px;
  right: 0;
}

#full-page_overlay {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
}

.sideNav-value-btn {
  position: fixed;
  bottom: 0;
  padding: 1.5rem 3rem;
  border-top: 1px solid #dfdfdf;
  width: 100%;
  overflow: hidden;
  background: #fff;
}

.sideNav-value-btn button {
  width: 180px;
  padding: 10px 0;
  border: 0;
  border-radius: 84px;
  font-size: 14px;
}

.sideNav-value-btn button:first-child {
  margin-right: 15px;
}

.sideNav-value-btn button:last-child {
  background: #000;
  color: #fff;
  font-weight: 700;
}
</style>
