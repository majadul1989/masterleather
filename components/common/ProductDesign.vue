<template>
  <div :class="container_class" v-if="product">
    <product-set-design v-if="product.product_set" :product="product.product_set"/>
    <div v-else class="product-item">
      <div class="plp-checkbox--subtle plp-checkbox">
        <input type="checkbox" name="checkboxname" id="checkbox" @change="compareChanges($event,product.id)"
               black="true" value="ett">
        <span class="plp-checkbox__symbol"></span>
      </div>
      <div class="wishlist-btn">
        <a href="javascript:void(0)" @click="addWishlist">
          <i class="icon-heart-empty"></i>
        </a>
      </div>
      <nuxt-link :to="'/product/'+product.seo_url">
        <div class="product-item-img">
          <lazy-image
            :src="product.first_image?product.first_image.full_size_directory:'public/uploads/fullsize/2019-01/default.jpg'"
            class="hide-img w-100" alt=""/>
          <lazy-image
            :src="product.second_image?product.second_image.full_size_directory:(product.first_image?product.first_image.full_size_directory:'public/uploads/fullsize/2019-01/default.jpg')"
            class="show-img w-100" alt=""/>
        </div>
        <span class="product-item-text">
                    <span class="pd_name_highlight">{{ product.title }}</span>
                    <span class="pd_description_title">{{ product.sub_title }}</span>
                    <span class="pd_small_price"
                          v-if="showPrice && product.actual_discount > 0 && product.local_selling_price"><s
                      class="text-muted">{{ money_sign }}. {{ product.local_selling_price.toLocaleString() }}</s> <p
                      class="font-weight-bold d-inline pd-discount-text">- {{ product.local_discount }}%</p></span>
                    <span class="pd_highlight_price" v-if="showPrice && product.product_price_now">{{ money_sign }}. <b>{{ product.product_price_now.toLocaleString() }}</b></span>
                </span>
        <div v-if="product.enable_variation == 'on'" style=" margin-top: 15px;">
          <nuxt-link :to="'/product/'+product.seo_url"
                     style="font-weight: 600; background: #ED1B24; color: #fff; padding: 5px 10px;">Variations
          </nuxt-link>
        </div>
      </nuxt-link>
      <!-- <span class="product-variants-wrap">
          <span>More variants</span>
          <a href="#">
              <lazy-image src="/public/nuxt/assets/images/variant-img1.webp" class="w-100" alt=""/>
          </a>
          <a href="#">
              <lazy-image src="/public/nuxt/assets/images/variant-img2.webp" class="w-100" alt=""/>
          </a>
          <a href="#">
              <lazy-image src="/public/nuxt/assets/images/variant-img3.webp" class="w-100" alt=""/>
          </a>
          <a href="#">
              <lazy-image src="/public/nuxt/assets/images/variant-img4.webp" class="w-100" alt=""/>
          </a>
          <a href="#">
              <lazy-image src="/public/nuxt/assets/images/variant-img5.webp" class="w-100" alt=""/>
          </a>
          <a href="#" class="variants-more_btn">1+</a>
      </span> -->
      <Modal modal_title="Wishlist" :modalRequest="wishListModalRequest">
        <div v-if="wishList">
          <lazy-image :src="wishList.image_url"/>
          {{ wishList.title }} added to wishlist
        </div>
        <div class="text-center" v-else>
          Product not added to wishlist.
        </div>
      </Modal>


      <Modal modal_title="Compare" :modalRequest="compareModalRequest">
        <div v-if="compare">
          <lazy-image :src="compare.image_url"/>
          {{ compare.title }} added to compare
        </div>
        <div class="text-center" v-else>
          Product not added to compare.
        </div>
      </Modal>


      <Modal modal_title="Compare" :modalRequest="compareRemoveModalRequest">
        <div v-if="compareRemove !== null && compareRemove">
          Compare successfully removed
        </div>
        <div class="text-center" v-else>
          Product not removed from compare.
        </div>
      </Modal>

    </div>
  </div>
</template>

<script>
import LazyImage from './LazyImage.vue'
import Modal from './Modal.vue'
import ProductSetDesign from './ProductSetDesign.vue'

export default {
  props: {
    container_class: {
      type: String,
      default: 'col-md-4 col-sm-6 col-lg-3'
    },
    product: {
      type: Object
    },
    showPrice: {
      type: Boolean,
      default: true
    }
  },

  components: {Modal, LazyImage, ProductSetDesign},

  data() {

    return {
      wishList: null,
      wishListModalRequest: null,
      compare: null,
      compareModalRequest: null,
      compareRemoveModalRequest: null,
      compareRemove: null,
    }
  },

  methods: {
    async addWishlist() {

      try {
        await this.$store.dispatch('user/fetchAddToWishlist', {
          pid: this.product.id
        })


        this.wishList = this.$store.state.user.ADD_TO_WISHLIST.product
        this.wishListModalRequest = true

        await this.$store.dispatch('cart/fetchCountNotification')
        await this.$store.dispatch('cart/fetchCart', {})

        // await this.addToWishListDataLayer()

      } catch {

        this.$router.push({path: '/user/login'})
      }

    },

    async addToCompare(pid) {
      await this.$store.dispatch('cart/fetchAddToCompare', {
        pid: pid
      })
      await this.$store.dispatch('cart/fetchCountNotification')
      await this.$store.dispatch('cart/fetchCart', {})

      const compare = this.$store.state.cart.ADD_TO_COMPARE

      if (compare.success) {
        this.compare = compare.product
      } else {
        this.compare = null
      }

      this.compareModalRequest = new Date()

    },

    async removeCompare(pid) {
      await this.$store.dispatch('cart/fetchRemoveCompare', {
        pid: pid
      })

      await this.$store.dispatch('cart/fetchCountNotification')
      await this.$store.dispatch('cart/fetchCart', {})
      const compare = this.$store.state.cart.ADD_TO_COMPARE
      this.compareRemove = compare.success;
      this.compareRemoveModalRequest = new Date()

    },

    async compareChanges(self, pid) {
      if (self.target.checked) {
        this.addToCompare(pid)

        // if (typeof dataLayer != undefined) {
        //
        //   dataLayer.push({
        //     event: 'select_content',
        //     content_type: 'product',
        //     item_id: pid
        //   });
        //
        // }


      } else {
        this.removeCompare(pid)
      }
      console.log(self.target.checked, pid)
    },

    // async addToWishListDataLayer() {
    //
    //   if (typeof dataLayer != undefined) {
    //
    //     dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    //     dataLayer.push({
    //     event: "add_to_wishlist",
    //     ecommerce: {
    //         currency: "BDT",
    //         value: 7.77,
    //         items: [
    //         {
    //         item_id: "SKU_12345",
    //         item_name: "Stan and Friends Tee",
    //         affiliation: "Google Merchandise Store",
    //         coupon: "SUMMER_FUN",
    //         currency: "BDT",
    //         discount: 2.22,
    //         index: 0,
    //         item_brand: "Google",
    //         item_category: "Apparel",
    //         item_category2: "Adult",
    //         item_category3: "Shirts",
    //         item_category4: "Crew",
    //         item_category5: "Short sleeve",
    //         item_list_id: "related_products",
    //         item_list_name: "Related Products",
    //         item_variant: "green",
    //         location_id: "L_12345",
    //         price: 9.99,
    //         quantity: 1
    //         }
    //         ]
    //     }
    //     });
    //
    //   }
    //
    // }
  }
}
</script>


<style scoped>
.pd-discount-text {
  color: #ed022a;
}
</style>
