<script setup>
import { ref } from 'vue';
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

const settings = ref({
  edgeFriction: 0.35,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  focusOnSelect: true,
  swipeToSlide: true,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 5000,
  cssEase: 'linear',
  pauseOnDotsHover: true,
  pauseOnFocus: true,
  pauseOnHover: true,
  arrows: false, // <- correct key
});


const premimums = ref({

	id: 1,
	categoryname: 'premiumCollection',
	sub_categoryname:"Handbags",
	image: 'https://via.placeholder.com/400x600?text=Front+Image',
	slides: [
		{
			id: 1,
			title: 'Stylish Summer Dress',
			sub_title: 'Perfect for casual outings',
			seo_url: 'stylish-summer-dress',
			enable_variation: 'on',
			actual_discount: 20,
			local_discount: 20,
			local_selling_price: 5000,
			product_price_now: 4000,
			first_image:'https://via.placeholder.com/400x600?text=Front+Image',
			second_image:'https://via.placeholder.com/400x600?text=Back+Image',
			product_set: null,
		},
		{
			id: 2,
			title: 'Stylish Summer Dress',
			sub_title: 'Perfect for casual outings',
			seo_url: 'stylish-summer-dress',
			enable_variation: 'on',
			actual_discount: 20,
			local_discount: 20,
			local_selling_price: 5000,
			product_price_now: 4000,
		first_image:'https://via.placeholder.com/400x600?text=Front+Image',
			second_image:'https://via.placeholder.com/400x600?text=Back+Image',
			product_set: null,
		}
	],

	categories: [
		{
			id: 1,
			categoryname: 'premiumCollection',
			sub_categoryname:"Handbags",
			image: 'https://via.placeholder.com/400x600?text=Front+Image',
      icon:"fa-solid fa-bag-shopping"
		},
		{
			id: 2,
			categoryname: 'premiumCollection',
			sub_categoryname:"Women wallet",
			image: 'https://via.placeholder.com/400x600?text=Front+Image',
      icon:"fa-solid fa-wallet"
		},

		{
			id: 3,
			categoryname: 'premiumCollection',
			sub_categoryname:"Men wallet",
			image: 'https://via.placeholder.com/400x600?text=Front+Image',
      icon:"fa-solid fa-wallet"
		},

		{
			id: 4,
			categoryname: 'premiumCollection',
			sub_categoryname:"Personal gift",
			image: 'https://via.placeholder.com/400x600?text=Front+Image',
      icon:"fa-solid fa-hand-holding-heart"

		},
		{
			id: 5,
			categoryname: 'premiumCollection',
			sub_categoryname:"Corporate gift",
			image: 'https://via.placeholder.com/400x600?text=Front+Image',
      icon:"fa-solid fa-hands-holding-circle"
		},
		{
			id: 6,
			categoryname: 'premiumCollection',
			sub_categoryname:"bags",
			image: 'https://via.placeholder.com/400x600?text=Front+Image',
      icon:"fa-solid fa-bag-shopping"
		},
	]

})

</script>
<template>
    <div class="w-100 premium">
        <div class="w-100 row">
            <div class="col-md-6 col-12 d-flex justify-content-center align-items-center py-2 flex-column">
              <ul class="row w-100 pl-4">
                    <li v-for="(items,index) in premimums?.categories" :key="index"  class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i :class="items?.icon"></i>
                            <span>{{ items?.sub_categoryname }}</span>
                        </NuxtLink>
                    </li>
                    <!-- <li class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-wallet"></i>
                            <span>Women wallet</span>
                        </NuxtLink>
                    </li>
                    <li class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-wallet"></i>
                            <span>Men wallet</span>
                        </NuxtLink>
                    </li>



                    <li class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-hand-holding-heart"></i>
                            <span>Personal gift</span>
                        </NuxtLink>
                    </li>
                    <li class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-hands-holding-circle"></i>
                            <span>Corporate gift</span>
                        </NuxtLink>
                    </li>
                    <li class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span>bags</span>
                        </NuxtLink>
                    </li> -->


                </ul>

                <!-- <div class="row w-100 pl-4">
                    <div class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span>Handbags</span>
                        </NuxtLink>
                    </div>
                    <div class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-wallet"></i>
                            <span>Women wallet</span>
                        </NuxtLink>
                    </div>
                    <div class="col-4 preminumcollectioncard">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-wallet"></i>
                            <span>Men wallet</span>
                        </NuxtLink>
                    </div>


                </div>
                <div class="row w-100 pl-4">
                    <div class="col-4 preminumcollectioncard2">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-hand-holding-heart"></i>
                            <span>Personal gift</span>
                        </NuxtLink>
                    </div>
                    <div class="col-4 preminumcollectioncard2">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-hands-holding-circle"></i>
                            <span>Corporate gift</span>
                        </NuxtLink>
                    </div>
                    <div class="col-4 preminumcollectioncard2">
                        <NuxtLink to="/">
                            <i class="fa-solid fa-bag-shopping"></i>
                            <span>bags</span>
                        </NuxtLink>
                    </div>


                </div> -->

            </div>
            <div class="col-md-6 col-12 py-4">
                <VueSlickCarousel v-bind="settings">
                    <div class="w-100">
                        <img src="../../assets/images/home/premium1.png" alt="Image 1" class="img-fluid" />
                    </div>
                    <div class="w-100">
                        <img src="../../assets/images/home/premium2.png" alt="Image 1" class="img-fluid" />
                    </div>
                    <div class="w-100">
                        <img src="../../assets/images/home/premium3.png" alt="Image 1" class="img-fluid" />
                    </div>
                </VueSlickCarousel>
            </div>

        </div>
    </div>

</template>

<style>
.premium{
    background-color: #FBF7F1;
    margin-top: 5rem;
    margin-bottom: 3rem;
}
.preminumcollectioncard {
    height: 10rem;
    padding: 10px;
    display: flex;

    justify-content: center;
    align-items: center;
    list-style: none;
}

.preminumcollectioncard:hover,.preminumcollectioncard2:hover{
    background-color: white;
}
.preminumcollectioncard a,.preminumcollectioncard2 a{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.preminumcollectioncard a i,.preminumcollectioncard2 a i{
    font-size: 60px;
    margin-bottom: 15px;
    color: #DF6D27;
}

.preminumcollectioncard a span,.preminumcollectioncard2 a span{
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    color: #242424;
}

ul .preminumcollectioncard:nth-child(2){
    border-left: solid 1px #DF6D2725;
    border-right: solid 1px #DF6D2725;

}

ul .preminumcollectioncard:nth-child(5){
    border-left: solid 1px #DF6D2725;
    border-right: solid 1px #DF6D2725;
}

.preminumcollectioncard:nth-child(-n + 3) {
  border-bottom: solid 1px #DF6D2725;
}



</style>
