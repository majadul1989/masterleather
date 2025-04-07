<template>
    
    <div v-if="product" class="product-design-container" :class="container_class">
        <div class="product-item">
            <nuxt-link :to="'/product-set/'+product.slug">
                <div class="product-item-img">
                    <lazy-image :src="product.image_url" loading="lazy" classList="w-100 hide-img" alt=""/> 
                    <lazy-image :src="product.image_url" loading="lazy" classList="w-100 show-img" alt=""/> 
                </div>
                <span class="product-item-text">
                    <span class="pd_name_highlight">{{product.title}}</span>        
                    <span class="pd_highlight_price">{{money_sign}} <b>{{product.price}}</b></span>
                </span>
            </nuxt-link>
        </div>
    </div>
    
</template>

<script>
import LazyImage from '../common/LazyImage.vue'
export default {
    props: {
        container_class: {
            default:''
        },
        product: null
    },
    components: {
        LazyImage,

    }
}
</script>

<style scoped>

</style>