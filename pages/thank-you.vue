<template>
  <div>
    <Breadcrumb />
    <div v-if="!loading && order_masters" class="frontend_content stick-top-pad">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-right invoice-print_btn">
              <button class="btn btn-back-two btn-warning text-white"
                      :class="[(order_masters.payment_term_status != 'Successful' ? '':'d-none')]" id="sslczPayBtn"
                      postdata="{cus_name:'Abdul',cus_phone:'01767436576',
                                  cus_email:'alimifypro@gmail.com',
                                  cus_addr1:'Feni,Bangladesh',amount: 1000}"
                      order='default'
                      :endpoint=" baseUrl() + 'sslcommerz/existing-order-pay?order_id='+order_masters.order_id">
                Make Payment <i class="icon-right-big"></i>
              </button>


              <input @click="exportToPDF()" class="btn btn-success print" type="button" value="Print">
              <input @click="exportToPDF()" class="btn btn-primary pdf common-btn_color" type="submit"
                     value="Download Invoice PDF">
            </div>
          </div>
        </div>
      </div>

      <section class="prosuct-view-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="pdf" id="printableArea">
                <div id="content">
                  <div class="text-center font-weight-bold text-danger">

                    প্রোডাক্ট পাওয়ার পর সার্ভিসের জন্য কল করুন: ০১৭৫৭ ৭৫৭২৩৫

                  </div>
                  <table class=" hot_line">
                    <tbody>
                    <tr>
                      <td>
                        <div>
                          <strong>Hotline #: 01757757235</strong>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <table style="width:100%">
                    <tbody>
                    <tr>
                      <td>
                        <p>
                          Order Summary
                        </p>
                        <div>
                          <p>
                            <strong>Status</strong> # {{ order_masters.order_status }} <br>
                            <strong>Order Number</strong> # {{ order_masters.order_id }}<br>
                            <strong>Order Date</strong> # {{ order_masters.order_date }} <br>
                          </p>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <br>
                  <table style="width:100%">
                    <tbody>
                    <tr>
                      <td class="wd_48">
                        <p>
                          Billing Delivery Address
                        </p>
                        <div>
                          <p>
                            <strong>Name</strong> # {{ order_masters.customer_name }}<br>
                            <strong>Mobile</strong> # {{ order_masters.phone }}<br>
                            <strong>Emergency Mobile</strong>
                            # {{ order_masters.emergency_phone }} <br>
                            <strong>Customer Email</strong> # {{ order_masters.email }} <br>
                            <strong>Address</strong> # {{ order_masters.address }} <br>
                            <strong>Different Address</strong> # {{ order_masters.different_address }} <br>
                          </p>
                        </div>
                      </td>
                      <td class="wd_4">
                      </td>
                      <td class="wd_48">
                        <p>
                          Payment Information
                        </p>
                        <div>
                          <p>
                            <strong>Payment Method</strong> #
                            {{ order_masters.payment_method }}
                            <br>
                            <strong>
                              Payment Status</strong>#
                            {{ order_masters.payment_term_status }}
                            <br>
                            <br><br>
                          </p>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <br><br>
                  <table class="invoice_product_details ">
                    <tbody>
                    <tr>
                      <td colspan="6">
                        <p>
                          Order Details
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td><strong>Image</strong></td>
                      <td><strong>Product Name</strong></td>
                      <td><strong>Product Code</strong></td>
                      <td><strong>Unit Price</strong></td>
                      <td><strong>Qty</strong></td>
                      <td><strong>Total</strong></td>
                    </tr>
                    <tr v-for="(order,key) in order_details" :key="key">
                      <td>
                        <nuxt-link :to="'/product/'+order.seo_url">
                          <img :src=" baseUrl() + order.image_url" loading="lazy"
                               style="height: 100px; width: 100px;" />
                        </nuxt-link>
                      </td>
                      <td>
                        <nuxt-link :to="'/product/'+order.seo_url">
                          {{ order.name }}
                        </nuxt-link>
                        <!--                        <br> {{order.sub_title}}-->
                        <br> {{ order.item_jeson.sub_title }}

                        <span v-if="order.item_jeson.variation_id" class="d-none">
                          <span v-for="(data, ke) in order.item_jeson.variation_info.variations">
                            <br> {{ ke }} :{{ data }}
                          </span>
                        </span>
                      </td>
                      <td>{{ order.product_code }}</td>
                      <td>
                        {{ money_sign }} {{ parseFloat(order.local_purchase_price).toLocaleString() }} /=
                      </td>
                      <td>{{ order.qty }}</td>
                      <td>
                        {{ money_sign }} {{ Math.round(order.total_purchase_price).toLocaleString() }}
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <table class="invoice_amount_details">
                    <tbody>
                    <tr>
                      <td>
                        <b>Total Price</b>
                      </td>
                      <td>
                        <b>{{ money_sign }} {{ Math.round(order_masters.total_amount).toLocaleString() }}</b>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <b>Coupon Discount</b>
                      </td>

                      <td>
                                                          <span v-if="order_masters.coupon_type == 'Percentage'">
                                                            {{
                                                              parseFloat(order_masters.coupon_discount).toLocaleString()
                                                            }}%
                                                          </span>
                        <span v-else>
                                                            {{
                            money_sign
                          }} {{ parseFloat(order_masters.coupon_discount).toLocaleString() }}
                                                          </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Delivery Fee</b>
                      </td>
                      <td>
                        <b>{{ money_sign }} {{ Math.round(order_masters.delivery_fee).toLocaleString() }}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Paid</b>
                      </td>
                      <td>
                        <b>{{ money_sign }} {{ Math.round(order_masters.amount_paid).toLocaleString() }}</b>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Grand Total</b>
                      </td>
                      <td>
                        <b>{{ money_sign }} {{ Math.round(order_masters.grand_total).toLocaleString() }}</b>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="5000"
        :filename="'order_'+(order_masters?order_masters.order_id:'')"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="100%"

        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">


          <div id="invoice-info" style="padding:5px;margin:20px;">
            <div class="text-center font-weight-bold d-block mb-2">
              প্রোডাক্ট পাওয়ার পর সার্ভিসের জন্য কল করুন: ০১৭৫৭ ৭৫৭২৩৫
            </div>
            <table class="table-responsives" style="width:97%;">
              <tr style="display: '';" class="invoice-contact-list justify-content-between">
                <td class="invoice-contact-info" colspan="5">
                  <div class="invoice-logo">
                    <div class="logo ">
                      <img src="https://masterleatherbd.com/assets/images/logo.png" alt=" ">
                    </div>
                    <p><b>Master Leather BD</b></p>
                    <!--                    <p>PRAN Center, 105 Middle Badda, Dhaka - 1212, Bangladesh</p>-->
                  </div>
                </td>
                <td class="order-details" colspan="7">
                  <p><b>Order # {{ order_masters.order_id }}</b></p>
                  <p><span>https://masterleatherbd.com,</span></p>
                  <p>Date: {{ order_masters.order_date }}</p>
                  <p><b>Delivery Address :</b></p>
                  <p>Name : {{ order_masters.customer_name }}</p>
                  <p><b>Phone: {{ order_masters.phone }}</b></p>
                  <p><b>Emergency phone: {{ order_masters.emergency_phone }}</b></p>
                  <p>Email: {{ order_masters.email }}</p>
                  <p>Address: {{ order_masters.address }}</p>
                  <p> {{ order_masters.different_address }}</p>
                  <p>({{ order_masters.district }})</p>
                  <p>Payment Method: {{ order_masters.payment_method }}</p>
                  <p>Payment Status: {{ order_masters.payment_term_status }}</p>
                  <!-- <p>Account Identifier :548321xxxxxx1161</p> -->
                </td>
              </tr>
            </table>


            <table class="table-responsives product-list-info mt-2" style="width:97%;">
              <tr>
                <th colspan="7">Name</th>
                <th>Code</th>
                <th>Price</th>
                <th>QTY</th>
                <th>Total</th>
              </tr>
              <tr v-for="(order,key) in order_details" :key="key">
                <td colspan="7">
                  {{ order.name }} -
                  <!--                  {{order.sub_title}} -->
                  {{ order.item_jeson.sub_title }}
                  <span v-if="order.item_jeson.variation_id" class="d-none">
                    <span v-for="(data, ke) in order.item_jeson.variation_info.variations">
                        <br> {{ ke }} :{{ data }}
                    </span>
                  </span>
                </td>
                <td>{{ order.product_code }}</td>
                <td> {{ money_sign }} {{ parseFloat(order.local_purchase_price).toLocaleString() }} /=</td>
                <td> {{ order.qty }}</td>
                <td>{{ money_sign }} {{ parseFloat(order.total_purchase_price).toLocaleString() }}</td>
              </tr>
              <tr>
                <td colspan="10" style="text-align: right;">Sub-Total :</td>
                <td>{{ money_sign }} {{ parseFloat(order_masters.total_amount).toLocaleString() }}</td>
              </tr>
              <tr>
                <td colspan="10" style="text-align: right;">Coupon Discount :</td>
                <td>
                                                <span v-if="order_masters.coupon_type == 'Percentage'">
                                                      {{ parseFloat(order_masters.coupon_discount).toLocaleString() }}%
                                                  </span>
                  <span v-else>
                                                        {{
                      money_sign
                    }} {{ Math.round(order_masters.coupon_discount).toLocaleString() }}
                                                  </span>
                </td>
              </tr>

              <tr>
                <td colspan="10" style="text-align: right;">Delivery Charge :</td>
                <td></td>
              </tr>

              <tr>
                <td colspan="10" style="text-align: right; border-right: 0;"><b>Grand Total :</b></td>
                <td style="border-left: 0;">{{ money_sign }}
                  {{ Math.round(order_masters.grand_total).toLocaleString() }}
                </td>
              </tr>
              <tr>
                <td colspan="7" style="border: 0;"></td>
                <td colspan="3">Amount Paid:</td>
                <td> {{ money_sign }} {{ Math.round(order_masters.amount_paid).toLocaleString() }}</td>
              </tr>

              <tr>
                <td colspan="7" style="border: 0;"></td>
                <td colspan="3">Payment Status</td>
                <td>{{ order_masters.payment_term_status }}</td>
              </tr>
            </table>

            <table class="invoice-description" style="width:97%;">
              <tr>
                <td style="text-align: center;" colspan="10">
                  <p>Dear {{ order_masters.customer_name }},</p>
                  <p>Haven't got your products yet? Don't Worry.</p>
                  <p>You can contact us through <b>info@masterleatherbd.com</b> and one of our concerns will contact you
                    immediately.</p>
                </td>
              </tr>

            </table>

          </div>


          <!-- <section class="prosuct-view-section" ref="invoice">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="pdf" id="printableArea">
                              <div id="content">
                                  <table class=" hot_line">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <div>
                                                      <strong>Hotline #: 01757 757235</strong>
                                                  </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <table style="width:100%">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <p>
                                                      Order Summary
                                                  </p>
                                                  <div>
                                                      <p>
                                                          <strong>Status</strong> # {{order_masters.order_status}} <br>
                                                          <strong>Order Number</strong> # {{order_masters.order_id}}<br>
                                                          <strong>Order Date</strong> # {{order_masters.order_date}} <br>
                                                      </p>
                                                  </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <br>
                                  <table style="width:100%">
                                      <tbody>
                                          <tr>
                                              <td class="">
                                                  <p>
                                                      Billing Delivery Address
                                                  </p>
                                                  <div>
                                                      <p>
                                                          <strong>Name</strong> # {{order_masters.customer_name}}<br>
                                                          <strong>Mobile</strong> # {{order_masters.phone}}<br>
                                                          <strong>Emergency Mobile</strong>
                                                          # {{order_masters.emergency_phone}} <br>
                                                          <strong>Customer Email</strong> # {{order_masters.email}} <br>
                                                          <strong>Address</strong> # {{order_masters.address}} <br>
                                                          <strong>Different Address</strong> # {{order_masters.different_address}} <br>
                                                      </p>
                                                  </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <br/>

                                  <table style="width:100%">
                                      <tbody>
                                          <tr>
                                            <td class="">
                                                  <p>
                                                      Payment Information
                                                  </p>
                                                  <div>
                                                      <p>
                                                          <strong>Payment Method</strong> #
                                                          {{order_masters.payment_method}}
                                                          <br>
                                                          <strong>
                                                          Payment Status</strong>#
                                                          {{order_masters.payment_term_status}}
                                                          <br>
                                                          <br><br>
                                                      </p>
                                                  </div>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>

                                  <div class="html2pdf__page-break"></div>
                                  <br/><br/>
                                  <table class="invoice_product_details ">
                                      <tbody>
                                          <tr>
                                              <td colspan="6">
                                                  <p>
                                                      Order Details
                                                  </p>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td><strong>Image</strong></td>
                                              <td><strong>Product Name</strong></td>
                                              <td><strong>Product Code</strong></td>
                                              <td><strong>Unit Price</strong></td>
                                              <td><strong>Qty</strong></td>
                                              <td><strong>Total</strong></td>
                                          </tr>
                                          <tr v-for="(order,key) in order_details" :key="key">
                                              <td>
                                                  <img :src="'/admin/'+order.image_url" style="height: 100px; width: 100px;" class="w-100"/>
                                              </td>
                                              <td>{{order.name}}<br> {{order.sub_title}}</td>
                                              <td>{{order.product_code}}</td>
                                              <td>
                                              {{money_sign}} {{parseFloat( order.local_purchase_price ).toLocaleString()}} /=
                                              </td>
                                              <td>{{order.qty}}</td>
                                              <td>
                                                  {{money_sign}} {{parseFloat(order.total_purchase_price).toLocaleString()}}
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  <table class="invoice_amount_details">
                                      <tbody>
                                          <tr>
                                              <td>
                                                  <b>Total Price</b>
                                              </td>
                                              <td>
                                                  <b>{{money_sign}} {{parseFloat( order_masters.total_amount ).toLocaleString()}}</b>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td>
                                                  <b>Delivery Fee</b>
                                              </td>
                                              <td>
                                                  <b>{{money_sign}} {{parseFloat(order_masters.delivery_fee).toLocaleString()}}</b>
                                              </td>
                                          </tr>
                                          <tr >
                                              <td>
                                                  <b>Discount</b>
                                              </td>
                                              <td >
                                                  <b></b>
                                              </td>
                                          </tr>
                                          <tr >
                                              <td>
                                                  <b>Grand Total</b>
                                              </td>
                                              <td>
                                                  <b>{{money_sign}} {{parseFloat(order_masters.grand_total).toLocaleString()}}</b>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section> -->
        </section>
      </vue-html2pdf>
    </div>
    <div class="text-center" v-else-if="!order_masters && !loading">
      Nothing found.
    </div>
    <div v-else-if="loading" class="text-center">
      Loading...
    </div>
  </div>
</template>
<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'
import { baseUrl } from '~/helpers/common'

export default {
  auth: false,
  head: {
    title: 'Review | Master Leather BD',
    script: [
      {
        // type: 'module',
        src: 'https://seamless-epay.sslcommerz.com/embed.min.js?' + Math.random().toString(36).substring(7)
      }
    ]
  },
  data() {

    return {
      sayThankYou: false,
      loading: true,
      order_masters: null,
      order_details: []
    }
  },

  methods: {
    baseUrl,
    exportToPDF() {
      this.$refs.html2Pdf.generatePdf()
      // html2pdf(this.$refs.invoice, {
      // 	margin: 1,
      // 	filename: 'document.pdf',
      // 	image: { type: 'jpeg', quality: 0.98 },
      // 	html2canvas: { dpi: 192, letterRendering: true,allowTaint: true, useCORS: true, logging: true },
      // 	jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
      // })
    },
    printInvoice() {
      return

      var divContents = this.$refs.invoice.innerHTML
      var divContents = this.$refs.invoice.innerHTML
      document.body.innerHTML = divContents
      window.print()
      var a = window.open('', '', 'height=500, width=500')
      a.document.write('<html>')
      a.document.write('<body > <h1>Div contents are <br>')
      a.document.write(divContents)
      a.document.write('</body></html>')
      a.document.close()
      a.print()
    },
    onProgress(event) {
      console.log(event)
    }

    // dataLayerPurchaseEvent() {
    //   const self = this
    //   // console.log(this.$route)
    //   if (self.order_details && self.order_masters && typeof dataLayer != undefined) {
    //     console.log(self.order_details)
    //     const items = self.order_details.map((item, index) => {
    //
    //
    //       let itemData = {
    //         item_id: item.product_code.toLocaleString(),
    //         item_name: item.name,
    //         affiliation: 'Google Merchandise Store',
    //         coupon: '',
    //         currency: 'BDT',
    //         discount: parseFloat(0.00),
    //         index: index,
    //         item_brand: 'MasterLeatherBD',
    //         item_category: item.product_category && item.product_category.length > 0 ? item.product_category[0].term_name : 'Furniture',
    //         item_list_id: item.product_code.toLocaleString(),
    //         item_list_name: item.sub_title,
    //         item_variant: item.color,
    //         location_id: 'NONE',
    //         price: parseFloat(item.total_purchase_price),
    //         quantity: parseInt(item.qty)
    //       }
    //
    //       // item.product_category.forEach((item,index_1) => {
    //       //     itemData['item_category'+ (index_1+1)] = item.term_name
    //       // })
    //
    //       return itemData
    //     })
    //
    //     this.sayThankYou = this.$route.params.thankyou ? true : false // This redirect request from  review.vue
    //
    //     if (this.sayThankYou) {
    //       dataLayer.push({ ecommerce: null })  // Clear the previous ecommerce object.
    //       dataLayer.push({
    //         event: 'purchase',
    //         ecommerce: {
    //           transaction_id: self.order_masters.order_id.toString(),
    //           affiliation: 'Google Merchandise Store',
    //           value: parseFloat(self.order_masters.grand_total),
    //           tax: 0.00,
    //           shipping: parseFloat(self.order_masters.delivery_fee),
    //           currency: 'BDT',
    //           coupon: 'NONE',
    //           items: items
    //         }
    //       })
    //
    //       console.log('datalyer_data_send')
    //       console.log(this.sayThankYou)
    //     }
    //
    //   }
    //
    // }

  },
  async created() {
    this.loading = true

    await this.$store.dispatch('cart/fetchOrderDetails', {
      order_random: this.$route.query.order_random,
      secret_key: this.$route.query.order_key
    })

    this.order_masters = this.$store.state.cart.ORDER_DETAILS.order_masters
    this.order_details = this.$store.state.cart.ORDER_DETAILS.order_details


    this.loading = false
    // if(this.$route.query.from && this.$route.query.from == 'ssl'){
    // await this.dataLayerPurchaseEvent()
    // }
  },


  mounted() {


    //  window.onload = function() {

    //  setTimeout(function(){

    //         var script = document.createElement("script"), tag = document.getElementsByTagName("script")[0];
    //         script.src = "https://seamless-epay.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7); // USE THIS FOR LIVE
    //         // script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7); // USE THIS FOR SANDBOX
    //         tag.parentNode.insertBefore(script, tag);

    if (document.querySelector('.tingle-modal__close') != null) {

      document.querySelector('.tingle-modal__close').addEventListener('click', function() {
        console.log('hello modal')
      })

      console.log('modal')
    }


    //  },1000)


    // }


  }
}
</script>
<style scoped>
.stick-top-pad {
  font-size: 15px;
}

#content .hot_line {
  width: 100%;
  display: flex;
  justify-content: right;
}

.invoice-print_btn .print {
  margin-right: 15px;
  border: 0;
}

.prosuct-view-section table {
  width: 100%;
}

.prosuct-view-section table tr td p {
  background-color: rgba(237, 237, 237, 0.25);
  padding: 10px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 0;
}

.prosuct-view-section table tr td div {
  border: 1px solid #ccccccb0;
  width: 100%;
}

.prosuct-view-section table tr td div p {
  padding: 0 15px;
  background: transparent
}

.invoice_product_details {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ccccccb0;
}

.invoice_product_details tbody tr {
  border: 1px solid #ccc;
}

.invoice_product_details tbody tr:nth-child(1),
.invoice_product_details tbody tr:nth-child(2) {
  background: rgba(237, 237, 237, 0.25);
}

.invoice_product_details tbody tr td[data-v-42e2fba5] {
  border: 1px solid #ccccccb0;
  padding: 10px 15px;
}

.invoice_amount_details tr {
  background: rgba(237, 237, 237, 0.25);
  border: 1px solid rgba(237, 237, 237, 0.25);
  text-align: right;
}

.invoice_amount_details tr td {
  border: 1px solid #ccccccb0;
  padding: 10px;
}

.invoice_amount_details tr td:first-child {
  width: 80%
}

.invoice_amount_details tr td:last-child {
  width: 18%
}

#printableArea .wd_4 {
  width: 4%;
}

#printableArea .wd_48 {
  width: 48%;
  margin-top: 15px;
}

.invoice-print_btn .pdf {
  border: 0
}


/* invoice style */
h1,
p,
a,
h2,
h3,
h4,
h5 {
  margin: 0;
}

/* .invoice-info {
    padding: 2px;
    margin: 10px auto;
} */

.top-heading {
  text-align: center;
}

table.product-list-info {
  text-align: center;
  border-collapse: collapse;
}

table.product-list-info th,
table.product-list-info td {
  border: 1px solid #333333b8;
  border-collapse: collapse;
  padding: 5px;
  font-size: 14px;
  color: #000;
  line-height: 20px;
}

table.product-list-info td:first-child {
  text-align: left;
}

.invoice-contact-list {
  padding: 20px 0;
}

.invoice-info p {
  font-size: 12px;
  color: #000;
  line-height: 14px;
  margin-bottom: 3px;
}

.invoice-description {
  margin-top: 40px;
}

.invoice-description p {
  margin-bottom: 6px;
  font-size: 12px;
}

.invoice-signature > td {
  padding-top: 30px;
}


</style>

