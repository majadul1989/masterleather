<template>
	<section :class="[products.length > 0 ? '':'d-none']" class="inview-top-offers products-offers-wrapper clear-cache">
		<div class="container">
			<div class="products-offers-inner-wrap section-grap2">
				<div class="products-offers-header">
					<div class="section-title">
						<h2 class="title">{{$store.state.common.HEADER.offer_title?$store.state.common.HEADER.offer_title:'Top Offers'}}</h2>
					</div>
				</div>
				<div class="row">
					<product-design v-for="(product,key) in products" :product="product" :key="key" container_class="col-4 col-sm-6 col-lg-3 col-md-4"/>
				</div>
				<div class="pd-offers-read-btn">
					<nuxt-link to="/page/top-offers" class="common-btn_color">View all offers</nuxt-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProductDesign from '../common/ProductDesign.vue'
export default {
  components: { ProductDesign },
  props:{
	  products: {
		  type: Array,
		  default: []
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