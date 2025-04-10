<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const items = ref([
  {
    id: 1,
    name: 'Shalwar Kameez',
    childs: [],
  },
  {
    id: 2,
    name: 'Sarees',
    childs: [
      {
        id: 3,
        name: 'Man',
        childs: [],
      },
      {
        id: 4,
        name: 'Woman',
        childs: [
          { id: 5, name: 'Kurtis', childs: [] },
          { id: 6, name: 'Unstitched Fabric', childs: [] },
          { id: 7, name: 'Party Kameez & Gowns', childs: [] },
        ],
      },
    ],
  },
])

const currentItems = ref([...items.value])
const historyStack = ref([])
const sidebarVisible = ref(false)

// Navigation
const goToChild = (item) => {
  if (item.childs?.length) {
    historyStack.value.push([...currentItems.value])
    currentItems.value = item.childs
  }
}

const goBack = () => {
  if (historyStack.value.length > 0) {
    currentItems.value = historyStack.value.pop()
  }
}

// Toggle sidebar
const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

// Hide on outside click
const handleClickOutside = (event) => {
  const sidebar = document.querySelector('.menubar')
  const menuIcon = document.querySelector('.menu-toggle-icon')
  if (
    sidebarVisible.value &&
    !sidebar.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    sidebarVisible.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="w-100 d-flex flex-column mobailenavbar">
    <!-- navbar -->
    <div class="w-100" style="background-color: #f5f5f5">
      <div
        class="container py-2 d-flex align-items-center justify-content-between"
      >
        <!-- Hamburger Icon -->
        <div
          class="menu-toggle-icon"
          @click.stop="toggleSidebar"
          style="cursor: pointer"
        >
          <i class="fa fa-bars fa-2x" aria-hidden="true"></i>
        </div>

        <!-- middle -->
        <div class="w-100 d-flex align-items-center justify-content-center">
          <NuxtLink
            to="/"
            class="d-flex align-items-center justify-content-center"
          >
            <img src="@/assets/images/logo.png" alt="Logo" class="w-25" />
          </NuxtLink>
        </div>

        <!-- right -->
        <div class="d-flex gap-4">
          <NuxtLink to="/"
            ><i class="fas fa-user brxe-icon fa-lg"></i
          ></NuxtLink>
          <NuxtLink to="/" class="ml-4 position-relative">
            <div><i class="fa-solid fa-cart-shopping"></i></div>
            <div
              class="d-flex align-items-center justify-content-center rounded-pill position-absolute text-white"
              style="
                width: 16px;
                height: 16px;
                background-color: #006dd2;
                top: -5px;
                right: -10px;
              "
            >
              0
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- searchbar -->
    <div class="col-lg-8 col-md-12">
      <div class="input-group mb-3 search-bar">
        <input
          type="text"
          class="form-control outline-none"
          placeholder="search for product.."
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary bg-dark text-white border-none"
            type="button"
          >
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div class="triangle-left"></div>
      </div>
    </div>

    <!-- sidebar menu -->
    <div class="menubar" v-if="sidebarVisible" @click.stop>
      <ul>
        <!-- Back button -->
        <li
          v-if="historyStack.length > 0"
          @click="goBack"
          style="cursor: pointer"
        >
          <span class="w-100 text-start ps-3">⬅ Back</span>
        </li>

        <!-- Dynamic items -->
        <li v-for="item in currentItems" :key="item.id">
          <NuxtLink to="/a">{{ item.name }}</NuxtLink>
          <span
            class="menubar-arrow"
            v-if="item.childs && item.childs.length > 0"
            @click.stop="goToChild(item)"
            style="cursor: pointer"
          >
            <i class="fa-solid fa-arrow-right"></i>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.mobailenavbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000000000;
}
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
  border-right: 8px solid #1d2124;
  border-bottom: 7px solid transparent;
  z-index: 10;
}

/* Sidebar styles */
.menubar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 101.5vh;
  background: white;

  z-index: 1000000;
  transition: transform 0.3s ease;
}
.menubar ul li {
  display: flex;
  align-items: center;
  justify-content: space-between;
border-bottom: 1px solid rgba(172, 170, 170, .2);
}
.menubar ul li a {
  padding: 8px 12px;
  flex: 1;
}
.menubar-arrow {
 padding-right: 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
