<!-- component Two -->
<template>
  <div>
    <div v-if="simple_info" class="single-pg-product-info" :class="[self_class]">
      <!-- top -->
      <div class="single-product-info_left">
        <div class="row">
          <div class="col-sm-7 col-md-12 col-lg-6">
            <div v-if="simple_info" class="single-page-contant-top">

              <div class="single-page-pd-title">
                <h3>{{ simple_info.title }}</h3>
              </div>
              <div class="single-page-pd-item">
                <h4>
                                      <span v-if="errorMsg" class="text-danger">
                                        {{ errorMsg }}
                                      </span>
                  <span v-if="variationPrice">
                                        {{ variationPrice.sub_title }}
                                      </span>
                  <span v-else>{{ simple_info.sub_title }}</span>
                </h4>
              </div>
              <div class="single-page-contant-det">
                <p>
                                      <span v-if="variationPrice">
                                        {{ variationPrice.product_code ? 'Product Code :' + variationPrice.product_code : ''
                                        }}
                                      </span>
                  <span v-else>
                                         Product Code : <span id="v-itemcode">{{ simple_info.sku }}</span>
                                      </span>
                </p>
              </div>
              <!-- <div class="single-page-contant-rd">
                  <div class="single-page-contant-rev" @click="toggleReviewsDrawer">
                      <ul class="list-unstyled">
                      <li><a href="javascript:void(0)"><i class="icon-star-empty"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="icon-star-empty"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="icon-star-empty"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="icon-star-empty"></i></a></li>
                      <li><a href="javascript:void(0)"><i class="icon-star-empty"></i></a></li>
                      </ul>
                  </div>
                  <div class="single-page-contant-cs-rev">
                      <p>0 Customer Reviews</p>
                  </div>
              </div> -->
              <!-- <div id="price_tag">
                  <div class="price-top">
                      <h1>Discount Price ({{simple_info.local_discount}}%) : Tk.{{simple_info.sp}}/- <span>(Save {{simple_info.actual_discount}}/-)</span></h1>
                  </div>
                  <div class="regular-price">
                      <h3>Regular Price : Tk. {{simple_info.local_selling_price}}/-</h3>
                  </div>
              </div> -->

              <div class="product-price-list">
                <div v-if="variationPrice">

                                      <span v-if="variationPrice" class="product-price">
                                          <strong>{{ variationPrice.price_now ? money_sign : ''
                                            }} {{ variationPrice.price_now }}</strong>
                                      </span>
                  <span class="product-mrp " v-if="variationPrice.save_price">
                                          <s>{{ variationPrice.regular_price ? money_sign : ''
                                            }} {{ variationPrice.regular_price }}</s>
                                      </span>
                  <span v-if="variationPrice.save_price > 0"
                        class="product-discount ">{{ variationPrice.selling_discount }}% ({{ money_sign
                    }}{{ variationPrice.save_price }} OFF)</span>

                  <span v-if="simple_info.flash_item_information" class="btn btn-danger px-2 p-0"
                        style="font-size: 12px;vertical-align: text-top;">Flash Sale</span>

                </div>
                <div v-else>
                                      <span v-if="simple_info.price_now" class="product-price">
                                          <strong>{{ money_sign }} {{ simple_info.price_now.toLocaleString() }}</strong>
                                      </span>
                  <span v-if="simple_info.actual_discount > 0">
                                        <span class="product-mrp " v-if="simple_info.local_selling_price">
                                            <s>{{ money_sign }} {{ simple_info.local_selling_price.toLocaleString()
                                              }}</s>
                                        </span>
                                        <span
                                          class="product-discount ">{{ simple_info.local_discount }}% ({{ money_sign }} {{ simple_info.actual_discount.toLocaleString()
                                          }} OFF)</span>

                                        <span v-if="simple_info.flash_item_information" class="btn btn-danger px-2 p-0"
                                              style="font-size: 11px;vertical-align: text-top;">Flash Sale</span>
                                      </span>
                </div>
              </div>
              <div class="price">
                <div id="price_tag">
                </div>
                <div class="price-btm">
                </div>
              </div>
            </div>

            <div class="" v-if="simple_info.flash_item_information">

              <div class="row d-none" style="vertical-align: middle; background: #f5f5f5; margin: 5px 0px;">
                <div class="col-md-2">
                  <img style="width: 75px;" :src="require('~/assets/images/flash_item.png')">
                </div>
                <div class="col-md-10">
                  This product under flash sale right now. <br> You will get more
                  {{ money_sign }}{{ simple_info.flash_item_information.fi_discount }}.
                </div>
              </div>

            </div>


            <div class="single-pag-pd-variant_info">
              <div v-if="simple_info" class="single-pg-add_cart_btn">
                <div class="col-12 no-gutters pl-0 pr-0">
                  <div class="row">
                    <div class=" col-md-12">

                                            <span v-if="hasNewVariation">

                                            </span>
                      <span v-else>
                                              <div v-if="info">
                                                 <p v-for="(attr,key) in info.attrs.slice(0,2)"
                                                    :key="key">{{ attr.field_label }} : <span>{{ attr.value
                                                   }}</span></p>
                                              </div>
                                              <div class="" v-if="variations">
                                                  <div v-for="(vari,key) in variations" :key="key" class="">
                                                      <span>{{ vari.group.title }}</span>
                                                      <div>
                                                          <span v-for="(varix,vkey) in vari?.variations" :key="vkey">
                                                              {{ varix.title }}
                                                          </span>
                                                      </div>
                                                  </div>
                                              </div>
                                            </span>
                      <!-- Nipun | Product Attribute -->
                      <div v-if="simple_info?.enable_variation == 'on'">
                        <!--                                            <div v-if="simple_info.variation_show_as == 'Image'" class="sizes mt-1 d-inline-block" v-for="(data, key) in simple_info.variations">-->
                        <!--  &lt;!&ndash;                                            <h6 class="text-uppercase font-weight-bold mb-2">{{data.attr_name}}</h6>&ndash;&gt;-->
                        <!--  &lt;!&ndash;                                            <label v-for="(value, index) in data.attr_value" class="radio mr-2" :key="index">&ndash;&gt;-->
                        <!--                                              <label class="radio mr-2"  @click="getProductAttribute(data.variation_id)">-->
                        <!--                                                <input :checked="selectedVariationId == false & data.is_first_selected ? getProductAttribute(data.variation_id) : false" type="radio" :value="data.variation_id" v-model="selectedVariationId">-->
                        <!--                                                  <span>-->
                        <!--                                                    <img :src="data.variation_image" alt="" width="100px;">-->
                        <!--                                                  </span>-->
                        <!--                                              </label>-->

                        <!--                                            </div>-->

                        <div v-if="selectedVariation" class="">
                          <div v-for="(data, index) in selectedVariation">
                            {{ index }}: {{ data }}
                          </div>
                        </div>


                        <!-- End  Nipun -->


                        <!-- Variation new Nipun -->
                        <!--                                            <div v-if="getNewProductVariation && simple_info.variation_show_as == 'Text'">-->

                        <div v-if="getNewProductVariation">
                          <div class="my-2" v-for="(datas, indexs) in getNewProductVariation">
                            <div class="my-2" v-for="(data, index) in datas">
                              <div v-if="data[0]['value']">
                                <label for=""><b>{{ index }}</b></label>
                                <div class="">
                                  <div v-for="(item, key) in data" xv-bind:key="item" class="d-inline-block mr-2">

                                    <label class="radioText" :for="index+item">
                                      <input @change="variationRadioChange({
                                                                'index' : index,
                                                                'value': item.value,
                                                                'sort': item.sort,
                                                                'fixed_variation' : data.fixed_variation ? index : false,
                                                                'base_value' : data.fixed_variation ? item.value : false,
                                                                'priceHasChange' : item.sort == productLayerStart ? true : false,
                                                                'clickable' : item.sort > 2 ? true : true,
                                                              })"
                                             :disabled="item.sort > productLayerStart ? true : false"
                                             type="radio" :id="index+item" :value="item"
                                             v-model="newSelectVariation[index]">
                                      <!--                                                        item.show_as == 'Image' ? 'padding: 2px;' : false-->
                                      <span v-if="item.value"
                                            v-bind:style="item.show_as == 'Image' ? 'padding: 2px;' : false"
                                            :style="(item.sort > productLayerStart) || (item.value == fixedVariationBaseValue) ? 'color: #fff; background-color: #0a4a68;border: 2px solid #0a4a68;' : false"
                                      >
                                                            <div v-if="item.show_as == 'Image'" class="border-0">
                                                                 <img :src="item.link" alt="" width="80px;">
                                                            </div>
                                                            <div v-else="" class="border-0">
                                                                {{ item.value }}
                                                            </div>
                                                         </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Variation new Nipun -->
                      </div>

                      <div class="mcbi_increase mcbi_horizontal">
                        <span>Quantity :</span>
                        <div class="quantity-warp">
                          <button type="button" class="mcbi_sub mcbi_sub1" @click="quantityDecreament">-</button>
                          <input type="number" class="mcbi_view" v-model="quantity" min="1" max="99">
                          <button type="button" class="mcbi_add mcbi_add2" @click="quantityIncreament">+</button>
                        </div>
                      </div>

                      <div v-if="disable_buy == 'on'">
                        <div :class="'alert alert-danger'">
                          The product is not available for purchase.
                        </div>
                      </div>
                      <div v-else>
                        <button v-if="cartBtn"
                                class="common-btn_color addTo_cart_button text-uppercase font-weight-bold pc"
                                @click="addToCart(simple_info.id)"><i
                          class="far fa-heart"></i>{{ simple_info.pre_booking == 1 ? 'PREBOOK' : 'Add to shopping cart'
                          }}
                        </button>
                      </div>
                      <!--                      <button class="common-btn_color addTo_cart_button text-uppercase font-weight-bold"-->
                      <!--                              @click="oneClickBuyNow(simple_info.id)">-->
                      <!--                        <i class="far fa-heart"></i>Want to Buy-->
                      <!--                      </button>-->
                    </div>
                  </div>
                </div>

                <div class="product-payment_info">
                  <div class="product-payment_title">
                    Payment:
                  </div>
                  <ul class="list-unstyled" ref="payment_scroll" id="payment-scroll">
                    <li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/visa.png" alt=""></li>
                    <li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/rocket.png" alt=""></li>
                    <li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/mastercardd.png" alt="">
                    </li>
                    <li><img
                      src="https://admin.masterleatherbd.com/public/frontend/images/pay/islamic-bank--mobile-banking.png"
                      alt=""></li>
                    <li><img
                      src="https://admin.masterleatherbd.com/public/frontend/images/pay/islamic-bank--Internet-banking.png"
                      alt=""></li>
                    <li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/IFIC-mobile-banking.png"
                             alt=""></li>
                    <li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/dbbl-nexus.png" alt="">
                    </li>
                    <li><img src="https://admin.masterleatherbd.com/public/frontend/images/pay/Bikash.png" alt=""></li>
                  </ul>
                  <div class="pay-arrows">
                    <div class="left-arrow">
                      <a href="javascript:void(0)" @click="paymentPrev"><i class="icon-left-open"></i></a>
                    </div>
                    <div class="right-arrow">
                      <a href="javascript:void(0)" @click="paymentNext"><i class="icon-right-open"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xs-12 col-sm-5 col-md-12 col-lg-6 p-0">
            <div class="addTo_cart">
              <!-- <ul class="ul_widget"  v-if="emi_widget && emi_widget.is_active" v-html="emi_widget.description">
              </ul> -->
              <div v-if="info" class="product-deliver-info">
                <div class="product-content_info stock text-danger" v-if="info">
                  <div class="info_icon">
                    <i class="icon-basket" :class="[info.stock_status?'text-success':'text-danger']"></i>
                  </div>
                  <div class="info_txt">
                    <h3 :class="[info.stock_status?'text-success':'text-danger']">
                      {{ info.stock_status ? 'In Stock' : 'Out of stock' }}</h3>
                  </div>
                </div>
                <div class="product-content_info">
                  <div class="info_icon">
                    <i>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path
                          d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                      </svg>
                    </i>
                  </div>
                  <div class="info_txt">
                    <h3>Apprx. Delivery Time</h3>
                    <p>
                      {{ info && info.delivery_time ? info.delivery_time : '2 - 5 working days. In rear case delivery time would be different.'
                      }}</p>
                    <!-- <p>12 - 15 working days outside Dhaka</p> -->
                  </div>
                </div>
                <div class="product-content_info">
                  <div class="info_icon">
                    <i class="icon-basketx">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path
                          d="M12 8c-2.208 0-4 1.792-4 4s1.792 4 4 4c2.209 0 4-1.792 4-4s-1.791-4-4-4zm.2 5.979v.42h-.4v-.399c-.414-.007-.843-.105-1.2-.29l.181-.657c.383.146.891.305 1.29.215.46-.104.555-.577.046-.805-.372-.172-1.512-.322-1.512-1.296 0-.546.417-1.034 1.194-1.141v-.425h.401v.407c.29.007.616.058.977.168l-.145.658c-.307-.107-.646-.205-.977-.185-.595.035-.648.551-.232.766.684.322 1.576.561 1.576 1.418.002.687-.536 1.054-1.199 1.146zm-12.2-8.979v14h24v-14h-24zm22 9.422c-1.151.504-2.074 1.427-2.578 2.578h-14.844c-.504-1.151-1.427-2.074-2.578-2.578v-4.844c1.151-.504 2.074-1.427 2.578-2.578h14.844c.504 1.151 1.427 2.074 2.578 2.578v4.844z" />
                      </svg>

                    </i>
                  </div>
                  <div class="info_txt">
                    <h3>Do you have any questions?</h3>
                    <p>We are here to assist.</p>
                    <p>Reach us @ 01757757235</p>
                  </div>
                </div>
                <div class="product-content_info">
                  <div class="info_icon">
                    <i class="icon-basketx">

                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path
                          d="M22 4h-20c-1.104 0-2 .896-2 2v12c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-12c0-1.104-.896-2-2-2zm0 13.5c0 .276-.224.5-.5.5h-19c-.276 0-.5-.224-.5-.5v-6.5h20v6.5zm0-9.5h-20v-1.5c0-.276.224-.5.5-.5h19c.276 0 .5.224.5.5v1.5zm-9 6h-9v-1h9v1zm-3 2h-6v-1h6v1zm10-2h-3v-1h3v1z" />
                      </svg>

                    </i>
                  </div>
                  <!--                  <div class="info_txt">-->
                  <!--                    <a @click="viewEmailDetailsWidget" href="javascript:void(0)">-->
                  <!--                      <h3>Our Locations</h3>-->
                  <!--                    </a>-->
                  <!--                  </div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="single-product-share">
        <div class="product-share-icon">
          <div class="dropdown">
            <button class="dropbtn">
              <i class="icon-twitter"></i>
            </button>
            <div class="dropdown-content">
              <ul>
                <li>
                  <i class="icon-facebook-circled"></i>
                </li>
                <li>
                  <i class="icon-instagram"></i>
                </li>
                <li>
                  <i class="icon-youtube-play"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>


    <!-- cart modal -->
    <modal class="emi-details-widget" key="emiDetailsWidget" :modalRequest="emiDetailsWidgetModal" modal_title="EMI">
      <div v-html="emiDetailsDesc"></div>
    </modal>


  </div>

</template>

<script>
import Modal from '../common/Modal.vue'
import xyz from '@/store/index'

export default {
  components: { Modal },
  props: {
    self_class: {
      default: ''
    },
    simple_info: {
      default: null
    },

    toggleReviewsDrawer: {
      default: null
    },

    qty: {
      default: 1
    },

    variations: null,
    addToCart: {
      type: Function,
      default: function(id) {
        return null
      }
    },

    oneClickBuyNow: {//Nipun
      type: Function,
      default: function(id) {
        return null
      }
    },

    info: {},
    emi_widget: {}

  },


  data() {
    return {
      testv: false,
      quantity: 1,
      emiDetailsWidgetModal: null,
      emiDetailsDesc: 'Not available !',
      productAttrbutes: false,
      selectedVariation: false,
      selectedVariationId: false,
      variationPrice: false,
      newSelectVariation: {},
      errorMsg: false,
      isLoading: false,
      cartBtn: this.simple_info?.enable_variation == 'on' ? false : true,
      hasNewVariation: this.simple_info?.variations && this.simple_info?.variations?.count > 0 || this.simple_info?.variation_show_as != 'None' ? true : false,
      getNewProductVariation: [this.simple_info?.variations?.data],
      disable_buy: this.simple_info?.disable_buy,
      fixedVariationBaseValue: false,
      productLayerStart: this.simple_info?.variation_layer_start
    }
  },

  methods: {
    async getProductAttribute(single_varification_id = false) {

      // let res = await this.$axios.get('/api/product/get-product-attribute/'+this.simple_info.id, {});
      // this.productAttrbutes = res.data;
      // console.log(single_varification_id)
      let data = this.simple_info?.variations
      // console.log(single_varification_id)
      if (single_varification_id) {
        this.selectedVariation = data[single_varification_id]?.variations
        this.selectedVariationId = single_varification_id
        this.variationPrice = {
          product_code: data[single_varification_id].variation_product_code,
          sub_title: data[single_varification_id].variation_sub_title,
          regular_price: data[single_varification_id].product_regular_price,
          selling_discount: data[single_varification_id].product_selling_discount,
          price_now: data[single_varification_id].product_price_now,
          save_price: data[single_varification_id].save_price
        },
          this.$emit('set-variation-id', single_varification_id)
      }
      //res.data.single_varification_id.variations
    },

    updateQuantity() {
      this.$emit('updateQuantity', this.quantity)
    },

    quantityIncreament() {
      if (this.quantity < 99) {
        this.quantity += 1
      }
    },

    quantityDecreament() {
      if (this.quantity > 1) {
        this.quantity -= 1
      }
    },

    paymentNext() {
      this.$refs.payment_scroll.scrollLeft = this.$refs.payment_scroll.scrollWidth
    },

    paymentPrev() {
      this.$refs.payment_scroll.scrollLeft = 0
    },


    async variationRadioChange(option = []) {
      //console.log(option.index);

      //   console.log(option);
      if (!this.isLoading) {
        this.isLoading = true
        // console.log(this.newSelectVariation);

        if (option.fixed_variation) {
          //this.newSelectVariation[option.fixed_variation] = this.newSelectVariation[option.fixed_variation]
          for (const index in this.newSelectVariation) {
            if (index != option.fixed_variation) {
              delete this.newSelectVariation[index]
            }
          }
          // delete this.newSelectVariation['Choose Capacity']
        }

        let data = {
          'product_id': this.simple_info.id,
          'variation': this.newSelectVariation
        }

        let res = await this.$axios.post('/api/product/get-customer-selected-product-variation', data)


        res = res.data
        let sorting = option.sort ?? 1
        let baseValueLink = ''
        if (option.base_value) {
          this.fixedVariationBaseValue = option.base_value
        } else {
          this.fixedVariationBaseValue = false
        }
        if (this.fixedVariationBaseValue) {
          baseValueLink = `&&base_value=${this.fixedVariationBaseValue}`
        }
        // alert(this.fixedVariationBaseValue)
        let getVariationSpeci = await this.$axios.get(`/api/product/get-product-variation/${this.simple_info.id}?variation_product_code=${res.variation_product_code}&&variation_key=${option.index}&&variation_value=${option.value}&&sort=${sorting}${baseValueLink}`)
        // this.getNewProductVariation = getVariationSpeci.data.data;
        this.getNewProductVariation = this.getNewProductVariation.length > 1 ? [this.getNewProductVariation.slice(0, 1)[0]] : this.getNewProductVariation

        let rt = this.getNewProductVariation
        // console.log(this.getNewProductVariation)
        // console.log([getVariationSpeci.data.data])
        rt = rt.concat([getVariationSpeci.data.data])
        const newArray = rt
        if (option.not_append) {

        } else {
          this.getNewProductVariation = newArray
        }


        // let arra = [getVariationSpeci.data.data];

        /*
      if (res.status == '203') {
        this.errorMsg = 'This variation is not available';
      } else {
        this.errorMsg = false
      }*/


        //console.log(this.simple_info)
        // const datass = 'Data from Child Component 1';
        // this.testv = datass;
        // console.log(getVariationSpeci)
        let getVariationImages = getVariationSpeci.data.variation_img
        // console.log(getVariationImages)
        /*
      let npimg = [
        {
          'id': '1',
          'url': '#'
        },

      ];
      */
        // console.log(getVariationSpeci)
        this.$store.commit('setSelectedvariationImage', getVariationImages)

        // this.$store.commit('setSharedVariable', datass);


        this.selectedVariationId = res.variation_id
        this.disable_buy = res?.disable_buy

        if (option.priceHasChange == true) {
          if (res.status == '203') {
            this.variationPrice = {
              product_code: this.simple_info.sku,
              sub_title: this.simple_info.sub_title,
              regular_price: this.simple_info.local_selling_price,
              selling_discount: this.simple_info.local_discount,
              price_now: this.simple_info.price_now.toLocaleString(),
              save_price: this.simple_info.actual_discount
            }
          } else {
            this.variationPrice = {
              product_code: res.variation_product_code,
              sub_title: res.variation_sub_title,
              regular_price: res.product_regular_price,
              selling_discount: res.product_selling_discount,
              price_now: res.product_price_now,
              save_price: res.save_price
            }
          }
        }

        this.cartBtn = true
        this.isLoading = false
        this.$emit('set-variation-id', res.variation_id)
        // console.log(res.variation_id)
      }
    },

    async viewEmailDetailsWidget() {
      await this.$store.dispatch('common/fetchEmiDetailsWidget')
      this.emiDetailsWidgetModal = new Date().getTime()
      this.emiDetailsDesc = this.$store.state.common.EMI_DETAILS_WIDGET.widget ? this.$store.state.common.EMI_DETAILS_WIDGET.widget.description : ''
    }

  },

  watch: {
    quantity: {
      handler() {
        this.updateQuantity()
      },
      immediate: true
    }
  },

  created() {
    this.$store.commit('setSelectedvariationImage', false)
    this.quantity = this.qty
    // console.log(this.simple_info)
    // this.variationRadioChange()
    //  this.variationRadioChange();
    // console.log(this.getNewProductVariation)


    if (this.simple_info?.enable_variation == 'on') {
      this.variationPrice = true
      var getVa = this.simple_info?.variations.data
      //console.log(getVa)
      for (const indexx in getVa) {
        let getv = Object.entries(getVa[indexx])
        let mkIndex = getv.length - 2
        // console.log(getVa[indexx])
        for (const [index, item] of getv) {
          if (index == mkIndex) {
            // console.log(item)
            var newCarPush = this.newSelectVariation
            // newCarPush[indexx] = item
            newCarPush = item
            // console.log(item)
            //'sort': 1 ,  'value': item.value, &&base_value
            this.variationRadioChange({
              'fixed_variation': indexx,
              'index': indexx,
              'value': item.value,
              'base_value': item.value,
              'priceHasChange': true,
              'clickable': true
              // 'not_append' : true,
            })
            // this.variationRadioChange({'priceHasChange' : true, 'clickable' : true})
          }
        }
      }
      // this.cartBtn = true;
    }//end


  }
}
</script>

<style>
/* product delivery info */
.product-deliver-info {
  background: #efefef5e;
  border-radius: 5px;
  padding: 0 20px;
  width: 90%;
  float: right;
}

.product-content_info {
  display: flex;
  justify-content: left;
  border-bottom: 3px solid #fff;
  padding: 10px 0;
}

.product-content_info i {
  text-align: center;
  margin-top: 0px;
  margin-right: 10px;
  color: #000;
  font-size: 18px;
  display: block;
}

.product-content_info h3 {
  font-weight: 600;
  font-size: 16px;
  color: #333;
  margin: 3px 0;
}

/* .product-content_info.stock i,
.product-content_info.stock h3{
    color:green
} */
.product-content_info a {
  text-decoration: underline;
}

.product-content_info p {
  font-size: 14px;
  color: #555;
}

.pay-arrows > div {
  position: absolute;
  bottom: 0px;
}

.pay-arrows .left-arrow {
  left: -30px;
}

.pay-arrows .right-arrow {
  right: -30px;
}

.pay-arrows i {
  color: #000;
  font-size: 20px;
}

#payment-scroll {
  scroll-behavior: smooth;
}

/* Attribute Nipun */
label.radio {
  cursor: pointer;
  display: inline-block;
}

label.radio span {
  padding: 2px 9px;
  border: 0px solid #ff0000;
  display: inline-block;
  color: #ff0000;
  border-radius: 3px;
  text-transform: uppercase;
}

label.radio input:checked + span {
  /*border-color: #ff0000;*/
  /*background-color: #ff0000;*/
  border: 2px solid #ff0000;
  color: #fff;
}

label.radioText {
  cursor: pointer;
  display: inline-block;
}

label.radioText span {
  padding: 2px 9px;
  border: 1px solid #999;
  display: inline-block;
  color: #333;
  border-radius: 3px;
  text-transform: uppercase;
}

label.radioText input:checked + span {
  /*border-color: #ff0000;*/
  background-color: #0a4a68;
  border: 2px solid #0a4a68;
  color: #fff;
}

.radioText input[type="radio"] {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  display: inline-block;
  border: 0;
  opacity: 0;
  padding: 0;
  z-index: 1;
  cursor: pointer;
  overflow: hidden;
}

.radioText {
  position: relative;
  display: flex;
  align-items: flex-start;
}

.radioText input[type="radio"]:hover ~ .radio__symbol::after {
  background: #dfdfdf;
  content: "";
  width: auto;
  height: auto;
  display: block;
  border-radius: 50%;
}

.cursor_normal {
  cursor: unset;
}

/* ENd */
</style>
