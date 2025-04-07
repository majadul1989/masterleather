<template>
  <div>
    <breadcrumb />
    <div v-if="!loading" class="cart-wrapper clear-cache ">
      <div class="container">
        <div v-if="totalQty > 0" class="cart-content">
          <div class="section-title">
            <h2 class="title">Shopping Cart</h2>
          </div>
          <div class="row">
            <div class="col-sm-12 col-lg-6 col-xl-8">
              <form action="">
                <div class="cart-wrap">
                  <div class="cart-title">
                    <h2>
                      Product's
                    </h2>
                  </div>
                  <ul>
                    <li v-for="(item,key) in items" :key="key" class="product-item">

                      <nuxt-link :to="'/product/'+item.info.seo_url" class="product-img">
                        <lazy-image :src="item.info.image_url" alt="Chair" title="product img" class="w-100"
                                    width="70px" />
                        <!-- <img src="#" alt="" class="w-100"> -->
                      </nuxt-link>
                      <div class="product-details">
                        <nuxt-link :to="'/product/'+item.info.seo_url" class="product-name">
                          <span>{{ item.info.title }}</span>
                        </nuxt-link>
                        <!--                                                <span class="size">-->
                        <!--                                                    {{item.info.sub_title}}-->
                        <!--                                                </span>-->
                        <span>{{ item.item.sub_title }}</span>
                        <span class="vendor">
                                                    Product Code: <span>{{ item.info.code }}</span> <br>

                                                </span>
                        <div v-if="item.item.variation_id" class="d-none">
                          <div v-for="(data, ke) in item.item.variation_info.variations">
                            {{ ke }} :{{ data }}
                          </div>
                        </div>
                        <div class="price">
                          Unit Price: {{ money_sign }} {{ (item.purchaseprice).toLocaleString() }}
                        </div>
                        <div class="quantity">
                          <label class="qty">
                            Quantity: &nbsp;
                          </label>
                          <div class="extra item">
                            <a href="javascript:void(0)" class="dec button" @click="qtyDecreament(key,item)"></a>
                            <input class="number" :ref="'qty_'+key" type="number" :value="item.qty" min="1"
                                   @change="changeQty(item,$event)" @keydown="changeQty(item,$event)"
                                   @keyup="changeQty(item,$event)">
                            <a href="javascript:void(0)" class="inc button" @click="qtyIncreament(key,item)"></a>
                          </div>
                          <!-- <a href="#" class="update btn item" >
                          Update Cart
                              <i class="fa"></i>
                          </a> -->
                          <a class="remove btn item" href="javascript:void(0)"
                             @click="removeItem(item.info.id,item.info.code,item)">Remove</a>
                        </div>
                        <p class="mt-2">
                          <b> Total Price: {{ money_sign }} {{ (item.qty * item.purchaseprice).toLocaleString() }}</b>
                        </p>
                      </div>
                    </li>
                    <li v-for="(pset,key) in psets" :key="key" class="product-item">
                      <nuxt-link :to="'/product-set/'+pset.info.slug">
                        <lazy-image :src="pset.info.image_url" alt="Chair" title="product img" class="w-100"
                                    width="70px" />
                      </nuxt-link>
                      <div class="product-details">
                        <nuxt-link :to="'/product-set/'+pset.info.slug" class="product-name">
                          <span>{{ pset.info.title }}</span>
                        </nuxt-link>
                        <span class="size">
                                                    <small>{{ pset.info.sub_title }}</small>
                                                </span>
                        <span v-for="(pitem,pkey) in pset.items" :key="pkey" class="vendor">
                                                    <span>{{ pitem.item.qty }} x {{ pitem.info.title }} ,</span>
                                                </span>
                        <p class="price">
                          {{ money_sign }} {{ calculateSetPrice(pset) }}
                        </p>
                        <label class="qty">
                          Quantity:
                        </label>
                        <div class="quantity">
                          <div class="extra item">
                            <a href="javascript:void(0)" class="dec button"></a>
                            <input class="number" name="updates" :value="calculateSetQty(pset)" min="1" readonly>
                            <a href="javascript:void(0)" class="inc button"></a>
                          </div>
                          <!-- <a href="javascript:void(0)" class="update btn item" >
                          Update Cart
                              <i class="fa"></i>
                          </a> -->
                          <a class="remove btn item" href="javascript:void(0)" @click="removeSet(pset)">Remove</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </form>
            </div>


            <div class="col-sm-12 col-lg-6 col-xl-4 scroll-sticky">
              <div class="panel-group" id="accordion">
                <form method="POST" action="" @submit.prevent="couponApply">
                  <input name="_token" type="hidden">
                  <div class="cpn row justify-content-end">
                    <div class="col-md-12">
                      <div class="card">
                        <div class="card-body">
                          <h4 xclass="alert alert-success" v-if="couponApplied">
                            <!--
                            <span v-html="couponApplied"></span>
                            <button type="button" class="close" aria-label="Close" @click="removeCoupon">
                              <span aria-hidden="true">&times;</span>
                            </button>
                            -->
                            <h4 class="card-header_voucher ">
                              <span><i class="icon-ticket"></i></span> Do you have any coupon?
                            </h4>
                            <div class="input-group">
                              <input disabled v-model="coupon" class="form-control" id="coupon_code"
                                     placeholder="Enter your coupon here..." xname="coupon_code" type="text">
                              <span class="input-group-btn">
                                                            <input disabled id="apply_coupon"
                                                                   class="btn bordder-reades common-btn_color font-weight-bold"
                                                                   type="button" value="Apply Coupon">
                                                          </span>
                            </div>
                          </h4>
                          <div v-else>
                            <h4 class="card-header_voucher ">
                              <span><i class="icon-ticket"></i></span> Do you have any coupon?
                            </h4>
                            <div class="input-group">
                              <input v-model="coupon" class="form-control" id="coupon_code"
                                     placeholder="Enter your coupon here..." name="coupon_code" type="text">
                              <span class="input-group-btn">
                                                            <input :if="couponApplyBtnDisable ? 'disabled' : null "
                                                                   id="apply_coupon"
                                                                   class="btn bordder-reades common-btn_color font-weight-bold"
                                                                   name="apply_coupon" type="submit"
                                                                   value="Apply Coupon">
                                                          </span>
                            </div>
                          </div>
                          <div class="sob-total-area">
                            <table class="table table-bordered table-bordered_one">
                              <tbody>
                              <tr>
                                <td class="text-right">
                                  <strong>Sub-Total</strong>
                                </td>
                                <td class="text-right">{{ money_sign }} {{ subTotal.toLocaleString() }}</td>
                              </tr>
                              <tr>
                                <td class="text-right">
                                  <strong>Coupon Discount</strong>
                                </td>
                                <td class="text-right"> {{ discountLabel.toLocaleString() }}</td>
                              </tr>
                              <tr>
                                <td class="text-right">
                                  <strong>Total</strong>
                                </td>
                                <td class="text-right">
                                  {{ money_sign }} {{ grandTotal.toLocaleString() }}
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </div>
                          <h4 class="alert alert-success" v-if="couponApplied">
                            <span v-html="couponApplied"></span>
                            <button type="button" class="close" aria-label="Close" @click="removeCoupon">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </h4>
                          <div class="alert alert-danger" v-if="couponError">
                            <span v-html="couponError"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <br />
              <div class="card card_258">
                <div class="card-footer">
                  <div class="buttons buttons_one">
                    <div class="pull-left">
                      <a href="javascript:void(0)" @click="goNext" class="btn  common-btn_color font-weight-bold"
                         :class="[cartUpdated?'disabled btn-back-one':'btn-back-two']" id=" confirm_order">
                        PROCCED TO CHECKOUT <span><i class="fas fa-long-arrow-alt-right"></i></span>
                      </a>
                    </div>
                    <div class="pull-right">
                      <a href="javascript:void(0)" @click="updateCart()" class="btn common-btn_color font-weight-bold"
                         :class="[cartUpdated?'btn-back-two':'disabled btn-back-one']" id="update_cart">
                        <i class="icon-undo"></i> Update Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="text-center">
          The shopping cart are empty !
        </div>
      </div>
    </div>
    <div class="text-center" v-else>
      Loading ....
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'

export default {
  auth: false,
  head() {

    return {
      title: 'Cart | Master Leather BD'
    }
  },

  data() {

    return {
      loading: true,
      items: [],
      psets: [],
      subTotal: 0,
      discount: 0,
      discountType: false,
      discountLabel: 0,
      setDiscountAmount: 0,
      couponApplyBtnDisable: false,
      grandTotal: 0,
      totalQty: 0,
      cartUpdated: false,
      productQty: {},
      coupon: '',
      couponApplied: false,
      couponError: false
    }
  },

  methods: {

    calculateSetPrice(pset) {

      const price = pset.items.reduce(function(price, current) {
        return price + current.item.purchaseprice * current.item.qty
      }, 0)

      return price.toLocaleString()
    },

    calculateSetQty(pset) {
      const qty = pset.items.reduce(function(qty, current) {
        return qty + parseInt(current.item.qty)
      }, 0)

      return qty
    },

    changeQty(item, self) {

      this.productQty[item.info.code] = {
        id: item.info.id,
        code: item.info.code,
        qty: self.target.value
      }
      this.cartUpdated = true
    },

    qtyIncreament(key, item) {

      const val = parseInt(this.$refs[`qty_${key}`][0].value),
        cVal = val + 1,
        qty = cVal > 99 ? 99 : cVal

      if (qty != val) {
        this.productQty[item.info.code] = {
          id: item.info.id,
          code: item.info.code,
          qty: qty
        }

        this.cartUpdated = true
        this.$refs[`qty_${key}`][0].value = qty
      }

    },

    qtyDecreament(key, item) {


      const val = parseInt(this.$refs[`qty_${key}`][0].value),
        cVal = val - 1,
        qty = cVal < 1 ? 1 : cVal

      if (qty != val) {

        this.productQty[item.info.code] = {
          id: item.info.id,
          code: item.info.code,
          qty: qty
        }

        this.cartUpdated = true

        this.$refs[`qty_${key}`][0].value = qty
      }


    },

    async updateCart() {
      if (this.cartUpdated) {

        await this.$store.dispatch('cart/fetchUpdateCart', {
          items: this.productQty
        })

        await this.loadCart()
        await this.couponApply()
        // this.discountType = false;
        // this.discountLabel = 0;
        // this.couponApplied = false
        this.cartUpdated = false
        // this.couponError = false;
        // this.coupon = "";
      }
    },

    async loadCart() {
      this.loading = true

      await this.$store.dispatch('cart/fetchCart', {})
      await this.$store.dispatch('cart/fetchCountNotification')

      this.items = this.$store.state.cart.CART.cart && this.$store.state.cart.CART.cart.items ? this.$store.state.cart.CART.cart.items : []
      this.psets = this.$store.state.cart.CART.cart && this.$store.state.cart.CART.cart.psets ? this.$store.state.cart.CART.cart.psets : []
      //console.log(this.items)
      this.subTotal = Math.round(this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalprice : 0)
      this.grandTotal = Math.round(this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalprice : 0)
      this.totalQty = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalqty : 0

      this.loading = false

      // await this.dataLayerBeginCheckout()
    },

    async removeItem(product_id, product_code, item = {}) {

      await this.$store.dispatch('cart/fetchRemove', {
        pid: product_id,
        pcode: product_code,
        ...item
      })

      this.loadCart()

    },

    async removeSet(pset) {

      const items = pset.items,
        self = this

      if (items.length > 0) {
        const pidCodes = items.map(function(item) {

          return `${item.info.id}:${item.info.code}`
        }).join(',')

        await this.$store.dispatch('cart/fetchRemove', {
          pid_codes: pidCodes
        })

        // await this.dataLayerRemoveItem(pidCodes)

        await this.loadCart()


      }


    },

    async couponApply() {

      // console.log('coupon apply',this.coupon)
      this.couponApplyBtnDisable = true
      if (this.coupon) {
        await this.$store.dispatch('cart/fetchCouponApply', {
          coupon: this.coupon
        })
        let getCoupon = this.$store.state.cart.COUPON_APPLY.data
        if (getCoupon) {
          let purchase_range = getCoupon.purchase_range
          let purchase_range_sp = purchase_range ? purchase_range.split('-') : false
          let discountType = getCoupon.amount_type
          if (getCoupon.purchase_min && this.grandTotal < getCoupon.purchase_min) { // if Grand Total less then Minimum Purchase
            this.couponError = 'You have to purchase at least ৳' + getCoupon.purchase_min
            this.couponApplyBtnDisable = false
          } else {
            if (purchase_range && (this.grandTotal <= purchase_range_sp[0]) || this.grandTotal >= purchase_range_sp[1]) {

              this.couponError = `Minimum Total Purchase Amount have to ৳ ${purchase_range_sp[0]} - ${purchase_range_sp[1]}`
              this.couponApplyBtnDisable = false
            } else {
              this.couponApplyBtnDisable = true
              this.discount = getCoupon.price

              let setDiscount = discountType == 'Percentage' ? (this.grandTotal * this.discount) / 100 : this.discount

              this.discountLabel = discountType == 'Percentage' ? `${this.discount}%` : `৳${this.discount}`

              this.grandTotal = parseInt(this.grandTotal - setDiscount)
              this.setDiscountAmount = Math.round(setDiscount)
              this.couponApplied = this.coupon + ' Coupon Applied. You have got discount ' + this.discountLabel
              this.couponError = false
            }
          }

        } else {
          this.couponError = this.$store.state.cart.COUPON_APPLY.message
          this.couponApplyBtnDisable = false
        }

      }

    },

    async removeCoupon() {
      this.grandTotal = this.grandTotal + this.setDiscountAmount
      this.discount = 0
      this.discountLabel = 0
      this.couponApplied = false
      this.couponApplyBtnDisable = false
    },

    async goNext() {
      if (this.cartUpdated)
        return
      this.loading = true
      await this.$store.dispatch('cart/fetchCheckoutAddress', {
        // 'coupon' : this.coupon ?? false,
        'coupon': this.couponApplied ? this.coupon : false
      })
      const success = this.$store.state.cart.CHECKOUT_ADDRESS ? this.$store.state.cart.CHECKOUT_ADDRESS.success : false
      this.loading = false
      if (success) {
        this.$router.push({ path: '/checkout' })
      }

    }


    // async dataLayerBeginCheckout() {
    //
    //   if (typeof dataLayer != undefined && this.$store.state.cart.CART.cart.items) {
    //     const self = this
    //
    //     const dataLayerItems = this.$store.state.cart.CART.cart.items.map((item, index) => {
    //
    //       return {
    //         item_id: item.info.code,
    //         item_name: item.info.title,
    //         affiliation: 'MasterLeatherBD',
    //         coupon: this.coupon ?? '',
    //         currency: 'BDT',
    //         discount: this.discount,
    //         index: index,
    //         item_brand: 'MasterLeatherBD',
    //         item_category: item.info.product_category && item.info.product_category.length > 0 ? item.info.product_category[0].term_name : 'Furniture',
    //         item_list_id: item.info.code.toLocaleString(),
    //         item_list_name: item.info.sub_title,
    //         item_variant: 'regular',
    //         location_id: 'L_12345',
    //         price: parseFloat(item.item.purchaseprice),
    //         quantity: parseInt(item.item.qty)
    //       }
    //     })
    //     //console.log(dataLayerItems)
    //     //   dataLayer.push({ ecommerce: null });
    //     //   dataLayer.push({
    //     //       event: "begin_checkout",
    //     //       ecommerce: {
    //     //           items: dataLayerItems
    //     //       }
    //     //   });
    //
    //     // dataLayer.push({ ecommerce: null })
    //     // dataLayer.push({
    //     //   event: 'view_cart',
    //     //   ecommerce: {
    //     //     currency: 'BDT',
    //     //     value: self.grandTotal,
    //     //     items: dataLayerItems
    //     //   }
    //     // })
    //
    //
    //   }
    //
    // }

    // async dataLayerRemoveItem(pidCodes) {
    //
    //   if (typeof dataLayer != undefined && this.$store.state.cart.CART.cart.items) {
    //
    //     const dataLayerItems = this.$store.state.cart.CART.cart.items.filter((itm) => itm.info.code == pidCodes).map((itm) => {
    //
    //       return {
    //         item_id: itm.info.code.toLocaleString(),
    //         item_name: itm.info.title,
    //         affiliation: 'MasterLeatherBD',
    //         coupon: this.coupon ?? '',
    //         currency: 'BDT',
    //         discount: this.discount,
    //         index: 0,
    //         item_brand: 'MasterLeatherBD',
    //         item_category: 'Furniture',
    //         item_list_id: item.info.code.toLocaleString(),
    //         item_list_name: item.info.sub_title,
    //         item_variant: 'regular',
    //         location_id: 'L_12345',
    //         price: parseFloat(itm.item.purchaseprice),
    //         quantity: parseInt(itm.item.qty)
    //       }
    //
    //     })
    //
    //     dataLayer.push({ ecommerce: null })
    //     dataLayer.push({
    //       event: 'remove_from_cart',
    //       ecommerce: {
    //         items: dataLayerItems
    //       }
    //     })
    //   }
    //
    // }
  },

  async created() {
    await this.loadCart()

  }
}
</script>

<style scoped>
.cart-wrapper {
  font-size: 15px;
  color: #606060
}

.reg-hab .table td {
  vertical-align: middle;

}

a.btn.btn-dekleteing.dengerdsd {
  color: #333333a3;
  font-size: 15px;
  background: transparent;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s linear;
}

a.btn.btn-dekleteing.dengerdsd:hover {
  border-color: transparent;
  color: #fff;
  background: #0058a3
}

h4.card-header_voucher {
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 12px;
}

table.table.table-bordered.table-bordered_one {
  margin-top: 25px;
}

.pull-right {
  float: right;
}

.btn-back-two {
  font-weight: 600;
}

.btn.btn-back-two span {
  margin-left: 3px;
  font-weight: bold;
}

.btn-back-one {
  background: #808285;
  color: #FFF !important;
}

.card-footer a {
  font-size: 15px
}

.bordder-reades {
  padding: 4px 10px;
  border-radius: 0px 3px 3px 0px;
  height: 100%;
  font-size: 14px;
}

.form-control {
  padding: 6px 10px;
}

.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}

.reg-hab > table thead {
  border: 1px solid #dee2e6;
}

.reg-hab > table thead > tr > td {
  border: 0;
}

.reg-hab > table tbody > tr > td {
  border: 0;
}

.reg-hab > table tbody > tr {
  background: #fff;
  margin: 15px 0;

}

.table.table-bordered.table-bordered_258 {
  background: #fafafa;
  padding: 20px;
  display: block;
}

.reg-hab b, .reg-hab strong {
  font-weight: 600;
}


/* cart new design */
.cart-title h2 {
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: .05em;
  margin-bottom: 0;
  padding: 15px 45px;
  color: #000;
  background: #fafafa;
  line-height: 20px;
}

.cart-wrap ul {
  padding: 0;
  list-style: none;
  margin-bottom: 35px;
  margin-top: 0px;
  padding: 0 20px;
  padding-bottom: 1px;
  background: #fafafa;
}

.cart-wrap ul li {
  display: flex;
  flex-wrap: nowrap;
  padding: 25px 10px 30px 10px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
  margin-bottom: 20px;
}

.cart-wrap ul li .product-img {
  width: 120px;
  margin-right: 30px;
}

.cart-wrap .product-details {
  width: calc(100% - 72px);
}

.cart-wrap .product-details .product-name {
  font-size: 14px;
  color: #000;
  font-weight: bold;
  line-height: 22px;
  margin-bottom: 10px;
  display: block;
  text-transform: capitalize;
  margin-top: -5px;
}

.cart-wrap .product-details .size {
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 2px;
  display: block;
  color: #777777;
  font-style: italic;
}

.cart-wrap .product-details .vendor {
  color: #777777;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 12px;
  display: block;
  font-size: 12px;
  font-style: italic;
}

.cart-wrap .product-details .price {
  margin-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
  color: #000;
}

.cart-wrap .product-details .qty {
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: #0f0f0f;
  line-height: 20px;
}

.cart-wrap .product-details .quantity {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.cart-wrap .product-details .quantity .extra .button {
  width: 100%;
  max-width: 40px;
  text-align: center;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #7b7b7b;
  position: relative;
  height: 100%;
}

.cart-wrap .product-details .quantity .item {
  width: 100%;
  max-width: 152px;
  border: 1px solid #eeeeee;
  height: 42px;
  padding: 0 15px;
  border-radius: 1px;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  margin-right: 30px;
  background: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 40px;
  text-transform: uppercase;
  letter-spacing: .02em;
}

.cart-wrap .product-details .quantity .extra {
  border-color: #eeeeee;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
}

.cart-wrap .product-details .quantity .extra .button::before {
  content: "";
  width: 2px;
  height: 10px;
  background: #a7a7a7;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.cart-wrap .product-details .quantity .extra .button.dec::before {
  background: transparent;
}

.cart-wrap .product-details .quantity .extra .button::after {
  content: "";
  width: 10px;
  height: 2px;
  background: #a7a7a7;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);;
}

.cart-wrap .product-details .quantity .number {
  width: 100%;
  border: none;
  text-align: center;
  outline: none;
  height: 34px;
  line-height: 34px;
  padding: 0;
  max-width: 58px;
  background: transparent;
  border-right: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
}

.cart-wrap .product-details .quantity .update:hover {
  background: black;
  color: white;
  border-color: black;
}

.cart-wrap .product-details .quantity .remove:hover {
  border-color: #e7040f;
  color: #e7040f;
}


/* Chrome, Safari, Edge, Opera */
.quantity input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.quantity input[type=number] {
  -moz-appearance: textfield;
}

</style>
