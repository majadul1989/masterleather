<template>
    <div :class="container_class" v-if="product">
        <product-set-design v-if="product.product_set" :product="product.product_set" />
        <!-- <div v-else class="product-item">
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

    </div> -->

        <nuxt-link :to="'/product/' + product.seo_url" class="product-card">
            <div class="product-card-image-wrapper">
                <lazy-image
                    :src="product.second_image ? product.second_image.full_size_directory : (product.first_image ? product.first_image.full_size_directory : 'public/uploads/fullsize/2019-01/default.jpg')"
                    class="product-card-image" alt="" />
                <div class="product-card-add-to-bag">
                    <span>Add to Bag</span>
                </div>
                <div class="product-card-icons">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <i class="fa-regular fa-heart" @click="addWishlist"></i>
                </div>
            </div>
            <div class="product-card-info">
                <h3>{{ product.title }}</h3>
                <span>{{ money_sign }} <b>{{ product.product_price_now.toLocaleString() }}</b></span>
            </div>

        </nuxt-link>


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

    components: { Modal, LazyImage, ProductSetDesign },

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

                this.addToWishListDataLayer()
            } catch (e) {
                // Redirect to login if needed
                this.$router.push({ path: '/user/login' })
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

            this.addToCompareDataLayer(pid)
        },

        async removeCompare(pid) {
            await this.$store.dispatch('cart/fetchRemoveCompare', {
                pid: pid
            })

            await this.$store.dispatch('cart/fetchCountNotification')
            await this.$store.dispatch('cart/fetchCart', {})

            const compare = this.$store.state.cart.ADD_TO_COMPARE
            this.compareRemove = compare.success
            this.compareRemoveModalRequest = new Date()
        },

        async compareChanges(self, pid) {
            if (self.target.checked) {
                this.addToCompare(pid)
            } else {
                this.removeCompare(pid)
            }

            console.log(self.target.checked, pid)
        },

        addToWishListDataLayer() {
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({ ecommerce: null }); // Clear previous ecommerce object

                dataLayer.push({
                    event: "add_to_wishlist",
                    ecommerce: {
                        currency: "BDT",
                        value: this.product.product_price_now || 0,
                        items: [
                            {
                                item_id: this.product.id,
                                item_name: this.product.title,
                                currency: "BDT",
                                price: this.product.product_price_now || 0,
                                quantity: 1
                            }
                        ]
                    }
                });
            }
        },

        addToCompareDataLayer(pid) {
            if (typeof dataLayer !== 'undefined') {
                dataLayer.push({
                    event: 'select_content',
                    content_type: 'product',
                    item_id: pid
                });
            }
        }
    }
}
</script>



<style scoped>
.pd-discount-text {
    color: #ed022a;
}

/* product card */

.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5px;
  text-decoration: none;
}

.product-card:hover .product-card-add-to-bag {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.product-card:hover .product-card-icons {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

/* Image wrapper with fixed dimensions */
.product-card-image-wrapper {
  position: relative;
  width: auto;
  height: 350px;
  overflow: hidden;
}

/* Image styling */
.product-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  transform: scale(0.95);
}

.product-card-image-wrapper:hover .product-card-image {
  transform: scale(1);
}

/* Add to Bag Button */
.product-card-add-to-bag {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 38px;
  background: rgb(223, 109, 39);
  text-align: center;
  cursor: pointer;
  transition: all 0.8s ease;
  opacity: 0;
  transform: translateY(100%);
  pointer-events: none;
}

.product-card-add-to-bag span {
  color: white;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* Icons on hover */
.product-card-icons {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 70px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.8s ease;
  opacity: 0;
  transform: translateX(100%);
  pointer-events: none;
}

/* Product info below the image */
.product-card-info {
  text-align: center;
  margin-top: 8px;
}

.product-card-info h3 {
  font-size: 13px;
  margin-bottom: 3px;
  color: #333;
  font-weight: 400;
  word-wrap: break-word;
}

.product-card-info span {
  color: #df6d27;
  font-size: 14px;
  font-weight: 600;
}

@media (min-width: 800px) {
    .product-card-image-wrapper {
        width: auto;
        height: 350px;
    }
}
@media (min-width: 1500px) {
    .product-card-image-wrapper {
        width: 350px;
        height: 350px;
    }
}

</style>
