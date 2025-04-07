<template>
    <div>
        <Breadcrumb :pathList="pathList"/>
        <div class="product-showroom-wrapper" :class="[loading?'d-none':'']">
           <div class="container">
                       <div class="product-showroom-services">
                           <div>
                               <input @keyup="search" type="text" class="form-control pull-right col-md-3 mb-3" v-model="searchTxt" placeholder="Search"/>
                           </div>
                           <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Area</th>
                                    <th scope="col">Zone</th>
                                    <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(cb,key) in chatbuy" :key="key">
                                        <td>{{cb.division}}</td>
                                        <td>{{cb.thana}}</td>
                                        <td>
                                            <a href="javascript:void(0)" @click="showDetails(key)">Details</a>
                                            <a href="javascript:void(0)">
                                                <img style="height:30px;width:30px;" :src="require('@/assets/images/whatsappIcon.png')"/>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                       </div>
           </div>
        </div>
        <loading :loading="loading"/>

        <modal :modalRequest="modalShowRquest" modal_title="Details">
            {{showDetail.title}}
        </modal>
    </div>
</template>

<script>
import Loading from '~/components/common/Loading.vue'
import Modal from '~/components/common/Modal.vue'
export default {
    auth: false,
    components: {
        Loading,
        Modal
    },

    data(){

        return {
            loading: false,
            searchTxt: '',
            pathList: [{
                label: 'Chatbuy',
                link:'#'
            }],

            showDetail: {},
            chatbuy: [],
            chatbuy_data: [],
            modalShowRquest: null
        }
    },

    methods: {
        search(){

            const searchTxt = this.searchTxt

            const chatbuy = this.chatbuy_data.filter(function(item){
                const string = `${item.division} ${item.thana}`

                return (string.toLowerCase()).includes(searchTxt.toLowerCase())
            })

            this.chatbuy = chatbuy
        },

        showDetails(key){
            this.showDetail = this.chatbuy[key]
            this.modalShowRquest = (new Date).getTime()
        }
    },

    async created(){

        this.loading = true
        await this.$store.dispatch('common/fetchChatbuy',{
            ...this.$route.query
        })
        this.chatbuy = this.$store.state.common.CHATBUY.chatbuy
        this.chatbuy_data = this.$store.state.common.CHATBUY.chatbuy
        this.loading = false
    }
}
</script>