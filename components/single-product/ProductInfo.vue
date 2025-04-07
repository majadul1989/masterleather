<template>
   <div v-if="info" class="prosuct-sg-dec-all">
      <div class="prosuct-sg-dec prosuct-sg-dec_ahrselrc_new">
         <div class="prosuct-sg-dec-title">
            <h3>Product Description</h3>
         </div>
         <div class="prosuct-sg-dec-area prosuct-pt-dt">
            <div class="prosuct-sg-dec-text prosuct-sg-dec-text-on" v-html="info.description">
            </div>
         </div>
      </div>
      <div class="specifications">
         <div class="prosuct-sg-dec-title">
            <h3>Specifications</h3>
         </div>
         <div class="prosuct-sg-dec-area">
            <div class="prosuct-sg-dec-text">
               <div class="single-page-contant-det">
                  <p v-for="(attr,key) in info.attrs" :key="key">{{attr.field_label}} : <span>{{attr.value}}</span></p>
               </div>
            </div>
         </div>
      </div>
      <div class="ove-hidenk ove-hidenk2">
         <div class="prosuct-sg-dec-text">
            <a href="javascript:void(0);">View all features</a>
         </div>
      </div>

      <!-- Ratings and reviews -->
      <div class="prosuct-sg-dec prosuct-sg-dec-area_002">
         <div class="prosuct-sg-dec-title">
            <h3>Ratings and Reviews
               <a class="pull-right btn-default btn" href="javascript:void(0)">More Reviews</a>
            </h3>
         </div>
         <div class="prosuct-sg-dec-area ">
            <div class="qu-ans">
               <button type="button" @click="reviewModalOpen" class="btn qu-ans_one">Post Your Review</button>
            </div>
            <!-- Modal -->
            <Modal :modalRequest="reviewModalRequest" modal_title="Post Your Review">
                <textarea class="form-control form-control-textarea" v-model="postReview"></textarea>
                <input type="button" class="btn btn-success" value="SUBMIT"/>
            </Modal>
         </div>
      </div>

      <!-- comment and reactions -->
      <div class="prosuct-sg-dec prosuct-sg-dec-area_002">
         <div class="prosuct-sg-dec-title">
            <h3>Comments and Reactions
               <a class="pull-right btn-default btn" href="javascript:void(0)">More Comments</a>
            </h3>
         </div>
         <div class="prosuct-sg-dec-area ">
            <div class="qu-ans">
               <button type="button" @click="commentModalOpen" class="btn qu-ans_one">Post Your Comment</button>
            </div>
            <!-- Modal -->
           <Modal :modalRequest="commentModalRequest" modal_title="Post Your Comment">
                  <textarea class="form-control form-control-textarea" v-model="postComment"></textarea>
                  <input @click="submitComment" type="button" class="btn btn-success" value="SUBMIT"/>
            </Modal>

         </div>
      </div>
      <div style="clear: both;" class="clear"></div>

      <!-- Question & answers -->
      <div class="prosuct-sg-dec prosuct-sg-dec_001">
         <div class="prosuct-sg-dec-title">
            <h3>Questions and Answers
               <a class="pull-right btn-default btn" href="javascript:void(0)">More Questions</a>
            </h3>
         </div>
         <div class="prosuct-sg-dec-area">
            <div>
                <div v-for="(question,key) in questions" :key="key">
                   <h3>Q: {{question.description}}</h3>
                   <div v-if="question.answers.length">
                      <h4 v-for="(ans,ansKey) in question.answers" :key="ansKey">
                         {{ans.description}}
                      </h4>
                   </div>
                </div>
            </div>
            <div class="qu-ans">
               <button type="button" @click="questionModalOpen" class="btn qu-ans_one">Post Your Questions</button>
            </div>
            <!-- Modal -->
           <Modal :modalRequest="questionModalRequest" modal_title="Post Your Question">
              <div v-if="$auth.loggedIn">
                  <div v-if="questionSuccess != null" class="text-center" :class="[questionSuccess ?'bg-success':'bg-danger']">
                     {{questionSuccess ? 'Your question successfully submitted !' : 'Something wrong to submit question'}}
                  </div>
                  <div>
                        <textarea class="form-control form-control-textarea" v-model="postQuestion"></textarea>
                        <input @click="submitQuestion" type="button" class="btn btn-success" value="SUBMIT"/>
                  </div>
              </div>
              <div v-else>
                 Please <a href="javascript:void(0)" @click="goLoginPage()">Login</a> to make a comment
              </div>
            </Modal>

         </div>
      </div>
   </div>
</template>

<script>
import Modal from '../common/Modal.vue'
export default {
    props:{

        info: {
          type: Object,
          default: null
       }
    },
    components: {Modal},
    data(){

       return {

          reviewModalRequest: null,
          questionModalRequest: null,
          commentModalRequest: null,

          postQuestion: '',
          questionSuccess: null,

          postComment:'',
          postRating: 5,
          postReview:'',

          questions: []

       }

    },

    methods: {
       reviewModalOpen(){
          this.reviewModalRequest = new Date();
       },

       questionModalOpen(){
          this.questionModalRequest = new Date();
       },

       commentModalOpen(){
          this.commentModalRequest = new Date();
       },

       async submitComment(){
          //console.log(this.postComment)
       },

       async submitQuestion(){
          const attr = {
             seo_url: this.$route.params.slug,
             description: this.postQuestion
          }

          await this.$store.dispatch('product/fetchStoreQuestion',attr)

          if(this.$store.state.product.STORE_QUESTION.success){
            //  this.questionModalRequest = new Date()
             this.questionSuccess = true
             this.postQuestion = ''
             const self = this

             setTimeout(function(){
                self.questionSuccess = null
             },10000)
          }

       },

       async goLoginPage(){
          this.questionModalRequest = await new Date()
          this.$router.push({path:'/user/login'})
       }

    },

    async created(){


       await this.$store.dispatch('product/fetchListComment',{
          seo_url: this.$route.params.slug,
          limit: 3
       })


       await this.$store.dispatch('product/fetchListeQuestion',{
          seo_url: this.$route.params.slug,
          limit: 3
       })

       this.questions = this.$store.state.product.LIST_QUESTION.questions.slice(0,3)

    }
}
</script>

<style scoped>
   li{
      list-style:none;
   }
   .prosuct-sg-dec_ahrselrc_new {
      height: auto;
      overflow: visible;
   }
   .prosuct-sg-dec {
      border: 1px solid #f0f0f0;
      margin-top: 20px;
   }
   .prosuct-sg-dec-title h3 {
      margin: 0;
      padding: 13px 10px;
      border-bottom: 1px solid #f0f0f0;
      font-weight: 600;
      font-size: 17px;
   }
   .prosuct-sg-dec-area {
      padding: 8px;
      border-bottom: 0;
   }
   .prosuct-sg-dec-text {
      width: 100%;
      padding: 0 5px;
   }
   .prosuct-sg-dec-text-on p{
      margin-bottom: 15px;
      font-size: 15px;
      color: rgb(69, 69, 69);
      line-height: 25px;
   }
   .prosuct-sg-dec-text-on span{
      color: rgb(96, 96, 96);
   }
   .specifications {
      margin-top: 20px;
      border: 1px solid #f0f0f0;
      height: auto;
      overflow: hidden;
   }
   .ove-hidenk {
      border: 1px solid #EEE;
      border-top: none;
      padding: 5px 10px;
   }
   .prosuct-sg-dec-text a {
      color:#0058a3;
      font-size: 15px;
      display: block;
      text-transform: capitalize;
   }
   .pull-right.btn-default.btn {
      color: #606060;
      padding-top: 0;
      transition: all 0.2s linear;
      padding-right: 0;
      font-size: 14px;
   }
   .btn.qu-ans_one {
      padding: 7px 10px;
      font-size: 13px;
      background: #ddd;
   }
   .more_questions a:hover, .btn.qu-ans_one:hover {
      background: #0058a3;
      color: #fff;
   }
   .pull-right.btn-default.btn:hover {
      color: #0058a3;
   }
</style>
