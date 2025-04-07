<template>
  <div class="sidebar-user-mobile mx-auto">

        <div class="row col-12">

            <div class="profile col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link class="active" to="/user/dashboard">
                    <div class="svg text-center">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-view-list" viewBox="0 0 16 16">
                            <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"/>
                        </svg>

                    </div>
                    <div>
                        Dashboard
                    </div>
                </nuxt-link>
            </div>

            <div class="profile col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/profile">
                    <div class="svg text-center">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>

                    </div>
                    <div>
                        My Profile
                    </div>
                </nuxt-link>
            </div>

            <div class="address-book col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/all_address">
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                            <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm-3 4c2.623 0 4.146.826 5 1.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1.245C3.854 11.825 5.377 11 8 11z"/>
                        </svg>
                    </div>

                    <div class="address">
                        Address
                    </div>
                </nuxt-link>

            </div>

            <div class="payment col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="payment">
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
                            <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
                        </svg>
                    </div>

                    <div class="payment-title">
                        Payment options
                    </div>
                </nuxt-link>

            </div>

            <div class="voucher col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/vouchers">
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                            <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                            <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>
                    </div>

                    <div class="voucer-title">
                        Vouchers
                    </div>
                </nuxt-link>

            </div>

            <div class="my-orders col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/orders">
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                    <div class="my-orders-title">
                        My Orders
                    </div>
                </nuxt-link>
            </div>

            <div class="order-returns col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/returns" >
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                        </svg>
                    </div>

                    <div class="order-returns-title">
                        Returns order
                    </div>
                </nuxt-link>

            </div>

            <div class="order-cancel col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/cancellations" >
                        <div class="svg">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708z"/>
                            </svg>

                        </div>

                        <div class="oreder-cancel">
                        Order Cancellations
                        </div>
                </nuxt-link>

            </div>


            <div class="product-reviews col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/reviews">

                   <div class="svg">

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                            <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
                            <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
                        </svg>

                   </div>

                    <div class="product-reviews-title">
                        Reviews
                    </div>
                </nuxt-link>
            </div>


            <div class="product-wishlist col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/user/wishlist">
                    <div class="svg">

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="" viewBox="0 0 16 16">
                                <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                    </div>

                    <div class="product-wishlist-title">
                        Wishlist
                    </div>
                </nuxt-link>

            </div>

            <div class="product-wishlist col-6 col-sm-4 mb-2 mt-2 text-center">
                <nuxt-link to="/compare">
                    <div class="svg">
                        <i class="icon-balance-scale"></i>
                    </div>

                    <div class="product-wishlist-title">
                        Compare
                    </div>
                </nuxt-link>


            </div>

            <div class="user-logout col-6 col-sm-4 mb-2 mt-2 text-center">
                <a href="javascript:void(0)" @click="logout">
                    <div class="svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                            <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                        </svg>
                    </div>
                    <div class="user-logout-title">
                        Logout
                    </div>
                </a>
            </div>

        </div>

  </div>
</template>

<script>
export default {
    name: "SidebarUserMobile",

    methods: {
        logout(){
            this.$auth.logout()
        }
    }
}
</script>

<style>

</style>