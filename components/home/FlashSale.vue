<template>
	<section :class="[products.length > 0 ? '':'d-none']" class="inview-top-offers products-offers-wrapper clear-cache">
		<div class="container">
			<div class="products-offers-inner-wrap section-grap2">
				<div class="products-offers-header d-flex">
					<div class="section-title">
						<h2 class="title">{{$store.state.common.HEADER.flash_sale_title?$store.state.common.HEADER.flash_sale_title:'Flash Sale'}}</h2>
					</div>
                    <div class="product-flash-sale-timer d-flex">
                        <h4>Ending in</h4>
                        <div class="flash-sale-timer_count d-flex">
                            <div class="count_item">{{timer.days}}</div>
                            <div class="count_colon">:</div>
                            <div class="count_item">{{timer.hour}}</div>
                            <div class="count_colon">:</div>
                            <div class="count_item">{{timer.min}}</div>
                            <div class="count_colon">:</div>
                            <div class="count_item">{{timer.sec}}</div>
                        </div>
                    </div>
				</div>
				<div class="row product-list">
					<product-design v-for="(product,key) in products.slice(0,8)" :product="product.product" :key="key" :showPrice="flashSchedule.show_price" container_class="col-4 col-sm-6 col-lg-3 col-md-4 product-list-item"/>
				</div>
				<div class="pd-offers-read-btn">
					<nuxt-link to="/page/flash-sale" class="common-btn_color">View all</nuxt-link>
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
	  },
	  flashSchedule: {
		  default: null
	  }
  },
  data(){

	  return {
            timer: {
                days: '00',
                hour: '00',
                min: '00',
                sec: '00'
            },

	  }
  	},
	async created() {
		const self = this

       if(this.flashSchedule){





            // Set the date we're counting down to
            var countDownDate = new Date(self.flashSchedule.timestamp * 1000).getTime();

            // Update the count down every 1 second
            var xInt = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();
                
            // Find the distance between now and the count down date
            var distance = countDownDate - now;

          
                
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
            // Output the result in an element with id="demo"

                self.timer = {
                    days: days,
                    hour: hours,
                    min: minutes,
                    sec: seconds
                }
                
            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(xInt);
            }
            }, 1000);

       }

    }
}
</script>


<style scoped>
@media screen and (max-width: 576px) {
  .product-list .product-list-item:nth-last-child(-n+2) {
      display: none;
  }
}
</style>