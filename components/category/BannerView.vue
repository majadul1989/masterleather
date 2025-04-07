<template>
  <!-- category banner wrapper -->
  <section v-if="product_sets.length > 0" class="category-banner-wrap clear-cache">
    <div class="container">
      <!-- <div class="category-banner-top_side">
        <div class="ctg-bnr-top_left_side">
          <lazy-image src="/public/nuxt/assets/images/category-banner.webp" class="w-100" alt=""/>
        </div>
        <div class="ctg-bnr-top_right_side">
          <h3>
            <a href="#">Find some help choosing the right sofa</a>
          </h3>
          <div class="ctg-bnr-top_btn">
            <a href="#" >
              <i class="icon-right-big"></i>
            </a>
          </div>
        </div>
      </div> -->
      <!-- <div class="category-banner-btm_side">
        <div class="row">
          <div v-for="(product_set,key) in product_sets" :key="key" class="col-md-4 col-sm-6">
            <div class="category-banner-btm_side_post">
              <div class="ctg-bnr-btm_post-content">
                <nuxt-link :to="'/product-set/'+product_set.slug">
                  <lazy-image :src="product_set.image_url" class="w-100" alt=""/>
                </nuxt-link>

                <nuxt-link :to="'/product-set/'+product_set.slug">
                  <h4>{{product_set.title}}</h4>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <div class="product-set-wrapper clear-cache">
        <div class="shop-category-header">
          <div class="section-title">
            <h2 class="title">Product set</h2>
          </div>
        </div>
        <asl-carousel carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
          <div v-for="(product_set,key) in product_sets" class="product-design-container" :key="key">
            <div class="product-item">
              <nuxt-link :to="'/product-set/'+product_set.slug">
                <div class="product-item-img">
                  <lazy-image :src="product_set.image_url" classList="w-100 w-100 hide-img" alt="" />
                  <lazy-image :src="product_set.image_url" classList="w-100 w-100 show-img" alt="" />
                </div>
                <span class="product-item-text"><span class="pd_name_highlight">{{ product_set.title }}</span> <span
                  class="pd_highlight_price">{{ money_sign }} <b>{{ product_set.price_all }}</b></span></span>
              </nuxt-link>
            </div>
          </div>
        </asl-carousel>
      </div>
    </div>
  </section>
</template>
<script>
export default {

  props: {
    product_sets: {
      type: Array,
      default: []
    }
  },
  data() {

    return {}
  },

  async created() {


  }
}
</script>

<style scoped>
.category-banner-top_side {
  display: flex;
}

.ctg-bnr-top_left_side {
  width: calc(8 / 12 * 100%);
}

.ctg-bnr-top_right_side {
  width: calc(4 / 12 * 100%);
  padding: 3rem;
  background: #facab4;
  position: relative;
}

.ctg-bnr-top_right_side h3 a {
  font-weight: 700;
  font-size: 1.375rem;
  line-height: 1.45455;
  margin-bottom: 0.5rem;
  color: #111111;
}

.ctg-bnr-top_right_side h3 a:hover {
  text-decoration: underline;
}

.ctg-bnr-top_btn a:hover {
  background: #f5f5f5;
}

.category-banner-btm_side {
  margin-top: calc(4rem + 2.5rem);
}

.ctg-bnr-btm_post-content h4 {
  font-size: 0.825rem;
}

.product-set-wrapper .product-design-container {
  flex-basis: calc(26% - 1.25rem * 2);
}

.product-set-wrapper {
  padding-bottom: 0;
}
</style>
