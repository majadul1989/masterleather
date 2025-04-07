<template>
	<section :class="[product_sets.length > 0 ? '':'d-none']" class="product-set-wrapper clear-cache">
		<div class="container">
			<div class="shop-category-header">
				<div class="section-title">
					<h2 class="title">Bundle Offers</h2>
				</div>
			</div>
			<asl-carousel carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
					<product-set-home-item v-for="(product,key) in product_sets" :key="key" :product="product"/>
			</asl-carousel>
			<div class="pd-offers-read-btn">
				<nuxt-link to="/page/bundle-offers" class="common-btn_color">View all Bundle</nuxt-link>
			</div>
		</div>
	</section>
</template>

<script>
import ProductDesign from '../common/ProductDesign.vue'
import ProductSetHomeItem from './ProductSetHomeItem.vue'
export default {
  components: { ProductDesign, ProductSetHomeItem },
  props:{
	  product_sets: {
		  type: Array,
		  default(){
			  return []
		  }
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

<style>
	.product-set-wrapper .product-design-container{
		flex-basis: calc(26% - 1.25rem * 2);
	}
</style>