<template>
    <div>
        <Breadcrumb/>
       <div class="container">
            <div class="valid_form_wrap">
                <div id="content">
                    <div class="section-title">
                        <h2 class="title">Reset Password</h2>
                    </div>
                </div>
                <form action="" @submit.prevent="submitForm">
                    <div v-if="message" :class="[success?'text-success':'text-danger']">{{message}}</div>
                    <div class="form-group required">
                        <label for="password" class=" control-label">Password</label>
                        <div class="">
                            <input v-model="password" class="form-control" placeholder="Enter password" name="password" type="password" id="password" required>
                            <!-- <span  class="message-error">The password field is required.</span> -->
                        </div>
                    </div>
                    <div class="form-group required">
                        <label for="confirm-pass" class=" control-label">Confirm Password</label>
                        <div class="">
                            <input v-model="password_confirmation" class="form-control" placeholder="Enter confirm password" name="confirm-pass" type="password" id="password" required>
                            <!-- <span  class="message-error">The password field is required.</span> -->
                        </div>
                    </div>
                    <div class="valid_submit_btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
       </div>
    </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
export default {
    auth: false,
    data(){

        return {
            success: null,
            message: null,
            password: '',
            password_confirmation:''
        }
    },

    methods: {
        async submitForm()
        {



                try {
                    
                        await this.$store.dispatch('user/fetchResetPassword',{
                            token: this.$route.query.token,
                            email: this.$route.query.email,
                            password: this.password,
                            password_confirmation: this.password_confirmation
                        })

                        this.message = this.$store.state.user.RESET_PASSWORD.message
                        this.success = typeof this.$store.state.user.RESET_PASSWORD.success != "undefined"?this.$store.state.user.RESET_PASSWORD.success:true


                } catch (error) {
                        this.message = 'Something went wrong, please try again later.'
                        this.success = false
                }

        


        }
    }

}
</script>

<style scoped>
    
</style>