<script setup></script>

<template>
  <div class="womencategory w-100 row">
    
    <div class="col-lg-6 col-12">
      <div class="row">
        <div class="col-6 pb-3">
          <div class="womencategory-left">
            <NuxtLink to="/">
              <img
                src="../../assets/images/home/women-1.jpg"
                alt="Image 1"
                class="img-fluid"
              />
              <div class="womencategory-left-btn">
                <h2>Women</h2>
                <button class="womencategory-left-button">Buy Now</button>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-6">
          <div class="womencategory-left">
            <NuxtLink to="/">
              <img
                src="../../assets/images/home/women-3.jpg"
                alt="Image 1"
                class="img-fluid"
              />
              <div class="womencategory-left-btn">
                <h2>Women</h2>
                <button class="womencategory-left-button">Buy Now</button>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-6">
          <div class="womencategory-left">
            <NuxtLink to="/">
              <img
                src="../../assets/images/home/women-4.jpg"
                alt="Image 1"
                class="img-fluid"
              />
              <div class="womencategory-left-btn">
                <h2>Women</h2>
                <button class="womencategory-left-button">Buy Now</button>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="col-6">
          <div class="womencategory-left">
            <NuxtLink to="/">
              <img
                src="../../assets/images/home/women-5.jpg"
                alt="Image 1"
                class="img-fluid"
              />
              <div class="womencategory-left-btn">
                <h2>Women</h2>
                <button class="womencategory-left-button">Buy Now</button>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6 col-12 mt-lg-0 mt-3">
      <div class="womencategory-left">
        <NuxtLink to="/">
          <img
            src="../../assets/images/home/women-2.jpg"
            alt="Image 1"
            class="img-fluid"
          />
          <div class="womencategory-left-btn">
            <h2>Women</h2>
            <button class="womencategory-left-button">Buy Now</button>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}

.womencategory-left a:hover img {
  transform: scale(1.01);
}
.womencategory-left-btn {
  position: absolute;
  top: 20px;
  left: 20px;
}
.womencategory-left-btn h2 {
  /* font-size: 36px; */
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

/* @media screen and (min-width: 1024px) {
    .womencategory-left-btn h2 {
        width: 20px;
    }
} */
</style>
