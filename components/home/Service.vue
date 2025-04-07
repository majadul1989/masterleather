<template>
  <!--services wrapper -->
  <div class="full-services-wrapper  clear-cache">
    <div class="container">
      <div class="services-wrap-content section-grap4">
        <div class="services-wrapper-content">

          <asl-carousel key="service"  carousel_container_class="carousel-slides-container" carousel_slides_class="carousel-slides">
            <div class="service-html" ></div>
            <div class="services-content-post" v-html="widget.widget1?widget.widget1.description:''">
              <!-- <span><i class="icon-edit"></i></span>
              <h3>Meet Our Kitchen Expert</h3>
              <p>Schedule a free appointment with a kitchen expert..</p>
              <p>Call - 01844664888</p> -->
            </div>
            <div class="services-content-post" v-html="widget.widget2?widget.widget2.description:''">
              <!-- <span><i class="icon-edit"></i></span>
              <h3>Installment Facility</h3>
              <p>6-month installment facility Available from Regal Emporium over 10,000 Tk purchase </p>
              <a href="#">Learn More</a> -->
            </div>
            <div class="services-content-post"  v-html="widget.widget3?widget.widget3.description:''">
              <!-- <span><i class="icon-edit"></i></span>
              <h3>Delivery</h3>
              <p>Buy online and get free home delivery facility..</p>
              <a href="#">Learn More</a> -->
            </div>
          </asl-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AslCarousel from '../common/AslCarousel.vue'
export default {
  components: { AslCarousel },
  props: ['widget'],
  data(){

    return {

    }
  },
  async mounted(){

  }
}
</script>

<style scoped>
/*full services-wrapper*/
.full-services-wrapper {
  margin-top: 4rem;
}
.services-wrapper-content {
  display: flex;
}
.services-wrapper-content .services-content-post {
  margin-right: 0.0625rem;
  background: #f5f5f5;
  padding: 2rem;
  text-align: center;
  width: 33.33%;
}
.services-wrapper-content .services-content-post span {
  margin-bottom: 0.25rem;
}
.services-wrapper-content .services-content-post span i {
  font-size: 18px;
  color: #111;
}
.services-wrapper-content .services-content-post h3 {
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 700;
  color: #111;
  margin-bottom: 0.25rem;
}
.services-wrapper-content .services-content-post p,
.services-wrapper-content .services-content-post a {
  margin-bottom: 0.25rem;
  line-height: 1.7142;
  font-size: 0.875rem;
}
.services-wrapper-content .services-content-post a {
  text-decoration: underline;
}

</style>
