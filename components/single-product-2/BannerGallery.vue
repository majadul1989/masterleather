<template>
  <div class="single_page_banner_slider">
    <div v-for="(fabric,key) in fabrics" :key="key" :class="[key == activeFabric?'':'d-none']">
      <VueSlickCarousel v-bind="settings">
        <div v-for="(image, index) in fabric.images" :key="index" class="single-banner_slider_img">
          <a href="javascript:void(0)">
            <lazy-image :src="image.image_url" class="w-100" alt="" />
          </a>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import LazyImage from '../common/LazyImage.vue'

export default {
  name: 'Home-slider',
  components: { VueSlickCarousel, LazyImage },
  props: {
    fabrics: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots slider-dot-button',
        edgeFriction: 0.35,
        infinite: true,
        speed: 1000,
        slidsToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        swipeToSlide: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
        pauseOnDotsHover: true,
        pauseOnFocus: true,
        pauseOnHover: true,
        lazyLoad: 'ondemand'
      },
      activeFabric: 0
    }
  },

  methods: {},
  async mounted() {

  },

  created() {
    const self = this
    this.$nuxt.$on('fabricIndex', function(value) {
      self.activeFabric = value
    })
  }
}
</script>

<style>
@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css');
@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css');

.single-banner_slider_img {
  max-height: 800px;
}

</style>

