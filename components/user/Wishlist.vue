<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">My Wishlist</h2>
            </div>
            <div class="my-wishlist">
                <div class="mod-header-tab">
                    <a href="#" class="active">My Wishlist<span>({{wishlists.length}})</span></a>
                </div>
                <!-- <div v-if="wishlists.length > 0" class="wishlist-bottom-mod">
                    <span><a href="#">ADD ALL TO CART</a></span>
                </div> -->
                <div v-if="cart_added != null" class="wishlist-bottom-mod">
                    <span v-if="cart_added" class="text-success">Product Successfully Added To Cart</span>
                    <span v-else class="text-danger">Product fail to add at cart !</span>
                </div>

                <div v-if="remove_wishlist != null" class="wishlist-bottom-mod">
                    <span v-if="remove_wishlist" class="text-success">Product successfully removed from wishlist</span>
                    <span v-else class="text-danger">Product fail to add at remove from wishlist !</span>
                </div>

               <div v-if="wishlists.length > 0 && !loading" class="card card_258">
                    <div class="panel-body">
                        <div class="panel-body-table-area">
                            <table class="table table-bordered table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Details</th>
                                    <th scope="col" class="text-center">Price</th>
                                    <th scope="col" class="text-center">#</th>
                                    <th scope="col" class="text-center">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(product,key) in wishlists" :key="key">
                                        <td class="text-center" width="5%">
                                            <nuxt-link :to="'/product/'+product.seo_url">
                                                <lazy-image :src="product.image_url" alt="chair" title="chair" class="img-thumbnail" width="70px"/>
                                            </nuxt-link>
                                        </td>
                                        <td class="text-left">
                                            <nuxt-link :to="'/product/'+product.seo_url">
                                                <strong>{{product.title}} - {{product.sub_title}}</strong>
                                            </nuxt-link>
                                            <br>
                                            <div>
                                                <b>SKU:</b>
                                                {{product.sku}}
                                            </div>
                                            <br>
                                            <div>
                                                <b>Short Details:</b>
                                                {{product.short_description}}
                                            </div>
                                        </td>
                                        <td class="text-center">
                                            <div>৳ {{product.product_price_now}} </div>
                                        </td>
                                        <td class="text-center">
                                            <div></div>
                                        </td>
                                        <td class="text-center">
                                            <div class="action_btn">
                                                <button @click="addToCart(product.id)" class="btn cart_btn"><i class="icon-cart-plus"></i></button> 
                                                <button @click="removeWishlist(product.id)" class="btn delete_btn"><i class="icon-cancel"></i></button> 
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div v-else-if="loading" class="text-center">
                    Loading.....
                </div>
                <div v-else-if="!loading && wishlists.length == 0" class="text-center">
                     Empty wishlist !
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){

        return {
            wishlists: [],
            loading: true,
            cart_added: null,
            remove_wishlist: null,
        }
    },

    methods: {

        async loadWishlist(){
            this.loading = true
            await this.$store.dispatch('user/fetchWishlist',{})
            this.wishlists = this.$store.state.user.WISHLIST.products

            this.loading = false
        },

        async removeWishlist(pid){
            const self = this;

            self.loading = true

            await this.$store.dispatch('user/fetchRemoveWishlist',{
                pid: pid
            })
            this.remove_wishlist = this.$store.state.user.REMOVE_WISHLIST?this.$store.state.user.REMOVE_WISHLIST.success: false;
            await this.$store.dispatch('cart/fetchCountNotification')
            await this.$store.dispatch('cart/fetchCart',{})

            setTimeout(() => {
                self.remove_wishlist = null
            },10000)
            this.loadWishlist()

            self.loading = false
        },

        async addToCart(pid){
            const self = this;

            self.loading = true

            await this.$store.dispatch('cart/fetchAdd',{
                main_pid: pid,
                qty: 1
            })
            await this.$store.dispatch('cart/fetchCountNotification')
            await this.$store.dispatch('cart/fetchCart',{})

            this.cart_added = this.$store.state.cart.ADD?this.$store.state.cart.ADD.success: false;

            setTimeout(() => {
                self.cart_added = null
            },10000)

            this.removeWishlist(pid)

            self.loading = false;
        },

    },

    async created(){
        this.loadWishlist()
    }
}
</script>

<style scoped>

    .mod-header-tab {
        border-bottom: 2px solid #dadada;
        margin-bottom: 8px;
    }
    .mod-header-tab a {
        color: #757575;
        height: 35px;
        line-height: 35px;
        display: inline-block;
        margin-right: 10px;
        font-size: 14px;
        padding: 0 12px;
        padding-bottom: 4px;
        position: relative;
        top: 2px;
    }
    .mod-header-tab span {
        padding-left: 3px;
    }
    .mod-header-tab a.active, .mod-header-tab a:hover {
        padding-bottom: 0;
        border-bottom: 4px solid #003e52;
    }
    .my-wishlist table{
        margin-bottom: 0;
    }
    .wishlist-bottom-mod {
        height: 48px;
        line-height: 48px;
        margin-top: 12px;
        padding-right: 20px;
        padding-left: 14px;
        background: #fff;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
    }
    .wishlist-bottom-mod a {
        color: #0058a3;
        font-size: 14px;
    }
</style>