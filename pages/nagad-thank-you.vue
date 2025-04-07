<template>
  <div>
    <Breadcrumb/>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue'


export default {
  name: "nagad-thank-you",
  components: {Loading},
  auth: false,
  head: {
    title: "Thank you | Master Leather BD",
  },
  data() {

  },
  methods: {}
}
</script>
