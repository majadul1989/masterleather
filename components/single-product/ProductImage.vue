<!-- component One -->
<template>
  <div v-if="imageLoaded" class="position-sticky">

    <pz
      :key="parseInt(SelectedvariationImageLoad)"
      :base-images="SelectedvariationImageLoad"
      :degree_images="degree_images"
      :base-zoomer-options="zoomerOptions"/>

  </div>

</template>
<style>
img.responsive-image.preview-box {
  height: 550px;
  width: 100%;
}

@media screen and (max-width: 767px) {
  img.responsive-image.preview-box {
    height: 350px;
    width: 350px;
  }
}
</style>
<script>
import pz from '@/customs/vue-product-zoomer/src/components/ProductZoomer'
import {baseUrl} from "~/helpers/common";
//import xyz from '@/store/index'

export default {
  components: {pz},
  data() {
    return {
      imageLoaded: false,
      degree_images: [],
      imgs: {
        thumbs: [],
        normal_size: [],
        large_size: []
      },
      images: {
        thumbs: [],
        normal_size: [],
        large_size: []
      },
      'zoomerOptions': {
        zoomFactor: 3, // scale for zoomer
        pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
        //   move_by_click:true, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        //   scroller_button_style: "line",
        scroller_position: "bottom",
        zoomer_pane_position: "right"
      },

      imageLoadingInterval: null,

      makeImgArr: false,
    }
  },

  async created() {
    await this.$store.dispatch('product/fetchImages', {
      seo_url: this.$route.params.slug,
      ...this.$route.query
    })


    let images = this.$store.state.product?.IMAGES?.images.map((item, index) => {

      return {
        id: item.id,
        url: baseUrl() + item.full_size_directory
      }
    })

    if (this.$store.state.product?.IMAGES?.youtubeLink != null) {
      images.push({
        id: 'youtube',
        url: require("assets/images/video_preview.png"),
        yt: this.$store.state.product?.IMAGES.youtubeLink
      })
    }

    if (this.$store.state.product.IMAGES.degree_images && this.$store.state.product.IMAGES.degree_images.length > 0) {
      images.push({
        id: 'threesixtydegree',
        url: require("assets/images/icon-360.jpg"),
        degree_images: this.$store.state.product.IMAGES.degree_images
      })

      this.degree_images = this.$store.state.product.IMAGES.degree_images
    }

    this.images = {
      normal_size: images,
      thumbs: images,
      large_size: images
    }
    this.imageLoaded = true
    // alert(this.$store.state.xyz)
    // this.images = {
    //   normal_size: this.$store.state.xyz,
    //   thumbs: this.$store.state.xyz,
    //   large_size: this.$store.state.xyz
    // }
    // alert(this.$store.state.xyz)
  },
  methods: {},

  computed: {
    // this.images = this.$store.state.sharedVariable;
    //console.log(this.$store.state.sharedVariable)
    //let variable = this.$store.state.sharedVariable;

    SelectedvariationImageLoad() {
      // return this.$store.state.xyz ? this.$store.state.xyz : '0';
      // alert(1)
      //   alert(this.$store.state.xyz);
      // this.images = {
      //   normal_size: this.$store.state.xyz,
      //   thumbs: this.$store.state.xyz,
      //   large_size: this.$store.state.xyz
      // }
      if (this.$store.state.SelectedvariationImage == false) {
        if (this.$store.state.product.SIMPLE_INFO.product?.enable_variation == 'on') {

        } else {
          return this.images;
        }
      } else {
        return {
          normal_size: this.$store.state.SelectedvariationImage,
          thumbs: this.$store.state.SelectedvariationImage,
          large_size: this.$store.state.SelectedvariationImage
        }

      }
      // console.log(this.$store.state.SelectedvariationImage)
      // return this.images;

    }

  },


  mounted() {

    // alert(this.variable);
    // document.getElementsByClassName('responsive-image').addEventListener('click',function(){
    //   console.log(this)
    // })

    // this.imageLoadingInterval = setInterval(function(){
    //   const ele = document.getElementsByClassName('responsive-image')

    //   if(ele.length > 0){}

    // },200)


    // let npimg = [
    //   {
    //     'id': '1',
    //     'url': '#'
    //   },
    // ];
    // this.images = images


  }
}
</script>


<style scoped>


</style>
