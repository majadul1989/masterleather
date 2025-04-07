<template>
    <div>
        <Breadcrumb :pathList="pathList"/>
        <div class="product-showroom-wrapper" :class="[loading?'d-none':'']">
           <div class="container">
               <div class="row">
                   <div class="col-md-6 col-lg-6 ">
                        <div class="showroom-select-wrap">
                                <div class="showroom-title">
                                    <h3>District :</h3>
                                </div>
                                <div class="showroom-select-box">
                                    <select @change="districtChange($event)" id="district" class="form-control">
                                        <option value=""> Choose a District</option>
                                        <option :selected="selectedDistrict == item.district ? 'selected' : false " v-for="(item,key) in districts" :key="key" :value="item.district"> {{item.district}} </option>
                                    </select>
                                </div>
                            </div>
                       <div class="product-showroom-services">

                           <ul>
                               <li v-for="(showroom,key) in showrooms" :key="key">
                                    <div class="showroom-details">
                                        {{key+1}}. {{showroom.title}}
                                        <br>
                                        {{showroom.address}}
                                        <br>
                                        Phone: {{showroom.phone}}
                                    </div>
                                    <a @click="showOnMap(showroom)" href="javascript:void(0)" class="btn common-btn_color">SHOW MAP</a>
                               </li>
                           </ul>
                       </div>
                   </div>
                   <div class="col-md-6 col-lg-6" :class="[lat && lng && lat != '0' && lng != '0' ? '':'d-none']">
                        <div class="showroom-location-map">
                            <iframe :src="'https://maps.google.com/maps?q='+lat+','+lng+'&z=15&output=embed'" width="100%" frameborder="0" style="border:0"></iframe>
                        </div>
                   </div>
               </div>
           </div>
        </div>

        <loading :loading="loading"/>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue'
export default {
    auth:false,
    components: {Loading},

    data(){

        return {
            loading: false,
            districts: [],
            showrooms: [],
            pathList: [{link:'/page/showrooms',label:'Showrooms'}],
            selectedDistrict: false,
            lat: '23.781412',
            lng: '90.425478'
        }
    },

    methods: {

        async districtChange(event){
            // console.log(event.target.value)
            this.loading = true
            await this.$store.dispatch('common/fetchShowrooms',{
                district: event.target.value,
                ...this.$route.query
            })
            this.selectedDistrict = event.target.value;

            this.showrooms = this.$store.state.common.SHOWROOMS.showrooms

            this.loading = false

        },

        async showOnMap(showroom){

            this.lat = showroom.latitude
            this.lng = showroom.longitude

            if(!this.lat || !this.lng || this.lng == '0' || this.lat == '0'){
                this.lat = '23.781412'
                this.lng = '90.425478'
            }
            // console.log(this.lat,this.lng)
        }
    },

    async showMyCurrentLocationStore(district){


    },

    async created(){
        this.loading = true

        await this.$store.dispatch('common/fetchDistricts',{
            ...this.$route.query
        })
        this.districts = this.$store.state.common.DISTRICTS.districts

        await this.$store.dispatch('common/fetchShowrooms',{
            ...this.$route.query
        })

        this.showrooms = this.$store.state.common.SHOWROOMS.showrooms

        this.loading = false


        //if Location
        if(this.$route.query.location){
          this.loading = true
          await this.$store.dispatch('common/fetchShowrooms',{
            district: this.$route.query.location,
            ...this.$route.query
          })
          this.selectedDistrict = this.$route.query.location;
          this.showrooms = this.$store.state.common.SHOWROOMS.showrooms
          this.loading = false
        }



    },
}
</script>

<style>
    .showroom-area{
        border-right: 2px solid #DDD;
    }
    .showroom-select-wrap {
        display: flex;
        padding-right:45px;
    }
    .showroom-title{
        width: 20%;
    }
    .showroom-title h3 {
        margin: 0;
        padding: 0;
        font-size: 17px;
        margin-right: 12px;
        font-weight: 500;
    }
    .showroom-select-box{
        width: 90%;
        margin-bottom: 10px;
    }
    .form-check.form-check1 {
        margin-bottom: 4px;
        color: #222;
    }
    .form-check.form-check1 label{
        color: #000;
        font-size: 15px;
        line-height: 20px;
        display:inherit;
    }
    .product-showroom-services {
        margin-top: 20px;
    }
    .product-showroom-services ul {
        height: 512px;
        overflow: auto;
        list-style: none;
    }
    .product-showroom-services ul li {
        padding: 7px 0px;
        font-size: 15px;
        color: #000;
        line-height: 25px;
        position: relative;
    }
    .product-showroom-services ul li .btn.common-btn_color {
        padding: 5px 12px;
        font-size: 13px;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
    }
    .btn:focus{
        box-shadow: none;
    }
    .showroom-location-map iframe{
        height: 600px;
    }
</style>
