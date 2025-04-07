<template>
    <!-- guides category wrapper -->
	<section :class="[products.length > 0?'':'d-none']" class="guides-category-wrapper clear-cache">
		<div class="container">
			<div class="shop-category-header">
				<div class="section-title">
					<h2 class="title">{{info.description ? info.description : 'Prebookings'}}</h2>
				</div>
			</div>
			<asl-carousel key="guides" carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
				<product-design v-for="(product,key) in products" :key="key" :product="product" container_class="product-design-container"/>
			</asl-carousel>
		</div>
	</section>
</template>
<script>
import AslCarousel from '../common/AslCarousel.vue'
import ProductDesign from '../common/ProductDesign.vue'
export default {
  components: { ProductDesign, AslCarousel },
  props:{
	  products: {
		  default: [],
		  type: Array
	  },
      info: {
          default: {},
          type: Object
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
	.product-design-container{
		flex-basis: calc(22% - 1.25rem * 2);
	}
</style>
