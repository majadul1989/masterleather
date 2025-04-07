<template>
	<!-- single page recent product-->
	<div v-if="products.length > 0" class="single-pg-recent-pd">
		<div class="ctg-pd-grid-box_left">
			<div class="section-title">
				<h2 class="title">Your recently viewed products</h2>
			</div>
		</div>
		<div class="single-pg-rcnt-pd-content">
			<div v-for="(product,key) in products" :key="key" class="rent-pd-content-post">
				<nuxt-link :to="product.seo_url">
					<lazy-image :src="product.image_url" class="w-100" alt=""/>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>


<script>
export default {
    data(){

		return {
			products: []
		}
	},
	async created(){

		await this.$store.dispatch('product/fetchRecentViewProducts',{})

		this.products = this.$store.state.product.RECENT_VIEW_PRODUCTS.products
	}
}
</script>

<style scoped>
	/*single page recent product*/
	.single-pg-rcnt-pd-content {
		display: flex;
		margin-right: -0.625rem;
		margin-left: -0.625rem;
	}
	.rent-pd-content-post {
		flex-basis: calc(10% - 1.25rem);
		flex-shrink: 0;
		max-width: calc(10% - 1.25rem);
		margin-left: 0.625rem;
		margin-right: 0.625rem;
	}
</style>