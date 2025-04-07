<template>
        <!-- open category product tab side nav -->
        <div class="right-side-nav product-nav">
            <div id="productSideNav2" class="rightSidenav" :style="[sidebarOpen?{width: sidebarWidth}:{width:'0'}]">
                <div class="right-fixed-content">
                    <a href="javascript:void(0)" class="productCloseNav2" @click="sidebarToggle()">&times;</a>
                </div>
                <div class="right-side-content">
                    <div :style="{width:sidebarWidth}" class="right-sideNav-menu">
                            <slot></slot>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        openRequest: {},
        width: {}
    },

    data(){

        return {
            sidebarOpen: false,
            sidebarWidth: '30rem'
        }
    },

    methods: {
        sidebarToggle(){
            if(this.openRequest == null){
                this.sidebarOpen = false
            }else{
                this.sidebarOpen = !this.sidebarOpen
            }
		},
    },

    watch:{
        openRequest: {
            handler(){
                this.sidebarToggle()
            }
        }
    },

    mounted(){

        if(window.innerWidth < 576){
            this.sidebarWidth = "100%";
		}else if(window.innerWidth < 992){
            this.sidebarWidth = '25rem';
        }else if(window.innerWidth < 1200){
            this.sidebarWidth = '30rem';
        }else {
            this.sidebarWidth = this.width
        }

    },

}
</script>

<style>
   .right-side-nav .right-side-content-wrap h1 {
       font-size:1.5625rem;
       font-weight: 600;
       margin-bottom: 10px;
   }

   .right-side-nav .right-side-content-wrap ul li {
       font-size:0.875rem;
       margin-left: 20px;
       line-height: 2;
       list-style-type: square;
   }

   .right-side-nav .right-sideNav-menu{
       margin-top: 40px;
       height: 96%;
   }
</style>