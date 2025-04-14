<script setup>
import { ref } from 'vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const settings = ref({
  edgeFriction: 0.35,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  focusOnSelect: true,
  swipeToSlide: true,
  adaptiveHeight: false,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  pauseOnDotsHover: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  centerMode: false,
  arrows:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})

</script>

<template>
  <div class="w-100">
    <div class="w-100 d-flex justify-content-center align-items-center flex-column bestseller-header">
      <h1><span>Bestseller</span> Products</h1>
      <!-- <nuxt-link to="/">Show all product</nuxt-link> -->
    </div>

    <div class="w-100 d-flex justify-content-center align-items-center">
      <div class="w-75 bestseller ">
        <VueSlickCarousel v-bind="settings">
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
          <div class="bestseller-card">
            <div class="bestseller-card-1">
              <img
                src="../../assets/images/home/bestseller.jpg"
                alt=""
                class="img-fluid"
              />
              <div class="bestseller-card-1-cart">
                <span>Add to Bag</span>
              </div>
              <div class="bestseller-card-right">
                <i class="fa-solid fa-magnifying-glass"></i>
                <i class="fa-regular fa-heart"></i>
              </div>
            </div>
            <div class="bestseller-card-2">
              <h3>Annabelle Business Bag – Printed Brown</h3>
              <span>4,500</span>
            </div>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<style>
.bestseller-header {
  margin-bottom: 1rem;
  margin-top: 2rem;
}

.bestseller-header h1 {
  font-size: 36px;
  color: #242424;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 10px;
}

.bestseller-header h1 span {
  color: #df6d27;
}

.bestseller-header a {
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.bestseller-header a:hover {
  border-bottom: 1px solid #ea840f;
}

/* best seller card */
.bestseller-card {
  /* width: 5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

}
.bestseller-card:hover .bestseller-card-1-cart {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.bestseller-card:hover .bestseller-card-right {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.bestseller-card-1 {
  position: relative;
  /* background: #f4f3f1; */
}
.bestseller-card-1 img {
  transition: transform 0.8s ease;
  transform: scale(0.95);
}

.bestseller-card-1:hover img {
  transform: scale(1);
}

.bestseller-card-1-cart {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 38px;
  background: rgb(223, 109, 39);
  text-align: center;
  cursor: pointer;
  transition: all 0.8s ease;
  opacity: 0;
  transform: translateY(100%);
  pointer-events: none;
}
.bestseller-card-1-cart span {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.25s ease, opacity 0.15s ease;
  color: white;
  font-weight: 500;
  font-size: 16px;
}

.bestseller-card-2 h3 {
  font-size: 13px;
  margin-bottom: 3px;
  margin-top: 4px;
  color: #333333;
  word-wrap: break-word;
  font-weight: 400;
  text-align: center;
}

.bestseller-card-2 span {
  color: #df6d27;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bestseller-card-right {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 70px;
  font-weight: 400;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: all 0.8s ease;
  opacity: 0;
  transform: translateX(100%);
  pointer-events: none;
}


/* slider */
.bestseller .slick-prev::before,.bestseller .slick-next::before{
  color: #DF6D27 !important; /* or any color you want */

}

</style>
