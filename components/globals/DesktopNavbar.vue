<script setup>
import { ref } from "vue";

const items = ref([

    {
        id: 12,
        imgSrc: "./img/mega-1.jpg",
        alt: "Shalwar Kameez",
        name: "Shalwar Kameez",
        childs: []
    },
    {
        id: 12,
        imgSrc: "./img/mega-1.jpg",
        alt: "Sarees",
        name: "Sarees",
        childs: [
            {
                id: 12,
                imgSrc: "./img/mega-1.jpg",
                alt: "Man",
                name: "Man",
                childs: []
            },
            {
                id: 12,
                imgSrc: "./img/mega-1.jpg",
                alt: "Woman",
                name: "Woman",
                childs: [
                    {
                        id: 12,
                        imgSrc: "./img/mega-1.jpg",
                        alt: "Kurtis",
                        name: "Kurtis",
                        childs: []
                    },
                    {
                        id: 12,
                        imgSrc: "./img/mega-1.jpg",
                        alt: "Unstitched Fabric",
                        name: "Unstitched Fabric",
                        childs: []
                    },
                    {
                        id: 12,
                        imgSrc: "./img/mega-1.jpg",
                        alt: "Party Kameez & Gowns",
                        name: "Party Kameez & Gowns",
                        childs: []
                    },
                    {
                        id: 12,
                        imgSrc: "./img/mega-1.jpg",
                        alt: "Palazzo Pants & Culottes",
                        name: "Palazzo Pants & Culottes",
                        childs: []
                    },
                    {
                        id: 12,
                        imgSrc: "./img/mega-1.jpg",
                        alt: "Pants, Palazzos & Capris",
                        name: "Pants, Palazzos & Capris",
                        childs: []
                    }
                ]
            },

        ]
    },
    {
        id: 12,
        imgSrc: "./img/mega-1.jpg",
        alt: "Kurtis",
        name: "Kurtis",
        childs: []
    },
    {
        id: 12,
        imgSrc: "./img/mega-1.jpg",
        alt: "Unstitched Fabric",
        name: "Unstitched Fabric",
        childs: []
    },
    {
        id: 12,
        imgSrc: "./img/mega-1.jpg",
        alt: "Party Kameez & Gowns",
        name: "Party Kameez & Gowns",
        childs: []
    },
    {
        id: 12,
        imgSrc: "./img/mega-1.jpg",
        alt: "Palazzo Pants & Culottes",
        name: "Palazzo Pants & Culottes",
        childs: []
    },
    {
        id: 12,
        imgSrc: "./img/mega-1.jpg",
        alt: "Pants, Palazzos & Capris",
        name: "Pants, Palazzos & Capris",
        childs: []
    }

]);

</script>

<template>
    <div class="w-full flex flex-column">
        <!-- navbar -->
        <div class="w-full" style="background-color: #F5F5F5">
            <div class="container row py-2 pt-3 d-flex align-items-center">
                <!-- left -->
                <div class="col-2">
                    <NuxtLink to="/">
                        <img src="@/assets/images/logo.png" alt="" class="w-25">
                    </NuxtLink>
                </div>
                <!-- middle items -->
                <div class="col-8 d-flex align-items-center justify-content-center">


                    <div class="col-lg-8 col-md-12">
                        <div class="input-group mb-3 search-bar">
                            <input type="text" class="form-control outline-none" placeholder="search for product.."
                                aria-label="Recipient's username" aria-describedby="button-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary bg-dark text-white border-none" type="button"
                                    id="button-addon2"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </div>
                            <div class="triangle-left"></div>
                        </div>



                    </div>


                </div>
                <!-- right -->
                <div class="col-2 d-flex gap-4">
                    <NuxtLink to="/">
                        <i class="fas fa-user brxe-icon fa-lg"></i>
                    </NuxtLink>

                    <NuxtLink to="/" class="ml-4 position-relative">
                        <div class="">
                            <i class="fa-solid fa-cart-shopping "></i>
                        </div>
                        <div class="d-flex align-items-center justify-content-center rounded-pill position-absolute text-white"
                            style=" width: 16px; height: 16px; background-color: #006dd2; top: -5px; right: -10px;">
                            0
                        </div>
                    </NuxtLink>


                </div>

            </div>
        </div>
        <!-- small menu bar -->
        <div class="w-full bg-white d-flex align-items-center justify-content-center py-1 position-relative">

            <ul class="w-full mega_menu_parent row py-4">
                <li v-for="(item, index) in items" :key="index"><NuxtLink to="#">{{ item.name }} <span v-if="item.childs.length > 0"><i class="fa-solid fa-angle-down"></i></span></NuxtLink>
                    <ul class="w-full mega_menu_child container py-4" v-if="item.childs.length > 0">
                        <li v-for="(child, ind) in item.childs" :key="ind">
                            <NuxtLink to="#" class="fw-bold fs-xl">{{ child.name }}</NuxtLink>
                            <ul class="mega_menu" v-if="child.childs.length > 0">
                                <li v-for="(mega, indx) in child.childs" :key="indx"><NuxtLink to="#">{{ mega.name }}</NuxtLink></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>



</template>


<style scoped>
.search-bar {
    position: relative;
}

.search-bar input {
    border: 1px solid #ddd !important;
    border-radius: 3px;
    font-style: italic;


}

.search-bar button {
    border: none;
}

.triangle-left {
    position: absolute;
    top: 12px;
    right: 39px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-right: 8px solid #1D2124;
    border-bottom: 7px solid transparent;
    z-index: 10;
}


.mega_menu_parent > li, .mega_menu_child > li {
    float: left;
    list-style: none;
}

.mega_menu_parent > li>a{
    color: rgba(33, 33, 33, 0.75);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
}



.mega_menu_child > li {
    width: 20%;
    padding-right: 20px ;
}

.mega_menu_parent li:hover .mega_menu_child, .mega_menu_child:hover{
    display: block;
}



.mega_menu_parent > li .mega_menu_child > li .mega_menu {
    list-style: none;
}


.mega_menu_parent li a{
    display: block;
    padding: 0 15px;
}

.mega_menu_child {
    position: absolute;
    width: 100%;
    left: 0;
    background-color: rgb(255, 255, 255);
    display: none;
    z-index: 100;
}

.mega_menu_child>li>a{
    font-size: 1.6em;
    font-weight: bold;
    color: black;
    border-bottom: 2px solid red;

}
.mega_menu>li{
    padding: 5px 0;
}

.mega_menu>li:hover{
    border-bottom: 1px solid red;
}
.mega_menu>li>a{
    font-weight: 500;
    color: #212121;
    /* font-family: "Montserrat"; */
    text-transform: uppercase;
    font-size: 14px;
}

</style>
