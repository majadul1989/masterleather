<script setup>
import { ref } from 'vue';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const settings = ref({
    dots: true,
    dotsClass: 'slick-dots slider-dot-button',
    edgeFriction: 0.35,
    infinite: true,
    speed: 1000,
    slidsToShow: 3,
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
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500

});

</script>

<template>
    <div class="w-100 ">
        <div class="w-100 d-flex justify-content-center align-items-center flex-column bestseller-header">
            <h1><span>Bestseller</span> Products</h1>
            <nuxt-link to="/">Show all product</nuxt-link>

        </div>

        <div class="w-100 d-flex justify-content-center align-items-center">

            <div class="w-50 border border-danger">
                <VueSlickCarousel v-bind="settings">
                    <div class="d-flex flex-column">
                        <img src="../../assets/images/home/bestseller.jpg" alt="">

                    </div>
                </VueSlickCarousel>

            </div>

        </div>



    </div>
</template>

<style>
.bestseller-header {
    margin-bottom: 3rem;
}

.bestseller-header h1 {
    font-size: 36px;
    color: #242424;
    font-weight: bold;
    line-height: 1.4;
    margin-bottom: 10px;
}

.bestseller-header h1 span {
    color: #df6d27;
}

.bestseller-header a {
    color: #000;
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 30px;

}

.bestseller-header a:hover {
    border-bottom: 1px solid #EA840F;
}
</style>
