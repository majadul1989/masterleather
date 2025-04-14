<template>
    <div>
        <div v-if="!loading && !(simple_info && simple_info.id)">
            <er-404 />
        </div>
        <div v-else>

            <Breadcrumb :pathList="pathList" />
            <!-- product page wrapper -->
            <div class="container">
                <div v-if="simple_info?.special_notification" class="alert alert-light" role="alert"
                    style="border: 1px solid #e1e1e1; border-left-width: 5px; border-left-color: #c00; border-radius: 0px; box-shadow: 0 0px 5px rgba(140,149,159,0.15) !important;">
                    <strong><span v-html="simple_info.special_notification"></span></strong>
                </div>
            </div>
            <section class="product-page-wrapper clear-cache">

                <div class="container">

                    <!-- product page top content -->
                    <div class="pd-pg-top-content">
                        <div class="row">

                            <div class="col-md-6 col-lg-4 col-xl-5">


                                <div>
                                    <product-image />
                                </div>
                                <add-cart-info :simple_info="simple_info" :info="info" :emi_widget="emi_widget"
                                    :toggleReviewsDrawer="toggleReviewsDrawer" :quantityDecreament="quantityDecreament"
                                    :quantityIncreament="quantityIncreament" :addToCart="addToCart"
                                    :oneClickBuyNow="oneClickBuyNow" :qty="quantity"
                                    @set-variation-id="getSelectedVariationId" @updateQuantity="setQuantity"
                                    :variations="variations" self_class="mobile-add-cart" />

                                <!-- pd-pg-content-text -->
                                <div v-if="info" class="pd-pg-content-text" v-html="info.short_description">
                                </div>
                                <!-- pd-pg-details-tab -->
                                <div v-if="info" class="pd-pg-details-tab">
                                    <ul>
                                        <li @click="toggleDetailsDrawer()">
                                            <button>
                                                <span class="pd-details-title">
                                                    <span class="title">Details</span>
                                                </span>
                                                <span class="pd-details-icon">
                                                    <i class="fas fa-chevron-right"></i>
                                                </span>
                                            </button>
                                        </li>


                                        <span v-if="info?.enable_variation == 'on'"></span>
                                        <span v-else="">
                                            <li @click="toggleSpecificationDrawer()">
                                                <button>
                                                    <span class="pd-details-title">
                                                        <span class="title">Specifications</span>
                                                    </span>
                                                    <span class="pd-details-icon">
                                                        <i class="fas fa-chevron-right"></i>
                                                    </span>
                                                </button>
                                            </li>
                                        </span>


                                        <li @click="toggleDeliveryInsDrawer()">
                                            <button>
                                                <span class="pd-details-title">
                                                    <span class="title">Delivery, Service & Warranty Instructions</span>
                                                </span>
                                                <span class="pd-details-icon">
                                                    <i class="fas fa-chevron-right"></i>
                                                </span>
                                            </button>
                                        </li>

                                        <li @click="toggleLoveFurnitureDrawer()">
                                            <button>
                                                <span class="pd-details-title">
                                                    <span class="title">Love your products</span>
                                                </span>
                                                <span class="pd-details-icon">
                                                    <i class="fas fa-chevron-right"></i>
                                                </span>
                                            </button>
                                        </li>


                                        <li @click="toggleQuestionDrawer()">
                                            <button>
                                                <span class="pd-details-title">
                                                    <span class="title">Questions</span>
                                                </span>
                                                <span class="pd-details-icon">
                                                    <i class="fas fa-chevron-right"></i>
                                                </span>
                                            </button>
                                        </li>


                                        <li @click="toggleCommentDrawer()" v-view.once="commentViewHandler">
                                            <button class="inview-comment">
                                                <span class="pd-details-title">
                                                    <span class="title">Comments</span>
                                                </span>
                                                <span class="pd-details-icon">
                                                    <i class="fas fa-chevron-right"></i>
                                                </span>
                                            </button>
                                        </li>


                                        <li @click="toggleReviewsDrawer()">
                                            <button>
                                                <span class="pd-details-title">
                                                    <span class="title d-block">Reviews</span>

                                                    <span class="pd-details-icon">
                                                        <span class="product-review-star d-inline-block px-1"
                                                            v-for="n in 5">
                                                            <i v-if="n > averageRating" class="icon-star-empty"></i>
                                                            <i v-else="" class="icon-star"></i>
                                                        </span>
                                                        <span class="review-star-count">({{ totalReview }})</span>
                                                    </span>
                                                    <i class="fas fa-chevron-right"></i>
                                                </span>
                                            </button>
                                        </li>
                                    </ul>

                                </div>

                            </div>
                            <!-- single page product info -->
                            <div class="col-md-6 col-lg-8 col-xl-7">
                                <add-cart-info :simple_info="simple_info" :info="info" :emi_widget="emi_widget"
                                    :toggleReviewsDrawer="toggleReviewsDrawer" :quantityDecreament="quantityDecreament"
                                    :quantityIncreament="quantityIncreament" :addToCart="addToCart"
                                    :oneClickBuyNow="oneClickBuyNow" :qty="quantity"
                                    @set-variation-id="getSelectedVariationId" @updateQuantity="setQuantity"
                                    :variations="variations" self_class="desktop-add-cart" />
                            </div>
                            <!-- similar products wrap -->


                        </div>
                    </div>


                    <similar-product :products="similar_products" :key="1" classList="inview-similar-products" v-view.once="similarProductViewHandler" />

                    <similar-product :products="mostview_products" :key="2" title="Other Also"
                        classList="inview-othersee-products" v-view.once="mostViewHandler" />
                    <similar-product :products="goes_well_products" :key="3" title="Goes well with"
                        classList="inview-goes-well-products" v-view.once="samecatProductHandler" />
                    <similar-product :products="samecat_products" :key="4" title="More from this category"
                        classList="inview-samecat-products" v-view.once="goesWellViewHandler" />

                </div>
            </section>

            <loader :loading="loading" :empty="!info && !loading" />


            <!-- cart modal -->
            <modal class="cart-modal_wrap" key="cartModal" :modalRequest="cartModal" xmodal_title="Add to cart">
                <div v-if="cart_add_success">
                    <div class="left-content-product row">
                        <div class="content-product-left col-md-12 col-sm-12 col-xs-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="title-area-cart-v"> {{ cartAdded.total_qty }} new item have been added to
                                        your cart</h4>
                                </div>
                                <div class="col-md-4">
                                    <div class="cart-img">
                                        <a href="javascript:void(0)">
                                            <lazy-image :src="cartAdded.image_url" alt="" />
                                        </a>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="content-product-right_wp align-item-center">
                                        <div class="cart-prouct-title">
                                            <strong>Product Name: </strong> {{ cartAdded.title }}
                                            <br />
                                            <strong>SKU: </strong>
                                            <span class="total-item-list-a">{{ cartAdded.product_code }}</span>

                                            <div v-if="cartAdded.variation_id" class="d-none">
                                                <div v-for="(data, ke) in cartAdded?.variation_info?.variations">
                                                    <b> {{ ke }} </b>: {{ data }}
                                                </div>
                                            </div>

                                            <div>
                                                <strong>Unit Price: </strong>
                                                <span class="total-item-list-a">{{ money_sign }} {{
                                                    cartAdded.purchaseprice.toLocaleString()
                                                    }}</span>
                                            </div>
                                            <strong>Quantity: </strong>
                                            <span class="total-item-list-a">{{ cartAdded.total_qty }} items</span>

                                            <br />
                                            <strong>SubTotal: </strong>
                                            <span class="total-item-list-a">{{ money_sign }} {{
                                                cartAdded.totalprice.toLocaleString()
                                                }}</span>

                                        </div>
                                        <div class="product-label form-group">
                                            <div class=" price"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer col-md-12">
                        <a href="javascript:void(0)" @click="viewCartPage" type="button"
                            class="view_one btn mr-auto font-weight-bold common-btn_color">
                            View Cart
                        </a>
                        <a href="javascript:void(0)" @click="closeModal" type="button"
                            class="view_one btn font-weight-bold common-btn_color">
                            <i class="icon-left-open"></i>
                            <span>Continue Shopping</span>
                        </a>
                    </div>
                </div>

                <div v-else>
                    <div class="text-center alert alert-danger" v-if="cartAdded">{{ cartAdded.message }}</div>
                    <a href="javascript:void(0)" @click="viewCartPage"
                        class="view_one btn pull-right font-weight-bold common-btn_color">View Cart</a>

                </div>
            </modal>


            <!-- Buy now Modal -->

            <modal class="cart-modal_wrap" key="buyNowModal" :modalRequest="buyNowModal" xmodal_title="Add to cart">
                <div>
                    <form method="POST" action="" @submit="oneClickBuyNowSubmit" id="delivery_address">
                        <div class="left-content-product row">
                            <div class="content-product-left col-md-12 col-sm-12 col-xs-12">

                                <div class="row">
                                    <div class="col-md-12">
                                        <div v-if="errorMsg" class="alert alert-danger">
                                            {{ errorMsg }}
                                        </div>
                                        <div v-if="successMsg" class="alert alert-success">
                                            {{ successMsg }}
                                        </div>
                                        <div v-else>
                                            <div class="form-group">
                                                <label for="">Name</label>
                                                <input type="text" name="customer_name" id="" v-model="customerName"
                                                    class="form-control" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Phone</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">+88</span>
                                                    </div>
                                                    <input type="text" name="customer_phone" id="" min="11"
                                                        v-model="customerPhone" class="form-control" required>
                                                </div>

                                            </div>
                                            <div class="form-group">
                                                <label for="">Email</label>
                                                <input type="email" name="customer_email" id="" v-model="customerEmail"
                                                    class="form-control" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="">Address</label>
                                                <input type="text" name="customer_address" id=""
                                                    v-model="customerAddress" class="form-control" required>
                                            </div>
                                            <div class="form-group">
                                                <button type="submit"
                                                    class="view_one btn mr-auto font-weight-bold common-btn_color">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer ">

                        </div>
                    </form>
                </div>


            </modal>

            <!-- End -->

            <!-- details drawer -->
            <right-drawer :openRequest="detailsDrawer" width="40%">
                <!-- Content List -->
                <div class="right-side-content-wrap">
                    <h1>Product Details</h1>
                    <div v-if="info" v-html="info.description">
                    </div>
                </div>
            </right-drawer>

            <!-- specifications drawer -->
            <right-drawer :openRequest="specificationsDrawer" width="40%">
                <!-- Content List -->

                <div class="right-side-content-wrap">
                    <h1>Specifications</h1>
                    <div v-if="info">
                        <p v-for="(attr, key) in info.attrs" :key="key">{{ attr.field_label }} : <span>{{ attr.value
                                }}</span></p>
                    </div>
                </div>

            </right-drawer>


            <!-- care info drawer -->
            <right-drawer :openRequest="careInfoDrawer" width="40%">
                <!-- Content List -->
                <div class="right-side-content-wrap">
                    <h1>Care Information</h1>
                    <div v-if="info">
                        {{ info.care_info }}
                    </div>
                </div>
            </right-drawer>


            <!-- delivery info drawer -->
            <right-drawer :openRequest="deliveryInstructionDrawer" width="40%">
                <!-- Content List -->
                <div class="right-side-content-wrap">
                    <h1>Delivery, Service & Warranty Instructions</h1>

                    <div v-if="deliveryIns" v-html="deliveryIns.description">
                        <!-- {{deliveryIns.page.description}} -->
                    </div>
                </div>
            </right-drawer>

            <!-- love your furniture info drawer -->
            <right-drawer :openRequest="loveFurnitureDrawer" width="40%">
                <!-- Content List -->
                <div class="right-side-content-wrap">
                    <h1>Love your products</h1>

                    <div v-if="loveFurniture" v-html="loveFurniture.description">
                        <!-- {{deliveryIns.page.description}} -->
                    </div>
                </div>
            </right-drawer>

            <!-- specifications drawer -->
            <right-drawer :openRequest="questionDrawer" width="40%">
                <!-- Content List -->
                <div class="customer-comments-container">
                    <div class="customer-comments-headline">
                        Customer Questions ({{ questions.length }})
                        <div @click="askQuestionModal()" class="customer-query-btn">
                            <button class="common-btn_color">Ask a question</button>
                        </div>
                    </div>

                    <div class="user-comments-wrap-container">
                        <div v-for="(question, key) in questions" :key="key" class="user-comments-wrapper">
                            <div class="user-comment-answer">
                                <span class="cmnt-txt">
                                    <strong>Question: {{ question.description }}</strong>
                                </span>

                                <div v-if="question.answers.length">
                                    <span v-for="(ans, ansKey) in question.answers" :key="ansKey"
                                        class="cmnt-ans-txt d-block"><b>Answer
                                            :</b> {{ ans.description }} </span>
                                </div>
                            </div>
                            <div class="user-comments-footer">
                                <div class="user-comment-left">
                                    <span>{{ question.username }}</span>
                                    <span>{{ question.time }}</span>
                                </div>
                            </div>
                        </div>
                        <div v-if="info && questions.length > 0" class="show-more-review_btn">
                            <a href="javascript:void(0)">See More</a>
                        </div>
                    </div>
                </div>
            </right-drawer>

            <!-- specifications drawer -->
            <right-drawer :openRequest="commentDrawer" width="40%">
                <!-- Content List -->
                <div class="customer-comments-container">
                    <div class="customer-comments-headline">
                        Customer Comments (0)
                        <div @click="makeCommentModal()" class="customer-query-btn">
                            <button class="common-btn_color">make a comment</button>
                        </div>
                    </div>
                    <div class="user-comments-wrap-container">
                        <!-- <div class="user-comments-wrapper">
                <div class="user-question-answer">
                    <span class="qtn-txt">
                        <strong>Comment: Lorem ipsum dolor sit amet, consectetur adipisicing elit?</strong></strong>
                    </span>
                    <span class="ans-txt d-block"><b>Reply :</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur incidunt debitis veniam accusantium quis voluptates quam aperiam. </span>
                    <span class="ans-txt d-block"><b>Reply :</b> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda consequatur incidunt debitis veniam accusantium quis voluptates quam aperiam. </span>
                </div>
                <div class="user-comments-footer">
                    <div class="user-comment-left">
                        <span>Muskaan Mittal</span>
                        <span>16 Feb 2021</span>
                    </div>
                </div>
            </div> -->
                        <div v-if="info" class="show-more-review_btn">
                            <nuxt-link :to="'/product/review/' + info.id">See More</nuxt-link>
                        </div>
                    </div>
                </div>
            </right-drawer>


            <!-- specifications drawer -->
            <right-drawer :openRequest="reviewsDrawer" width="40%" class="review-wrap">
                <!-- Content List -->
                <div class="review-right-content">


                    <div class="user-reviews-wrap-container">

                        <div class="headings d-flex justify-content-between align-items-center mb-3">
                            <div class="detailed-reviews-headline">
                                Customer Reviews ({{ totalReview }})
                            </div>
                            <div class="buttons">
                                <nuxt-link :to="'/user/orders/'"
                                    class="badge bg-dark d-flex flex-row align-items-center p-2">
                                    <span class="text-white">Make Review</span>
                                </nuxt-link>
                            </div>
                        </div>

                        <div class="review-box">
                            <div v-for="review in allReviews" class="card p-3 mb-2">

                                <div class="d-flex justify-content-between align-items-center">

                                    <div class="user d-flex flex-row align-items-center">

                                        <span>
                                            <small class="font-weight-bold text-secondary"> {{ review.user.name }}
                                            </small>

                                            <small class="font-weight-bold rating" v-for="n in 5">
                                                <span v-if="n > review.rating">
                                                    <i class="icon-star-empty"></i>
                                                </span>
                                                <span v-else="">
                                                    <i class="icon-star"></i>
                                                </span>
                                            </small>
                                        </span>

                                    </div>

                                    <small>
                                        {{ formatDate(review.created_at) }}
                                    </small>

                                </div>


                                <div class="action d-flex justify-content-between mt-2 align-items-center">

                                    <div class="reply">
                                        {{ review.comment }}
                                    </div>

                                    <div class="icons align-items-center"></div>

                                </div>

                            </div>
                        </div>


                        <div v-if="info" class="show-more-review_btn">
                            <a v-if='nowReviewLoading < totalReview' href="javascript:void(0)"
                                @click.prevent="allReviewShow(pagePerreview)">Load More</a>

                        </div>
                    </div>
                </div>
            </right-drawer>

            <!-- ask question modal -->
            <modal class="cart-modal_wrap" key="ask-question-modal" :modalRequest="askQuestionModalRequest"
                modal_title="Ask Question">
                <div v-if="$auth.loggedIn" class="question-make-wrap customer-feedback-wrapper">
                    <form v-if="questionSuccess == null" @submit.prevent="submitQuestion" method="post">
                        <textarea v-model="postQuestion" class="textArea-flied form-control"
                            placeholder="Write your question"></textarea>
                        <input type="submit" class="btn post-btn common-btn_color" value="Make Question">
                    </form>
                    <div v-else class="text-center alert alert-success">
                        Question successfully submitted, we will answer shortly. Thank you.
                    </div>
                </div>
                <div v-else>
                    Please <a href="javascript:void(0)" @click="goLoginPage()">Login</a> to make a comment
                </div>
            </modal>
            <!-- make a comment modal  -->
            <modal class="cart-modal_wrap" key="make-comment-modal" :modalRequest="makeCommentModalRequest"
                modal_title="Make a Comment">
                <div class="comment-make-wrap customer-feedback-wrapper">
                    <input type="text" name="" class="form-control" placeholder="Name">
                    <input type="email" name="" class="form-control" placeholder="Email">
                    <textarea class="textArea-flied form-control" placeholder="make a your comment"></textarea>
                    <button class="btn post-btn common-btn_color">Make Comment</button>
                </div>
            </modal>

            <script v-html="JSON.stringify(schema)" type="application/ld+json"></script>
        </div>

    </div>
</template>

<script>
import checkView from 'vue-check-view'
import Vue from 'vue'

Vue.use(checkView)

import Breadcrumb from '~/components/common/Breadcrumb.vue'
import MostView from '~/components/single-product/MostView.vue'
import ProductBanner from '~/components/single-product/ProductBanner.vue'
import ProductImage from '~/components/single-product/ProductImage.vue'
import ProductInfo from '~/components/single-product/ProductInfo.vue'
import ProfileInfo from '~/components/single-product/ProfileInfo.vue'
import RecentProduct from '~/components/single-product/RecentProduct.vue'
import SameCategory from '~/components/single-product/SameCategory.vue'
import SimilarProduct from '~/components/single-product/SimilarProduct.vue'
import SingleInfo from '~/components/single-product/SingleInfo.vue'
import SomeText from '~/components/single-product/SomeText.vue'
import Suggestion from '~/components/single-product/Suggestion.vue'
import ProductSimpleInfo from '~/components/single-product/ProductSimpleInfo.vue'
import RightDrawer from '~/components/common/RightDrawer.vue'
import Loader from '~/components/common/Loading.vue'
import AddCartInfo from '~/components/single-product/AddCartInfo.vue'
import er404 from '~/components/errors/err404.vue'
import { baseUrl } from '~/helpers/common'

export default {
    auth: false,
    name: 'page-product-index',
    middleware({ $gtm }) {
        // $gtm.push({ 'varName': 'value' })
    },

    data() {
        return {

            loading: false,
            simple_info: null,
            info: null,
            variations: [],
            storeSelectedVariationId: null,
            quantity: 1,
            cart_add_success: false,
            cartAdded: null,
            cartModal: null,
            buyNowModal: null,
            deliveryIns: null,
            loveFurniture: null,
            emi_widget: null,

            detailsDrawer: null,
            specificationsDrawer: null,
            careInfoDrawer: null,

            deliveryInstructionDrawer: null,
            loveFurnitureDrawer: null,
            questionDrawer: null,
            commentDrawer: null,
            reviewsDrawer: null,
            allReviews: {},
            totalReview: 0,
            averageRating: 0,
            pagePerreview: 10,
            nowReviewLoading: 0,


            askQuestionModalRequest: null,
            makeCommentModalRequest: null,
            postQuestion: '',
            questionSuccess: null,
            errorMsg: false,
            successMsg: false,
            customerName: null,
            customerEmail: null,
            customerPhone: null,
            customerAddress: null,
            product_id: null,
            pathList: [],


            questions: [],


            similar_products: [],
            recent_view_products: [],
            mostview_products: [],
            samecat_products: [],
            goes_well_products: [],


            apicall: {
                similar_products: false,
                mostview_products: false,
                samecat_products: false,
                goes_well_products: false
            },


            schema: {
                '@context': 'https://schema.org',
                '@type': 'Product',
                'productID': '',
                'sku': '',
                'name': '',
                'description': '',
                'url': '',
                'image': '',
                'brand': 'facebook',
                'aggregateRating': {
                    '@type': 'AggregateRating',
                    'ratingValue': '88',
                    'bestRating': '100',
                    'ratingCount': '20'
                },
                'offers': [{
                    '@type': 'Offer',
                    'price': '',
                    'priceCurrency': 'BDT',
                    'priceValidUntil': '',
                    'url': '',
                    'itemCondition': 'https://schema.org/NewCondition',
                    'availability': 'https://schema.org/InStock'
                }]

            }

        }
    },

    //Meta SEO
    async asyncData({ query, store, params }) {
        await store.dispatch('product/fetchSimpleInfo', {
            seo_url: params.slug
        })
        let simple_info = await store.state.product.SIMPLE_INFO.product
        const data = {
            'post_id': simple_info.id,
            'post_type': 'product'
        }
        // console.log(simple_info)
        const globalSetting = await store.dispatch('settings/globalSetting', {})
        const seoSetting = await store.dispatch('settings/seoSetting', data)
        //console.log(globalSetting)
        return {
            specialNotification: globalSetting.special_notification_product_single_page ?? false,
            metatitle: seoSetting.meta_title ?? simple_info.title + ` | Master Leather BD`,
            metadescription: seoSetting.meta_description ?? simple_info.short_description,
            metakeywords: seoSetting.meta_keywords ?? simple_info.sub_title
        }
    },


    head() {

        return {
            title: this.metatitle,
            description: this.metadescription,
            keywords: this.metakeywords,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.metadescription
                },
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: this.metatitle
                },
                {
                    hid: 'og:image',
                    name: 'og:image',
                    content: baseUrl() + this.simple_info?.image ?? null
                },
                {
                    hid: 'og:site_name',
                    name: 'og:site_name',
                    content: 'Master Leather BD'
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.metakeywords
                }
            ],
            script: [
                {
                    src: `https://admin.masterleatherbd.com/public/nuxt/js/circlr.min.js`,
                    body: true
                },
                {
                    src: `https://rawgithub.com/timrwood/moment/2.9.0/min/moment.min.js`,
                    body: true
                }
            ]


        }
    },
    components: {
        Breadcrumb,
        RecentProduct,
        er404,
        MostView,
        Suggestion,
        SameCategory,
        SomeText,
        ProductImage,
        ProductInfo,
        ProfileInfo,
        SimilarProduct,
        ProductBanner,
        SingleInfo,
        ProductSimpleInfo,
        RightDrawer,
        Loader,
        AddCartInfo
    },


    methods: {

        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },

        async commentViewHandler() {
            this.loading = true
            await this.$store.dispatch('product/fetchSimilarProducts', {
                seo_url: this.$route.params.slug,
                ...this.$route.query
            })
            this.similar_products = this.$store.state.product.SIMILAR_PRODUCTS.similar_products
            this.loading = false
        },

        async similarProductViewHandler() {
            this.loading = true
            await this.$store.dispatch('product/fetchOtherAlsoSee', {
                seo_url: this.$route.params.slug,
                ...this.$route.query
            })
            this.mostview_products = this.$store.state.product.OTHER_ALSO_SEE.products
            this.loading = false
        },

        async mostViewHandler() {
            this.loading = true
            await this.$store.dispatch('product/fetchGoesWellProducts', {
                seo_url: this.$route.params.slug,
                ...this.$route.query
            })
            this.goes_well_products = this.$store.state.product.GOES_WELL_PRODUCTS.products
            this.loading = false
        },

        async samecatProductHandler() {
            this.loading = true
            await this.$store.dispatch('product/fetchSameCategoryProducts', {
                seo_url: this.$route.params.slug,
                ...this.$route.query
            })
            this.samecat_products = this.$store.state.product.SAME_CATEGORY_PRODUCTS.products
            this.loading = false
        },

        async goesWellViewHandler() {


        },


        //    add to cart
        async addToCart(product_id) {
            console.log(this.storeSelectedVariationId)
            await this.$store.dispatch('cart/fetchAdd', {
                main_pid: product_id,
                qty: this.quantity,
                variation_id: this.storeSelectedVariationId,
                ...this.$route.query
            })
            this.cart_add_success = this.$store.state.cart.ADD ? this.$store.state.cart.ADD.success : false
            this.cartAdded = this.$store.state.cart.ADD ? this.$store.state.cart.ADD : null
            this.cartModal = new Date()
            await this.$store.dispatch('cart/fetchCountNotification')
            await this.$store.dispatch('cart/fetchCart', {})
        },

        //get Selected Variation //Nipun
        async getSelectedVariationId(id) {
            this.storeSelectedVariationId = id
        },


        //One click Buy Now
        async oneClickBuyNow(product_id) {
            //alert(1)
            this.product_id = product_id
            this.buyNowModal = new Date()
        },

        async oneClickBuyNowSubmit(e) {
            e.preventDefault()
            const userData = {
                'customer_name': this.customerName,
                'customer_email': this.customerEmail,
                'customer_phone': this.customerPhone,
                'customer_address': this.customerAddress,
                'product_id': this.product_id
            }

            this.errorMsg = (this.customerPhone.length < 11) ? 'Phone number must be at least 11 characters.' : false

            if (this.errorMsg == false) {
                const response = await this.$axios.$post('/api/cart/one-click-buy', userData)
                this.successMsg = response.status == true ? 'Thank you for your interest. We will contact you soon' : false
                this.errorMsg = response.status == false ? 'Something is wrong. Please try again' : false
            }
        },

        closeModal() {
            this.cartModal = new Date()
            //this.buyNowModal = new Date()
        },

        quantityIncreament() {
            if (this.quantity < 99) {
                this.quantity += 1
            }
        },

        quantityDecreament() {
            if (this.quantity > 1) {
                this.quantity -= 1
            }
        },

        setQuantity(quantity) {
            this.quantity = quantity
        },

        async viewCartPage() {
            this.cartModal = await new Date()
            // this.buyNowModal = await new Date()
            this.$router.push({ path: '/cart' })
        },


        toggleDetailsDrawer() {
            this.specificationsDrawer = null
            this.reviewsDrawer = null
            this.questionDrawer = null
            this.commentDrawer = null
            this.careInfoDrawer = null
            this.deliveryInstructionDrawer = null
            this.loveFurnitureDrawer = null

            this.detailsDrawer = new Date().getTime()
        },


        toggleSpecificationDrawer() {
            this.detailsDrawer = null
            this.reviewsDrawer = null
            this.questionDrawer = null
            this.commentDrawer = null
            this.careInfoDrawer = null
            this.deliveryInstructionDrawer = null
            this.loveFurnitureDrawer = null

            this.specificationsDrawer = new Date().getTime()
        },

        toggleCareInfoDrawer() {
            this.detailsDrawer = null
            this.reviewsDrawer = null
            this.questionDrawer = null
            this.commentDrawer = null
            this.specificationsDrawer = null
            this.deliveryInstructionDrawer = null
            this.loveFurnitureDrawer = null

            this.careInfoDrawer = new Date().getTime()
        },

        async toggleDeliveryInsDrawer() {
            this.detailsDrawer = null
            this.reviewsDrawer = null
            this.questionDrawer = null
            this.commentDrawer = null
            this.specificationsDrawer = null
            this.careInfoDrawer = null
            this.loveFurnitureDrawer = null

            await this.$store.dispatch('common/fetchWidget', {
                id: 14,
                ...this.$route.query
            })

            this.deliveryIns = this.$store.state.common.WIDGET.widget

            this.deliveryInstructionDrawer = new Date().getTime()
        },


        async toggleLoveFurnitureDrawer() {
            this.detailsDrawer = null
            this.reviewsDrawer = null
            this.questionDrawer = null
            this.commentDrawer = null
            this.specificationsDrawer = null
            this.careInfoDrawer = null
            this.deliveryInstructionDrawer = null

            await this.$store.dispatch('common/fetchLoveFurnitureWidget', {
                id: 16,
                ...this.$route.query
            })

            this.loveFurniture = this.$store.state.common.LOVE_FURNITURE_WIDGET.widget

            this.loveFurnitureDrawer = new Date().getTime()

        },


        async toggleQuestionDrawer() {
            this.detailsDrawer = null
            this.reviewsDrawer = null
            this.specificationsDrawer = null
            this.commentDrawer = null
            this.careInfoDrawer = null
            this.deliveryInstructionDrawer = null
            this.loveFurnitureDrawer = null

            await this.$store.dispatch('product/fetchListQuestion', {
                seo_url: this.$route.params.slug,
                limit: 8,
                ...this.$route.query
            })

            this.questions = this.$store.state.product.LIST_QUESTION.questions ? this.$store.state.product.LIST_QUESTION.questions.slice(0, 3) : []

            this.questionDrawer = new Date().getTime()
        },

        async toggleCommentDrawer() {
            this.detailsDrawer = null
            this.reviewsDrawer = null
            this.specificationsDrawer = null
            this.questionDrawer = null
            this.careInfoDrawer = null
            this.deliveryInstructionDrawer = null
            this.loveFurnitureDrawer = null

            await this.$store.dispatch('product/fetchListComment', {
                seo_url: this.$route.params.slug,
                limit: 3,
                ...this.$route.query
            })


            this.commentDrawer = new Date().getTime()
        },

        async allReviewShow(LoadData = 0) {
            let product_id = this.$store.state.product.INFO.product.id
            let formData = {
                product_id: product_id,
                paginate: this.nowReviewLoading == 0 ? this.pagePerreview : this.nowReviewLoading + LoadData
            }
            let response = await this.$axios.post('/api/product/single-product-review/' + product_id, formData)
            //console.log(response.data)
            let reviews = response.data
            this.allReviews = reviews.data
            this.totalReview = reviews.count
            this.averageRating = reviews.average_rating
            this.nowReviewLoading = this.allReviews.length
        },

        async toggleReviewsDrawer(LoadData = 0) {
            //Call Review Of this Product
            //   alert(1)
            await this.allReviewShow()
            //console.log(this.reviewsDrawer)
            //End
            this.specificationsDrawer = null
            this.detailsDrawer = null
            this.questionDrawer = null
            this.commentDrawer = null
            this.careInfoDrawer = null
            this.deliveryInstructionDrawer = null
            this.loveFurnitureDrawer = null

            this.reviewsDrawer = new Date()
        },

        askQuestionModal() {
            this.askQuestionModalRequest = (new Date()).getTime()
        },


        async submitQuestion() {
            const attr = {
                seo_url: this.$route.params.slug,
                description: this.postQuestion
            }

            await this.$store.dispatch('product/fetchStoreQuestion', attr)

            if (this.$store.state.product.STORE_QUESTION.success) {
                //  this.questionModalRequest = new Date()
                this.questionSuccess = true
                this.postQuestion = ''
                const self = this

                setTimeout(function () {
                    self.questionSuccess = null
                }, 10000)
            }

        },

        makeCommentModal() {
            this.makeCommentModalRequest = (new Date()).getTime()
        },

        async goLoginPage() {
            this.askQuestionModalRequest = (new Date()).getTime()
            this.$router.push({ path: '/user/login' })
        },

        fetchData() {
            // await this.$store.dispatch('product/fetchRecentViewProducts',{})
            // this.recent_view_products = this.$store.state.product.RECENT_VIEW_PRODUCTS.products
        }

    },

    // async fetch(){
    //   await this.$store.dispatch('product/fetchSimpleInfo',{
    //     seo_url: this.$route.params.slug
    //   })

    //   this.simple_info = this.$store.state.product.SIMPLE_INFO.product
    // },
    async fetch() {
        this.loading = true
        const self = this

        await this.$store.dispatch('product/fetchSimpleInfo', {
            seo_url: this.$route.params.slug,
            ...this.$route.query
        })

        this.simple_info = this.$store.state.product.SIMPLE_INFO.product

        if (typeof this.simple_info.id == 'undefined') {
            this.loading = false
            return this.$nuxt.error({ statusCode: 404, message: 'Product not found' })
        }


        //   schema
        this.schema['productID'] = this.simple_info.sku
        this.schema['sku'] = this.simple_info.sku
        this.schema['name'] = this.simple_info.title
        this.schema['description'] = this.simple_info.description
        this.schema['image'] = 'https://admin.masterleatherbd.com/' + this.simple_info.image ?? null
        this.schema['url'] = 'https://masterleatherbd.com/product/' + this.simple_info.seo_url
        this.schema.offers[0]['price'] = this.simple_info.price_now
        this.schema.offers[0]['url'] = 'https://masterleatherbd.com/product/' + this.simple_info.seo_url

        // console.log(this.simple_info,this.schema)


        await this.$store.dispatch('product/fetchInfo', {
            seo_url: this.$route.params.slug,
            ...this.$route.query
        })

        this.info = this.$store.state.product.INFO.product
        this.pathList = [{
            link: this.info.seo_url,
            label: this.info.title
        }]

        this.loading = false

        //   await this.$store.dispatch('common/fetchEmiWidget',{
        //     seo_url: this.$route.params.slug,
        //     ...this.$route.query,
        //     id: 17
        //   })

        //   this.emi_widget = this.$store.state.common.EMI_WIDGET.widget


        //   await this.$store.dispatch('product/fetchProductSetVariation',{
        //       seo_url: this.$route.params.slug
        //   })

        //   this.variations = this.$store.state.product.PRODUCT_VARIATION.productVariationsList

        this.loading = false

    },

    created() {
        const self = this

        const product = self.$store.state.product.INFO.product
        const simple_product = self.$store.state.product.SIMPLE_INFO.product

        // Check if both product and simple_product are available
        if (product?.id && simple_product?.price_now) {

            const dataOfLayer = {
                event: 'view_item',
                ecommerce: {
                    value: parseFloat(simple_product.price_now),
                    currency: 'BDT',
                    items: [{
                        item_name: product.title,
                        item_id: product.product_code?.toString() || '',
                        affiliation: 'MasterLeatherBD',
                        currency: 'BDT',
                        price: parseFloat(simple_product.price_now),
                        item_brand: 'MasterLeatherBD',
                        item_category: product.categories?.[0]?.term_name || 'Furniture',
                        quantity: 1,
                        discount: 0.00,
                        index: 0,
                        item_variant: 'regular',
                        location_id: 'L_12345',
                        item_list_id: product.product_code?.toString() || '',
                        item_list_name: product.sub_title || '',
                        coupon: ''
                    }]
                }
            }

            // Only push if $gtm is defined and push is a function
            if (self.$gtm && typeof self.$gtm.push === 'function') {
                self.$gtm.push(dataOfLayer)
            } else {
                console.warn('$gtm is not available — skipping GTM push.')
            }

            // Load reviews
            this.allReviewShow()
        } else {
            console.warn('Product data not fully available in created hook.')
        }
    }

}
</script>

<style>
@import "../../assets/css/product_reviews.css";

/* zoomer  */
.breadcrumb-wrapper {
    margin-bottom: 1rem;
}

.zoomer-base-container.scroller-at-bottom {
    height: 100% !important;
    /* border: 1px solid #ddd; */
    padding: 3px;
    width: 100% !important;
    margin: auto;
}

.zoomer-base-container .preview-box {
    width: 100%;
    max-height: 100% !important;
}

.zoomer-base-container .thumb-list {
    height: auto !important;
    ;
    width: 100% !important;
    padding: 3px;
}

.zoomer-base-container .thumb-list img {
    margin-right: 3px;
    max-width: 100px;
}

.zoomer-base-container .thumb-list img:last-child,
.zoomer-base-container .thumb-list img:first-child {
    max-width: 60px;
}

.zoomer-base-container .thumb-list img:last-child {
    right: 0;
}

.pd-pg-details-tab {
    margin-top: 30px;
}

.pd-pg-details-tab li {
    list-style: none;
}

.responsive-image.choosed-thumb {
    border: 1px solid #0058a3;
    box-shadow: none !important;
    padding: 2px;
}

.zoomer-bounding-box {
    opacity: 0.4;
    background-color: white;
    border: 1px solid rgb(0, 0, 0);
    z-index: 4;
}

#zoomer-pane-container {
    max-width: 100% !important;
    height: 100% !important;
    top: 2px !important;
    left: 100% !important;
    border: 1px solid #ddd;
    padding: 3px;
    width: 100% !important;
    max-height: 82%;
}

.single-page-quality_img {
    margin-bottom: 20px;
}

.position-sticky {
    top: 0;
    z-index: 3;
}

/*single product page*/
.single-page-quality_img {
    margin-bottom: 20px;
}

.pd-pg-content-text {
    margin-bottom: 3.75rem;
    max-width: 33.125rem;
    margin-top: 3rem;
    overflow: hidden;
}

.pd-pg-content-text p {
    font-size: .875rem;
    line-height: 1.71429;
    padding-bottom: 1.25rem;
    margin-bottom: 0;
    color: #666
}

.pd-pg-content-text span {
    display: block;
    font-size: .75rem;
    padding-bottom: .3125rem;
}

.pd-pg-content-text span.pd-token-sl {
    background: #000;
    font-weight: bold;
    background: #f5f5f5;
    padding: .0625rem .625rem;
    display: inline-block;
}

.pd-country-origin span {
    display: inline-block;
    float: left;
    font-weight: bold;
}

.pd-country-origin .inform-icon {
    height: 21px;
    width: 21px;
    position: relative;
    display: inline-block;
    padding-bottom: 0;
    opacity: 1;
    border-bottom: 1px dotted #000;
    background: center no-repeat #fff;
}

.tooltip .tooltiptext {
    visibility: hidden;
    width: 550px;
    background-color: #dfdfdf;
    color: #000;
    text-align: center;
    padding: 5px 15px;
    border-radius: 6px;
    bottom: 100%;
    margin-left: -145px;
    position: absolute;
    z-index: 99999;
    overflow: auto;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
}

/*pd-pg-details-tab*/

.pd-pg-details-tab button {
    display: flex;
    background: none;
    overflow: hidden;
    border: 0;
    cursor: pointer;
    flex-direction: row;
    padding: 1.25rem 0;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    min-height: 5.625rem;
    color: #484848;
    text-decoration: none;
    border-top: 1px solid #dfdfdf;
    font-weight: bold;
}

.pd-pg-details-tab button:hover .pd-details-title .title {
    text-decoration: underline;
}

.pd-pg-details-tab button .pd-details-title {
    text-align: left;
    color: #111;
    font-size: .875rem;
    line-height: 1.57143;
    display: block;
}

.pd-details-title .product-review-star {
    margin-top: 0;
}

/*similar products wrap*/
.similar-product-wrap {
    margin-top: 2.5rem;
}

.similar-product-scroll_slide .products-offers-post {
    flex-basis: calc(23.07692% - 1.25rem);
    flex-shrink: 0;
    max-width: calc(23.07692% - 1.25rem);
}

.similar-product-wrap .pd-offer-img {
    height: 166px;
    overflow: hidden;
}

/*single product banner wrap */
.singel-pd-banr-wrap {
    display: flex;
}

.singel-pd-banr-wrap .singel-pd-banr_left {
    width: 50%;
}

.singel-pd-banr-wrap .singel-pd-banr_right {
    width: 50%;
    background: #283E80;
    padding-top: 2.5rem;
    padding: 1.875rem;
    padding-right: 3.75rem;
}

.singel-pd-banr_right p {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #fff;
    padding-bottom: 10px;
}

.singel-pd-banr_right h3 {
    color: #fff;
    font-size: 1.375rem;
    line-height: 1.45455;
    font-weight: bold;
}

.single-pd-banr_right_btn {
    bottom: 3%;
}

.singel-pd-banr-wrap:hover .singel-pd-banr_right h3,
.singel-pd-banr-wrap:hover .singel-pd-banr_right p {
    text-decoration: underline;
}

/*single page product info*/
.single-pg-product-info {
    padding: 0;
    position: sticky;
    align-self: flex-start;
    top: 20px;
    display: flex;
}

.pd-offer-text.single-pg-pd-info_text {
    margin-top: 0;
    margin-bottom: 2.5rem;

}

.pd-offer-text.single-pg-pd-info_text .pd_name_highlight {
    display: inline-block;
    font-size: 1.375rem;
}

.pd-offer-text.single-pg-pd-info_text .pd_highlight_price {
    display: inline-block;
    float: right;
}

.single-pag-pd-variant_info {
    border-top: 1px solid #dfdfdf;
    padding: 1.25rem 0;
}

.pd-variant_info_button {
    display: flex;
}

.pd-variant_info_button_text {
    width: 80%;
}

.pd-variant_info_button_text .title {
    font-weight: bold;
    display: block;
    color: #111
}

.pd-variant_info_button_text .sub_title {
    color: #484848;
    font-size: .875rem;
}

.pd-variant_info_icon {
    width: 20%;
    float: right;
    text-align: right;
}

.pd-variant_info_icon i {
    font-size: 13px;
    margin-top: 16px;
    color: #333;
}

.pd-variant_info_button:hover .pd-variant_info_button_text .title {
    text-decoration: underline;
}

.pd-variant_info_button:hover .pd-variant_info_icon i {
    color: #000;
}

.single-pd-variant_info_img {
    display: flex;
    margin-right: -.3125rem;
    margin-left: -.3125rem;
    flex-wrap: wrap;
}

.variant_info_img_post {
    position: relative;
    height: 4.375rem;
    width: 4.375rem;
    padding: .625rem;
    margin-right: .3125rem;
    margin-bottom: .625rem;
    transition: box-shadow .2s ease-in-out;
    transition: box-shadow .2s ease-in-out, -webkit-box-shadow .2s ease-in-out;
    border-radius: 4px;

}

.variant_info_img_post:hover,
.variant_info_img_post.selected {
    box-shadow: inset 0 0 0 2px #111
}

.product-delivery-check label {
    font-size: 0.875rem;
    margin-top: 9px;
    color: #000;
}

.product-delivery-check input {
    width: 74px;
    height: 35px;
    border: none;
    margin: 0 0% 0 2%;
    padding: 0 8px 0 8px;
    border-bottom: 2px solid;
}

.product-delivery-check label,
.product-delivery-check input,
.product-delivery-check button {
    display: inline;
}

.addTo_cart {
    /* margin-top: 20px;
  display: flex; */
}

.addTo_cart_button {
    font-size: .875rem;
    line-height: 1.42857;
    border-radius: 52px;
    padding: 0 2rem;
    border: 1px solid #dfdfdf;
    justify-content: center;
    align-items: center;
    height: 3.5rem;
    display: block;
    width: 100%;
    margin-top: 30px
}

.addTo_cart_button i {
    margin-right: 15px;
}

.addTo_cart_button:hover {
    border-color: #929292
}

.ul_widget {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.ul_widget_item {
    font-size: 14px;
    line-height: 1.47em;
    color: #030708;
}

/*single page recent product*/
.single-pg-rcnt-pd-content {
    display: flex;
    margin-right: -0.625rem;
    margin-left: -0.625rem;
}

.rent-pd-content-post {
    flex-basis: calc(10% - 1.25rem);
    flex-shrink: 0;
    max-width: calc(10% - 1.25rem);
    margin-left: .625rem;
    margin-right: .625rem;
}

/*ingle page wrapper 2*/
.single-page_wrapper_2 .product-choose_box {
    text-align: center;
    padding-right: 35px;
    border-right: 1px solid #e0e0e0;
    float: right;
    margin: 0 0 70px 0;
}

.single-page_wrapper_2 .product-choose_box label {
    text-align: center;
    font-size: #616161;
    padding-bottom: 10px;
    font-size: 15px;
}

.single-page_wrapper_2 .product-choose_box ul li {
    margin: 0 15px;
    display: inline-block;
    position: static;
}

.single-page_wrapper_2 .product-choose_box ul li a {
    display: block;
    touch-action: manipulation;
    cursor: pointer;
}

.single-page_wrapper_2 .product-choose_box ul li a span.color-box {
    width: 43px;
    border-radius: 50%;
    height: 43px;
    border: 2px solid #fff;
    display: inline-block;
    transition: all .5s;
}

.single-page_wrapper_2 .product-choose_box ul li a span.color-box:hover,
.single-page_wrapper_2 .product-choose_box ul li a span.color-box.active {
    border: 2px solid #827f7e
}

.single-page_wrapper_2 .product-choose_box ul li a span.color-box img {
    border-radius: 50%
}

/*product service info*/

.product-info_tabs .nav-pills .nav-link.active,
.nav-pills .show>.nav-link,
.product-info_tabs .nav-link:hover {
    color: #3B3A3A;
    background-color: transparent;
}

/* modal */
li {
    list-style-type: none;
}

.cart-modal_wrap .modal-dialog {
    max-width: 800px;
}

h4.title-area-cart-v {
    font-size: 16px;
    margin-bottom: 19px;
}

.cart-img a img {
    width: 210px !important;
    border: 0px solid #EEEE;
    border-radius: 10px;
    padding: 10px;
}

.cart-prouct-title h1 {
    font-size: 19px;
    margin-bottom: 0.5rem;
}

.product-label .price {
    font-weight: bold;
    color: #000;
}

.title-area-cart {
    border-bottom: 1px solid #EEE;
    margin: 0;
    padding-bottom: 10px;
    margin-bottom: 14px;
    font-size: 16px;
}

.col-md-12.product_btnd {
    margin-top: 15px;
}

span.badge {
    float: right;
    font-weight: bold;
    color: #000;
}

li.top-banner-cart {
    font-weight: bold;
    border-top: 1px solid #EEE;
    padding-top: 7px;
    list-style: none;
    margin-top: 4px;
}

li.top-banner-cart span.badge {
    font-weight: bold;
    font-size: 15px;
    color: #666;
}

a.bk-btnc.text-right {
    color: red;
    padding-right: 15px;
    margin-top: 1px;
    display: inline-block;
    font-size: 14px;
}

a.bk-btnc.text-right i {
    margin-right: -4px;

}

a.view_one {
    padding: 4px 15px;
    font-size: 14px;
}

.customer-query-btn {
    float: right;
}

.customer-query-btn button,
.customer-feedback-wrapper button {
    border: 0;
    padding: 5px 15px;
    font-size: 14px;
    border-radius: 2px;
    font-weight: 500;
    margin-top: -5px;
    display: block;
}

.customer-feedback-wrapper .form-control {
    margin-bottom: 15px;
}

.customer-feedback-wrapper input {
    margin-bottom: 15px;
    height: 40px
}

.customer-feedback-wrapper textarea {
    height: 200px;
}


.single-pg-product-info .product-price-list {
    padding: 10px 0;
}

.single-product-info_left {
    width: 90%;
}

.single-product-share {
    width: 10%;
    float: right;
    padding-left: 0px;
    text-align: right;
}

.product-share-icon i {
    width: 45px;
    height: 45px;
    line-height: 42px;
    border-radius: 50%;
    text-align: center;
    border: 1px solid rgba(3, 7, 8, 0.4);
    color: #030708;
    display: block;
    font-size: 22px;
    transition: all 0.5s ease;
}

.product-share-icon i:hover {
    background: #000;
    color: white;
}

.product-payment_info {
    margin-top: 40px;
}

.product-payment_title {
    font-size: 16px;
    line-height: 1.25em;
    color: #030708;
}

.product-payment_info ul {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.product-payment_info ul::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.product-payment_info ul {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

.product-payment_info ul li {
    margin-right: 7px;
    margin-top: 20px;
}

.product-payment_info ul li img {
    width: 50px;
}

.product-share-icon .dropbtn {
    background: transparent;
    border: 0;
}

.product-share-icon .dropdown {
    position: relative;
    display: inline-block;
}

.product-share-icon .dropdown-content {
    display: none;
    position: absolute;
    background: transparent;
    min-width: 160px;
    z-index: 1;
    transition: all 2s linear;
}

.product-share-icon .dropdown-content ul li {
    margin-top: 7px;
    cursor: pointer;
}

.product-share-icon .dropdown:hover .dropdown-content {
    display: block;
}


/* Product Review */
.review-box .card {

    border: none;
    box-shadow: 5px 6px 6px 2px #e9ecef;
    border-radius: 0px;
    border-left: 3px solid #cdcdcd;

}


.review-box .dots {

    height: 4px;
    width: 4px;
    margin-bottom: 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
}

.review-box .badge {

    padding: 7px;
    padding-right: 9px;
    padding-left: 16px;
    box-shadow: 5px 6px 6px 2px #e9ecef;
}

.review-box .user-img {

    margin-top: 4px;
}

.review-box .check-icon {

    font-size: 17px;
    color: #c3bfbf;
    top: 1px;
    position: relative;
    margin-left: 3px;
}

.review-box .form-check-input {
    margin-top: 6px;
    margin-left: -24px !important;
    cursor: pointer;
}

.review-box .form-check-input:focus {
    box-shadow: none;
}

.review-box .icons i {
    margin-left: 8px;
}

.review-box .rating span {
    color: #eda92c;
}

.review-box .reply {
    margin-left: 0px;
}

.review-box .reply small {
    color: #b7b4b4;
}
</style>
