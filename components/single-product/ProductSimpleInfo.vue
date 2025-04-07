<template>
  <div v-if="simple_info" class="single-pg-product-info">
    <!-- top -->
    <div class="single-page-contant-top">
      <div class="single-page-pd-title">
        <h3>{{ simple_info.title }}</h3>
      </div>
      <div class="single-page-pd-item">
        <h4>Item Name: <span>{{ simple_info.sub_title }}</span></h4>
      </div>
      <div class="single-page-contant-det">
        <p>Product Code : <span id="v-itemcode">{{ simple_info.sku }}</span></p>
      </div>
      <div class="single-page-contant-rd">
        <div class="single-page-contant-rev">
          <ul class="list-unstyled">
            <li><a href=""><i class="icon-star-empty"></i></a></li>
            <li><a href=""><i class="icon-star-empty"></i></a></li>
            <li><a href=""><i class="icon-star-empty"></i></a></li>
            <li><a href=""><i class="icon-star-empty"></i></a></li>
            <li><a href=""><i class="icon-star-empty"></i></a></li>
          </ul>
        </div>
        <div class="single-page-contant-cs-rev">
          <p>0 Customer Reviews</p>
        </div>
      </div>
      <div id="price_tag">
        <div class="price-top">
          <h1>Discount Price ({{ simple_info.local_discount }}%) : Tk.{{ simple_info.sp }}/-
            <span>(Save {{ simple_info.actual_discount }}/-)</span></h1>
        </div>
        <div class="regular-price">
          <h3>Regular Price : Tk. {{ simple_info.local_selling_price }}/-</h3>
        </div>
      </div>
      <div class="price">
        <div id="price_tag">
        </div>
        <div class="price-btm">
        </div>
      </div>
    </div>
    <!-- mid -->
    <div class="single-page-contant-mid">
      <div class="single-page-contant-det">
        <!--				<p>Material : <span>Wooden</span></p>-->
        <!--				<p>Dimension : <span>215 (L) x 218 (W) x 142 (H) CM</span></p>-->
        <div class="mcbi_box">
          <div class="mcbi_increase mcbi_horizontal">
            <span>Quantity :</span>
            <div class="quantity-warp">
              <button type="button" class="mcbi_sub mcbi_sub1" @click="quantityDecreament()">-</button>
              <input type="number" class="mcbi_view" v-model="quantity" min="1" max="99">
              <button type="button" class="mcbi_add mcbi_add2" @click="quantityIncreament()">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="buy-sg-area ">
        <div class="buy-sg-btn">
          <a href="javascript:void(0)" @click="addToCart(simple_info.id)" id="button-cart">
            Buy Now
          </a>
        </div>
        <div class="buy-sg-vt">
          <a href="javascript:void(0);"><i class="icon-heart-empty"></i></a>
        </div>
      </div>
      <div class="share_buttons">
        <p class="share_text">Share</p>
        <ul class="eagles_buttons">
          <li>
            <a href="#">
              <i class="icon-facebook-circled"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-instagram"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-pinterest"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-youtube-play"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>


    <!-- Button trigger modal -->
    <modal key="cartModal" :modalRequest="cartModal" modal_title="Add to cart">
      <div v-if="cart_add_success">
        Product added to cart<br />
        <a href="javascript:void(0)" @click="viewCartPage">View Cart</a>
      </div>
      <div v-else>
        Fail to added !
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from '../common/Modal.vue'

export default {
  components: { Modal },
  props: {
    simple_info: {}
    // cartModal: null,
  },
  data() {

    return {
      quantity: 1,
      cart_add_success: false,
      cartModal: null
    }
  },
  methods: {
    async addToCart(product_id) {

      await this.$store.dispatch('cart/fetchAdd', {
        main_pid: product_id,
        qty: this.quantity
      })
      this.cart_add_success = this.$store.state.cart.ADD ? this.$store.state.cart.ADD.success : false
      this.cartModal = new Date()

      // await this.dataLayerAddToCart(product_id, this.$store.state.cart.ADD)

    },

    async quantityIncreament() {
      if (this.quantity < 99) {
        this.quantity += 1
      }
    },

    async quantityDecreament() {
      if (this.quantity > 1) {
        this.quantity -= 1
      }
    },

    async viewCartPage() {
      this.cartModal = await new Date()
      this.$router.push({ path: '/cart' })
    }

    // async dataLayerAddToCart(product_id, item = null) {
    //
    //   if (typeof dataLayer != undefined && item && item.success == true) {
    //
    //     dataLayer.push({ ecommerce: null })
    //     dataLayer.push({
    //       event: 'add_to_cart',
    //       ecommerce: {
    //         currency: 'BDT',
    //         value: item.totalprice,
    //         // coupon: "SUMMER_FUN",
    //         // shipping_tier: "Ground",
    //         items: [
    //           {
    //             item_id: product_id,
    //             item_name: item.title,
    //             affiliation: 'MasterLeatherBD',
    //             currency: 'BDT',
    //             // discount: 56700,
    //             index: 0,
    //             item_brand: 'MasterLeatherBD',
    //             item_category: item.cat_name,
    //             item_list_id: 'related_products',
    //             item_list_name: 'Related Products',
    //             item_variant: 'green',
    //             location_id: 'L_12345',
    //             price: item.sp,
    //             quantity: item.total_qty
    //           }
    //         ]
    //       }
    //     })
    //
    //
    //   }
    // }


  }
}
</script>
