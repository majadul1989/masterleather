<template>
    <div>
        <breadcrumb/>
        <div v-if="FLASH_SALE.flash_schedule" class="product-offers-viewList">
            <div class="container">
                <div class="section-title d-flex">
                    <h2 class="title">{{$store.state.common.HEADER.flash_sale_title?$store.state.common.HEADER.flash_sale_title:'Flash Sale'}}</h2>
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
                <div class="row">
                     <product-design v-for="(product,key) in FLASH_SALE.flash_items.data" :showPrice="FLASH_SALE.flash_schedule.show_price" :product="product.product" :key="key"/>
                </div>
                <div class="view-more-set_btn text-center">
                    <button>
                    Show more
                    </button>
                </div>
            </div>
        </div>
        <loading :loading="loading" :empty="!FLASH_SALE.flash_schedule"/>

    </div>
</template>

<script>
import Loading from '~/components/common/Loading.vue'
import ProductDesign from '~/components/common/ProductDesign.vue'
export default {
  components: { ProductDesign,Loading },
    auth: false,

    data(){

        return {
            FLASH_SALE: [],
            timer: {
                days: '00',
                hour: '00',
                min: '00',
                sec: '00'
            },
            loading: true
        }
    },
    async created(){

        const self = this

		await this.$store.dispatch('common/fetchFlashSale',{
			sum: 0,
            ...this.$route.query
		})
       this.FLASH_SALE = this.$store.state.common.FLASH_SALE
       this.loading = false

       if(this.FLASH_SALE.flash_schedule){



            // Set the date we're counting down to
            var countDownDate = new Date(self.FLASH_SALE.flash_schedule.timestamp * 1000).getTime();

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



        //    setInterval(function(){

		// 	    const unixTime = new Date(self.FLASH_SALE.flash_schedule.timestamp * 1000)
        //         const getTimeDiff = unixTime.getTime() - new Date().getTime()

        //         const time = new Date( getTimeDiff )

        //         self.timer = {
        //             hour: time.getHours() + (time.getDay()*24) ,
        //             min: time.getMinutes(),
        //             sec: time.getSeconds()
        //         }


        //    },1000)

       }



    }
}
</script>

<style >
    .product-offers-viewList .product-item{
        margin-bottom: 20px;    
    }
</style>