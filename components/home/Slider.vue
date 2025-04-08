<template>
	<section :class="[sliders.length > 0 ? '' : 'd-none']" class="inview-slider banner-wrapper mt-2 clear-cache">
		<div class="w-100">
			<div class="banner-wrap-topContent position-relative">
				<VueSlickCarousel v-bind="settings">
					<div v-for="(slider, index) in sliders" :key="index" class="banner-leftSide">
						<nuxt-link v-if="slider.internal" :to="slider.url">
							<lazy-image :src="slider.image.full_size_directory" :loading="''" />
						</nuxt-link>
						<a :href="slider.url" v-else>
							<lazy-image :src="slider.image?.full_size_directory" class="w-100" alt="" :loading="''" />
						</a>
					</div>
				</VueSlickCarousel>

				<div class="carousel-button">
					<nuxt-link to="#">Shop Collection</nuxt-link>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import LazyImage from '../common/LazyImage.vue'

export default {
	name: 'HomeSlider',
	components: { VueSlickCarousel, LazyImage },
	props: {
		sliders: {
			default: [],
			type: Array
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
				pauseOnHover: true
				// lazyLoad: false
			}
		}
	},
	async created() {

	}
}
</script>

<style>
.carousel-button {
	position: absolute;
	left: 45%;
	bottom: 30px;
	background: #df6d27;
	padding: 7px 30px;
	border-radius: 30px;
	color: #fff;
	padding-bottom: 10px;
	box-shadow: 0 0 5px #00000047;
}

.carousel-button a {
	color: #fff;
}

@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel.css');
@import url('@/node_modules/vue-slick-carousel/dist/vue-slick-carousel-theme.css');

@media (max-width: 576px) {
	.slick-arrow {
		display: none !important;
	}
}
</style>
