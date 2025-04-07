<template>
  <!-- brand description wrapper -->
  <section class="brand-description-wrap clear-cache" :class="[loading?'d-none':'']">
    <div class="container">
      <div class="brand-des-wrap-content section-grap2">
        <div class="brand-description-header">
          <div class="section-title">
            <h2 class="title">Crafting the Best Leather Goods in Bangladesh</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="brand-description-text">
              <p>
                <strong>Master Leather</strong>, a leading name in <strong>leather goods in Bangladesh</strong>, offers a wide range of <strong>exquisite leather
                products</strong> both online and offline. We are dedicated to providing you with the finest leather
                craftsmanship, ensuring durability and timeless style.

                Explore our collection and discover a variety of <strong>luxurious leather products</strong>, all crafted with the utmost
                care. Visit us in-store or browse our online store to experience the masterful quality of Master
                Leather.
              </p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="brand-category-sub-links">
              <ul class="category-list">
                <li v-for="(term,key) in $store.state.home.ALL_TERMS.terms" :key="key">
                  <a :title="term.name" :href="'/c/'+term.seo_url" target="_blank">{{ term.name }}</a> |
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    loading: {
      default: true,
      type: Boolean
    }
  },
  data() {

    return {}
  },
  async mounted() {

  },
  async created() {

  }
}
</script>

<style scoped>
.category-list {
  list-style-type: none;
}

.category-list li {
  display: inline;
}
</style>
