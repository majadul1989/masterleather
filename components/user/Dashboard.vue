<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">Manage My Account</h2>
            </div>
            <div v-if="!loading" class="dashboard">
                <div class="dashboard_item dashboard-profile">
                    <div class="dashboard-mod-title">Personal Profile <span>|</span> <nuxt-link to="/user/profile">EDIT</nuxt-link></div>
                    <div class="dashboard-info">
                        <div class="dashboard-info-item">{{$store.state.auth.user.name}}</div>
                        <div class="dashboard-info-item"></div>
                        <div class="dashboard-info-item last">
                            <subscribe/>
                        </div>
                    </div>
                </div>
                <div v-if="defaultShipping" class="dashboard_item dashboard-address">
                    <div class="dashboard-address-item shipping">
                        <div class="dashboard-mod-title">Address Book <span>|</span> 
                            <nuxt-link to="/user/all_address">EDIT</nuxt-link></div>
                        <div class="dashboard-address-default">DEFAULT SHIPPING ADDRESS</div>
                        <div class="dashboard-address-username">{{defaultShipping.name}}</div>
                        <div class="dashboard-address-detail">{{defaultShipping.address}}</div>
                        <div class="dashboard-address-detail">{{defaultShipping.region}}</div>
                        <div class="dashboard-address-phone">{{defaultShipping.phone}}</div>
                    </div>
                </div>
                <div v-if="defaultShipping" class="dashboard_item dashboard-address">
                    <div class="dashboard-address-item billing">
                        <div class="dashboard-mod-title">Address Book <span>|</span> 
                        <nuxt-link to="/user/all_address">EDIT</nuxt-link></div>
                        <div class="dashboard-address-default">DEFAULT BILLING ADDRESS</div>
                        <div class="dashboard-address-username">{{defaultBilling.name}}</div>
                        <div class="dashboard-address-detail">{{defaultBilling.address}}</div>
                        <div class="dashboard-address-detail">{{defaultBilling.region}}</div>
                        <div class="dashboard-address-phone">{{defaultBilling.phone}}</div>
                    </div>
                </div>
            </div>
            <div v-else-if="loading" class="text-center">
                <loading :loading="loading"/>
            </div>
        </div>
    </div>
</template>

<script>
import Subscribe from '../utils/Subscribe.vue'
export default {
  components: { Subscribe },
    
    data(){

        return {
            loading: true,
            defaultBilling: null,
            defaultShipping: null,
        }
    },

    async created(){
        this.loading = true

        await this.$store.dispatch('user/fetchDefaultBillingAddress')
        this.defaultBilling =  this.$store.state.user.DEFAULT_BILLING_ADDRESS.address

        await this.$store.dispatch('user/fetchDefaultShippingAddress')
        this.defaultShipping =  this.$store.state.user.DEFAULT_SHIPPING_ADDRESS.address

        this.loading = false
    }
}
</script>

<style scoped>
    .lzd-playground-right{
        width:100%
    }
    .dashboard-profile {
        height: 182px;
        background-color: #fff;
        padding: 16px;
    }
    .dashboard-mod-title {
        color: #212121;
        font-size: 16px;
        margin-bottom: 10px;
        height: 20px;
        line-height: 20px;
    }
    .dashboard-mod-title span {
        color: #dadada;
        font-size: 12px;
    }
    .dashboard-mod-title a {
        font-size: 12px;
    }
    .lzd-playground-right .dashboard{
        display:flex;
        width:100%
    }
    .lzd-playground-right .dashboard_item{
        width:33%;
        margin-right:12px;
    }
    .dashboard a {
        color: #0058a3;
    }
    .dashboard-info-item {
        font-size: 14px;
        color: #424242;
        margin-bottom: 10px;
    }
    .dashboard-info-item.last {
        margin-top: 20px;
    }
    .dashboard-address {
        background-color: #fff;
        padding: 16px;
        overflow: hidden;
        height: 182px;
    }
    .dashboard-address-item.shipping {
        padding-right: 16px;
    }
    .dashboard-address-default {
        margin:0;
        font-size: 12px;
        color: #757575;
    }
    .dashboard-address-username {
        font-size: 14px;
        color: #212121;
        margin-bottom: 10px;
        font-weight: 700;
    }
    .dashboard-address-item.billing .dashboard-mod-title {
        /* visibility: hidden; */
    }
</style>