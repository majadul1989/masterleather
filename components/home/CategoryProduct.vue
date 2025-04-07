<template>
    <!-- category related products -->
	<section :class="[posts.length > 0 ? '':'d-none']" class="inview-news-event category-related-products clear-cache ">
		<div class="container">
			<div class="category-rl-pd-wrap">
				<div class="category-rl-pd-header">
					<div class="section-title">
						<h2 class="title">News and events</h2>
					</div>
				</div>
				<div class="row">
					<asl-carousel key="news_events"  carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
						<category-product-item v-for="(post,key) in posts" :key="key" :post="post"/>
					</asl-carousel>
				</div>
				<div class="rl-pd-read-btn">
					<nuxt-link to="/news-event" class="common-btn_color">More....</nuxt-link>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import AslCarousel from '../common/AslCarousel.vue'
import CategoryProductItem from './CategoryProductItem.vue'
export default {
  components: { CategoryProductItem,AslCarousel },
  props: {
	  posts: {
		  default: [],
		  type: Array
	  }
  },
  data(){

	  return {

	  }
  },
	async created() {

	}
}
</script>

<style scoped>
	.rl-pd-read-btn {
		padding-top: 4rem;
	}
</style>
