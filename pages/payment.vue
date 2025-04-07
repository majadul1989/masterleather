<template>
  <div>
    <Breadcrumb/>
    <div v-if="cartQty > 0 && !loading" class="payment-mathod_wrap clear-cache">
      <div class="container">
        <div class="py-mtd_content">
          <div class="section-title">
            <h2 class="title">Payment Method</h2>
          </div>
          <form method="POST" action="#" id="payment_method">
            <div class="row">
              <div class="col-md-12 col-lg-10 col-xl-7">
                <div class="row">
                  <div class="col-md-12">
                    <div v-if="show_address_save" class="alert alert-success">
                      <ul>
                        Your contact and address has been saved
                      </ul>
                    </div>

                    <div v-if="store_fail" class="alert alert-danger">
                      <ul>
                        {{ store_fail_msg }}
                      </ul>
                    </div>

                    <div class="payment-method-option">
                      <div class="payment-method-radio_wrap">
                        <div class="radio__input">
                          <label>
                            <input type="radio" checked="checked" name="radio" value="debitcredit"
                                   v-model="payment_method">
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div class="radio-payment-mathod_wrap">
                          <label for="">
                            <img alt="SSLCOMMERZ" class="offsite-payment-gateway-logo"
                                 src="https://cdn.shopify.com/s/files/applications/325516bd269d2eea4b21e72f11ca1cc9.png?height=24&amp;1446365798">
                          </label>
                          <div class="radio__label__accessory">
                            <ul>
                              <li>
                                <img
                                  src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                                  alt="">
                              </li>
                              <li>
                                <img
                                  src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                                  alt="">
                              </li>
                              <li>
                                <img
                                  src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                                  alt="">
                              </li>
                              <li>
                                <img
                                  src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg"
                                  alt="">
                              </li>
                              <li class="payment-icon-list__more">
                                <span>add more...</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="payment-method-radio_wrap" v-if="mobileBankingActive">
                        <div class="radio__input">
                          <label>
                            <input type="radio" name="radio" value="mobilebanking" v-model="payment_method">
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div class="radio-payment-mathod_wrap">
                          <label v-if="mobileBankingLogo">
                            <img v-bind:src="mobileBankingLogo" alt="Bkash" width="100px">
                          </label>
                          <label v-else>
                            Mobile Banking
                          </label>

                        </div>
                      </div>
                      <!-- <div class="payment-method-radio_wrap">
                          <div class="radio__input">
                              <label>
                                  <input type="radio" name="radio" value="bkash" v-model="payment_method">
                                  <span class="checkmark"></span>
                              </label>
                          </div>
                          <div class="radio-payment-mathod_wrap">
                              <label>
                               Bkash
                              </label>

                          </div>
                          v-if="$store.state.cart.CART.cash_on_delivery"
                      </div> -->

                      <div class="payment-method-radio_wrap" v-if="cashOnDeliveryActive">
                        <div class="radio__input">
                          <label>
                            <input type="radio" name="radio" value="cash_on_delivery" v-model="payment_method">
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div class="radio-payment-mathod_wrap">
                          <label v-if="cashOnDeliveryLogo">
                            <img v-bind:src="cashOnDeliveryLogo" alt="Bkash" width="100px">
                          </label>
                          <label v-else>
                            Cash on delivery
                          </label>

                        </div>
                      </div>


                      <div class="payment-method-radio_wrap" v-if="bkashActive">
                        <div class="radio__input">
                          <label>
                            <input type="radio" name="radio" value="bkash" v-model="payment_method">
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div class="radio-payment-mathod_wrap">
                          <label>
                            <img v-bind:src="bkashLogo" alt="Bkash" width="100px">
                          </label>

                        </div>
                      </div>

                      <div class="payment-method-radio_wrap" v-if="nagadActive">
                        <div class="radio__input">
                          <label>
                            <input type="radio" name="radio" value="nagad" v-model="payment_method">
                            <span class="checkmark"></span>
                          </label>
                        </div>
                        <div class="radio-payment-mathod_wrap">
                          <label>
                            <img v-bind:src="nagadLogo" alt="Nagad" width="100px">
                          </label>

                        </div>
                      </div>


                    </div>
                    <div class="checkbox-wrap mt-3">
                      <label>
                        <div class="checkbox--subtle checkbox">
                          <input id="terms_check" type="checkbox" name="terms_check" v-model="terms_check">
                          <span class="checkbox__symbol"></span>
                        </div>
                        I have read and agree to the
                        <a href="#"><strong>Terms &amp; Conditions</strong></a>
                      </label>
                    </div>
                  </div>
                  <!-- <div class="col-left col-md-12">
                      <div class="panel panel-default">
                          <div class="panel-heading">
                              <h4 class="panel-title"><i class="icon-login"></i> Create an Account or Login
                              </h4>
                          </div>
                          <div class="panel-body bun-stp blcke">
                              <a class="active" href="#">Guest Checkout</a>
                              <a href="#">Returning Customer</a>
                              <a href="#">Register Account</a>
                          </div>
                      </div>
                  </div> -->
                </div>
              </div>
              <div class="col-md-5 mobile-hide scroll-sticky">
                <sidebar :prevLink="'/checkout'" :goNext="goNext"/>
              </div>
              <div class="col-md-12 desktop-hide">
                <br>
                <div class="card card_258">
                  <div class="card-footer">
                    <div class="bar-buttonde" style="overflow: hidden; border-top: none;">
                      <div class="buttons carring-btn-gp">
                        <div class="pull-left">
                          <nuxt-link to="/checkout" class="btn btn-back-one common-btn_color font-weight-bold">
                            <span><i class="icon-arrow-left"></i></span> Back
                          </nuxt-link>
                        </div>
                        <div class="pull-right">
                          <a @click="goNext" id="checkout_payment_method"
                             class="btn pull-right btn-back-two common-btn_color font-weight-bold"
                             href="javascript:void(0)">
                            Next <span><i class="icon-arrow-right"></i></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div v-else-if="!loading && cartQty == 0" class="text-center">
      The shopping cart are empty
    </div>
    <div v-else class="text-center">
      Loading ..
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/checkout/Sidebar.vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import LazyImage from '~/components/common/LazyImage.vue'

export default {
  components: {LazyImage, Sidebar, Breadcrumb},
  auth: false,
  head() {

    return {
      title: 'Choose Payment | Master Leather BD'
    }
  },

  data() {

    return {
      payment_method: 'debitcredit',
      terms_check: false,
      show_address_save: true,
      store_fail: false,
      store_fail_msg: '',
      cartQty: 0,
      loading: true,
      bkashActive : false,
      bkashLogo : false,
      nagadActive : false,
      nagadLogo : false,
      mobileBankingActive : false,
      mobileBankingLogo : false,
      cashOnDeliveryActive : false,
      cashOnDeliveryLogo : false
    }
  },

  methods: {
    async goNext() {

      await this.$store.dispatch('cart/fetchStorePaymentMethod', {
        self_token: this.$store.state.user.SELF_TOKEN,
        terms_check: this.terms_check ? this.terms_check : null,
        payment_method: this.payment_method
      })

      if (this.$store.state.cart.STORE_PAYMENT_METHOD && this.$store.state.cart.STORE_PAYMENT_METHOD.success) {
        this.$router.push({path: '/review'});
      } else {
        this.store_fail = true
        this.store_fail_msg = this.$store.state.cart.STORE_PAYMENT_METHOD ? this.$store.state.cart.STORE_PAYMENT_METHOD.message : 'Unknown err'

        const self = this
        setTimeout(() => (self.store_fail = false), 20000)

      }

    },

    async getPaymentGateway(){
      const response = await this.$axios.$get('/api/cart/get-payment-gateway',{})
      console.log(response)
      this.bkashLogo = response.bkash.logo
      this.bkashActive = response.bkash.active

      this.nagadLogo = response.nagad.logo
      this.nagadActive = response.nagad.active

      this.mobileBankingLogo = response.mobile_banking.logo
      this.mobileBankingActive = response.mobile_banking.active

      this.cashOnDeliveryLogo = response.cash_on_delivery.logo
      this.cashOnDeliveryActive = response.cash_on_delivery.active

    }
  },

  async created() {
    const self = this
    setTimeout(() => (self.show_address_save = false), 5000)

    this.loading = true

    this.show_address_save = this.$store.state.cart.CHECKOUT_DELIVERY_ADDRESS && this.$store.state.cart.CHECKOUT_DELIVERY_ADDRESS.success;
    await this.$store.dispatch('cart/fetchCart', {})
    this.cartQty = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalqty : 0

    this.loading = false
    await this.getPaymentGateway()  //Load All payment gateways from backend

  }

}
</script>

<style scoped>
.payment-mathod_wrap {
  font-size: 15px
}

p {
  margin-bottom: 15px;
  font-size: 15px;
  color: #606060;
  line-height: 25px;
}

.debit-single {
  display: block;
  overflow: hidden
}

.debit-single .radio,
.checkbox-wrap .checkbox {
  margin-top: 6px;
  margin-right: 6px;
  float: left;
}

.debit-single .radio .radio__symbol {
  width: 15px;
  height: 15px;
}

.radio input[type="radio"]:checked ~ .radio__symbol::after {
  width: 7px;
  height: 7px;
}

.debit-single h2,
.debit-single span,
.debit-single label {
  float: left
}

.debit-single h2 img {
  width: 90px !important;
  margin-top: -14px;
}

.panel-heading h4 {
  font-size: 22px;
  color: #3c3c3c;
  font-weight: 500;
  margin-bottom: .5rem
}

.panel-body a:hover {
  color: #000
}

.checkbox-wrap .checkbox__symbol {
  width: 18px;
  height: 18px;
}

.checkbox-wrap .checkbox {
  margin-top: 4px;
}

/* contact info */
.payment-contact_info {
  border: 1px solid #d9d9d9;
  padding: 1.1428571429em;
  border-radius: 4px;
}

.pymnt-info_wrap {
  display: flex;
  margin-top: .8571428571em;
  padding-top: .8571428571em;
  border-top: 1px solid #e6e6e6;
}

.pymnt-info_wrap:first-child {
  border-top: 0;
  padding-top: 0;
  margin-top: 0;
}

.contact-label {
  color: #737373;
  padding-right: 1.1428571429em;
  flex: 0 1 5em;
}

.contact-address {
  flex: 5;
  color: #333;
  padding-right: 1.1428571429em;
}

.change-contact_info {
  max-width: 10em;
  font-size: .8571428571em;
}

.payment-method-option {
  border: 1px solid #d9d9d9;
  border-radius: 5px;
}

.radio__label__accessory ul li {
  list-style: none;
}

.payment-method-radio_wrap {
  display: table;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  padding: 1.1428571429em;
  border-top: 1px solid #d9d9d9;
}

.payment-method-radio_wrap:first-child {
  border: 0;
}

.payment-method-radio_wrap .radio__input {
  white-space: nowrap;
  display: table-cell;
}

.radio-payment-mathod_wrap {
  display: table-cell;
  width: 100%;
}

.radio-payment-mathod_wrap label {
  display: table-cell;
  width: 100%;
  font-weight: 500;
  color: #333;
}

.radio__label__accessory {
  vertical-align: middle;
  text-align: right;
  padding-left: .75em;
  white-space: nowrap;
  display: table-cell;
}

.radio__label__accessory li {
  border-radius: .2142857143em;
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  display: inline-block;
  cursor: default;
}

.radio__label__accessory li span {
  font-size: .8571428571em;
  color: #737373;
}

.payment-section__header {
  margin-bottom: 1.5rem;
  margin-top: 4rem;
}

.payment-section__header h2 {
  font-size: 1.2857142857em;
  line-height: 1.3em;
  color: #333;
}

.payment-section__header p {
  color: #545454;
  font-size: 14px;
  margin-top: 0.25em;
  margin-bottom: 0;
}

/* The container */
.radio__input label {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 14px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio__input label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid #ccc
}

/* On mouse-over, add a grey background color */
.radio__input label:hover input ~ .checkmark {

  border-color: #2196F3;
}

/* When the radio button is checked, add a blue background */
.radio__input label input:checked ~ .checkmark {
  background-color: #2196F3;
  border-color: transparent;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio__input label input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio__input label .checkmark[data-v-cff352c6]::after {
  top: 5px;
  left: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}

</style>
