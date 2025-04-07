<template>
    <div>
        <div xclass="lzd-playground-nav">

            <ul class="nav-container">
                <li class="item" id="Manage-My-Account">
<!--                  <nuxt-link class="active group-head" to="/user/dashboard" data-spm="Manage-My-Account">-->
<!--&lt;!&ndash;                    <i class="fas fa-th mr-1"></i><span>Manage My Account</span>&ndash;&gt;-->
<!--                    <i class="fas fa-th mr-1"></i><span>Account Setting</span>-->
<!--                  </nuxt-link>-->

                  <nuxt-link class="active group-head" to="/user/profile" data-spm="Manage-My-Account">
                    <!--                    <i class="fas fa-th mr-1"></i><span>Manage My Account</span>-->
                    <i class="fas fa-th mr-1"></i><span>Account Setting</span>
                  </nuxt-link>

<!--                    <ul class="item-container">-->

<!--                        <li id="My-profile" class="sub">-->
<!--                            <nuxt-link to="/user/profile" data-spm="My-profile">My Profile</nuxt-link>-->
<!--                        </li>-->
<!--                        <li id="Address-book" class="sub d-none">-->
<!--                            <nuxt-link to="/user/all_address" data-spm="Address-book">Address Book</nuxt-link>-->
<!--                        </li>-->
<!--                        <li id="Payment-methods" class="sub">-->
<!--                            <nuxt-link to="payment" data-spm="Payment-methods">My Payment Options</nuxt-link>-->
<!--                        </li>-->
<!--                        <li id="Vouchers" class="sub d-none">-->
<!--                            <nuxt-link to="/user/vouchers" data-spm="Vouchers">Vouchers</nuxt-link>-->
<!--                        </li>-->
<!--                    </ul>-->
                </li>



                <li id="Address-book" class="item">
                     <nuxt-link class="active group-head" to="/user/all_address" data-spm="Address-book">
                       <i class="fas fa-map-marker-alt mr-1"></i> <span>Address Book </span></nuxt-link>
                </li>
                <li class="item" id="My-Orders">
                    <nuxt-link class="group-head" to="/user/orders" data-spm="My-Orders">
                      <i class="fas fa-cart-arrow-down mr-1"></i><span>My Orders</span></nuxt-link>
                    <ul class="item-container d-none">
                        <li id="Returns" class="sub">
                            <nuxt-link to="/user/returns" >My Returns</nuxt-link></li>
                        <li id="Cancellations" class="sub">
                            <nuxt-link to="/user/cancellations" >My Cancellations</nuxt-link>
                        </li>
                    </ul>
                </li>
                <li class="item" id="My-Reviews">
                    <nuxt-link class="group-head" to="/user/reviews"><i class="fa fa-star mr-1"></i><span>My Reviews</span></nuxt-link>
                    <ul class="item-container">
                    </ul>
                </li>
                <li class="item d-none"  id="My-Wishlists">
                    <nuxt-link class=" group-head" to="/user/wishlist" data-spm="My-Wishlists"><i class="fas fa-bookmark mr-1"></i><span>My Wishlist</span></nuxt-link>
                </li>
                <li class="item" id="My-Wishlists">
                    <a class=" group-head" href="javascript:void(0)" @click="logout"><i class="fa-solid fa-power-off mr-1"></i><span>Logout</span></a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: "user-sidebar",
    methods: {
        logout(){
            this.$auth.logout()
        }
    }
}
</script>

<style scoped>

    ul li{
        list-style:none
    }
    .lzd-playground-nav{
        width:158px;
        margin-right:50px;

    }
    .lzd-playground-nav .member-info {
        font-size: 12px;
        line-height: 22px;
        color: #424242;
    }
    .lzd-playground-nav .member-info > p {
        line-height: 22px;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 158px;
    }
    .lzd-playground-nav .member-info > p span {
        display: inline-block;
        line-height: 22px;
        height: 22px;
    }
    .lzd-playground-nav .member-info .label img {
        margin: 4px 0 0 4px;
    }
    .lzd-playground-nav .nav-container .item {
        margin: 16px 0 0;
    }
    .nuxt-link-active{
        color: #0058a3!important;
    }
    .lzd-playground-nav .nav-container .item .item-container {
        list-style: none;
        margin: 0;
        padding: 0 0 0 16px;
    }
    .lzd-playground-nav .nav-container .item .item-container .sub a {
        font-size: 14px;
        color: #757575;
        letter-spacing: 0;
        line-height: 22px;
    }
    .lzd-playground-nav .nav-container .item .item-container .sub a:hover{
        color:#0058a3
    }
    .lzd-playground-nav .nav-container .item > a {
        color: #424242;
        font-size:16px;
    }
/*
    .sub {
      border-bottom: 1px solid #ddd;
      border-radius: 0;

    }
    .sub a {
      padding: 15px 20px;
      display: block;
      color: #5b5b5b;
    }
    .sub a.nuxt-link-active{
      color: #000 !important;
      font-weight: 600;
    }
    */

  .group-head {
    border-bottom: 1px solid #ddd;
    border-top: 0px solid #ddd;
    border-radius: 0;
    padding: 25px 20px;
    display: block;
    color: #5b5b5b;
    font-weight: 600;
    font-size: 18px;
  }
  .sub {
    padding: 2px 38px;
  }
</style>
