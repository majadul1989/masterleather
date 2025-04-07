<template>
        <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div @click="selectProduct($event,product,product_select.products.includes(product.id))" class="seater-box individual-box" :class="[product_select.products.includes(product.id)?'product-set-active':'product-default-border']">
        <div class="small-preview-box">
            <a href="javascript:void(0)">
                <lazy-image :src="product.image_url" alt="preview" class="w-100"/>
            </a>
        </div>
        <h6>
            <a href="javascript:void(0)"> {{product.title}} </a>
        </h6>
        <div class="info-seater">
            <div id="present_amount_new" class="present-amount"> {{money_sign}} {{product.price_now}}</div>
        </div>
        <div class="btn-group qty-handler" :data="JSON.stringify(product_select)">
            <button @click="decreament(product)" type="button" class="btn btn-minuse btn-default">
                -
            </button>
            <input name="item_qty" class="itm_qty0" type="text" :value="product_select.qty[product.id]?product_select.qty[product.id].qty:0" readonly>
            <button @click="increament(product)" type="button" class="btn btn-default">
                +
            </button>
        </div>
        </div>
        </div>
</template>

<script>
import LazyImage from '../common/LazyImage.vue'
export default {
  components: { LazyImage },
  props: {
      product: {},
      product_select: {}
  },
  methods: {

      selectProduct(event,product,selected){
          if(event.target.closest('.qty-handler') != null && !selected){
            this.$nuxt.$emit('select-set-product',product)
          }else if(event.target.closest('.qty-handler') == null){
              this.$nuxt.$emit('select-set-product',product)
          }
      },

      increament(product){
          this.$nuxt.$emit('qty-product-increament',product)
      },

      decreament(product){
        this.$nuxt.$emit('qty-product-decreament',product)
      }
  }
    
}
</script>

<style>

</style>