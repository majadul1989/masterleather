<template>
    <!-- category related products -->
  <div>
	<section class="inview-blog-post category-related-products clear-cache ">
		<div class="container">
			<div class="category-rl-pd-wrap">
				<div class="category-rl-pd-header">
					<div class="section-title">
						<h2 class="title">Blog</h2>
					</div>
				</div>
				<div class="row">
					<asl-carousel key="news_events"  carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
						<category-product-item v-for="(post,key) in posts" :key="key" :post="post"/>
					</asl-carousel>
				</div>
				<div class="rl-pd-read-btn">
					<nuxt-link to="/blogs" class="common-btn_color">More....</nuxt-link>
				</div>
			</div>
		</div>
	</section>
  </div>
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
	  },
    count:{
      default: 0,
      type : Number,
    }
  },
  data(){

	  return {

	  }
  },
	async created() {

	},
  mounted() {

  }
}
</script>

<style scoped>
	.rl-pd-read-btn {
		padding-top: 4rem;
	}
</style>
