<template>
  <div class="banner-bottomContent-post" :style="{borderBottom:slider.border_bottom}">
    <div class="bottomContent-post-img">
      <nuxt-link v-if="slider.internal" :to="slider.url">
        <lazy-image :src="slider.image.full_size_directory"/>
      </nuxt-link>
      <a v-else :href="slider.url">
        <lazy-image :src="slider.image.full_size_directory"/>
      </a>
    </div>
    <div class="bottomContent-post-text" :style="{backgroundColor:'#'+(slider.color_code?slider.color_code:'f39189')}">
      <h3>
        <nuxt-link v-if="slider.internal" :to="slider.url" :style="{color:'#'+(slider.text_color?slider.text_color:'fff')}">
          {{slider.title}}
        </nuxt-link>
        <a v-else :href="slider.url" :style="{color:'#'+(slider.text_color?slider.text_color:'fff')}">
          {{slider.title}}
        </a>
      </h3>
      <div class="post-readMore-btn">
        <nuxt-link v-if="slider.internal" :to="slider.url">
          <i class="icon-right-big"></i>
        </nuxt-link>
        <a v-else :href="slider.url">
          <i class="icon-right-big"></i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import LazyImage from '../common/LazyImage.vue'

export default {
  props:['slider','bgColor'],
  components:{ LazyImage},
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.banner-bottomContent-post {
  width: calc(309px * (3 / 4));
  max-width: 100%;
  position: relative;
  flex-shrink: 0;
  margin-right: 20px;
  margin-bottom: 30px;
  flex-basis: calc((100% - 1.25rem * 1) / 3);
}
.bottomContent-post-text.bg-blue {
  background: #002a50;
}
.bottomContent-post-text.bg-lightWhite {
  background: #88b9c9;
}
.bottomContent-post-text.bg-green {
  background: #143a13;
}
.bottomContent-post-text h3 a:hover {
  text-decoration: underline;
}
</style>
