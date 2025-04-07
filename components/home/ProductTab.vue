<template>
    <!-- product tab wrapper -->
	<section :class="[GALLERY.tag_gallary.length > 0 ? '':'d-none']" class="inview-tag-gallery product-tab-wrapper">
		<div class="container">
			<div class="product-tab-content ">
				<div class="product-tab-header">
				    <div class="section-title">
					   <h2 class="title">More ideas and inspiration</h2>
				    </div>
			    </div>
			    <div v-if="GALLERY.terms.length > 0" class="product-tab-list">
			    	<ul>
				    	<li key="all" :class="[seo_url == 'all' ?'active' :'']">
							<a @click="loadCategory('all')" href="javascript:void(0)"><button>All</button></a>
						</li>
			    		<li v-for="(term,key) in GALLERY.terms" :key="key" :class="[seo_url == term.term_url ?'active' :'']">
							<a @click="loadCategory(term.term_url)" href="javascript:void(0)"><button>{{term.term_name}}</button></a>
						</li>
			    	</ul>
			    </div>
				<div v-if="loading" style="height:700px;">
					<loading :loading="loading"/>
				</div>
			    <div v-else class="ofeed-thumbnail-grid">
			 		<div v-for="(tg,tkey) in GALLERY.tag_gallary" :key="tkey" class="ofeed-thumbnail-grid__item" :class="[tkey==1?'ofeed-thumbnail-grid__item--square':'']">
		    			<nuxt-link v-if="tg.url_type == 1" :to="tg.url">
		    				<lazy-image :src="tg.image_url" class="w-100" alt=""/>
		    			</nuxt-link>
						<a v-else :href="tg.url">
		    				<lazy-image :src="tg.image_url" class="w-100" alt=""/>
		    			</a>
		    		</div>

			    </div>
			    <div v-if="GALLERY.tag_gallary.length > 9" class="product-tab-show-btn text-center">
			    	<button @click="loadCategory(seo_url)">
			    		Load more
			    	</button>
			    </div>
			</div>
		</div>
	</section>
</template>

<script>
import Loading from '../common/Loading.vue'
export default {
	components: {
		Loading
	},
	props:{
		GALLERY: {
			tag_gallary: [],
			terms: []
		}
	},
	data(){
		return {
			loading: false,
			seo_url: 'all',
			page: 1,
		}
	},
	methods: {
		async loadCategory(seo_url){

		if(this.seo_url == seo_url){
			this.page = this.page + 1
		}else{
			this.seo_url = seo_url
			this.page = 1
		}
		
		this.loading = true
		
        await this.$store.dispatch('home/fetchTagGallary',{
          seo_url: seo_url == 'all' ? '': seo_url,
		  page: this.page
        })
		this.$nuxt.$emit('load-tag-gallery',this.$store.state.home.TAG_GALLARY);

		this.loading = false

		}
	},
    async created() {

	}
}
</script>

<style scoped>
	.ofeed-thumbnail-grid {
		display: grid;
		grid-auto-flow: row dense;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		grid-column-gap: 1.25rem;
	}
	.ofeed-thumbnail-grid__item {
		display: block;
		width: auto;
		grid-column: span 2;
		grid-row: span 4;
		margin-bottom: 1.25rem;
	}
	.ofeed-thumbnail-grid__item--square {
		grid-row: span 3;
	}
	.ofeed-thumbnail-grid__item img {
		height: 100%;
	}
</style>
