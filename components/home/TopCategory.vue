<template>
    <!-- shop category wrapper -->
	<section :class="[!loading && categories.length > 0?'':'d-none']" class="inview-top-category shop-category-wrapper clear-cache">
		<div class="container">
			<div class="shop-category-header">
				<div class="section-title">
					<h2 class="title">{{$store.state.common.HEADER.category_title?$store.state.common.HEADER.category_title:'Top categories'}}</h2>
				</div>
			</div>
			<div class="shop-category">
				<asl-carousel v-for="(slots,key) in categories" :key="key" carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
					<top-category-item :category="category" v-for="(category,ckey) in slots" :key="ckey"/>
				</asl-carousel>
			</div>
		</div>
	</section>
</template>

<script>
import AslCarousel from '../common/AslCarousel.vue'
import TopCategoryItem from './TopCategoryItem.vue'
export default {
  components: { TopCategoryItem, AslCarousel },

  props: {
	  category: {
		  default: [],
		  type: Array
	  }
  },
	data(){
		return {
			categories: [],
			loading: false
		}
	},
  	async created() {
		// this.loading = true

		this.categories = this.arrayChunk(this.category,5)

		// this.loading = false
    },

	watch: {
		category: {
			handler(value){
				this.categories = this.arrayChunk(this.category,5)
			}
		}
	}
}
</script>
<style scoped>
.shop-category .asl-carousel-container {
	margin:4rem 0
}
.shop-category .asl-carousel-container:last-child{
	margin-bottom: ;
}
</style>
