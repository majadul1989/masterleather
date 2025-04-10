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
              class="img-fluid w-100"
            />
          </NuxtLink>
          <div class="blog-left-item">
            <span>Eid Collection 2025 is now in stores</span>
            <NuxtLink to="/">Read More ></NuxtLink>
          </div>
        </div>
        <div class="col-md-4 col-12 mt-md-0 mt-4">
          <div class="row">
            <div class="col-12 blog-left mb-4   ">
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
            <div class="col-12 blog-left ">
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
