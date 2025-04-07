<template>
  <div>
    <breadcrumb />
    <div v-if="!loading && cartQty > 0" class="checkout-wrapper clear-cache">
      <form method="POST" action="" ref="checkout_address_form" @submit="submitForm" id="delivery_address">
        <div class="container">

          <div class="row">
            <div class="col-sm-12 col-md-7">
              <div class="row">
                <div class="col-md-12">
                  <div class="card card_258">
                    <div class="top-heading">
                      <div class="section-title">
                        <h2 class="title">Contact Information</h2>
                      </div>
                      <div class="log-in_info">
                        <span v-if="$auth.loggedIn"></span>
                        <span v-else> Already have an account? <nuxt-link to="/user/login">Log in</nuxt-link></span>
                      </div>
                    </div>

                    <!-- <div class="card-header card-header_258">
                        <h4 class="address-p_title">
                            <i class="icon-location"></i> Delivery Address
                            <span>
                                To add a new delivery address, please fill out the form below.
                            </span>
                        </h4>
                    </div> -->
                    <div class="card-body card-body_258">
                      <div id="account">
                        <input type="hidden" name="_token">
                        <div class="form-group">
                          <input name="id" type="hidden" value="">
                        </div>
                        <div class="form-group required">
                          <!-- <label for="name" class="control-label">Full Name</label> -->
                          <input v-model="user.name"
                                 :class="[!user.name.length && errors.name ?'border border-danger':'']" required=""
                                 class="form-control p-4" for="input-payment-firstname" placeholder="Full Name"
                                 name="name" type="text" value="" id="name">
                        </div>
                        <div class=" row form-group has-feedback required">
                          <!-- <label for="phone" class="control-label">Mobile Number</label> -->
                          <div class="mt-2 input-group col-sm-12 col-md-6">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">+88</span>
                            </div>
                            <input v-model="user.mobile"
                                   :class="[!user.mobile.length && errors.mobile ?'border border-danger':'']"
                                   required="" class="form-control p-4 p-4" for="input-payment-telephone"
                                   placeholder="Mobile Number" name="mobile" type="text" value="">
                          </div>
                          <div class="mt-2 input-group col-sm-12 col-md-6">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="basic-addon1">+88</span>
                            </div>
                            <input v-model="user.emergency_mobile"
                                   :class="[!user.emergency_mobile.length && errors.emergency_mobile ?'border border-danger':'']"
                                   required="" class="form-control p-4" for="input-payment-telephone"
                                   placeholder="Emergency Mobile Number" name="emergency_mobile" type="text" value="">
                          </div>
                        </div>
                        <!-- <div class="form-group has-feedback required">
                            <label for="emergency_phone" class="control-label">Emergency Mobile Number</label>

                        </div> -->
                        <div class="form-group required" :class="[$auth.loggedIn?'d-none':'']">
                          <!-- <label for="email" class="control-label">Email</label> -->
                          <input v-model="user.email" required=""
                                 :class="[!user.email.length && errors.email ?'border border-danger':'']"
                                 class="form-control p-4" for="input-payment-email" placeholder="Email " name="email"
                                 type="email" id="email">
                          <div class="show_message"></div>
                        </div>
                        <div class="form-group required">
                          <!-- <label for="districts" class="control-label">Choose your districts</label> -->
                          <!--                                                            <select v-model="user.district" name="district" class="form-control" id="district" required="required">-->
                          <!--                                                                <option value="">Choose your district</option>-->
                          <!--                                                                <option value="Dhaka" id="Dhaka">Dhaka</option>-->
                          <!--                                                                <option value="Outside Dhaka" id="Outside Dhaka">Outside Dhaka</option>-->
                          <!--                                                            </select>-->
                          <input required="" id="deliveryfee" name="deliveryfee" type="hidden">
                        </div>

                        <div class="form-group required disvision required">
                          <label for="division" class="control-label">Choose your division</label>
                          <select @change="getSelectedDivision" name="" id="" class="form-control" required="required"
                                  v-model="user.division">
                            <option value="">Choose your Division</option>
                            <option v-for="divi in divisionList" :value="divi"
                                    :selected="divi==user.division ? true : false">{{ divi }}
                            </option>

                          </select>
                        </div>
                        <!--                                                      <option value="Chittagong">Chittagong</option>-->
                        <!--                                                      <option value="Khulna">Khulna</option>-->
                        <!--                                                      <option value="Sylhet">Sylhet</option>-->
                        <!--                                                      <option value="Barisal">Barisal</option>-->
                        <!--                                                      <option value="Rajshahi">Rajshahi</option>-->
                        <!--                                                      <option value="Rangpur">Rangpur</option>-->
                        <div class="form-group required" v-if="districtList">
                          <label for="districts" class="control-label">Choose your districts</label>
                          <select name="district" id="" class="form-control district" v-model="user.district"
                                  required="required">
                            <option v-if="districtList" v-for="list in districtList" :value="list.district">
                              {{ list.district }}
                            </option>
                          </select>
                        </div>

                        <div id="address" class="required">
                          <div class="form-group required">
                            <label for="address" class="control-label">Address</label>
                            <textarea :class="[!user.address.length && errors.address ?'border border-danger':'']"
                                      v-model="user.address" required="" class="form-control p-4"
                                      for="input-payment-address-2" placeholder="Your Address" rows="3" name="address"
                                      cols="50" id="address"></textarea>
                          </div>
                          <div v-if="!$auth.loggedIn" class="form-group password-group">
                            <input class="square" id="create-account" name="create-account" type="checkbox"
                                   v-model="create">
                            <label for="permissions">Create my user account</label>
                            <div v-if="create" class="passfield">
                              <!-- <div class="form-group">
                                  <label for="username" class="title">Username</label>
                                  <input id="username" class="form-control p-4"  placeholder="Email " name="email" type="email" v-model="user.email">
                              </div> -->
                              <div class="form-group">
                                <label for="password" class="title">Password</label>
                                <input id="password" class="form-control p-4" placeholder="Password" name="password"
                                       type="password" v-model="user.password">
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-md-5 scroll-sticky">
              <sidebar prevLink="/cart" :goNext="goNext" :updateMSG="updateMSG" :deliverCharge="deliveryCharge" />
            </div>
            <div class="col-md-12 desktop-hide d-none">
              <div class="card card_258" style="margin-top: 10px;">

                <div v-if="updateMSG" class="text-center alert alert-danger">
                  {{ updateMSG }}
                </div>

                <div class="card-footer" style="overflow: hidden; border-top: none;">
                  <div class="buttons carring-btn-gp">
                    <div class="pull-left">
                      <nuxt-link to="/cart" class="btn btn-back-one common-btn_color font-weight-bold">
                        <span><i class="icon-arrow-left"></i></span> Back
                      </nuxt-link>
                    </div>
                    <div class="pull-right">
                      <button type="submit" class="btn btn-back-two common-btn_color font-weight-bold">
                        Next <span><i class="icon-arrow-right"></i></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="text-center" v-else-if="!loading && cartItem == 0">
      The shopping cart are empty !
    </div>
    <div v-else class="text-center">
      Loading...
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/checkout/Sidebar.vue'
import Breadcrumb from '~/components/common/Breadcrumb.vue'

export default {
  components: { Sidebar, Breadcrumb },
  auth: false,
  head() {

    return {
      title: 'Checkout | Master Leather BD'
    }
  },

  data() {

    return {
      loading: false,
      cartQty: 0,
      create: false,
      user: {
        name: '',
        email: '',
        mobile: '',
        emergency_mobile: '',
        district: '',
        address: '',
        username: '',
        password: '',
        division: null
      },
      divisionList: ['Dhaka', 'Chittagong', 'Khulna', 'Sylhet', 'Barisal', 'Rajshahi', 'Rangpur'],
      districtList: false,
      defaultShipping: {},
      updateMSG: null,
      errors: {},
      deliveryCharge: 0
    }
  },

  methods: {
    async submitForm(e) {

      e.preventDefault()
      this.goNext()

    },

    async goNext() {

      const user_data = {
        ...this.user,
        create: this.create,
        self_token: this.$store.state.user.SELF_TOKEN
      }
      await this.$store.dispatch('cart/fetchCheckoutDeliveryAddress', user_data)

      if (this.$store.state.cart.CHECKOUT_DELIVERY_ADDRESS && this.$store.state.cart.CHECKOUT_DELIVERY_ADDRESS.success) {
        this.$router.push({ path: '/payment' })
      } else {
        this.updateMSG = this.$store.state.cart.CHECKOUT_DELIVERY_ADDRESS.message

        const self = this
        self.errors = this.$store.state.cart.CHECKOUT_DELIVERY_ADDRESS.messages ? this.$store.state.cart.CHECKOUT_DELIVERY_ADDRESS.messages : {}

        setTimeout(function() {
          self.updateMSG = null
        }, 20000)
      }
      // await this.dataLayerBeginCheckout()
    },

    // async dataLayerBeginCheckout() {
    //
    //   if(typeof dataLayer != undefined && this.$store.state.cart.CART.cart.items){
    //     const self = this;
    //     let purchaseprice = 0;
    //     const dataLayerItems = this.$store.state.cart.CART.cart.items.map((item, index) => {
    //       purchaseprice += parseFloat(item.item.purchaseprice);
    //       return {
    //         item_id: item.info.code.toLocaleString(),
    //         item_name: item.info.title,
    //         affiliation: "MasterLeatherBD",
    //         coupon: "",
    //         currency: "BDT",
    //         discount: 0.00,
    //         index: index,
    //         item_brand: "MasterLeatherBD",
    //         item_category: item.info.product_category && item.info.product_category.length > 0 ? item.info.product_category[0].term_name : 'Furniture',
    //         item_list_id: item.info.code.toLocaleString(),
    //         item_list_name: item.info.sub_title,
    //         item_variant: "regular",
    //         location_id: "L_12345",
    //         price: parseFloat(item.item.purchaseprice),
    //         quantity: parseInt(item.item.qty)
    //       }
    //     })
    //     // console.log(this.deliveryCharge)
    //     dataLayer.push({ ecommerce: null });
    //     dataLayer.push({
    //       event: "begin_checkout",
    //       ecommerce: {
    //         'value': purchaseprice,
    //         'currency': "BDT",
    //         'coupon' : '',
    //         //'shipping_tier': this.deliveryCharge,
    //         'items': dataLayerItems
    //       }
    //     });
    //
    //
    //   }
    //
    // },

    async getSelectedDivision() {
      this.loadDistrictByDivision(this.user.division)
    },
    async loadDistrictByDivision(division_id) {
      let response = await this.$axios.$get('/api/common/districts-by-diviison/' + division_id)
      // console.log(response)
      if (response) {
        this.districtList = response
      }
    },


    async deliveryChargeCalc(val) {

      const self = this
      await this.$store.dispatch('cart/fetchDeliveryCharge', {
        district: val
      })
      this.deliveryCharge = this.$store.state.cart.DELIVERY_CHARGE.deliverycharge
      self.updateMSG = this.deliveryCharge > 0 ? `Delivery charge ${self.money_sign} ${self.deliveryCharge} for order amount below  ${self.money_sign} ${self.$store.state.cart.DELIVERY_CHARGE.charge_for_amount} of ${val}` : null

      setTimeout(function() {
        self.updateMSG = null
      }, 5000)
    }

  },

  watch: {
    'user.district': {
      handler(val) {
        this.deliveryChargeCalc(val)
      },
      immediate: true
    }
  },

  async created() {
    this.loading = true

    await this.$store.dispatch('cart/fetchCart', {})
    this.cartQty = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalqty : 0


    if (this.$auth.loggedIn) {
      // this.user.name =
      await this.$store.dispatch('user/fetchDefaultShippingAddress')
      this.defaultShipping = this.$store.state.user.DEFAULT_SHIPPING_ADDRESS.address

      this.user.name = this.defaultShipping.name ? this.defaultShipping.name : ''
      this.user.mobile = this.defaultShipping.phone ? this.defaultShipping.phone : ''
      this.user.emergency_mobile = this.$store.state.auth.user.emergency_mobile ?? ''
      this.user.district = this.defaultShipping.district ? this.defaultShipping.district : ''
      this.user.division = this.defaultShipping.region ? this.defaultShipping.region : ''
      this.user.address = this.defaultShipping.address ? this.defaultShipping.address : ''
      this.user.email = this.$auth.user ? this.$auth.user.email : ''

      if (this.user.division) {
        this.loadDistrictByDivision(this.user.division)
      }
    }
    let district = this.user.district == 'Dhaka' ? 'Dhaka' : 'Outside Dhaka'
    await this.deliveryChargeCalc(district)

    this.loading = false

    // console.log(this.$store.state.auth.user.emergency_mobile ?? this.$store.state.auth.user.phone)
  }
}
</script>

<style scoped>
#delivery_address .card {
  border: 0;
  padding-left: 0;
  padding-right: 0;
  max-width: 90%;
  margin: auto;
}

#delivery_address .card-body {
  padding: 0;
}

#delivery_address .card .form-control {
  font-size: 14px;
}

label.control-label {
  font-size: 15px;
  color: #333;
}

.form-control p-4::placeholder {
  color: #6c757d;
  opacity: 1;
}

.card-header_258 .address-p_title span {
  display: block;
  font-size: 13px;
  margin-top: 5px;
}

#district {
  display: block;
  padding: .9rem 1.5rem;
  height: auto;
}

#delivery_address .top-heading .section-title {
  float: left;
}

.log-in_info {
  text-align: right;
  float: right;
  color: #545454;
  line-height: 40px;
}

.log-in_info a {
  text-decoration: underline;
  font-weight: 600;
  color: #000;
}

.log-in_info a:hover {
  text-decoration: none;
}

</style>
