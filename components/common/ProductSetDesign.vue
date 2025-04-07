<template>
  <div class="product-item" v-if="product">

    <div class="plp-checkbox--subtle plp-checkbox invisible">
      <input type="checkbox" name="checkboxname" id="checkbox" black="true" value="ett">
      <span class="plp-checkbox__symbol"></span>
    </div>
    <div class="wishlist-btn invisible">
      <a href="javascript:void(0)">
        <i class="icon-heart-empty"></i>
      </a>
    </div>

    <nuxt-link :to="'/product-set/'+product.slug">
      <div class="product-item-img">
        <lazy-image
          :src="product.image?product.image.full_size_directory:'public/uploads/fullsize/2019-01/default.jpg'"
          class="hide-img w-100" alt=""/>
        <lazy-image
          :src="product.image?product.image.full_size_directory:'public/uploads/fullsize/2019-01/default.jpg'"
          class="show-img w-100" alt=""/>
      </div>

      <span class="product-item-text">
                <span class="pd_name_highlight">{{ product.title }}</span>
                <span class="pd_description_title">{{ product.subtitle }}</span>
                <span class="pd_small_price"
                      v-if="parseInt(product.price_info.local_selling_price) > 0 && parseInt(product.price_info.discount_perchantage)"><s
                  class="text-muted">{{ money_sign }}. {{ product.price_info.local_selling_price.toLocaleString() }}</s> <p
                  class="font-weight-bold d-inline pd-discount-text">- {{ product.price_info.discount_perchantage }}%</p></span>
                <span class="pd_highlight_price"
                      v-if="product.price_info.price_now">{{ money_sign }}. <b>{{ product.price_info.price_now.toLocaleString() }}</b></span>
            </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    container_class: {
      type: String,
      default: 'col-md-4 col-sm-6 col-lg-3'
    },
    product: {
      type: Object
    }
  }
}
</script>

<style scoped>
.pd-discount-text {
  color: #ed022a;
}

</style>
