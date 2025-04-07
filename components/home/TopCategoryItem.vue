<template>
    <div class="shop-category-post">
        <div class="shop-category-post-img">
            <nuxt-link :to="'/c/'+category.seo_url">
                <lazy-image :src="category.home_img?category.home_img.full_size_directory:''" format="webp" class="w-100 h-100" alt=""/>
            </nuxt-link>
            <div class="shop-category-post-text">
                <nuxt-link :to="'/c/'+category.seo_url">
                    <span class="shop_text_inner">
                        <span class="shop_text_copy">
                            <span class="join__btn__label">{{category.name}}</span>
                        </span>
                    </span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['category']
}
</script>

<style scoped>

</style>