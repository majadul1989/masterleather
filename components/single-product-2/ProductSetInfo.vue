<template>
                <!--product service info-->
            <div class="product-service_info clear-cache section-grap2">
               <div class="section-title">
                  <h2 class="title" v-if="infos[activeInfo]">{{infos[activeInfo].title}}</h2>
               </div>
               <div class="product-info_tabs">
                  <div class="row">
                     <div class="col-sm-3 col-md-2">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                           <a href="javascript:void(0)" class="nav-link" v-for="(info,key) in infos" id="v-pills-home-tab" @click="activeInfox(key)" :key="key" :class="[activeInfo == key ? 'active' :'']">{{info.title}}</a>
                        </div>
                     </div>
                     <div class="col-sm-9 col-md-10">
                        <div class="tab-content" id="v-pills-tabContent">
                           <div v-if="infos[activeInfo]" class="tab-pane fade show active" v-html="infos[activeInfo].description">
                             
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
</template>


<script>
export default {
    auth: false,
    props: {
       infos: {
          type: Array,
          default() {
             return []
          }
       }
    },
    data(){

       return {
          activeInfo: 0
       }
    },

    methods: {
       activeInfox(key){
          this.activeInfo = key

      }
    }
}
</script>