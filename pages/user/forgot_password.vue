<template>
    <div>
        <Breadcrumb/>
       <div class="container">
            <div class="valid_form_wrap">
                <div id="content">
                    <div class="section-title">
                        <h2 class="title">Forget Password</h2>
                    </div>
                </div>
                <form action="" @submit.prevent="submit">
                    <div class="form-group required">
                        <label for="email" class=" control-label">Email Address</label>
                        <div class="">
                            <input v-model="email" class="form-control" placeholder="Enter Email Address" name="email" type="email" id="email" required>
                            <span v-if="message" :class="[!success?'text-danger':'text-success']">
                                {{message}}
                            </span>
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
            email: ''
        }
    },

    methods: {

        async submit(){
            if(this.email){

                try {
                    
                await this.$store.dispatch('user/fetchPasswordResetLink',{
                    email: this.email
                })

                this.message = this.$store.state.user.FORGOT_PASSWORD_SENT_LINK.message
                this.success = true


                } catch (error) {
                    this.success = false
                    this.message = `We can't find a user with that email address.`
                }

            }
        }
    }

}
</script>

<style scoped>
    
</style>