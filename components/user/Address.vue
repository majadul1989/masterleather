<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">Address Book</h2>
            </div>
            <div class="book">
                <div class="mod-address-book p-0">
                    <div class="mod-address-book-hd J-make-default-address">
                        <button type="button" @click="selectDefaultType('shipping')" class="next-btn next-btn-text next-btn-primary next-btn-medium">Make default shipping address</button>
                        <span class="split">|</span>
                        <button type="button" @click="selectDefaultType('billing')" class="next-btn next-btn-text next-btn-primary next-btn-medium">Make default billing address</button>
                    </div>
                    <div class="next-table only-bottom-border">
                        <div class="next-table-inner">
                            <div class="next-table-header">
                                <div class="next-table-header-inner">
                                    <table>
                                        <colgroup>
                                            <col style="width: 150px;">
                                            <col>
                                            <col style="width: 260px;">
                                            <col style="width: 150px;">
                                            <col style="width: 120px;">
                                            <col style="width: 150px;">
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <th rowspan="1" class="next-table-header-node first">
                                                <div class="next-table-cell-wrapper font-weight-bold">Full name</div>
                                                </th>
                                                <th rowspan="1" class="next-table-header-node">
                                                <div class="next-table-cell-wrapper font-weight-bold">Address</div>
                                                </th>
                                                <th rowspan="1" class="next-table-header-node">
                                                  <div class="next-table-cell-wrapper font-weight-bold">Region</div>
                                                </th>
                                                <th rowspan="1" class="next-table-header-node">
                                                  <div class="next-table-cell-wrapper font-weight-bold">District</div>
                                                </th>
                                                <th rowspan="1" class="next-table-header-node">
                                                <div class="next-table-cell-wrapper font-weight-bold">Phone Number</div>
                                                </th>
                                                <th rowspan="1" class="next-table-header-node text-center">
                                                    <div class="next-table-cell-wrapper font-weight-bold"></div>
                                                </th>
                                                <th rowspan="1" class="next-table-header-node last">
                                                <div class="next-table-cell-wrapper font-weight-bold"></div>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
<!--                          && Object.keys(addressList).length > 0-->
                            <div v-if="!loading" class="next-table-body">
                                <table>
                                    <colgroup>
                                        <col style="width: 150px;">
                                        <col>
                                        <col style="width: 260px;">
                                        <col style="width: 150px;">
                                        <col style="width: 120px;">
                                        <col style="width: 150px;">
                                    </colgroup>
                                    <tbody>
                                        <address-field :defaultBillingId="defaultBillingId"
                                                       :defaultShippingId="defaultShippingId"
                                                       v-for="(address,key) in addressList" :key="key" v-bind="address"/>

                                        <address-field :cancel="cancel" v-if="addFieldStatus" :addFieldStatus="addFieldStatus"/>
                                        <tr class="next-table-expanded-row">
                                            <td>&nbsp;</td>
                                            <td colspan="5">
                                                <div></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-else-if="loading" class="text-center">
                                Loading..
                            </div>
                            <div v-else>
                                Nothing founds.
                            </div>
                        </div>
                    </div>
                    <div class="mod-address-book-ft">
                        <button type="button" @click="addField" class="next-btn next-btn-warning next-btn-normal next-btn-large common-btn_color font-weight-bold">+ ADD NEW ADDRESS</button>
                    </div>
                </div>
            </div>
        </div>

        <Modal key="default_address_modal" :modalRequest="defaultAddressModal"
                :modal_title="'Deafult '+(defaultType=='billing'?'Billing':'Shipping')+' Address'">
                <label for="default_shipping_address">Choose</label>
                <select class="form-control" v-model="defaultAddressId">
                    <option value="">Select</option>
                    <option v-for="(address,key) in addressList" :key="key" :value="address.id">
                        {{address.name}} - {{address.address}} - {{address.phone}}
                    </option>
                </select>
                <button @click="saveDefaultAddress()" class="btn btn-success">Save</button>
        </Modal>

    </div>
</template>

<script>
import AddressField from './AddressField.vue'
export default {
  components: { AddressField },
    name:"user-address",
    data(){

        return {
            loading: false,
            addFieldStatus: false,
            addressList: [],
            defaultType: null,
            defaultAddressModal: null,
            defaultAddressId: null,
            defaultBillingId: null,
            defaultShippingId: null,
        }
    },
    methods: {

        async selectDefaultType(type){

            this.defaultType = type

            if(this.defaultType == 'billing'){
                await this.$store.dispatch('user/fetchDefaultBillingAddress')
                this.defaultAddressId =  this.$store.state.user.DEFAULT_BILLING_ADDRESS.address.id
                this.defaultBillingId =  this.$store.state.user.DEFAULT_BILLING_ADDRESS.address.id
            }else if(this.defaultType == 'shipping'){
                await this.$store.dispatch('user/fetchDefaultShippingAddress')
                this.defaultAddressId =  this.$store.state.user.DEFAULT_SHIPPING_ADDRESS.address.id
                this.defaultShippingId =  this.$store.state.user.DEFAULT_SHIPPING_ADDRESS.address.id
            }

            this.defaultAddressModal = new Date()

        },

        async saveDefaultAddress(){

            if(this.defaultType == 'billing'){
                await this.$store.dispatch('user/fetchSaveDefaultBillingAddress',this.defaultAddressId)
            }else if(this.defaultType == 'shipping'){
                await this.$store.dispatch('user/fetchSaveDefaultShippingAddress',this.defaultAddressId)
            }

            this.defaultAddressModal = new Date()

            await this.fetchAddress()

        },

        addField(){
            this.addFieldStatus = true
        },

        cancel(){
            this.addFieldStatus = false
            this.fetchAddress()
        },

        async fetchAddress(){

                this.loading = true
                await this.$store.dispatch('user/fetchAddressList',{})

                this.addressList = this.$store.state.user.ADDRESS_LIST.addresses


                await this.$store.dispatch('user/fetchDefaultBillingAddress')
                this.defaultBillingId =  this.$store.state.user.DEFAULT_BILLING_ADDRESS.address.id

                await this.$store.dispatch('user/fetchDefaultShippingAddress')
                this.defaultShippingId =  this.$store.state.user.DEFAULT_SHIPPING_ADDRESS.address.id


                this.loading = false
        }
    },

    async created(){
        await this.fetchAddress()
    }
}
</script>

<style>
    .book{
        position:relative
    }
    .mod-address-book {
        background-color: #fff;
        padding: 20px;
        min-height: 200px;
    }
    .book .mod-address-book {
        padding: 30px 40px;
    }
    .book .mod-address-book-hd {
        position: absolute;
        top: -40px;
        right: 2px;
        margin-bottom: 20px;
    }
    .next-btn-text.next-btn-medium{
        height: auto;
        padding: 0;
        font-size: 14px;
        line-height: 20px;
        border-width: 0;
        color: #0058a3;
        font-weight: 600;
        width:auto;
        cursor: default;
    }
    .mod-address-book-hd .split {
        color: #0058a3;
        padding: 0 15px;
    }
    .mod-address-book .next-table-cell-wrapper {
        font-size: 13px;
        padding: 12px 0 12px 10px !important;
    }
    .mod-address-book .mod-address-item-tag {
        border-radius: 8px;
        color: #fff;
        font-size: 9px;
        display: inline-block;
        height: 15px;
        text-align: center;
        vertical-align: text-bottom;
        line-height: 15px;
        margin-right: 5px;
        padding: 0 7px;
    }
    .mod-address-book .tag-home {
        background-image: linear-gradient(-143deg,#ff7b53,#ff4b28);
    }
    .mod-address-book-ft {
        text-align: right;
        margin-top: 24px;
    }
    .mod-address-book-ft button {
        font-size: 14px;
        min-width: 168px;
        height: 40px;
        line-height: 40px;
        margin-left: 12px;
    }
    .mod-address-book .next-table table tr:nth-child(2n+1) td {
        border: none;
    }

</style>
