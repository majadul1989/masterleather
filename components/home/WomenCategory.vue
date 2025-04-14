<script setup>
import { ref } from 'vue'
const features = ref([
    {
        id: 1,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?t=st=1744615718~exp=1744619318~hmac=94ebc791d7e1c75ed9b8619d1ba89ea2bca75f3e6722043a79fdfc6d46b119f9&w=996',
        icon: "fa-solid fa-bag-shopping"
    },
    {
        id: 2,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },

    {
        id: 3,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },

    {
        id: 4,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },
    {
        id: 5,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },
    {
        id: 6,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },

    {
        id: 7,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },

    {
        id: 8,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },

    {
        id: 9,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    },

    {
        id: 10,
        categoryname: 'premiumCollection',
        image: 'https://img.freepik.com/free-photo/3d-rendering-personal-care-products-fondant-pink_23-2151053864.jpg?t=st=1744616579~exp=1744620179~hmac=bac37d49b1f7ae2e5f45e9078cb421f41f4152024e0e54f323e5deabe813a97c&w=996',
        icon: "fa-solid fa-bag-shopping"
    }



])


</script>

<template>
    <div class="womencategory w-100 row">
        <div class="col-lg-6 col-12 mb-lg-0 mb-3 ">
            <div class="womencategory-left w-100 h-100">
                <NuxtLink to="/" class="w-100 h-100">
                    <img :src="features?.[0]?.image" alt="Image 1" class="" />
                    <div class="womencategory-left-btn">
                        <h2>{{ features?.[0]?.categoryname }}</h2>
                        <button class="womencategory-left-button">Buy Now</button>
                    </div>
                </NuxtLink>
            </div>
        </div>
        <div class="col-lg-6 col-12">
            <div class="row pl-0 pl-lg-4">
                <div v-for="(items,index) in features.slice(1, 5)" :key="index" class="col-6 category-card w-100 h-100" >
                    <div class="womencategory-left " :class="{'pr-2 pb-2':index===0 , 'pl-2 pb-2' :index===1 ,'pr-2 pt-2':index===2 , 'pl-2 pt-2' :index===3}" >
                        <NuxtLink to="/" class="">
                            <img :src="items?.image" alt="Image 1" class="" />
                            <div class="womencategory-left-btn">
                                <h2>Women</h2>
                                <button class="womencategory-left-button">View</button>
                            </div>
                        </NuxtLink>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped>

/* bydefault */

.row {
  margin-right: 0px !important;
  margin-left: 0px !important;
}

.col-md-8,
.col-lg-9,
.col-6,
.col-12
.col-md-4,
.col-sm-6,
.col-md-2,
.col-lg-3,
.col-lg-6
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-12,
.col-sm-12 {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-auto, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-auto, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-auto, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-auto {

    padding-right: 0px !important;
    padding-left: 0px !important;
}

.womencategory {
    margin-top: 3rem;
    margin-bottom: 2rem;

}

.womencategory-left {
    position: relative;
}

.womencategory-left:hover .womencategory-left-button {
    display: block;
}

.womencategory-left a img {
    transition: transform 0.8s ease;
    transform: scale(1);
    width: 100% !important;
    height: 100% !important;
    object-fit:cover;

}

.womencategory-left a:hover img {
    transform: scale(1.01);
    overflow: hidden;
}

.womencategory-left-btn {
    position: absolute;
    top: 20px;
    left: 20px;
}

.womencategory-left-btn h2 {
    font-size: 18px !important;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    margin-bottom: 5px;
}

.womencategory-left-button {
    padding: 2px 10px;
    background: #df6d27;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    color: white;
    transition: all 0.8s ease-in-out;
    display: none;
}
@media screen and (min-width: 700px) {
  .womencategory-left-btn h2{
    font-size: 2rem !important;
  }
}
</style>
