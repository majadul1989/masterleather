<template>
  <div class="asl-carousel-container">
    <div class="asl-carousel-slides-container" ref="slides_container" :class="carousel_container_class">
      <div @touchstart="rangeLeave" @mouseenter="rangeLeave" ref="asl_carousel_slides" class="asl-carousel-slides"
           :class="carousel_slides_class" @scroll="scrolling">
        <slot></slot>
      </div>
    </div>
    <div @touchstart="rangeEnter" @touchEnd="rangeLeave" @mouseenter="rangeEnter" @mouseleave="rangeLeave"
         ref="asl_carousel_scroll_bar" class="asl-carousel-scroll-bar" tabindex="0"
         :class="[rangebarWidth > 99 ? 'd-none': '']">
      <input type="range" min="1" :class="'carousel-bar-'+key" max="100" class="asl-carousel-bar"
             @input="carouselBarRange" v-model="carousel_bar_range">
    </div>
    <div class="asl-carousel-arrows" :class="[rangebarWidth > 99 ? 'd-none': '']">
      <a @click="viewPrev()" href="javascript:void(0)" class="asl-carousel-left-arrow"
         :class="[currentSlide > 0  ? '': 'd-none']">
        <i class="icon-left-open"></i>
      </a>
      <a @click="viewNext()" href="javascript:void(0)" class="asl-carousel-right-arrow"
         :class="[nextEnd ? 'd-none' : '']">
        <i class="icon-right-open"></i>
      </a>
    </div>

  </div>
</template>
<script>

export default {
  props: {
    carousel_slides_class: {
      type: String,
      default: ''
    },
    carousel_container_class: {
      type: String,
      default: ''
    }
  },
  data() {

    return {
      sliderBarFixedRange: 100,
      carousel_bar_range: 0,
      carousel_item_width: 0,
      slidesCount: 0,
      widthPerItem: 0,
      slideRangePerItem: 0,
      slideCurrentPosition: 0,
      rangebarWidth: 20,

      mover: null,
      key: this._uid,

      fromRangebar: false,

      widthLoaded: false,


      currentSlide: 0,
      nextEnd: false,
      slideCall: false
    }
  },
  methods: {
    carouselBarRange() {
      if (this.fromRangebar) {
        this.slideCurrentPosition = Math.ceil(this.carousel_bar_range / this.slideRangePerItem)
        this.$refs.asl_carousel_slides.scrollLeft = (this.slideCurrentPosition - 1) * this.widthPerItem
        // console.log(this.carousel_bar_range,'fromcarousel')
      }

    },

    calculate() {
      const self = this

      if (self.$refs.asl_carousel_slides) {
        self.carousel_item_width = self.$refs.asl_carousel_slides.scrollWidth
        self.slidesCount = self.$refs.asl_carousel_slides.children.length
        self.widthPerItem = self.carousel_item_width / self.slidesCount
        self.slideRangePerItem = self.sliderBarFixedRange / (self.slidesCount - 1)

        // const viewSlides = Math.floor(parseInt(self.$refs.slides_container.offsetWidth)/parseInt(self.widthPerItem))

        // self.rangebarWidth = ((100 / self.carousel_item_width)  * self.$refs.slides_container.offsetWidth )
        const rbw = (isNaN(self.widthPerItem) ? 0 : Math.ceil((Math.ceil(self.$refs.slides_container.offsetWidth / self.widthPerItem))) * this.slideRangePerItem)

        self.rangebarWidth = rbw > 99 ? 95 : rbw
        this.carousel_bar_range = self.rangebarWidth
        // console.log(self.rangebarWidth,'hello',self.key)

        // self.rangebarWidth = 100


        //console.log( isNaN( self.widthPerItem ) ? 0 : Math.ceil((Math.floor(self.$refs.slides_container.offsetWidth / self.widthPerItem)) * this.slideRangePerItem) ,'widthperitem',this._uid)
        if (!isNaN(self.rangebarWidth)) {
          // console.log('calculate',self.key,self.rangebarWidth,this._uid)
          self.rangeBarStyle()
          self.widthLoaded = true
        }
      }

    },

    rangeBarStyle() {

      const self = this
      if (self.rangebarWidth > 0) {


        const styles = `<style>
            .carousel-bar-${self.key}::-moz-range-thumb  {
                width: ${self.rangebarWidth}%;
            }
            .carousel-bar-${self.key}::-webkit-slider-thumb  {
                width: ${self.rangebarWidth}%;
            }
            .carousel-bar-${self.key}::-ms-thumb  {
                width: ${self.rangebarWidth}%;
            }
        </style>`
        document.head.insertAdjacentHTML('beforeend', styles)

      }

    },

    viewNext() {

      this.slideCall = true
      if (this.currentSlide < this.$refs.asl_carousel_slides.childElementCount) {
        this.currentSlide += 1
        let scrollEle = this.$refs.asl_carousel_slides.children[this.currentSlide]
        if (scrollEle) {
          scrollEle.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
        }
      }


    },

    viewPrev() {
      this.slideCall = true

      if (this.currentSlide > 0) {
        this.currentSlide -= 1
        let scrollEle = this.$refs.asl_carousel_slides.children[this.currentSlide]
        if (scrollEle) {
          scrollEle.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
        }

      }


    },

    scrolling() {

      if (!this.fromRangebar) {

        const ele = this.$refs.asl_carousel_slides,
          maxScrollLeft = ele.scrollWidth - ele.clientWidth,

          rangeBarW = ((100 - parseInt(this.rangebarWidth)) / maxScrollLeft) * parseInt(ele.scrollLeft)
        this.carousel_bar_range = rangeBarW + (100 - this.rangebarWidth)

      }
      // console.log(this.carousel_bar_range,'fromscroll')
      //   console.log(ele.scrollLeft,ele.scrollLeftMax)
    },

    rangeLeave() {
      //console.log('range leave')
      this.fromRangebar = false
    },
    rangeEnter() {
      this.fromRangebar = true
      //console.log('range enter')
    }

  },

  watch: {
    'currentSlide': {
      handler() {

        if (this.slideCall) {

          if (!(this.currentSlide < this.$refs.asl_carousel_slides.childElementCount)) {
            this.nextEnd = true
          } else {
            this.nextEnd = false
          }

        }


      },
      immediate: true
    }
  },


  async mounted() {
    this.calculate()

    let widthCalling = null,
      self = this

    widthCalling = setInterval(function() {
      if (isNaN(self.rangebarWidth) || self.rangebarWidth == 0) {
        self.calculate()
      } else {
        clearInterval(widthCalling)
      }
    }, 300)


  }
}
</script>

<style>

.asl-carousel-container {
  position: relative;
  transition: all 0.4s ease;
  width: 100%;
}

.asl-carousel-slides {
  display: flex;
  overflow: hidden;

}

.asl-carousel-slides > div {
  max-width: 100%;
  flex-shrink: 0;
  margin-right: 20px;
}

.asl-carousel-scroll-bar {
  height: .1rem;
  position: relative;
  width: 100%;
  outline: none;
  border: 0;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;
}

.asl-carousel-bar {
  width: 100%;
  background: #dfdfdf;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  height: 4px;
  scrollbar-width: none;
  -ms-overflow-style: none;
  display: block;
  border-radius: 4px;
  -webkit-appearance: none;
}

.asl-carousel-scroll-bar:hover .asl-carousel-bar {
  height: 6px;
}

.asl-carousel-scroll-bar:hover .asl-carousel-bar::-moz-range-thumb:hover {
  height: 0.2rem
}

.asl-carousel-bar::-moz-range-thumb {
  will-change: transform;
  background: #111;
  position: absolute;
  top: 0;
  bottom: 0;
  /* width: 60%; */
  height: .1rem;
  transform-origin: 0 0;
  display: block;
  border-radius: 4px;
  cursor: -webkit-grab;
  cursor: grab;
}

.asl-carousel-bar::-webkit-slider-thumb {
  will-change: transform;
  background: #111;
  top: 0;
  bottom: 0;
  /* width: 60%; */
  height: .1rem;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  display: block;
  border-radius: 4px;
  cursor: -webkit-grab;
  cursor: grab;
  -webkit-appearance: none;
  appearance: none;
}

.asl-carousel-bar::-webkit-slider-thumb:hover {
  height: 0.2rem;
}


/* arrows */
.asl-carousel-arrows {
  opacity: 0;
  transition: all 0.5s ease;
}

.asl-carousel-container:hover .asl-carousel-arrows {
  opacity: 1;

}

.asl-carousel-arrows a {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: rgba(0, 0, 0, 0.603);
  color: #fff;
  display: block;
  border-radius: 3px;
  /* border-radius: 50%; */
  transition: all 0.3s ease;
}

.asl-carousel-arrows a i {
  font-size: 18px;
}

.asl-carousel-left-arrow {
  left: -15px;
}

.asl-carousel-right-arrow {
  right: -15px
}

.asl-carousel-arrows a:hover {
  background: #333;
}

</style>
