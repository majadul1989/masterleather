<template>
    <!-- category product allView -->
	<section class="category-product-all_View  clear-cache">
		<div class="container">
			<div class="category-product-all_View_top">
				<div class="section-title">
					<h2 class="title" v-if="main_category">{{main_category.name}}</h2>
				</div>
        <div v-if="main_category.banner1" class="py-3 d-none">
          <img :src="main_category.banner1"  class="" alt=""/>
        </div>
			</div>
			<div class="row pd-view-row">
				<div v-for="(category,key) in sub_category" :key="key" class="col-md-2 col-6 col-sm-4 col-6">
					<div class="ctg-pd-all_view_post">
						<nuxt-link :to="'/c/'+category.seo_url">
							<lazy-image :src="category.home_img?category.home_img.full_size_directory:'/public/nuxt/assets/images/default.png'" class="w-100" alt=""/>
							<span class="ctg-pd-view-title">
								{{category.name}}
							</span>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		main_category: {
			default: null
		},
		sub_category: {
			type: Array | Object,
			default: () => []
		}
	},
	data(){
		return {
			// sub_category: [],
			// main_category: null

		}
	},
	created() {
    //   this.main_category = this.$store.state.category.CATEGORY.info
    //   this.sub_category = this.$store.state.category.SUB_CATEGORY.category
    //console.log(this.main_category)
  }
}
</script>
<style scoped>
	.category-product-all_View_top .section-title h2.title {
		font-size: 1.875rem;
		line-height: 1.3334;
		letter-spacing: -0.53px;
	}
	.category-product-all_View_top .section-title {
		margin-bottom: 1.875rem;
	}
	.ctg-pd-all_view_post {
		margin-bottom: 40px;
	}
	.ctg-pd-view-title {
		padding-top: 1.25rem;
		color: #333;
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 1.7142;
		text-decoration: underline;
		display: block;
	}

</style>
