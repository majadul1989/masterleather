<template>
    <div>
        <breadcrumb/>
        <div :class="[products.length > 0 ? '':'d-none']" class="product-offers-viewList">
            <div class="container">
                <div data-v-99723b20="" class="section-title">
                    <h2 data-v-99723b20="" class="title">Prebookings</h2>
                </div>
                <div class="row">
                     <product-design v-for="(product,key) in products" :product="product" :key="key"/>
                </div>
                <div class="view-more-set_btn text-center">
                    <button>
                    Show more
                    </button>
                </div>
            </div>
        </div>
        <loading :loading="loading"/>

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
            products: [],
            loading: true
        }
    },
    async created(){


		await this.$store.dispatch('home/fetchPrebookings',{
			sum: 0,
            ...this.$route.query
		})
        this.products = this.$store.state.home.PREBOOKINGS.products

       this.loading = false


    }
}
</script>

<style >
    .product-offers-viewList .product-item{
        margin-bottom: 20px;    
    }
</style>