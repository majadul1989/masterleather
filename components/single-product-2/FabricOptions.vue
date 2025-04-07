<template>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-xl-7">
        <div class="product-choose_box">
            <label for="">SELECT FABRIC OPTION</label>
            <ul>
                <li v-for="(fabric,key) in fabrics" :key="key">
                    <a href="javascript:void(0)" @click="setActiveFabric(key)">
                        <span class="color-box" :class="[activeFabric === key?'active':'']">
                            <lazy-image :src="fabric.image_url" class="w-100 h-100" alt=""/>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

</template>

<script>
import LazyImage from '../common/LazyImage.vue'
export default {
    components: {LazyImage},
       props: {
        fabrics: {
            type: Array,
            default: () => []
        }
     },

     data(){

         return {
             activeFabric: 0
         }
     },
    methods: {
        setActiveFabric(key){
            this.activeFabric = key
            this.$nuxt.$emit('fabricIndex',key)
        }
    }
}
</script>