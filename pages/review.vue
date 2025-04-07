<template>
  <div>
    <Breadcrumb/>
    <div :class="[items.length > 0 || psets?'':'d-none']" class="product-review-wrapper">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <br>
            <div class="card card_258">
              <div class="card-header card-header_258">
                <h4 class="title">
                  <span style="margin-right: 7px; font-size: 18px;"><i class="icon-basket"></i></span>
                  Order Review
                </h4>
                <p>
                  Review your order properly before hitting <b>Pay Now</b> button down below.
                </p>
                <div class="alert alert-success">
                  <ul>
                    Your preferred payment method has been selected successfully
                  </ul>
                </div>
              </div>
              <div class="panel-body">
                <div class="panel-body-table-area">
                  <br>
                  <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Details</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Unit Price</th>
                      <th scope="col" class="text-right">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item,key) in items" :key="key">
                      <td class="text-center" width="5%">
                        <nuxt-link :to="'/product/'+item.info.seo_url">
                          <lazy-image :src="item.info.image_url" alt="chair" title="Chair" class="img-thumbnail"
                                      width="70px"/>
                        </nuxt-link>
                      </td>
                      <td class="text-left">
                        <nuxt-link :to="'/product/'+item.info.seo_url">
                          <b>{{ item.info.title }}</b>
                        </nuxt-link>
                        <br>
                        <div>
                          <b>SKU:</b>
                          {{ item.info.code }}
                        </div>
                        <div>
                          {{ item.item.sub_title }}
                        </div>

                        <div>
                          <b>Short Details:</b>
                          - {{ item.info.short_description }}
                        </div>
                        <div v-if="item.item.variation_info" class="d-none">
                          <div v-if="item.item.variation_id" v-for="(data, ke) in item.item.variation_info.variations">
                            <b>{{ke}} :</b>{{data}}
                          </div>
                        </div>

                      </td>
                      <td class="text-left" width="80px">
                        <div class="input-group btn-block quantity text-center">
                          {{ item.qty }}
                        </div>
                      </td>
                      <td class="text-right" width="160px">{{ money_sign }} {{ Math.round(item.purchaseprice).toLocaleString() }}
                      </td>
                      <td class="text-right" width="160px">{{ money_sign }} {{ Math.round(item.purchaseprice).toLocaleString() }}
                      </td>
                    </tr>

                    <tr v-for="(pset,key) in psets" :key="key">
                      <td class="text-center" width="">
                        <nuxt-link :to="'/product-set/'+pset.info.slug">
                          <lazy-image :src="pset.info.image_url" alt="Chair" title="product img" class="img-thumbnail"
                                      style="max-width:150px;"/>
                        </nuxt-link>
                      </td>
                      <td class="text-left">
                        <nuxt-link :to="'/product-set/'+pset.info.slug">
                          <b>{{ pset.info.title }}</b>
                        </nuxt-link>
                        <br>
                        <div>
                          {{ pset.info.sub_title }}
                          <span v-for="(pitem,pkey) in pset.items" :key="pkey">
                            {{ pitem.item.qty }} x {{ pitem.info.title }},
                          </span>
                        </div>

                      </td>
                      <td class="text-left" width="130px">
                        {{ calculateSetQty(pset) }}
                      </td>

                      <td class="text-center" width="160px">{{ money_sign }} {{ calculateSetPrice(pset) }}</td>
                      <td class="text-center" width="160px">{{ money_sign }} {{ calculateSetPrice(pset) }}</td>
                    </tr>

                    <tr>
                      <th scope="row" colspan="4" class="text-left">Total Products</th>
                      <td class="text-right"> {{ totalQty }}</td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="text-left">Total Price</th>
                      <td class="text-right">{{ money_sign }} {{ subTotal.toLocaleString() }}</td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="text-left">Discount Price</th>
                      <td class="text-right">
                        {{ discountLabel.toLocaleString() }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="text-left">
                        Delivery Charge {{ district ? `(${district})` : '' }}
                      </th>
                      <td class="text-right">
                        {{ money_sign }} {{ deliverCharge.toLocaleString() }}
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" colspan="4" class="text-left">Payment Method</th>
                      <td class="text-right">#{{ paymentMethod }}</td>
                    </tr>
                    <tr class="bg-gr">
                      <th scope="row" colspan="4" class="text-left">Grand Total</th>
                      <td class="text-right" style="font-weight: bold; font-size: 16px;">
                        ৳ {{ grandTotal.toLocaleString() }}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <div class="table-box">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <div class="pull-right" style="margin: 15px 0px;">
                <!-- <nuxt-link to="/order" id="confirm_order" class="btn btn-back-two">
                    Pay Now <i class="icon-right-big"></i>
                </nuxt-link>


                postdata="{cus_name:'Abdul',cus_phone:'01767436576',
                        cus_email:'alimifypro@gmail.com',
                        cus_addr1:'Feni,Bangladesh',amount: 1000}"
                -->

                <!-- @click="nagadPayment()"-->

                <input v-if="prebook" type="number" class="form-control mb-3 border col-6" v-model.number="payingAmount"
                       :min="prebookMin"/>

                <button
                  :class="[paymentMethod != 'bkash' && paymentMethod != 'nagad' && paymentMethod != 'cash_on_delivery' ? '' : 'd-none']"
                  class="btn btn-back-two common-btn_color"
                  id="sslczPayBtn"
                  :token="$store.state.user.SELF_TOKEN"
                  order='default'
                  :endpoint="'https://admin.masterleatherbd.com/sslcommerz/pay-via-ajax?self_token=' + $store.state.user.SELF_TOKEN">
                  Pay Now <i class="icon-right-big"></i>
                </button>

                <button :class="[paymentMethod == 'bkash' ?'':'d-none']"
                        class="btn btn-back-two common-btn_color bkash"
                        id="bkash_button"
                        @click="bkashPaymentNipun()">
                  Pay Now <i class="icon-right-big"></i>
                </button>

                <button :class="[paymentMethod == 'nagad' ?'':'d-none']"
                        class="btn btn-back-two common-btn_color nagad"
                        id="nagad_button"
                        @click="nagadPayment()">
                  Pay Now <i class="icon-right-big"></i>
                </button>
                <!--                <button :class="[paymentMethod == 'bkash' ?'':'d-none']" class="btn btn-success" id="bKash_button"-->
                <!--                        @click="bkashPayment()">-->
                <!--                  Pay Now-->
                <!--                </button>-->

                <button :class="[paymentMethod == 'cash_on_delivery' ?'':'d-none']" class="btn btn-success"
                        @click="confirmOrder">
                  Confirm order
                </button>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Loading :loading="loading"/>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import Loading from '~/components/common/Loading.vue'

export default {
  components: {Loading},
  auth: false,
  head: {
    title: "Review | Master Leather BD",
    script: [
      {
        // type: 'module',
        src: "https://seamless-epay.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7)
      },
      {
        // type: 'module',
        src: "https://code.jquery.com/jquery-3.4.1.min.js"
      },
      {
        // type: 'module',
        src: "https://scripts.sandbox.bka.sh/versions/1.2.0-beta/checkout/bKash-checkout-sandbox.js"
      }
    ]
  },

  data() {
    return {
      loading: true,
      items: [],
      subTotal: 0,
      discount: 0,
      discountLabel: 0,
      grandTotal: 0,
      totalQty: 0,
      district: '',
      deliverCharge: 0,
      paymentMethod: '',
      psets: [],
      prebookMin: 0,
      payingAmount: 0,
      prebook: false,
      bkashPaymentId: '',
    }
  },

  methods: {
    calculateSetPrice(pset) {

      const price = pset.items.reduce(function (price, current) {
        return price + current.item.purchaseprice * current.item.qty
      }, 0)

      return price.toLocaleString();
    },
    calculateSetQty(pset) {
      const qty = pset.items.reduce(function (qty, current) {
        return qty + parseInt(current.item.qty)
      }, 0)

      return qty;
    },
    async loadCart() {
      this.loading = true

      await this.$store.dispatch('cart/fetchCart', {})

      this.items = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.items : []
      this.psets = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.psets : []

      // console.log(this.items)
      this.subTotal = Math.round(this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalprice : 0)
      //this.grandTotal = this.$store.state.cart.CART.pm ? this.$store.state.cart.CART.pm.grand_total : 0
      this.deliverCharge = this.$store.state.cart.CART.pm ? this.$store.state.cart.CART.pm.deliveryfee : 0
      this.paymentMethod = this.$store.state.cart.CART.pm ? this.$store.state.cart.CART.pm.payment_method : ''
      this.district = this.$store.state.cart.CART.district ? this.$store.state.cart.CART.district : ''
      this.discount = this.$store.state.cart.CART.pm ? this.$store.state.cart.CART.pm.discount : 0

      let discountType = this.$store.state.cart.CART.pm ? this.$store.state.cart.CART.pm.discount_type : false

      let setDiscount = discountType == 'Percentage' ? (this.subTotal * this.discount) / 100 : this.discount;

      this.discountLabel = discountType == 'Percentage' ? `${this.discount}%` : `${this.money_sign}${this.discount}`

      this.grandTotal = this.$store.state.cart.CART.pm ? this.subTotal - setDiscount : 0
      this.grandTotal = Math.round(this.$store.state.cart.CART.pm ? this.$store.state.cart.CART.pm.grand_total : 0) //parseInt(this.grandTotal) + parseInt(this.deliverCharge);

      this.totalQty = this.$store.state.cart.CART.cart ? this.$store.state.cart.CART.cart.totalqty : 0
      this.prebook = this.$store.state.cart.CART ? this.$store.state.cart.CART.prebooking : false
      this.prebookMin = this.$store.state.cart.CART ? this.$store.state.cart.CART.prebooking_min_amount : false
      this.payingAmount = this.grandTotal
      // console.log(this.prebook,'prebook')
      this.loading = false
    },
    bkashPayment() {

      const self = this
      $('.shaz_back_overlay').css('display', 'block')
      // get token
      $.ajax({
        url: "https://admin.masterleatherbd.com/bkash/get-token?self_token=" + self.$store.state.user.SELF_TOKEN,
        type: 'POST',
        contentType: 'application/json',
        success: function (data) {
          $('pay-with-bkash-button').trigger('click');
          if (data.hasOwnProperty('msg')) {
            self.bkashError(data) // unknown error
          }
        },
        error: function (err) {
          // hideLoading();
          $('.shaz_back_overlay').css('display', 'none')
          self.bkashError(err);
        }
      });


    },

    bkashInit() {
      let self = this;

      bKash.init({
        paymentMode: 'checkout',
        paymentRequest: {},
        createRequest: function (request) {

          setTimeout(function () {
            self.createBkashPayment(request);
          }, 2000)
        },

        executeRequestOnAuthorization: function (request) {

          $.ajax({
            url: 'https://admin.masterleatherbd.com/bkash/execute-payment',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              "paymentID": self.bkashPaymentId,
              'self_token': self.$store.state.user.SELF_TOKEN
            }),
            success: function (data) {
              if (data) {
                if (data.paymentID != null) {
                  self.bkashSuccess(data);
                } else {
                  self.bkashError(data);
                  bKash.execute().onError();
                }
              } else {
                $.get('https://admin.masterleatherbd.com/bkash/query-payment', {
                  payment_info: {
                    payment_id: self.bkashPaymentId,
                    'self_token': self.$store.state.user.SELF_TOKEN
                  }
                }, function (data) {
                  if (data.transactionStatus === 'Completed') {
                    self.bkashSuccess(data);
                  } else {
                    self.createBkashPayment(request);
                  }
                });
              }
            },
            error: function (err) {
              bKash.execute().onError();
            }
          });
        },
        onClose: function () {
          // for error handle after close bKash Popup
          $('.shaz_back_overlay').css('display', 'none')
        }
      })
    },
    createBkashPayment(request) {
      console.log(request, 'createpayment')
      const self = this

      // Amount already checked and verified by the controller
      // because of createRequest function finds amount from this request
      request['amount'] = self.payingAmount; // max two decimal points allowed
      request['self_token'] = self.$store.state.user.SELF_TOKEN;
      $.ajax({
        url: 'https://admin.masterleatherbd.com/bkash/create-payment',
        data: JSON.stringify(request),
        type: 'POST',
        contentType: 'application/json',
        success: function (data) {
          // hideLoading();
          $('.shaz_back_overlay').css('display', 'none')
          if (data && data.paymentID != null) {
            self.paymentID = data.paymentID;
            bKash.create().onSuccess(data);
          } else {
            bKash.create().onError();
          }
        },
        error: function (err) {
          // hideLoading();
          $('.shaz_back_overlay').css('display', 'none')
          self.bkashError(err.responseJSON);
          bKash.create().onError();
        }
      });


    },
    bkashSuccess(data) {
      console.log(data, 'success called')
    },
    bkashError(data) {

      console.log(data, 'error called')
    },

    // Nagad Integration

    nagadPayment() {
      {
        this.$axios.get('/api/nagad/pay-via-ajax?token=' + this.$store.state.user.SELF_TOKEN).then(response => {
          //console.log(response.data.url);
          //alert(response.data.url);
          window.location.href = response.data.url;
          //window.location.replace(response.data.url);
        })
      }

      // const nagadUrlRedirection = await this.$axios.$get('api/nagad/pay-via-ajax?token=' + this.$store.state.user.SELF_TOKEN, null);
      //const response =  this.$axios.$get('/api/nagad/pay-via-ajax',{})
      //const nagadUrlRedirection = this.$axios.$get('api/nagad/pay-via-ajax?token=' . this.$store.state.user.SELF_TOKEN, {'token': this.$store.state.user.SELF_TOKEN });
      //console.log(response);
      // window.location.href = nagadUrlRedirection.url;
    },


    bkashPaymentNipun(){
      this.$axios.post('/api/bkash/create' , {
        token : this.$store.state.user.SELF_TOKEN
      }).then(response => {
        //console.log(response.data);
        window.location.href = response.data.bkashURL;
        //alert(response.data.url);
        // window.location.href = response.data.url;
        //window.location.replace(response.data.url);
      })
    },

    async confirmOrder() {
      await this.$store.dispatch('cart/fetchCashOnDelivery', {})
      if (this.$store.state.cart.CASH_ON_DELIVERY.uri) {
        //window.location.href = this.$store.state.cart.CASH_ON_DELIVERY.uri
        let orderRandom = this.$store.state.cart.CASH_ON_DELIVERY.order_random
        let orderKey = this.$store.state.cart.CASH_ON_DELIVERY.order_key
        this.$router.push(
          {
            name: 'thank-you',
            query: {order_random: orderRandom, order_key: orderKey},
            params: {thankyou: true}
          });

      }
    }

  },

  watch: {

    payingAmount: {
      handler() {

        const self = this

        if (this.prebookMin > this.payingAmount || this.payingAmount > this.grandTotal) {
          this.payingAmount = this.prebookMin > this.payingAmount ? this.prebookMin : this.grandTotal
        }

        this.$store.dispatch('cart/fetchSetPayingAmount', {
          payingAmount: this.payingAmount
        })

      }
    }
  },

  async created() {
    await this.loadCart()
  },

  async mounted() {

    //  setTimeout(function(){

    // var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
    // script.src = "https://seamless-epay.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7); // USE THIS FOR LIVE
    // // script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7); // USE THIS FOR SANDBOX
    // tag.parentNode.insertBefore(script, tag);

    if (document.querySelector(".tingle-modal__close") != null) {

      document.querySelector(".tingle-modal__close").addEventListener('click', function () {
        console.log('hello modal')
      })
    }


    // },1500)

    this.bkashInit()

  }
}
</script>

<style scoped>
.product-review-wrapper {
  font-size: 15px;
  color: #606060
}

.card-header.card-header_258 p {
  color: #666;
}

p {
  margin-bottom: 15px;
  font-size: 15px;
  color: #606060;
  line-height: 25px;
}

a {
  color: #606060;
  transition: all 0.4s ease;
}

a:hover {
  color: #000
}

.product-review-wrapper .table-bordered {
  border-left: 0;
}

.card {
  border: 0px solid #000000 !important;
}
</style>
