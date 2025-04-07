<template>
    <div v-if="products.length" class="same-category-product-wrap">
		<div class="ctg-pd-grid-box-top">
			<div class="ctg-pd-grid-box_left">
				<div class="section-title">
					<h2 class="title">More from this category</h2>
				</div>
			</div>
		</div>
		<asl-carousel carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
			<product-design v-for="(product,key) in products" :key="key" :product="product" container_class="product-design-container"/>
		</asl-carousel>
	</div>
</template>

<script>
import AslCarousel from '../common/AslCarousel.vue'
export default {
  components: { AslCarousel },
    data(){
		return {
			products: []
		}
	},

	async created(){

		await this.$store.dispatch('product/fetchSameCategoryProducts',{
			seo_url: this.$route.params.slug
		})

		this.products = this.$store.state.product.SAME_CATEGORY_PRODUCTS.products
	}
}
</script>

<style scoped>

</style>