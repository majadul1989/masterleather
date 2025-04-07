<template>
    <div v-if="products.length" class="suggestion-product-wrap section-grap">
		<div class="ctg-pd-grid-box-top">
			<div class="ctg-pd-grid-box_left">
				<div class="section-title">
					<h2 class="title">Goes well with</h2>
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

		await this.$store.dispatch('product/fetchGoesWellProducts',{
			seo_url: this.$route.params.slug
		})

		this.products = this.$store.state.product.GOES_WELL_PRODUCTS.products
	}
}
</script>

<style scoped>

</style>