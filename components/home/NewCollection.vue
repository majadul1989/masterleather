<script setup>
import { reactive,ref } from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const settings = reactive({
  dots: false,
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
  autoplaySpeed: 2000,
  cssEase: 'linear',
  pauseOnDotsHover: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  arrows: false,
})

</script>

<template>
  <div class="w-100 d-flex flex-column mb-4">
    <!-- Header Section -->
    <div class="w-100 d-flex justify-content-center align-items-center flex-column mt-4 newcollection-header">
      <h1>Eid Collection 25</h1>
      <NuxtLink to="/">Shop Now</NuxtLink>
    </div>

    <div class="w-100 row">
      <div class="col-md-6 col-12  w-100 h-100">
        <NuxtLink to="/"  class=" w-100 h-100">
          <img src="@/assets/images/home/new1.jpeg" alt="Image 1" class="cover img-r" />
        </NuxtLink>
      </div>

      <div class="col-md-6 col-12 mt-4 mt-md-0 ">
        <VueSlickCarousel v-bind="settings" class=" w-100">
          <div class="w-100 h-100 ">
            <img src="@/assets/images/home/10002.jpg" alt="Image 1" class="cover img-l " />
          </div>
          <div class="w-100 h-100  ">
            <img src="@/assets/images/home/new1.jpeg" alt="Image 1" class="cover img-l" />
          </div>
          <div class="w-100 h-100 ">
            <img src="@/assets/images/home/10002.jpg" alt="Image 1" class="cover img-l" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>



<style>
/* bydefault */

.row {
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.col-md-8,
.col-lg-9,
.col-6,
.col-12
.col-md-4,
.col-sm-6,
.col-md-2,
.col-lg-3,
.col-lg-6
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-12,
.col-sm-12 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {

    padding-right: 0px !important;
    padding-left: 0px !important;
}
.newcollection-header h1 {
  font-size: 36px;
  color: #242424;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 20px;
  margin-top: 30px;
}

.newcollection-header a {
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 30px;
}
.cover{
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.img-r{
  padding-right: 0px !important;
}
.img-l{
  padding-right: 0px !important;
}
.newcollection-header a:hover {
  border-bottom: 1px solid #EA840F;
}

.VueSlickCarousel {
  max-width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 700px) {
  .img-r{
  padding-right: 4px !important;
}
.img-l{
  padding-right: 4px !important;
}
}

@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css');
@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css');
</style>
