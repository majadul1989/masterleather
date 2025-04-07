<template>
  <div class="product-bar">
       <!-- <div class="d-flex">
            <a href="javascript:void(0)" @click="backToMain" class="sub-category-nav_close"><i class="icon-left-big"></i></a>
            <h3>Products</h3>
            <h1 v-if="($parent.$data.sidebarWidth == '50rem' && !device_mobile)" class="sub-category_title">{{parent_cat.label}}</h1>
        </div> -->
    <div class="sub-category-links_mobile d-flex" v-if="device_mobile">
        <a href="javascript:void(0)" @click="backToMain" class="sub-category-nav_close"><i class="icon-left-big"></i></a>
        <h3>Products</h3>
    </div>
      <div class="row" v-if="!device_mobile">
          <a href="javascript:void(0)" @click="backToMain" class="sub-category-nav_close"><i class="icon-left-big"></i></a>
          <div v-if="!device_mobile" class="" :class="[$parent.$data.sidebarWidth == '50rem'?'col-6 border-right':'col-12']">
            <h3>Products</h3>
          </div>
          <div class="col-6" v-if="($parent.$data.sidebarWidth == '50rem' && !device_mobile)">
              <h3 class="sub-category_title">{{parent_cat.label}}</h3>
          </div>
      </div>

      <div class="row" v-if="!device_mobile">

          <div v-if="!device_mobile" class="" :class="[$parent.$data.sidebarWidth == '50rem'?'col-6 border-right':'col-12']">

                <ul class="sideNav-menu-small" v-if="termsByParent[21]">
                    <li v-for="(term,key) in termsByParent[21]" :key="key">
                        <a href="javascript:void(0)" @click="openSubCat(term)">{{term.label}}</a>
                    </li>
                </ul>
          </div>
          <div class="col-6" v-if="($parent.$data.sidebarWidth == '50rem' && !device_mobile)">
              <!-- <h1 class="sub-category_title">{{parent_cat.label}}</h1> -->
                <ul class="sideNav-menu-small">

                    <li>
                        <a :href="parent_cat.link"><b>Shop All</b></a>
                    </li>

                    <li v-for="(term,key) in sub_cats" :key="key">
                        <a :href="term.link">{{term.label}}</a>
                    </li>
                </ul>
          </div>
      </div>
      <div v-else-if="termsByParent[21]">


            <accordion :accordionRequest="key" accordion_container="key-accordion pb-2 pt-2 border-bottom" :key="key" v-for="(term,key) in termsByParent[21]">
                <template v-slot:header>
                    <h4>{{term.label}}</h4>
                </template>
                <template v-slot:content>
                    <div class="footer-links">

                        <ul>
                            <li>
                                <a :href="term.link" class="font-weight-bold">Shop All</a>
                            </li>

                            <li v-for="(list,lkey) in termsByParent[term.id]" :key="lkey">
                                <a :href="list.link">{{list.label}}</a>
                            </li>

                        </ul>
                    </div>
                </template>
            </accordion>


      </div>


        <div class="category-recent-view">
            <div class="section-title">
                <h2 class="title">Recently viewed</h2>
            </div>
            <ul>
                <li v-for="(rb,key) in recent_views" :key="key">
                    <a :href="'/product/'+rb.seo_url">
                        <lazy-image :src="rb.image_url" classList="w-100 h-100"/>
                    </a>
                </li>
            </ul>
        </div>

  </div>
</template>

<script>
import Accordion from '../common/Accordion.vue'
import LazyImage from '../common/LazyImage.vue'
export default {
  components: { Accordion, LazyImage },

    data(){
        return {
            terms: [],
            sub_cats: [],
            parent_cat: null,
            device_mobile: false,
            all_terms: [],
            termsByParent: [],

            recent_views: []
        }
    },
    methods: {
        backToMain(){

            if(!this.device_mobile){
                this.$parent.$data.sidebarWidth = '30rem'
            }

             this.$parent.$data.compo = null
        },

        async openSubCat(term){
            const self = this
            if(!this.device_mobile){
                this.$parent.$data.sidebarWidth = '50rem'
            }

            this.parent_cat = term
            const sub_cats = this.termsByParent[term.id]

            this.sub_cats = sub_cats

            return sub_cats
        },

    },

    async created(){

        const self = this

        await this.$store.dispatch('common/fetchMenuItems',{
            ... this.$route.query
        })

        this.all_terms = this.$store.state.common.MENU_ITEMS.menu_items



        let parent_terms = {}
        const all_terms = Object.keys(this.all_terms)

        all_terms.map( (itemKey) => {
            const item = self.all_terms[itemKey]
            if(typeof parent_terms[item.parent] == "undefined"){
                parent_terms[item.parent] = []
                parent_terms[item.parent].push(item)
            }else{
                parent_terms[item.parent].push(item)
            }
        })
        this.termsByParent = parent_terms


        await this.$store.dispatch('product/fetchRecentViewProducts',{
            ... this.$route.query
        })

        this.recent_views = this.$store.state.product.RECENT_VIEW_PRODUCTS.products

    },

    async mounted(){
        this.device_mobile = window.innerWidth < 576
    }
}
</script>

<style>
    .category-recent-view .section-title{
        display: block;
        padding-top: 2.5rem;
        font-weight: 700;
        position: relative;
        max-width: 250px;

    }
.category-recent-view .section-title h2{
    font-size: 0.875rem;
}
.category-recent-view .section-title::before {
	content: "";
	display: block;
	position: absolute;
	top: 0;
	width: 100%;
	max-width: 250px;
	height: 1px;
	background-color: #f5f5f5;
}
.category-recent-view ul li {
    display: inline-block;
    max-width: 32%;
    margin-bottom: 30px;
}
.sub-category-nav_close{
    margin-top:-5px ;
    display: block;
}
.sub-category-nav_close i {
	margin-left: -80px;
	margin-right: -30px;
}

</style>
