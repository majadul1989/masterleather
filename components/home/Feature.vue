<template>
    <section  :class="[sliders.length > 0 ? '':'d-none']" class="inview-feature-slider featured-wrapper  clear-cache">
		<div class="container">
			<asl-carousel key="feature" carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
				<feature-item v-for="(slider,key) in sliders" :key="key" :slider="slider"/>
			</asl-carousel>
		</div>
	</section>
</template>
<script>
import AslCarousel from '../common/AslCarousel.vue';
import FeatureItem from './FeatureItem.vue'
export default {
  components: { FeatureItem, AslCarousel },
  props:{
	  sliders: {
		  default: [],
		  type: Array
	  }
  },
  data(){
	  return {
		colors: [
			'f39189',
			'9fd8df',
			'28527a',
			'ff7171',
			'99bbad',
		]
}
  },
	methods:{
		
	},
	async mounted(){

	},
	async created() {


	}
}
</script>

<style>
    .featured-wrapper  .asl-carousel-container {
		margin: 4rem 0;
		padding-top: 4rem;
		border-top: 1px solid #cccccc;
	}


</style>
