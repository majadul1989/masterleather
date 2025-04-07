<template>
    <div v-if="products.length" class="similar-product-wrap" :class="classList">
		<div class="ctg-pd-grid-box-top">
			<div class="ctg-pd-grid-box_left">
				<div class="section-title">
					<h2 class="title">{{title}}</h2>
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
    props: {
		title: {
			type: String,
			default: 'Similar Products'
		},
		products: {
			type: Array | Object,
			default: () => []
		},
		classList: {}
	},
    data(){
		return {
			
		}
	},

	async created(){


	}
}
</script>

<style scoped>

</style>