<template>
    <!-- category product grid box -->
	<section v-if="tag_gallery.length > 0" class="ctg-pd-grid-box clear-cache">
		<div class="container">
			<div class="ctg-pd-grid-box-top">
				<div class="ctg-pd-grid-box_left" v-html="main_category.seo_h2">
					<div class="section-title">
						<h2 class="title"> title</h2>
					</div>
					<div class="section-para">
						description
					</div>
				</div>
				<div class="ctg-pd-grid-box_right">
					<!-- <a href="#">See all sofas</a> -->
				</div>
			</div>
			<div class="ctg-pd-grid-box-bottom">
				<div v-for="(tg,key) in tag_gallery" :key="key" class="ctg-pd-grid-box-bottom_post">
					<div class="ctg-pd-grid-box-bottom_item">
						<nuxt-link v-if="tg.url_type == 1" :to="tg.url">
		    				<lazy-image :src="tg.image_url" class="w-100" alt=""/>
		    			</nuxt-link>
						<a v-else :href="tg.url">
		    				<lazy-image :src="tg.image_url" class="w-100" alt=""/>
		    			</a>
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
		  type: Array | Object,
		  default: () => []
	  },
	},
	data(){
		return {
			tag_gallery: []
		}
	},
	async created(){
		await this.$store.dispatch('category/fetchTagGallery',{
            seo_url: this.$route.params.slug,
			...this.$route.query
		})

		this.tag_gallery = this.$store.state.category.TAG_GALLERY.tag_gallery
	}
}
</script>

<style scoped>
	.ctg-pd-grid-box {
 		margin-top: 3.125rem;
	}
	.ctg-pd-grid-box-bottom {
		width: 100%;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-column-gap: 1.25rem;
		grid-row-gap: 1.25rem;
		display: grid;
		grid-template-rows: repeat(7, minmax(0, 1fr));
	}
	.ctg-pd-grid-box-bottom_item img {
		height: 100%;
		object-fit: cover;
	}
	.ctg-pd-grid-box-bottom_item span,
	.ctg-pd-grid-box-bottom_item {
		height: 100%;
	}
	.ctg-pd-grid-box-bottom_post:first-child {
		grid-row: 1/8;
		grid-column: 1/3;
	}
	.ctg-pd-grid-box-bottom_post:nth-child(2) {
		grid-column: 3/4;
		grid-row: 1/4;
	}
	.ctg-pd-grid-box-bottom_post:nth-child(3) {
		grid-column: 4/5;
		grid-row: 1/5;
	}
	.ctg-pd-grid-box-bottom_post:nth-child(4) {
		grid-column: 3/4;
		grid-row: 4/8;
	}
	.ctg-pd-grid-box-bottom_post:nth-child(5) {
		grid-column: 4/5;
		grid-row: 5/8;
	}
	.ctg-product-modular-slide .product-item {
		flex-basis: calc(25% - 1.25rem);
	}

</style>