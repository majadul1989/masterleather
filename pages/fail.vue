<template>
  <div>
    <Breadcrumb/>
    <div class="container text-center">
      <h2 v-if="errorMsg">{{errorMsg}}</h2>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue'
export default {
  name: "fail",
  auth: false,
  components: {Loading},
  data(){
    return {
      errorMsg: false,
    }
  },
  async created(){
    this.errorMsg = this.$route.query.data
    // console.log(this.$route.query.data)
  }
}
</script>

<style scoped>

</style>
