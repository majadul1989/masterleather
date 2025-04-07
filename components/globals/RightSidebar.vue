<template>
    <div class="right-side-nav product-nav">
        <div id="productSideNav2" class="rightSidenav" :style="[sidebarOpen?{width: sidebarWidth}:{width:'0'}]">
            <div class="right-side-content">
                <div class="right-fixed-content">
                    <a href="javascript:void(0)" class="productCloseNav2" @click="sidebarToggle()">&times;</a>
                </div>
                <div class="right-sideNav-menu">
                    <div class="right-sideNav-text">
                        <div class="header_text_sideNav">
                            <h3>Hej!</h3>
                        </div>
                        <div class="bottom_text_sideNav">
                            <a href="#">
                                <div>Create an IKEA account</div>
                                <div class="bottom_text_subText">Create an account or become an IKEA Family club member - oh did we mention it’s free to join?</div>
                            </a>
                        </div>
                    </div>
                    <ul class="sideNav-menu-small">
                        <li>
                            <nuxt-link to="/user/profile">My profile</nuxt-link>
                        </li>
                        <li>
                            <a href="#">My orders</a>
                        </li>
                        <li>
                            <a href="#">Find your IKEA store</a>
                        </li>
                        <li>
                            <a href="#">IKEA Credit Card</a>
                        </li>
                        <li>
                            <a href="#">IKEA Family</a>
                        </li>
                        <li>
                            <a href="#">IKEA For Business</a>
                        </li>
                        <li>
                            <a href="#">Customer Service</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
           sidebarOpen: false,
           sidebarWidth:'30rem'
      }
    },
    components: {

    },
    methods: {
        sidebarToggle(){
            this.sidebarOpen = !this.sidebarOpen
        },
        sidebarOpenRequest(val){
            this.sidebarOpen = val
        }
    },
    created() {

    },
    watch: {},
    mounted() {
        this.$eventBus.$on('rightSidebar',this.sidebarOpenRequest)

        if(window.innerWidth < 576){
            this.sidebarWidth = "100%";
        }

    }

  }
</script>

<style scoped>

</style>
