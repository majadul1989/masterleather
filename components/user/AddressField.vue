<template>
            <tr class="next-table-row last first">
            <td class="next-table-cell first">
                <div class="next-table-cell-wrapper">
                     <div v-if="!addFieldStatus && !editEnable" class=""><span>{{name}}</span></div>
                    <input placeholder="Name" :class="[saveResponse.messages && saveResponse.messages.name?'border-danger':'']" v-else type="text" v-model="name" class="form-control">
                </div>
            </td>
            <td class="next-table-cell">
                <div class="next-table-cell-wrapper">
                    <div v-if="!addFieldStatus  && !editEnable" class="">
                        <!-- <span class="mod-address-item-tag tag-home">HOME</span> -->
                        <span>{{address}}</span>
                    </div>
                    <input v-else :class="[saveResponse.messages && saveResponse.messages.address?'border-danger':'']" type="text" v-model="address" class="form-control">
                </div>
            </td>
            <td class="next-table-cell">
                <div class="next-table-cell-wrapper">
                        <div v-if="!addFieldStatus  && !editEnable" class=""><span>{{region}}</span></div>

<!--                        <input placeholder="Region" v-else type="text" :class="[saveResponse.messages && saveResponse.messages.region?'border-danger':'']" v-model="region"  class="form-control">-->

                    <select v-else @change="getSelectedDivision" name="" id="" class="form-control"  :class="[saveResponse.messages && saveResponse.messages.region?'border-danger':'']"  required="required" v-model="region">
                      <option value="">Choose your Division</option>
                      <option v-for="divi in divisionList" :value="divi" :selected="divi==region ? true : false">{{divi}}</option>
                    </select>


                </div>
            </td>
              <td class="next-table-cell">
                <div class="next-table-cell-wrapper">
                  <div v-if="!addFieldStatus  && !editEnable" class=""><span>{{district}}</span></div>
                  <span v-else>
                    <select v-if="districtList" name="district" id=""  :class="[saveResponse.messages && saveResponse.messages.district?'border-danger':'']"  class="form-control district" v-model="district" required="required">
                      <option v-if="districtList" v-for="list in districtList" :value="list.district" :selected="list.district==district ? true : false">{{list.district}}</option>
                    </select>
                  </span>
                </div>
              </td>

            <td class="next-table-cell">
                <div class="next-table-cell-wrapper">
                    <div v-if="!addFieldStatus && !editEnable" class=""><span>{{phone}}</span></div>
                    <input placeholder="Phone" v-else :class="[saveResponse.messages && saveResponse.messages.phone?'border-danger':'']" type="text" v-model="phone" class="form-control">
                </div>
            </td>
            <td class="next-table-cell">
                <div class="next-table-cell-wrapper">
                <div v-if="id != null" class="mod-address-book-default custom-control custom-radio">
                    <span>
                       {{id == defaultBillingId?'Billing':''}}<br/>
                      {{id == defaultShippingId?'Shipping':''}}
                    </span>
                </div>
                </div>
            </td>
            <td class="next-table-cell last text-center">
                <a href="javascript:void(0)" @click="edit" v-if="!addFieldStatus && !editEnable" class="btn btn-sm btn-info"><i class="icon-edit"></i></a>
                <a href="javascript:void(0)" v-if="editEnable || addFieldStatus" @click="addFieldStatus?store():update()" class="btn btn-sm btn-success"><i class="fa fa-check"></i></a>
                <a href="javascript:void(0)" @click="addFieldStatus?cancel():edit()" v-if="addFieldStatus || editEnable" class="btn btn-sm btn-danger"><i class="icon-cancel"></i></a>
            </td>
            </tr>

</template>

<script>
export default {
    props: {
        addFieldStatus: {
            type: Boolean,
            default: false
        },

        cancel: {
            type: Function,
            default: () => {}
        },

        defaultBillingId: {
            default: null
        },

        defaultShippingId: {
            default: null
        },

        name: {
            type: String,
            default: ''
        },

        address: {
            type: String,
            default: ''
        },

        region: {
            type: String,
            default: ''
        },
        district: {
          type: String,
          default: ''
        },

        phone: {
            type: String,
            default: ''
        },

        id: {
            default: null
        },

        defaultType: {
            default: null
        },

    },

    data(){

        return {
            editEnable: false,
            saveResponse: {success: false},
            tempAddress: {},
            defaultSelected: null,
            divisionList : ['Dhaka', 'Chittagong', 'Khulna', 'Sylhet', 'Barisal', 'Rajshahi', 'Rangpur'],
            districtList : false,
        }
    },

    methods: {

        defaultSelecting(id){
            console.log(this.defaultSelected)
        },

      async getSelectedDivision(){
        this.loadDistrictByDivision(this.region);
      },
      async loadDistrictByDivision(division_id){
        let response = await this.$axios.$get('/api/common/districts-by-diviison/'+division_id);
        // console.log(response)
        if(response){
          this.districtList = response;
        }
      },


        edit(){
            this.editEnable = !this.editEnable
            this.saveResponse = {success: false}

            if(!this.editEnable){
                this.name = this.tempAddress.name
                this.address = this.tempAddress.address
                this.region = this.tempAddress.region
                this.district = this.tempAddress.district
                this.phone = this.tempAddress.phone
            }

          this.loadDistrictByDivision(this.tempAddress.region)

        },

        async store(){

            const attr = {
                name: this.name,
                address: this.address,
                region: this.region,
                district: this.district,
                phone: this.phone
            }

            await this.$store.dispatch('user/fetchAddressStore',attr)

            this.saveResponse = this.$store.state.user.ADDRESS_STORE

            if(this.saveResponse.success){
                this.saveResponse = {success: false}
                this.cancel()
            }
        },

        async update(){

            const attr = {
                name: this.name,
                address: this.address,
                region: this.region,
                phone: this.phone,
                district: this.district,
                id: this.id
            }

            await this.$store.dispatch('user/fetchAddressUpdate',attr)

            this.saveResponse = this.$store.state.user.ADDRESS_UPDATE
          if(this.saveResponse.success){
                this.saveResponse = {success: false}
                this.editEnable = false
            }

        },

    },
    async created(){

            this.tempAddress = {
                name: this.name,
                address: this.address,
                region: this.region,
                district: this.district,
                phone: this.phone
            }


    }
}
</script>
