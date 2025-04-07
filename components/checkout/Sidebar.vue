<template>
  <div v-if="(items.length > 0) || psets" class="products-order-summary">
    <table>
      <tbody>
      <tr v-for="(item,key) in items" :key="key" class="product-order_summery_info d-flex">
        <td class="product-img">
          <div class="product-thumbnail_info">
            <lazy-image classList="product-thumbnail img-thumbnail" :src="item.info.image_url" />
            <span class="product-thumbnail__quantity" aria-hidden="true">{{ item.qty }}</span>
          </div>

        </td>
        <th class="product-description">
          <span>{{ item.info.title }}</span>
          <!--                        <span>{{item.info.sub_title}}</span>-->
          <span style="font-size: 14px; color: #999">{{ item.item.sub_title }}</span>
          <span style="font-size: 14px; color: #999; font-weight: 400;">Product Code:{{ item.info.code }}</span>
          <span v-if="item.item.variation_id" class="d-none">
                            <span style="font-weight: 400;" v-for="(data, ke) in item.item.variation_info.variations">
                                {{ ke }} :{{ data }}
                            </span>
                        </span>

          <!--                      <span class="text-info" v-if="item.info.product_arrive">{{item.info.product_arrive.message}}</span>-->
        </th>
        <td class="product__price">
          <span>৳  {{ (item.qty * Math.round(item.purchaseprice)).toLocaleString() }}</span>
        </td>
      </tr>
      <tr v-for="(pset,key) in psets" :key="key" class="product-order_summery_info d-flex">
        <td class="product-img">
          <div class="product-thumbnail_info">
            <lazy-image :src="pset.info.image_url" classList="product-thumbnail img-thumbnail" alt="" />
            <span class="product-thumbnail__quantity" aria-hidden="true">1</span>
          </div>

        </td>
        <th class="product-description">
          <span>{{ pset.info.title }}</span>
          <span v-for="(pitem,pkey) in pset.items" :key="pkey">
                            {{ pitem.item.qty }} x {{ pitem.info.title }} ,
                        </span>
        </th>
        <td class="product__price">
          <span>{{ money_sign }}  {{ calculateSetPrice(pset) }}</span>
        </td>
      </tr>
      </tbody>
    </table>
    <table class="order-summary-total_info">
      <tr v-if="productMaximumArriveTime">
        <td class="text-center">
          <span class="text-info"> {{ productMaximumArriveTime }}</span>
        </td>
      </tr>
      <tr>
        <td colspan="6">Subtotal</td>
        <td style="text-align:right">{{ money_sign }} {{ subTotal.toLocaleString() }}</td>
      </tr>
      <tr>
        <td colspan="6">Coupon discount</td>
        <td style="text-align:right">{{ discountLabel.toLocaleString() }}</td>
      </tr>
      <tr>
        <td colspan="6">Delivery charge</td>
        <td style="text-align:right">{{ money_sign }}
          {{ (deliverCharge == null ? deliveryFee : deliverCharge).toLocaleString() }}
        </td>
      </tr>
      <tr>
        <td colspan="6">
          Total Price <br>
          <!-- <span>Including ৳1,374.13 in taxes </span> -->
        </td>
        <td style="text-align:right"> {{ money_sign }}
          {{ (grandTotal + parseInt((deliverCharge == null ? deliveryFee : deliverCharge))).toLocaleString() }}
        </td>
      </tr>
    </table>
    <div class="card card_258 " style="margin-top: 10px;">
      <div v-if="updateMSG" class="text-center alert alert-danger">
        {{ updateMSG }}
      </div>
      <div class="card-footer" style="overflow: hidden; border-top: none;">
        <div class="buttons carring-btn-gp">
          <div class="pull-left">
            <nuxt-link :to="prevLink" class="btn btn-back-one common-btn_color font-weight-bold">
              <span><i class="icon-arrow-left"></i></span> Back
            </nuxt-link>
          </div>
          <div class="pull-right">

            <a @click="goNext" id="checkout_payment_method"
               class="btn pull-right btn-back-two common-btn_color font-weight-bold" href="javascript:void(0)">
              Next <span><i class="icon-arrow-right"></i></span>
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LazyImage from '../common/LazyImage.vue'

export default {
  name: 'checkout-sidebar',
  components: { LazyImage },
  props: {
    goNext: {
      type: Function,
      default: () => null
    },
    prevLink: {
      default: '/cart'
    },
    updateMSG: null,

    deliverCharge: {
      default: null
    }

  },
  data() {

    return {
      items: [],
      psets: [],
      subTotal: 0,
      discount: 0,
      discountLabel: 0,
      grandTotal: 0,
      totalQty: 0,
      coupon: '',
      deliveryFee: 0,
      productMaximumArriveTime: false
    }
  },


  methods: {
    calculateSetPrice(pset) {

      const price = pset.items.reduce(function(price, current) {
        return price + current.item.purchaseprice * current.item.qty
      }, 0)

      return price.toLocaleString()
    }

    // async shippingDatalayer() {
    //
    //   if (typeof datalayer != undefined && this.prevLink == '/checkout') {
    //
    //     const self = this
    //     let dataItems = this.items.map((item, index) => {
    //
    //       return {
    //         item_id: item.info.id.toLocaleString(),
    //         item_name: item.info.title,
    //         currency: 'BDT',
    //         index: index,
    //         item_brand: 'Master Leather BD',
    //         price: parseFloat(item.purchaseprice),
    //         quantity: parseInt(item.qty),
    //         affiliation: 'Master Leather BD',
    //         coupon: this.coupon ?? '',
    //         discount: 0.00,
    //         item_category: item.info.product_category && item.info.product_category.length > 0 ? item.info.product_category[0].term_name : 'Furniture',
    //         item_list_id: item.info.code.toLocaleString(),
    //         item_list_name: item.info.sub_title,
    //         item_variant: 'regular',
    //         location_id: 'L_12345'
    //       }
    //     })
    //
    //     dataLayer.push({ ecommerce: null })
    //     dataLayer.push(
    //       {
    //         event: 'add_shipping_info',
    //         ecommerce: {
    //           currency: 'BDT',
    //           value: self.grandTotal,
    //           coupon: this.coupon ?? '',
    //           shipping_tier: 'Ground',
    //           items: dataItems
    //         }
    //       }
    //     )
    //
    //
    //   }
    //
    //
    // }


  },

  async created() {

    await this.$store.dispatch('cart/fetchCart', {})

    this.items = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.items : []
    this.psets = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.psets : []
    this.subTotal = Math.round(this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalprice : 0)
    this.discount = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.discount : 0
    this.productMaximumArriveTime = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.product_maximum_arrive_time : false


    let discountType = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.discount_type : false
    //console.log(discountType)
    let setDiscount = discountType == 'Percentage' ? (this.subTotal * this.discount) / 100 : this.discount

    this.discountLabel = discountType == 'Percentage' ? `${this.discount}%` : `${this.money_sign}${this.discount}`

    //console.log(this.$store.state.cart.CART.cart.totalprice);
    //this.grandTotal = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalprice : 0
    this.grandTotal = Math.round(this.$store.state.cart.CART.cart ? this.subTotal - setDiscount : 0)
    this.totalQty = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalqty : 0

    //console.log(this.$store.state.cart.CART.cart)
    if (this.deliverCharge == null) {
      this.deliveryFee = this.$store.state.cart.CART.pm ? this.$store.state.cart.CART.pm.deliveryfee : 0
    }

    // await this.shippingDatalayer()

  }
}
</script>

<style>

</style>
