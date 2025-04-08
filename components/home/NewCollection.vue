<template>

    <div class="w-100 d-flex flex-column mb-4">
        <!-- Header Section -->
        <div class="w-100 d-flex justify-content-center align-items-center flex-column mt-4 newcollection-header">
            <h1>Eid Collection 25</h1>
            <NuxtLink to="/">Shop Now</NuxtLink>
        </div>

        <div class="w-100 row ">
            <div class="col-md-6 col-12">
                <NuxtLink to="/">
                    <img src="@/assets/images/home/new1.jpeg" alt="Image 1" class="img-fluid" />
                </NuxtLink>
            </div>
            <div class="col-md-6 col-12 mt-4 mt-md-0 ">

                <VueSlickCarousel v-bind="settings">
                    <div class="w-100">
                        <img src="@/assets/images/home/10002.jpg" alt="Image 1" class="img-fluid" />
                    </div>
                    <div class="w-100">
                        <img src="@/assets/images/home/new1.jpeg" alt="Image 1" class="img-fluid" />
                    </div>
                    <div class="w-100">
                        <img src="@/assets/images/home/10002.jpg" alt="Image 1" class="img-fluid" />
                    </div>
                </VueSlickCarousel>
            </div>
        </div>
    </div>


</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    name: 'NewCollection',
    components: { VueSlickCarousel },
    data() {
        return {
            settings: {
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
                pauseOnHover: true
                // lazyLoad: false
            }
        }
    },
}
</script>


<style>
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

.newcollection-header a:hover {
    border-bottom: 1px solid #EA840F;
}

.VueSlickCarousel {
    max-width: 100%;
    margin: 0 auto;
}

@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css');
@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css');
</style>
