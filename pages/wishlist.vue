<template>
    <div>
        <breadcrumb/>
        <div class="wishlist_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="section-title">
                            <h2 class="title">Wishlist</h2>
                        </div>
                        <div class="card card_258">
                            <div class="panel-body">
                                <div class="panel-body-table-area">
                                    <br>
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Details</th>
                                            <th scope="col" class="text-center">Price</th>
                                            <th scope="col" class="text-center">Edit</th>
                                            <th scope="col" class="text-center">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center" width="5%">
                                                    <a href="#">
                                                        <lazy-image src="/public/nuxt/assets/images/variant-img3.webp" alt="chair" title="chair" class="img-thumbnail" width="70px"/>
                                                    </a>
                                                </td>
                                                <td class="text-left">
                                                    <a href="#">
                                                        <strong>MADISON</strong>
                                                    </a>
                                                    <br>
                                                    <div>
                                                        <b>SKU:</b>
                                                        996751
                                                    </div>
                                                    <br>
                                                    <div>
                                                        <b>Short Details:</b>
                                                        BDH-237-2-1-66
                                                    </div>
                                                </td>
                                                <td class="text-center">
                                                    <div>৳ 13442.5 </div>
                                                </td>
                                                <td class="text-center">
                                                    <div></div>
                                                </td>
                                                <td class="text-center">
                                                    <div class="action_btn">
                                                        <button class="btn cart_btn"><i class="icon-cart-plus"></i></button> 
                                                        <button class="btn delete_btn"><i class="icon-cancel"></i></button> 
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
export default {
    
}
</script>

<style scoped>
    .wishlist_wrapper {
        font-size:14px;
        color:#606060
    }
    
   
</style>