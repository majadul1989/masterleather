<template>
    <div :class="[info ? '':'d-none']" class="row">
    <div class="col-sm-12 col-md-8 col-lg-6">
        <div @click="fullProductSetSelect()" :data="JSON.stringify(product_select)" class="seater-box " :class="[product_select.fullset?'product-set-active':'product-default-border']">
        <div class="small-preview-box">
            <a v-if="info" href="javascript:void(0)">
                <lazy-image :src="info.image_url" class="w-100" alt="preview"/>
            </a>
        </div>
        <h6>
            <a v-if="info" href="javascript:void(0)">{{info.title}}</a>
        </h6>
        <div class="info-seater">
            <div v-if="info" id="present_amount_new" class="present-amount">{{money_sign}} {{info.price_all}} BDT</div>
        </div>
        </div>
    </div>
</div>
</template>

<script>
import LazyImage from '../common/LazyImage.vue'
export default {
  components: { LazyImage },
  props: {
      info: null,
      product_select: {
          default: {
              fullset: true
          }
      }
  },
  data(){
      return {
          
      }
  },
  methods: {
      fullProductSetSelect(){
          this.$nuxt.$emit('full-product-set',true);
      }
  },
}
</script>

<style>


</style>