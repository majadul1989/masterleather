<template>
      <div :class="info ?'':'d-none'" class="col-sm-6 col-md-4">
         <div class="individual-right-box">
            <div class="featured-side-blocks">
               <div class="featured-side-preview">
                  <a v-if="info" href="javascript:void(0)">
                     <lazy-image :src="info.image_url" class="w-100" alt=""/>
                  </a>
               </div>
               <h6 class="rev-cushion">
                  <a v-if="info" href="javascript:void(0)">{{info.title}}</a>
               </h6>
               <div class="individual-side-box-small">
                  <div class="price-range-box price-range-box-small clearfix" :data="JSON.stringify(product_select)">
                     <div v-if="info && !product_select.fullset" id="amount_box" class="amount-box">{{money_sign}} {{product_select_price}} BDT</div>
                     <div v-else-if="info" id="amount_box" class="amount-box">{{money_sign}} {{info.price_all}} BDT</div>
                  </div>
               </div>
               <div class="btn-custom-cart btn-large">
                  <div @click="buy()" v-if="info" class="addTo_cart">
                     <button class="common-btn_color">
                        <i class="far fa-heart"></i>Add to shopping cart
                     </button>
                  </div>
               </div>
            </div>
         </div>

         <modal :modal_title="info.title +' Succesfully added to cart'" :modalRequest="buyModalRequest">

            <div class="row">
               <div class="col-3">
                  <lazy-image :src="info.image_url" class="w-100" alt=""/>
               </div>
               <div class="col-9">
                  <div class="row">
                     <div class="col-6">
                           <strong>{{info.title}}</strong><br/>
                           <b v-if="info && !product_select.fullset">{{money_sign}} {{product_select_price}}</b>
                           <b v-else-if="info">{{money_sign}} {{info.price_all}}</b>
                     </div>
                     <div class="col-6">
                        <a @click="viewCartPage()" href="javascript:void(0)" class="pull-right common-btn_color btn">View Cart</a>
                     </div>

                  </div>
               </div>
            </div>
            
         </modal>
      </div>
</template>


<script>
import LazyImage from '../common/LazyImage.vue'
import Modal from '../common/Modal.vue'
export default {
  components: { LazyImage, Modal },
  props: {
      info: null,
      product_select: {},
      products: {},
      fabrics: {}
  },

  data(){
     return {
        product_select_price: 0,
        product_set_fabric: {},
        buyModalRequest: null,
     }
  },

  methods: {
     calculatePrice(product_select){
        let price = 0
        let ps = Object.keys(product_select)
        if(ps.length > 0){

            ps = ps.map(function(item){
               item = product_select[item]
               return  item.qty * item.price
            })
            price = ps.reduce((n,o) => n + o )
        }

       return price
     },

     async buy(){
        console.log(this.product_select,this.products,this.product_set_fabric)

        let products = [],
            self = this;

        if(this.product_select.fullset){
           products = this.products.map(function(item){
              return {
                 id: item.id,
                 qty: item.product_set_qty
              }
           })
        }else{
           products = this.product_select.qty
        }

      //   console.log(self.product_set_fabric)
      //   console.log(typeof products,'products')

      //   return

      const psetsRR = Object.keys(products).map((itemKey) => {
         const item = products[itemKey]
         return `${item.id}:::${item.qty}`
      }).join(",")

      await  self.$store.dispatch('cart/fetchAdd',{
         psets: psetsRR,
         fabric_id: self.product_set_fabric.id?self.product_set_fabric.id:(self.fabrics[0]?self.fabrics[0].id:null),
         pset_id: self.info.id
      })
      this.buyModalRequest = (new Date()).getTime()
      await this.$store.dispatch('cart/fetchCountNotification')
      await this.$store.dispatch('cart/fetchCart',{})
      console.log(psetsRR)


     },

		async viewCartPage(){
			this.buyModalRequest = await new Date()
			this.$router.push({path: '/cart'});
		},
  },

  created(){

     const self = this
     this.$nuxt.$on('product_select_changes',function(data){
        self.product_select_price = self.calculatePrice(data.qty)
     })

		this.$nuxt.$on('fabricIndex',function(value){
			self.product_set_fabric =  self.fabrics[value]
		})

  },

  mounted(){
      const self = this
  }
    
}
</script>