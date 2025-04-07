<template>
    <div>
        <Breadcrumb :pathList="pathList"/>
        <div class="track-order-wrap">
           <div class="container">
                <div class="product-order-search_info">
                    <div class="section-title">
                        <h2 class="title">Track Your Order</h2>
                    </div>
                    <div v-if="err" class="trc-content alert alert-danger">
                        {{err}}
                    </div>
                    <form method="POST" @submit.prevent="getOrderData">

                        <label><strong>Your Order Number: </strong></label>
                        <div class="row">
                            <div class="col-md-6">
                                <input v-model="order_id" class="form-control p-2 mb-2" placeholder="Order Number" id="order_number" type="text"/>
                            </div>
                            <div class="col-md-6">
                                <input v-model="phone" class="form-control p-2" placeholder="Phone Number"  id="phone_number" type="text"/>
                            </div>
                            <div class="col-md-12">
                                <div class="input-group-btn">
                                    <input class="btn btn-default btn-default_trck common-btn_color" type="submit" value="Track Order">
                                </div>
                            </div>
                        </div>
                    </form>
                    <div v-if="orders.success === true" class="book-product-status">
                        <div>
                            Order status: <strong>{{orders.order_masters.order_status?orders.order_masters.order_status:'Placed'}}</strong> ,
                            Payment status: <strong>{{orders.order_masters.payment_term_status?orders.order_masters.payment_term_status:'Unkown'}}</strong>
                        </div>
                    </div>
                </div>
                <div v-if="orders.order_details && orders.order_details.length > 0" class="product-order-info">
                    <div class="section-title">
                        <h2 class="title">Order Information</h2>
                    </div>
                    <div class="table-responsive reg-hab form-group">
                        <table class="table table-bordered table-bordered_258">
                            <thead>
                                <tr>
                                    <td class="text-center" style="width: 10%;">Image</td>
                                    <td class="text-left" style="width: 55%;">Product Name</td>
                                    <td class="text-center" style="width:10%;">Product Code</td>
                                    <td class="text-left" style="width: 7%;">Quantity</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(product,key) in orders.order_details" :key="key">
                                    <td class="text-center" width="">
                                        <nuxt-link :to="'/product/'+product.product.seo_url" class="">
                                            <img :src="'https://admin.masterleatherbd.com/'+(product.first_image?product.first_image.full_size_directory:'')" loading="lazy" class="w-100 img-thumbnail w-100" alt="Chair" :title="product.product.title" width="70px" />
                                        </nuxt-link>
                                    </td>
                                    <td class="text-left">
                                        <div>{{product.product.title}}</div>
                                        <div>
                                           {{product.product.sub_title}}
                                        </div>

                                    </td>
                                    <td class="text-center">
                                        <span>{{product.product.product_code}}</span>
                                    </td>
                                    <td class="text-center" width="130px">
                                        <div class="quantity">{{product.qty}}</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-else-if="orders.success == true" class="text-danger text-center">
                    No product founds.
                </div>
           </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
export default {
    auth: false,
    data(){

        return {
            pathList: [{
                label: 'Track Order',
                link: '#'
            }],
            order_id: null,
            phone: null,
            err: null,
            orders: {}
        }
    },

    methods: {
        async getOrderData(){

            const self = this
            if(!this.phone || !this.order_id){
                this.err = "Please check order id & phone number"


                setTimeout(() => {
                    self.err = null
                },60000)

            }else{

                self.err = null

                await this.$store.dispatch('cart/fetchTrackOrder',{
                    phone: self.phone,
                    id: self.order_id,
                    ...this.$route.query
                })

                this.orders = this.$store.state.cart.TRACK_ORDER

                if(this.orders.success === false){
                        this.err = "Order does not exist."


                        setTimeout(() => {
                            self.err = null
                        },60000)

                }

            }
        }
    }
}
</script>

<style>
    button.btn.btn-default.btn-default_trck {
        padding: 7px 21px;
        margin-top: 15px;
        font-weight: bold;
    }
    .product-order-search_info .section-title{
        margin-bottom: 10px;
    }
    .product-order-info{
        margin-top: 50px;
    }
    .book-product-status{
        width: 100%;
        text-align: center;
        padding: 25px 0;
        border: 1px solid silver;
        margin-top: 30px;
    }
    .table td{
        vertical-align: middle;
    }
</style>
