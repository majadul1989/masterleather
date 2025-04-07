<template>
    <div>
        <div class="lzd-playground-right">
            <div class="section-title">
                <h2 class="title">My Reviews</h2>
            </div>
            <div class="my-reviews">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" :class="[viewing=='a'?'active':'']" @click="filterReviews('a')" id="pills-profile-tab" href="javascript:void(0)">History</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="[viewing=='r'?'active':'']" @click="filterReviews('r')" id="pills-home-tab" href="javascript:void(0)">Pending</a>
                    </li>
                </ul>
                <div v-if="!loading" class="tab-content" id="pills-tabContent">
                    <div v-if="reviews.length > 0" class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <!-- <div class="my-reviews-empty">
                            <span class="lazada lazada-ic-no-reviews lazada-icon my-reviews-empty-icon"><i class="far fa-grin"></i></span>
                            <div class="my-reviews-empty-text">You don’t have any purchases to review</div>
                        </div> -->



                      <!-- new -->
                      <div class="review-box row ">
                        <div v-for="(review,key) in reviews" :key="key" class="col-md-6">
                          <div class="card p-3 mb-2">
                            <div class="d-flex justify-content-between align-items-center">
                              <div class="user d-flex flex-row align-items-center">
                                <nuxt-link :to="'/product/'+review.product.seo_url">
                                  <lazy-image :src="review.product.image_url" alt="chair" title="chair" class="user-img rounded-circle mr-2"
                                              style="width: 70px !important; padding: 2px;"/>
                                </nuxt-link>
                                <span>
                                  <small class="font-weight-bold text-primary">
                                    <nuxt-link :to="'/product/'+review.product.seo_url">
                                        <strong class="text-muted">{{review.product.title}}</strong> |
                                          <span class="mr-1 text-primary">SKU:</span>{{review.product.sku}}

                                    </nuxt-link>
                                  </small>
                                  <br>
                                 <small class="mr-1">
                                    <span class="icons align-items-center">
                                      <i v-if="review.is_active" class="fa fa-check-circle  text-success" title="approved"></i>
                                      <i v-else="" class="fa-solid fa-circle-exclamation  text-warning" title="waiting for approval"></i>
                                    </span>

                                 </small>
                                  <small class="font-weight-bold">{{review.comment}}</small>
                                </span>
                              </div>
                                <div>
                                    <small> {{ review.created_at }}</small>
                                    <br>
                                    <small class="font-weight-bold rating" v-for="n in 5">
                                   <span v-if="n > review.rating">
                                     <i class="icon-star-empty"></i>
                                   </span>
                                      <span v-else="">
                                        <i class="icon-star"></i>
                                    </span>
                                    </small>
                                </div>
                            </div>
                            <div class="action d-flex justify-content-between mt-2 align-items-center">
                              <div class="reply px-4">
<!--                                <small>Remove</small>-->
<!--                                <span class="dots"></span>-->
<!--                                <small>Reply</small>-->
<!--                                <span class="dots"></span>-->
<!--                                <small>Translate</small>-->
                              </div>
                              <div class="icons align-items-center">

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- New -->




                    </div>
                    <div v-else class="show" id="pills-profile">
                        <div class="my-reviews-empty">
                            <span class="lazada lazada-ic-no-reviews lazada-icon my-reviews-empty-icon"><i class="far fa-grin"></i></span>
                            <div class="my-reviews-empty-text">No reviews to show</div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center">
                    Loading..
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){

        return {
            all_reviews: [],
            reviews: [],
            loading: true,
            viewing: 'a'
        }
    },

    methods:{

        filterReviews(type = 'a'){

            if(type == 'a'){
                this.reviews = this.all_reviews
                this.viewing = 'a'
            }
            else{

              const reviews = this.all_reviews.map(function(item){
                    return item.is_active != 1 ? item : null;
                }).filter(Boolean)

                this.reviews = reviews
                this.viewing = 'r'


            }
        }
    },
    async created(){
        this.loading = true
        await this.$store.dispatch('user/fetchReviews',{})

        const reviews = typeof this.$store.state.user.REVIEWS.reviews == "object" ? Object.entries(this.$store.state.user.REVIEWS.reviews) : [];

        this.all_reviews = await reviews.map(function(item){

            return item[1];
        })

        this.filterReviews('a')

        this.loading = false
    }
}
</script>

<style scoped>
    .my-reviews .nav-pills{
        background: #fff;
        border-bottom: 0;
    }
    .my-reviews .nav-pills .nav-item{
        color: #757575;
        background-color: transparent;
        margin: 0 24px;
        display: inline-block;
        height: 100%;
        transition: all .4s cubic-bezier(.23,1,.32,1);
    }
    .my-reviews .nav-pills .nav-item .nav-link{
        background:transparent;
        padding:0;
        transition: color .4s cubic-bezier(.23,1,.32,1);
        padding: 0;
        font-weight: bold;
        color: #9e9e9e;
        line-height: 50px;
        height: 50px;
        font-size: 14px;
        position:relative;
    }
    .my-reviews .nav-pills .nav-item .nav-link:before{
        content: "";
        position: absolute;
        transition: all .4s cubic-bezier(.23,1,.32,1);
        height: 5px;
        width: 100%;
        bottom:0;
    }
    .nav-pills .nav-link.active:before,
    .my-reviews .nav-pills .nav-item .nav-link:hover:before{
        background: #0058a3!important;

    }
    .my-reviews .nav-pills .nav-item .nav-link:hover,
    .my-reviews .nav-pills .nav-item .nav-link.active{
        color:#0058a3!important
     }
    .my-reviews-empty {
        height: 326px;
        background-color: #fff;
        overflow: hidden;
        padding-top: 95px;
        text-align:center;
        padding-bottom: 179px;
    }
    .no-payment-options-icon {
        display: block;
    }
    .my-reviews-empty .lazada-icon {
        font-size: 60px;
        color: #dadada;
    }
    .my-reviews-empty-tex {
        font-size: 14px;
        color: #757575;
        letter-spacing: 0;
    }
    table{
        margin-bottom: 0;
    }

   @media (max-width: 767.98px)  {
        .mleft-sm-2{
            margin-left:6px !important;
        }
    }



    /* Product Review */
    .review-box .card {

      border: none;
      box-shadow: 5px 6px 6px 2px #e9ecef;
      border-radius: 0px;
      border-left: 3px solid #cdcdcd;

    }


    .review-box .dots{

      height: 4px;
      width: 4px;
      margin-bottom: 2px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
    }

    .review-box  .badge{

      padding: 7px;
      padding-right: 9px;
      padding-left: 16px;
      box-shadow: 5px 6px 6px 2px #e9ecef;
    }

    .review-box  .user-img{

      margin-top: 4px;
    }

    .review-box  .check-icon{

      font-size: 17px;
      color: #c3bfbf;
      top: 1px;
      position: relative;
      margin-left: 3px;
    }

    .review-box  .form-check-input{
      margin-top: 6px;
      margin-left: -24px !important;
      cursor: pointer;
    }

    .review-box .form-check-input:focus{
      box-shadow: none;
    }

    .review-box .icons i{
      margin-left: 0px;
    }
    .review-box .rating span {
      color: #eda92c;
    }

    .review-box .reply{
      margin-left: 0px;
    }

    .review-box  .reply small{
      color: #b7b4b4;
    }
    .user-img{
      margin-top: 4px;
    }

    .check-icon{
      font-size: 17px;
      color: #c3bfbf;
      top: 1px;
      position: relative;
      margin-left: 3px;
    }

</style>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
</style>
