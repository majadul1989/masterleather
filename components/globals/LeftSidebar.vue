<template>
  <div class="left-side-nav product-nav">
    <div id="productSideNav" class="sidenav" :style="[sidebarOpen?{width:sidebarWidth}:{width:'0'}]">
      <div class="left-side-content">
        <div class="left-fixed-content">
          <a href="javascript:void(0)" class="productCloseNav" @click="sidebarToggle()">&times;</a>
          <a href="javascript:void(0)">
            <img src="@/assets/images/logo.png" alt="">
          </a>
        </div>
        <div class="left-sideNav-menu">
          <component :is="compo"/>
          <div v-if="compo == null" class="sidebar-parent-items">

            <ul class="xsideNav-menu-big sideNav-menu-mid">
              <li>
                <a href="javascript:void(0)">All Products</a>
<!--                <a href="javascript:void(0)" @click="loadDynamicComponent('product-bar')">All Products</a>-->
              </li>
            </ul>
            <!-- <ul v-if="parent_menus.length > 0" class="sideNav-menu-big">
                <li v-for="(menu,key) in parent_menus" :key="key">
                    <a :href="menu.link">{{menu.label}}</a>
                </li>
            </ul> -->
            <ul v-if="child_menus.length > 0" class="sideNav-menu-mid">
              <li v-for="(menu,key) in child_menus" :key="key">
                <a :href="menu.link">{{ menu.label }}</a>
              </li>
            </ul>
            <ul v-if="child_sub_menus.length > 0" class="sideNav-menu-small">
              <li v-for="(menu,key) in child_sub_menus" :key="key">
                <a :href="menu.link">{{ menu.label }}</a>
              </li>
            </ul>

          </div>
        </div>

      </div>

    </div>
    <span @click="sidebarToggle()" class="openSideNav">&#9776;</span>
  </div>
</template>


<script>
import ProductBar from './ProductBar.vue';

export default {

  props: {
    parent_menus: {
      //   type: Array,
      default: []
    },

    child_menus: {
      //   type: Array,
      default: []
    },

    child_sub_menus: {
      //   type: Array,
      default: []
    },
  },
  data() {
    return {
      sidebarOpen: false,
      sidebarWidth: '30rem',
      compo: null,
    }
  },
  components: {
    ProductBar

  },
  methods: {
    sidebarToggle() {
      this.sidebarOpen = !this.sidebarOpen


      const body = document.querySelector("body");
      this.sidebarOpen
        ? body.classList.add("modal-open")
        : body.classList.remove("modal-open");

    },

    loadDynamicComponent(compo) {
      this.compo = compo
    }
  },
  created() {

  },
  watch: {},
  mounted() {

    if (window.innerWidth < 576) {
      this.sidebarWidth = "100%";
    }
  }

}
</script>

<style scoped>
.left-fixed-content a img {
  display: block;
  width: 150px;
}

.left-fixed-content {
  border-bottom: 1px solid #ddd;
  padding-bottom: 5px;
  margin-bottom: 15px;
}

</style>
