<template>
    <div>
        <breadcrumb/>
        <div :class="[product_sets.length > 0 ?'':'d-none']" class="product-bundle-viewList">
            <div class="container">
                <div  class="section-title">
                    <h2 class="title">Bundle Offers</h2>
                </div>
                <div class="row">
                    <product-set-home-item container_class="col-6 col-sm-6 col-lg-3 col-md-4" v-for="(product,key) in product_sets" :key="key" :product="product"/>
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
import ProductSetHomeItem from '~/components/home/ProductSetHomeItem.vue'
export default {
  components: { ProductSetHomeItem, Loading },
    auth: false,
    data(){
        return {
            product_sets: [],
            loading: true
        }
    },

    async created(){

		await this.$store.dispatch('common/fetchProductSet',{
			sum: 0,
            ...this.$route.query
		})
        this.product_sets = this.$store.state.common.PRODUCT_SET.product_sets
        console.log('product sets',this.product_sets)

        this.loading = false


    }
}
</script>

<style >
    .product-bundle-viewList .product-item{
        margin-bottom: 30px;
    }
</style>