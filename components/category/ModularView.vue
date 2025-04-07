<template>
	<section v-if="products.length > 0" class="ctg-modular-pd clear-cache ">
		<div class="container">
			<div class="ctg-pd-grid-box-top modular-products ">
				<div class="ctg-pd-grid-box_left" v-html="main_category.seo_h1">
					<div class="section-title">
						<h2 class="title">One family with different shapes on the same sofa</h2>
					</div>
					<div class="section-para">
						<p>Snugglers, straight-sitters, laid-backers, maximise your sofa to fit your whole family and their needs, whoever they are, however they sit.</p>
					</div>
				</div>
				<div class="ctg-pd-grid-box_right">
					<!-- <a href="#">See all modular sofas</a> -->
				</div>
			</div>
			<asl-carousel carousel_container_class="shop-category-slider ctg-product-modular-slide carousel-slides-container" carousel_slides_class="carousel-slides">
				<product-design v-for="(product,index) in products" :product="product" :key="index"/>
			</asl-carousel>
		</div>
	</section>
</template>

<script>
import AslCarousel from '../common/AslCarousel.vue'
import ProductDesign from '../common/ProductDesign.vue'
export default {
  components: { AslCarousel, ProductDesign },
  props: {
	  products: {
		  type: Array | Object,
		  default: () => []
	  },

	  main_category: {
		  type: Array | Object,
		  default: () => []
	  },

  },
  data(){
	  return {
		//   products: []
	  }
  },
    async created(){


	}
}
</script>
