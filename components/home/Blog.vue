<template>
  <div class="w-100">
    <div
      class="w-100 d-flex justify-content-center align-items-center flex-column blog-header"
    >
      <h1><span>Our</span> Blogs</h1>
      <nuxt-link to="/">Show all Blogs</nuxt-link>
    </div>

    <div class="w-100 d-flex justify-content-center align-items-center">
      <div class="w-75 row">
        <div class="col-md-8 col-12 blog-left">
          <NuxtLink to="/">
            <img
              src="../../assets/images/home/blog1.jpeg"
              alt=""
              class="cover w-100"
            />
          </NuxtLink>
          <div class="blog-left-item">
            <span>Eid Collection 2025 is now in stores</span>
            <NuxtLink to="/">Read More ></NuxtLink>
          </div>
        </div>
        <div class="col-md-4 col-12 mt-md-0 mt-4 ">
          <div class="row ">
            <div class="col-12 blog-left mb-2 ml-0 ml-md-2">
              <NuxtLink to="/">
                <img
                  src="../../assets/images/home/blog2.jpg"
                  alt=""
                  class="img-fluid w-100"
                />
              </NuxtLink>
              <div class="blog-left-item">
                <span>Eid Collection 2025 is now in stores</span>
                <NuxtLink to="/">Read More ></NuxtLink>
              </div>
            </div>
            <div class="col-12 blog-left ml-0 ml-md-2">
              <NuxtLink to="/">
                <img
                  src="../../assets/images/home/blog3.png"
                  alt=""
                  class="img-fluid w-100"
                />
              </NuxtLink>
              <div class="blog-left-item">
                <span>Eid Collection 2025 is now in stores</span>
                <NuxtLink to="/">Read More ></NuxtLink>
              </div>
            </div>
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


.blog-header {
  margin-bottom: 3rem;
}

.blog-header h1 {
  font-size: 36px;
  color: #242424;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 10px;
}


.blog-header h1 span {
  color: #df6d27;
}

.blog-header a {
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.blog-header a:hover {
  border-bottom: 1px solid #ea840f;
}

.blog-left {
  position: relative;
}
.cover{
  width: 100%;
  height: 100%;
  object-fit:cover;
}
.blog-left-item {
  position: absolute;
  left: 30px;
  bottom: 20px;
  display: flex;
  flex-direction: column;
}

.blog-left-item span {
  color: white;
}

.blog-left-item a {
  width: 8rem;
  padding: 5px 15px;
  background: #df6d27;
  border-radius: 1rem;
  color: white;
}
</style>
