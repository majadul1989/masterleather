<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">My profile</h2>
            </div>
            <div class="my-profile p-0" >
                <div v-if="pageMode=='profile'" class="my-profile-bd">

                    <div v-if="updateMSG != null" class="text-center alert font-weight-bold" :class="[success?'alert-success':'alert-danger']">
                        {{updateMSG}}
                    </div>

                    <div class="row">
                        <div class="col-sm-3">
                          <h6 class="mb-0">Full Name</h6>
                        </div>
                        <div class="col-sm-9 text-secondary">
                          <div v-if="editMode" class="my-profile-item-infos">
                            <input type="text" class="form-control" v-model="name" />
                          </div>
                          <div v-else class="my-profile-item-info">{{$store.state.auth.user.name}}</div>
                        </div>
                    </div>
                    <hr>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">

                      <div v-if="editMode">
                        <input type="text" class="form-control" v-model="email">
                      </div>
                      <div v-else class="my-profile-item-info">
                        {{$store.state.auth.user.email}}
                      </div>

                    </div>
                  </div>
                  <hr>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div v-if="editMode" class="my-profile-item-infos">
                        <input type="text" class="form-control" v-model="phone" />
                      </div>
                      <div v-else class="my-profile-item-info">{{$store.state.auth.user.phone}}</div>

                    </div>
                  </div>
                  <hr>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Birthday</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div v-if="editMode" class="my-profile-item-infos">
                        <date-picker v-model="birthday" valueType="format"></date-picker>
                      </div>
                      <div v-else class="my-profile-item-info">{{$store.state.auth.user.birthday}}</div>

                    </div>
                  </div>
                  <hr>

                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Gender</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      <div v-if="editMode" class="my-profile-item-infos">
                        <select  class="form-control" :v-model="gender">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                      <div v-else class="my-profile-item-info">{{$store.state.auth.user.gender}}</div>

                    </div>
                  </div>
                  <hr>

<!--                    <div class="row">-->

<!--                        <div class="col-12 col-md-6 p-1">-->
<!--                                <div class="my-profile-itemx">-->
<!--                                    <h3 class="my-profile-item-title">Full name</h3>-->
<!--                                    <div v-if="editMode" class="my-profile-item-infos">-->
<!--                                        <input type="text" class="form-control" v-model="name" />-->
<!--                                    </div>-->
<!--                                    <div v-else class="my-profile-item-info">{{$store.state.auth.user.name}}</div>-->
<!--                                </div>-->
<!--                        </div>-->


<!--                        <div class="col-12 col-md-6 p-1">-->

<!--                                <div class="my-profile-itemx">-->
<!--                                    <h3 class="my-profile-item-title">-->
<!--                                        <span>Email Address</span>-->
<!--                                        &lt;!&ndash; <span class="gray">|</span>  &ndash;&gt;-->
<!--                                        &lt;!&ndash; <a data-spm="demail_add">Add</a> &ndash;&gt;-->
<!--                                    </h3>-->
<!--                                    <div v-if="editMode">-->
<!--                                        <input type="text" class="form-control" v-model="email">-->
<!--                                    </div>-->
<!--                                    <div v-else class="my-profile-item-info">-->
<!--                                        {{$store.state.auth.user.email}}-->
<!--                                    </div>-->
<!--                                </div>-->

<!--                        </div>-->

<!--                        <div class="col-12 col-md-6 p-1">-->


<!--                            <div class="my-profile-itemx">-->
<!--                                <h3 class="my-profile-item-title">-->
<!--                                        Mobile-->
<!--                                        &lt;!&ndash; <span class="gray">|</span>  &ndash;&gt;-->
<!--                                        &lt;!&ndash; <a data-spm="dmobile_change">Change</a> &ndash;&gt;-->
<!--                                </h3>-->
<!--                                <div class="my-profile-item-info">-->

<!--                                    <input v-if="editMode" type="text" class="form-control" v-model="phone"/>-->
<!--                                    <span v-else>-->
<!--                                        {{$store.state.auth.user.phone}}-->
<!--                                    </span>-->
<!--                                </div>-->

<!--                            </div>-->

<!--                        </div>-->


<!--                        <div class="col-12 col-md-6 p-1">-->

<!--                            <div class="my-profile-itemx">-->
<!--                                <h3 class="my-profile-item-title">Birthday</h3>-->
<!--                                <date-picker v-if="editMode" v-model="birthday" valueType="format"></date-picker>-->
<!--                                <div v-else class="my-profile-item-info"><span class="gray">{{$store.state.auth.user.birthday}}</span></div>-->
<!--                            </div>-->

<!--                        </div>-->


<!--                        <div class="col-12 col-md-6 p-1">-->

<!--                                <div class="my-profile-itemx">-->
<!--                                    <h3 class="my-profile-item-title">Gender</h3>-->
<!--                                    <select v-if="editMode" class="form-control" :v-model="gender">-->
<!--                                        <option value="Male">Male</option>-->
<!--                                        <option value="Female">Female</option>-->
<!--                                    </select>-->
<!--                                    <div v-else class="my-profile-item-info">{{$store.state.auth.user.gender}}</div>-->
<!--                                </div>-->

<!--                        </div>-->


<!--                    </div>-->





                </div>
                <div v-else-if="pageMode=='password'" class="my-profile-bd">

                    <div v-if="updateMSG != null" class="text-center alert font-weight-bold" :class="[success?'alert-success':'alert-danger']">
                        {{updateMSG}}
                    </div>

                    <div class="d-block my-profile-item">
                        <h3 class="my-profile-item-title">Old password</h3>
                        <div class="my-profile-item-info">
                            <input type="password" name="old_password" class="form-control" v-model="old_password" autocomplete="off" />
                        </div>
                    </div>

                    <div class="my-profile-item">
                        <h3 class="my-profile-item-title">Password</h3>
                        <div class="my-profile-item-info">
                            <input type="password" name="password_new" class="form-control" v-model="password" autocomplete="off" />
                        </div>
                    </div>

                    <div class="my-profile-item">
                        <h3 class="my-profile-item-title">Confirm password</h3>
                        <div class="my-profile-item-info">
                            <input type="password" name="confirm_pass" class="form-control" v-model="password_confirmation" autocomplete="off" />
                        </div>
                    </div>


                </div>

                <div class="my-profile-ft d-inline-block">
                    <a href="javascript:void(0)" :class="[pageMode == 'profile'&& editMode?'btn btn-sm btn-success text-white font-weight-bold':'next-btn-warning btn-sm next-btn-normal']" @click="enableEdit" class="next-btn btn-sm next-btn-sm common-btn_color font-weight-bold">
                        {{pageMode == 'profile' && editMode?'SAVE':'EDIT PROFILE'}}
                    </a>
                    <a href="javascript:void(0)" @click="changePassword" :class="[pageMode == 'password' ? 'btn btn-sm btn-success text-white font-weight-bold':'next-btn-warning btn-sm next-btn-normal ']" class="next-btn next-btn-sm btn-sm common-btn_color font-weight-bold">
                      {{pageMode == 'password'  && editMode ? 'SAVE' : 'CHANGE PASSWORD'}}</a>
                </div>
                <div class="d-inline-block">
                  <subscribe/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import DatePicker from 'vue2-datepicker';
 import 'vue2-datepicker/index.css';
 import Subscribe from '../utils/Subscribe.vue';

export default {
    components: { DatePicker,Subscribe },

    data(){

        return {
            pageMode: 'profile',
            editMode: false,
            name: null,
            email: null,
            phone: null,
            birthday: null,
            gender: null,
            updateMSG: null,
            success: true,

            old_password: '',
            password: '',
            password_confirmation: '',

        }
    },

    methods: {

        defaultUserData(){
            this.name = this.$store.state.auth.user.name
            this.email = this.$store.state.auth.user.email
            this.phone = this.$store.state.auth.user.phone
            this.birthday = this.$store.state.auth.user.birthday
            this.gender = this.$store.state.auth.user.gender
        },

        async enableEdit(){

            if(this.pageMode == 'password'){
                this.editMode = false
            }

            this.updateMSG = null
            this.pageMode = 'profile'

            if(this.editMode){

               await this.$store.dispatch('user/fetchProfileUpdate',{
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    birthday: this.birthday,
                    gender: this.gender
                })

                await this.$auth.fetchUser()

                this.updateMSG = this.$store.state.user.PROFILE_UPDATE.message
                this.success = this.$store.state.user.PROFILE_UPDATE.success
                const self = this
                setTimeout(function(){
                    self.updateMSG = null
                },10000)
            }

            this.$auth.refreshTokens()

            this.editMode = !this.editMode
            if(!this.editMode){
                this.defaultUserData()
            }
        },

        async changePassword(){

            if(this.pageMode == 'profile'){
                this.editMode = false
            }

            this.updateMSG = null
            this.pageMode = 'password'

            if(this.pageMode == 'password' && this.editMode){

                await this.$store.dispatch('user/fetchChangePassword',{
                    old_password: this.old_password,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                })

                this.updateMSG = this.$store.state.user.CHANGE_PASSWORD.message
                this.success = this.$store.state.user.CHANGE_PASSWORD.success


                const self = this
                setTimeout(function(){
                    self.updateMSG = null
                },10000)

                // console.log(this.$store.state.user.CHANGE_PASSWORD)
                // console.log(this.updateMSG)

            }


            this.editMode = !this.editMode
        }
    },
    created(){
        this.defaultUserData()
    }
}
</script>

<style scoped>
    .my-profile {
        padding: 40px;
        background-color: #fff;
        font-size:12px
    }
    .my-profile-item {
        width: 33%;
        display: inline-block;
        padding-right: 10px;
        vertical-align: top;
        margin-bottom: 40px;
        box-sizing:border-box
    }
    .my-profile-item-title {
        color: #424242;
        font-size: 12px;
        font-weight: 400;
        margin-bottom: 10px;
    }
    .my-profile-item-info {
        color: #212121;
        font-size: 17px;
        padding-top: 7px;
    }
    .my-profile-item .gray {
        color: #9e9e9e;
    }
    .my-profile-item a {
        color: #0058a3;
    }
    .my-profile-ft {
        /*width: 288px;*/
        width: auto;
        margin-top: 10px;
    }
    .my-profile-ft a {
        margin-bottom: 5px;
        display: inline-block;
    }
    .my-profile-ft button {
        display: inline-block;
        width: 100%;
        margin-bottom: 10px;
    }
    .next-btn-large {
        margin: 0;
        height: 48px;
        padding: 0 36px;
        font-size: 14px;
        line-height: 46px;
        border-width: 1px;
        display: block;
        color:white;
        text-align: center;
    }
    .my-profile h6 {
      font-size: 17px;
      font-weight: 600;
      padding-top: 12px;
    }

</style>
