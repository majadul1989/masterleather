<template>
    <div>

        <a @click="subscribeModalRequest()" href="javascript:void(0)" class="subscribe_btn text-decoration-none btn btn-link">Subscribe to our Newsletter</a>

        <modal modal_title="Subscribe" :modalRequest="modalRequest">

            <div v-if="success == null" class="text-center">
                <input type="email" class="form-control mb-2" v-model="email">
                <button @click="saveSubscribe" class="btn btn-success">Subscribe</button>
            </div>
            <div v-else class="text-center alert" :class="[success?'alert-success':'alert-danger']">
                Thank you for subscribe.
            </div>


        </modal>
    </div>
</template>

<script>
import Modal from '../common/Modal.vue'
export default {
    data(){

        return {
            modalRequest: false,
            email: '',
            success: null,
        }
    },

    methods: {

        subscribeModalRequest(){
            this.modalRequest = !this.modalRequest
        },

        async saveSubscribe(){
            await this.$store.dispatch('user/fetchSubscribe',{
                email: this.email
            })

            this.success = this.$store.state.user.SUBSCRIBE.success
        }
    }
}
</script>

Modal
<style scoped>
.subscribe_btn {
  background: #8bc34a;
  height: 29px;
  font-size: .875rem;
  line-height: 15px;
  border-radius: 0.2rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  display: block;
}
</style>
