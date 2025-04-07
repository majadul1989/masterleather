<template>
  <div>

  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue'
export default {
  components: {Loading},
  auth: false,
  async created(){

    let orderRandom = this.$route.query.order_random
    let orderKey = this.$route.query.order_key
    this.$router.push(
      {
        name: 'thank-you',
        path: `/thank-you?order_random=${orderRandom}&order_key=${orderKey}`,
        query: {order_random: orderRandom, order_key: orderKey},
        params: {thankyou: true}
      });
  }
}
</script>
