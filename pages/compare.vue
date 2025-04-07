<template>
    <div>
        <Breadcrumb/>
       <div class="container">
           <div v-if="isNullProduct()" class="product_compare_wrap">
                <div class="section-title">
                    <h2 class="title">Product Comparison</h2>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <td colspan="4"><strong>Product Details</strong></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Image</th>
                                <!-- product img increase -->
                                <th v-if="products[0]" width="25%">
                                    <div class="fst_image">
                                        <nuxt-link :to="'/product/'+products[0].seo_url" target="_self" title="MADISON">
                                        <lazy-image :src="products[0].image_url" class="img-1 img-responsive" alt="MADISON" width="100%"/>
                                        </nuxt-link>
                                    </div>
                                </th>
                                <th v-if="products[1]" width="25%">
                                    <div class="fst_image">
                                        <nuxt-link :to="'/product/'+products[1].seo_url" target="_self" title="MADISON">
                                        <lazy-image :src="products[1].image_url" class="img-1 img-responsive" alt="MADISON" width="100%"/>
                                        </nuxt-link>
                                    </div>
                                </th>
                                <th v-if="products[2]" width="25%">
                                    <div class="fst_image">
                                        <nuxt-link :to="'/product/'+products[2].seo_url" target="_self" title="MADISON">
                                        <lazy-image :src="products[2].image_url" class="img-1 img-responsive" alt="MADISON" width="100%"/>
                                        </nuxt-link>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>Product Name</td>
                                <!-- product name increase -->
                                <th v-if="products[0]" width="25%">
                                    <nuxt-link :to="'/product/'+products[0].seo_url" target="_self">
                                         {{products[0].title}}
                                    </nuxt-link>
                                </th>
                                <th v-if="products[1]" width="25%">
                                    <nuxt-link :to="'/product/'+products[1].seo_url" target="_self">
                                            {{products[1].title}}
                                    </nuxt-link>
                                </th>
                                <th v-if="products[2]" width="25%">
                                    <nuxt-link :to="'/product/'+products[0].seo_url" target="_self">
                                        {{products[2].title}}
                                    </nuxt-link>
                                </th>
                            </tr>
                            <tr>
                                <td>Short Description</td>
                                <!-- product des increase -->
                                <th v-if="products[0]" width="25%">{{products[0].short_description}}</th>
                                <th v-if="products[1]" width="25%">{{products[1].short_description}}</th>
                                <th v-if="products[2]" width="25%">{{products[2].short_description}}</th>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <!-- product price increase -->
                                <td v-if="products[0]" style="text-align: center; color: red;font-weight: bold;">
                                    <div class="price">
                                        <span class="price-new">{{money_sign}} {{products[0].price_now.toLocaleString()}}</span>
                                    </div>
                                </td>
                                <td v-if="products[1]" style="text-align: center; color: red;font-weight: bold;">
                                    <div class="price">
                                        <span class="price-new">{{money_sign}} {{products[1].price_now.toLocaleString()}}</span>
                                    </div>
                                </td>
                                <td v-if="products[2]" style="text-align: center; color: red;font-weight: bold;">
                                    <div class="price">
                                        <span class="price-new">{{money_sign}} {{products[2].price_now.toLocaleString()}}</span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Specifications</td>
                                <!-- product speci increase -->
                                <th v-if="products[0]" width="25%">
                                    <p>Color : <span>Antique</span></p>
                                    <p>Size : <span>Double</span></p>
                                    <p>Material : <span>Metal</span></p>
                                    <p>Dimension : <span>L- 205 x W- 156.8 x H-85.5  CM</span></p>
                                </th>
                                <th v-if="products[1]" width="25%">
                                    <p>Color : <span>Antique</span></p>
                                    <p>Size : <span>Double</span></p>
                                    <p>Material : <span>Metal</span></p>
                                    <p>Dimension : <span>L- 205 x W- 156.8 x H-85.5  CM</span></p>
                                </th>
                                <th v-if="products[2]" width="25%">
                                    <p>Color : <span>Antique</span></p>
                                    <p>Size : <span>Double</span></p>
                                    <p>Material : <span>Metal</span></p>
                                    <p>Dimension : <span>L- 205 x W- 156.8 x H-85.5  CM</span></p>
                                </th>
                            </tr>
                            <tr>
                                <td></td>
                                <!-- product btn increase -->
                                <td v-if="products[0]">
                                    <div class="button_cp">
                                        <a href="javascript:void(0)" class="btn btn-block1" @click="removeCompare(products[0].id)">
                                        REMOVE
                                        </a>
                                        <a href="javascript:void(0)" class="btn btn-block">Add to cart</a>
                                    </div>
                                </td>
                                <td v-if="products[1]">
                                    <div class="button_cp">
                                        <a href="javascript:void(0)" class="btn btn-block1" @click="removeCompare(products[1].id)">
                                                 REMOVE
                                        </a>
                                       <a href="javascript:void(0)" class="btn btn-block">Add to cart</a>
                                    </div>
                                </td>
                                <td v-if="products[2]">
                                    <div class="button_cp">
                                        <a href="javascript:void(0)" class="btn btn-block1" @click="removeCompare(products[2].id)">
                                                REMOVE
                                        </a>
                                        <a href="javascript:void(0)" class="btn btn-block">Add to cart</a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
           </div>
           <loading :loading="loading" :empty="!isNullProduct()" notFoundTxt="Nothing to compare."/>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue';
export default {
  components: { Loading },
    auth: false,

    head(){

        return {
            title: "Compare"
        }
    },

    data(){

        return {
            loading: true,
            products: {
                "0": null,
                "1": null,
                "2": null
            }
        }
    },

    methods: {

        isNullProduct(){

            return this.products[0] || 
            this.products[1] ||
            this.products[2];
        },
        async productFormat(products){
            this.products[0] = products[0] ? products[0] : null;
            this.products[1] = products[1] ? products[1] : null;
            this.products[2] = products[2] ? products[2] : null;
        },

        async removeCompare(pid){

            this.loading = true

            await this.$store.dispatch('cart/fetchRemoveCompare',{
                pid: pid
            })


            const compare = this.$store.state.cart.ADD_TO_COMPARE
            this.compareRemove = compare.success;
            this.compareRemoveModalRequest = new Date()

            this.fetchCompare()
            await this.$store.dispatch('cart/fetchCountNotification')
            await this.$store.dispatch('cart/fetchCart',{})
            this.loading = false

        },

        async fetchCompare(){
            this.loading = true
                await this.$store.dispatch('cart/fetchCompare',{})
                const products = this.$store.state.cart.COMPARE.products
                this.productFormat(products)
            this.loading = false
        }


    },

    async created(){
        this.fetchCompare()
    }
}
</script>

<style scoped>
    .product_compare_wrap{
        font-size:15px;
        color:#606060;
    }
    a{
        color:#606060
    }
    a:hover{
        color:#000000
    }
    p {
        margin-bottom: 15px;
        font-size: 14px;
        color: #606060;
        line-height: 25px;
        font-weight: bold
    }
    .button_cp a {
        display: inline-block;
        width: 130px;
        margin-right: 8px;
    }
    .button_cp button {
        width: 130px;
        display: inline-block;
    }
</style>