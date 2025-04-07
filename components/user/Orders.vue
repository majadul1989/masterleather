<template>
    <div>
      <!-- Review Modal -->

      <modal class="cart-modal_wrap" key="reviewModal" :modalRequest="reviewModal" modal_title="Write a Review">
          <div>
            <form action="javascript:void(0)" @submit="reviewModalSubmit" method="post">
              <div class="bg-light p-2">

              <div class="align-items-start">
                <input type="hidden" name="" v-model="reviewInput.product_id">
                <textarea required class="form-control ml-1 shadow-none textarea" name="review-textarea" v-model="reviewInput.textarea"></textarea>
              </div>
              <div class="rating ml-1">
                <input type="radio" required name="rating" value="5" v-model="reviewInput.rating" id="5"><label for="5">☆</label>
                <input type="radio"  required name="rating" value="4" v-model="reviewInput.rating" id="4"><label for="4">☆</label>
                <input type="radio" required name="rating" value="3" v-model="reviewInput.rating" id="3"><label for="3">☆</label>
                <input type="radio" required name="rating" value="2" v-model="reviewInput.rating" id="2"><label for="2">☆</label>
                <input type="radio"  required name="rating" value="1" v-model="reviewInput.rating" id="1"><label for="1">☆</label>
              </div>

              <div class="mt-2 text-right">
                <button class="btn btn-dark btn-sm shadow-none" type="submit">Submit</button>
                <button class="btn btn-outline-secondary btn-sm ml-1 shadow-none" @click="reviewModalClose" type="button">Cancel</button>
              </div>
            </div>
            </form>
          </div>
      </modal> <!-- End -->

      <!-- Complaint Modal -->
      <modal class="cart-modal_wrap" key="complaintModal" :modalRequest="complaintModal" modal_title="Any complaint against the order">
        <div>
          <form action="javascript:void(0)" @submit="orderComplaintModalSubmit" method="post">
            <div class="align-items-start">
              <input type="hidden" name="" v-model="complaintInput.order_id">
              <textarea required class="form-control ml-1 shadow-none textarea" name="review-textarea" v-model="complaintInput.textarea"></textarea>
            </div>
            <div class="mt-2 text-right">
              <button class="btn btn-dark btn-sm shadow-none" type="submit">Submit</button>
              <button class="btn btn-outline-secondary btn-sm ml-1 shadow-none" @click="complaintModalClose" type="button">Cancel</button>
            </div>
          </form>


          <div>
            <h3>Recently Submitted</h3>
            <div class="mt-2" v-for="(data, key) in showUserOrderComplaintData">
              <div class="card p-2 mb-2">
                {{data.message}}
              </div>
            </div>
          </div>
        </div>
      </modal> <!-- End -->

        <div class="lzd-playground-right">
            <div class="section-title">
                <div>
                  <h2 class="title">My Orders </h2>
                </div>
                <div v-if="successMsg" class="alert alert-success">{{successMsg}}</div>
                <div v-if="errorMsg"  class="alert alert-danger">{{errorMsg}}</div>
            </div>
            <div v-if="!loading && !$route.query.order_id && orders.length > 0 && ordersChunk[activeIndex]" class="my-order">



              <table class="table mb-0 text-nowrap table-responsive-md">
                <!-- Table Head -->
                <thead class="table-light">
                <tr>
                  <th class="border-0">Order</th>
                  <th class="border-0">Date</th>
                  <th class="border-0">Items</th>
                  <th class="border-0">Status</th>
                  <th class="border-0">&nbsp;</th>
                </tr>
                </thead>
                <tbody>
                <!-- Table body -->
                <tr v-for="(order,key) in ordersChunk[activeIndex]" :key="key">
                  <td class="align-middle border-top-0">
                    #{{order.id}}
                  </td>
                  <td class="align-middle border-top-0">
                    {{parseDate( order.order_date )}}
                  </td>
                  <td class="align-middle border-top-0">
                    {{order.qty}}
                  </td>
                  <td class="align-middle border-top-0">
                    {{order.od_status}}
                  </td>

                  <td class="text-muted align-middle border-top-0">
                    <nuxt-link :to="'?order_id='+order.id" class="font-weight-normal text-primary">
                      <i class="fa fa-eye font-weight-normal" title="Manage"></i>
                    </nuxt-link>
                  </td>
                </tr>

                </tbody>
              </table>



                <div>
<!--                  <div v-for="(order,key) in ordersChunk[activeIndex]" :key="key" class="order-list-parent card card_25g8 p-3 m-3">-->

<!--                    <div class="row order-list-parent-header border-bottom p-2 rounded-2">-->

<!--                      <div class="col-10">-->
<!--                        <div class="font-weight-bold text-muted">-->
<!--                          Order #{{order.id}}-->
<!--                        </div>-->
<!--                        <span class="order-date text-muted">-->
<!--                                Placed on {{parseDate( order.order_date )}}-->
<!--                            </span>-->
<!--                      </div>-->
<!--                      <div class="col-2">-->
<!--                           <span class="link pull-right pr-5">-->
<!--                               <nuxt-link :to="'?order_id='+order.id" class="font-weight-bold">Manage</nuxt-link>-->

<!--                           </span>-->
<!--                      </div>-->
<!--                    </div>-->

<!--                    <div v-if="order.products" class="order-product-list">-->

<!--                      <div v-for="(product,key) in order.products" class="row m-2" :key="key">-->

<!--                        <div class="col-8 col-md-6 d-flex">-->
<!--                                <span class="image d-inline">-->
<!--                                    <img v-if="product.first_image" width="100px" :src="'https://admin.masterleatherbd.com/'+product.first_image.full_size_directory"/>-->
<!--                                </span>-->
<!--                          <span class="product-title d-inline">-->
<!--                                    <nuxt-link :to="'/product/'+product.product.seo_url">{{product.product.title}}</nuxt-link>-->
<!--                                </span>-->


<!--                        </div>-->

<!--                        <div class="col-4 col-md-6 row">-->
<!--                          <div class="qty-area col-12 col-lg-4">-->
<!--                                    <span class="qty font-weight-bold text-muted">-->
<!--                                        Qty:-->
<!--                                    </span>-->
<!--                            <span class="qty-number text-muted">-->
<!--                                        {{product.qty}}-->
<!--                                    </span>-->
<!--                          </div>-->

<!--                          <div class="col-12 col-lg-4 text-muted text-uppercase font-12">-->
<!--                            {{product.od_status}}-->
<!--                            <div>-->
<!--                              <a href="javascript:void(0)" class="text-primary text-uppercase font-weight-bold" @click="reviewModalLoad(product.product.id)">-->
<!--                                <i class="far fa-heart"></i>Write a Review-->
<!--                              </a>-->
<!--                            </div>-->
<!--                          </div>-->

<!--                          <div class="col-12 col-lg-4 font-12">-->
<!--                            {{parseDate( product.updated_at )}}-->
<!--                          </div>-->


<!--                        </div>-->



<!--                      </div>-->

<!--                    </div>-->

<!--                  </div>-->
                </div>



                <div class="pagination mb-5">

                    <nav v-if="ordersChunk.length > 2" aria-label="..." class="mt-3">
                        <ul class="pagination">
                            <li class="page-item disabled">
                                <a class="page-link" href="javascript:void(0)" tabindex="-1">Previous</a>
                            </li>
                            <li v-for="(index,xkey) in ordersChunk" :key="xkey" class="page-item" :class="[xkey==activeIndex?'active':'']">
                                <a class="page-link" href="javascript:void(0)" @click="updateActiveIndex(xkey)">
                                    {{xkey+1}}
                                    <span class="sr-only" v-if="xkey==activeIndex">(current)</span>
                                </a>
                            </li>
                            <li class="page-item">
                            <a class="page-link" href="javascript:void(0)">Next</a>
                            </li>
                        </ul>
                    </nav>

                </div>

            </div>
            <!-- <div class="text-center" v-else-if="!loading && orders.length == 0">
                    No orders found.
            </div> -->
            <div class="text-center" v-else>
                <loading :loading="loading" notFoundTxt="You have not order anything yet." :empty="!loading && orders.length == 0"/>
            </div>



            <div v-if="$route.query.order_id" class="order-details">


                <!-- Nipun -->
              <div class="row">
                <div v-if="order_view && order_view.length > 0" class="col-lg-3">
                  <div class="mb-2">
                    <div class="card p-3 bg-gray">

                      <div class="shipping-details pl-0">
                        <b class="text-muted">Order ID</b>: #{{$route.query.order_id}} <br/>
                        <b class="text-muted">Order Date</b>:  {{parseDate( order_view[0].order_date )}} <br/>
                        <b class="text-muted">Order Status</b>:  {{order_view[0].od_status }} <br/>
                        <b class="text-muted">Payment Method</b>:  {{order_view[0].payment_method}} <br/>
                      </div>
                    </div>
                  </div>
                  <div class="xcol-12 mb-2">

                    <div class="card p-3 bg-gray ">
                      <strong class="text-muted font-weight-small">Shipping Address</strong>

                      <div class="shipping-details pl-0">
                        <b class="text-muted font-12">Name</b>: {{order_view[0].customer_name}} <br/>
                        <b class="text-muted font-12">Mobile</b>: {{order_view[0].phone}} <br/>
                        <b class="text-muted font-12">Emergency Mobile</b>: {{order_view[0].emergency_phone}} <br/>
                        <b class="text-muted font-12">Customer Email</b>: {{order_view[0].email}} <br/>
                        <b class="text-muted font-12">Address</b>: {{order_view[0].address}} <br/>
                        <span v-if="order_view[0].different_address">
                                                <b class="text-muted font-12">Address 2</b>: {{order_view[0].different_address}} <br/>
                                            </span>
                        <span v-if="order_view[0].district">
                                                <b class="text-muted font-12" v-if="order_view[0].district">District</b>: {{order_view[0].district}} <br/>
                                            </span>


                      </div>
                    </div>

                  </div>

                  <div class="xcol-12 mb-2">

                    <div class="card p-3 bg-gray">
                      <strong class="text-muted font-weight-small">Billing Address</strong>
                      <div class="shipping-details pl-0">
                        <b class="text-muted font-12">Name</b>: {{order_view[0].customer_name}} <br/>
                        <b class="text-muted font-12">Mobile</b>: {{order_view[0].phone}} <br/>
                        <b class="text-muted font-12">Emergency Mobile</b>: {{order_view[0].emergency_phone}} <br/>
                        <b class="text-muted font-12">Customer Email</b>: {{order_view[0].email}} <br/>
                        <b class="text-muted font-12">Address</b>: {{order_view[0].address}} <br/>
                        <span v-if="order_view[0].different_address">
                                                <b class="text-muted font-12">Address 2</b>: {{order_view[0].different_address}} <br/>
                                            </span>
                        <span v-if="order_view[0].district">
                                                <b class="text-muted font-12" v-if="order_view[0].district">District</b>: {{order_view[0].district}} <br/>
                                            </span>


                      </div>
                    </div>

                  </div>
                </div>

                <div v-if="order_view && order_view.length > 0" class="col-lg-9">
                  <div class="mb-2">
                    <span  v-if="order_view[0].od_status != 'done'">
                        <a href="javascript:void(0)" @click="wantToKnowOrderUpdate($route.query.order_id)" class="btn bn-sm btn-outline-success py-0">Notify Me Know Order Update</a>
                    </span>
                    <span>
                      <a href="javascript:void(0)" @click="complaintModalLoad($route.query.order_id)" class="btn bn-sm btn-outline-dark py-0">Complaint</a>
                    </span>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <table class="table mb-0 text-nowrap table-responsive-md">
                        <!-- Table Head -->
                        <thead class="table-light">
                        <tr>
                          <th class="border-0">&nbsp;</th>
                          <th class="border-0">Order Status</th>
                          <th class="border-0">&nbsp; Product Name</th>
                          <th class="border-0">&nbsp; Product Code</th>
                          <th class="border-0">Date</th>
                          <th class="border-0">Qty</th>
                          <th class="border-0">Amount</th>
                          <th class="border-0">Total</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(product,key) in order_view[0].products" :key="key">
                          <td class="valign-middle">
                            <a href="javascript:void(0)" class="text-warning  font-weight-bold" @click="reviewModalLoad(product.product.id)">
                              <i class="far fa-star" title="Write a Review"></i>
                            </a>
                          </td>

                          <td class="valign-middle">
                            {{product.od_status}}
                          </td>

                          <td class="valign-middle">
                            <img v-if="product.first_image" width="50px" :src="'https://admin.masterleatherbd.com/'+product.first_image.full_size_directory"/>
                            <nuxt-link :to="'/product/'+product.product.seo_url">{{product.product.title}}</nuxt-link>
                          </td>
                          <td class="valign-middle">
                            {{product.product_code}}
                          </td>
                          <td class="valign-middle">
                            {{parseDate( product.order_date )}}
                          </td>
                          <td class="valign-middle">
                            {{product.qty}}
                          </td>
                          <td class="valign-middle">
                            {{money_sign}} {{product.local_purchase_price}}
                          </td>
                          <td class="valign-middle">
                            {{money_sign}} {{product.qty * product.local_purchase_price}}
                          </td>


                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="col-lg-9 mt-2">

                    </div>
                    <div class="col-lg-3 mt-2">

                      <div class="card p-3 mb-2">
                        <div class="shipping-details pl-0">
                          <div class="d-flex justify-content-between">
                            <div class="span"><b class="text-muted font-12">Subtotal</b></div>
                            <div class="span">
                              {{money_sign}} {{parseFloat( order_view[0].total_amount ).toLocaleString()}}
                            </div>
                          </div>

                          <div class="d-flex justify-content-between">
                            <div class="span"><b class="text-muted font-12">Discount</b></div>
                            <div class="span">
                              {{money_sign}} 0
                            </div>
                          </div>

                          <div class="d-flex justify-content-between">
                            <div class="span"><b class="text-muted font-12">Delivery fee</b></div>
                            <div class="span">
                              {{money_sign}} {{order_view[0].delivery_fee ? parseFloat(order_view[0].delivery_fee).toLocaleString() : 0}}
                            </div>
                          </div>
                          <hr class="mb-1">
                          <div class="d-flex justify-content-between">
                            <div class="span"><b class="text-muted">Total</b>:</div>
                            <div class="span">
                              {{money_sign}} {{parseFloat(order_view[0].grand_total).toLocaleString()}}
                            </div>
                          </div>

                          <div class="d-flex justify-content-between">
                            <div class="span"><b class="text-muted ">Amount Paid</b>:</div>
                            <div class="span">
                              {{money_sign}} {{  order_view[0].amount_paid ? parseFloat( order_view[0].amount_paid ).toLocaleString() : 0}}
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>







                <!-- End Nipun -->
                <div>
<!--                    <div v-if="order_view && order_view.length > 0" class="order-list-parent card card_25g8 p-3 m-3 d-none">-->
<!--    -->
<!--                        <div class="row order-list-parent-header border-bottom p-2 rounded-2">-->
<!--                            <div class="col-10">-->
<!--                                <div class="font-weight-bold text-muted">-->
<!--                                    Order #{{$route.query.order_id}}-->
<!--                                </div>-->
<!--                                <span class="order-date text-muted">-->
<!--                                    Placed on {{parseDate( order_view[0].order_date )}}-->
<!--                                </span>-->
<!--                            </div>-->
<!--                            <div class="col-2">-->
<!--                               &lt;!&ndash; <span class="link pull-right pr-5">-->
<!--                                   <nuxt-link :to="'?order_id='+order.id" class="font-weight-bold">Manage</nuxt-link>-->
<!--                               </span> &ndash;&gt;-->
<!--                            </div>-->
<!--                        </div>-->
<!--    -->
<!--                    </div>-->
<!--    -->
<!--    -->
<!--                    <div v-if="order_view && order_view.length > 0" class="order-list-parent card card_25g8 p-3 m-3 d-none">-->
<!--    -->
<!--                        <div v-if="order_view[0].products" class="order-product-list">-->
<!--    -->
<!--                            <div v-for="(product,key) in order_view[0].products" class="row m-2" :key="key">-->
<!--    -->
<!--                                <div class="col-8 col-md-6 d-flex">-->
<!--                                    <span class="image d-inline">-->
<!--                                        <img v-if="product.first_image" width="100px" :src="'https://admin.masterleatherbd.com/'+product.first_image.full_size_directory"/>-->
<!--                                    </span>-->
<!--                                    <span class="product-title d-inline">-->
<!--                                        <nuxt-link :to="'/product/'+product.product.seo_url">{{product.product.title}}</nuxt-link>-->
<!--                                    </span>-->
<!--                                </div>-->
<!--    -->
<!--                                <div class="col-4 col-md-6 row">-->
<!--                                    <div class="qty-area col-12 col-lg-4">-->
<!--                                        <span class="qty font-weight-bold text-muted">-->
<!--                                            Qty:-->
<!--                                        </span>-->
<!--                                        <span class="qty-number text-muted">-->
<!--                                            {{product.qty}}-->
<!--                                        </span>-->
<!--                                    </div>-->
<!--    -->
<!--                                    <div class="col-12 col-lg-4 text-muted text-uppercase font-12">-->
<!--                                        {{product.od_status}}-->
<!--                                    </div>-->
<!--    -->
<!--                                    <div class="col-12 col-lg-4 font-12">-->
<!--                                        {{parseDate( product.updated_at )}}-->
<!--                                    </div>-->
<!--    -->
<!--    -->
<!--                                </div>-->
<!--    -->
<!--    -->
<!--    -->
<!--                                &lt;!&ndash; <div class="col-6">-->
<!--                                    <span class="image d-inline">-->
<!--                                        <img v-if="product.first_image" width="100px" :src="'https://admin.masterleatherbd.com/'+product.first_image.full_size_directory"/>-->
<!--                                    </span>-->
<!--                                    <span class="product-title d-inline">-->
<!--                                        {{product.product.title}}-->
<!--                                    </span>-->
<!--                                </div>-->
<!--    -->
<!--                                <div class="col-2">-->
<!--                                   <span class="qty-number text-muted">-->
<!--                                       {{money_sign}} {{product.qty * product.local_purchase_price}}-->
<!--                                   </span>-->
<!--                                </div>-->
<!--    -->
<!--                                <div class="col-2">-->
<!--                                   <span class="qty font-weight-bold text-muted">-->
<!--                                       Qty:-->
<!--                                   </span>-->
<!--                                   <span class="qty-number text-muted">-->
<!--                                       {{product.qty}}-->
<!--                                   </span>-->
<!--                                </div>-->
<!--    -->
<!--                                <div class="col-2 text-muted">-->
<!--                                    {{product.od_status}}-->
<!--                                </div>-->
<!--    -->
<!--                                <div class="col-2">-->
<!--                                    {{parseDate( product.updated_at )}}-->
<!--                                </div> &ndash;&gt;-->
<!--    -->
<!--                            </div>-->
<!--    -->
<!--                        </div>-->
<!--    -->
<!--                    </div>-->
<!--    -->
<!--                    <div v-if="order_view && order_view.length > 0" class="mx-auto d-none">-->
<!--    -->
<!--                        <div class="row justify-content-center order-details-summery">-->
<!--    -->
<!--                            <div class="col-12 col-lg-6">-->
<!--    -->
<!--                                <div class="col-12">-->
<!--    -->
<!--                                        <div class="card p-3">-->
<!--                                            <strong class="text-muted font-weight-small">Shipping Address</strong>-->
<!--    -->
<!--                                            <div class="shipping-details pl-0">-->
<!--                                                <b class="text-muted font-12">Name</b>: {{order_view[0].customer_name}} <br/>-->
<!--                                                <b class="text-muted font-12">Mobile</b>: {{order_view[0].phone}} <br/>-->
<!--                                                <b class="text-muted font-12">Emergency Mobile</b>: {{order_view[0].emergency_phone}} <br/>-->
<!--                                                <b class="text-muted font-12">Customer Email</b>: {{order_view[0].email}} <br/>-->
<!--                                                <b class="text-muted font-12">Address</b>: {{order_view[0].address}} <br/>-->
<!--                                                <span v-if="order_view[0].different_address">-->
<!--                                                    <b class="text-muted font-12">Address 2</b>: {{order_view[0].different_address}} <br/>-->
<!--                                                </span>-->
<!--                                                <span v-if="order_view[0].district">-->
<!--                                                    <b class="text-muted font-12" v-if="order_view[0].district">District</b>: {{order_view[0].district}} <br/>-->
<!--                                                </span>-->
<!--    -->
<!--    -->
<!--                                            </div>-->
<!--                                        </div>-->
<!--    -->
<!--                                </div>-->
<!--    -->
<!--                                <div class="col-12 mt-2 mb-2">-->
<!--    -->
<!--                                        <div class="card p-3">-->
<!--                                            <strong class="text-muted font-weight-small">Billing Address</strong>-->
<!--                                            <div class="shipping-details pl-0">-->
<!--                                                <b class="text-muted font-12">Name</b>: {{order_view[0].customer_name}} <br/>-->
<!--                                                <b class="text-muted font-12">Mobile</b>: {{order_view[0].phone}} <br/>-->
<!--                                                <b class="text-muted font-12">Emergency Mobile</b>: {{order_view[0].emergency_phone}} <br/>-->
<!--                                                <b class="text-muted font-12">Customer Email</b>: {{order_view[0].email}} <br/>-->
<!--                                                <b class="text-muted font-12">Address</b>: {{order_view[0].address}} <br/>-->
<!--                                                <span v-if="order_view[0].different_address">-->
<!--                                                    <b class="text-muted font-12">Address 2</b>: {{order_view[0].different_address}} <br/>-->
<!--                                                </span>-->
<!--                                                <span v-if="order_view[0].district">-->
<!--                                                    <b class="text-muted font-12" v-if="order_view[0].district">District</b>: {{order_view[0].district}} <br/>-->
<!--                                                </span>-->
<!--    -->
<!--    -->
<!--                                            </div>-->
<!--                                        </div>-->
<!--    -->
<!--                                </div>-->
<!--    -->
<!--                            </div>-->
<!--    -->
<!--    -->
<!--                            <div class="col-12 col-lg-6">-->
<!--    -->
<!--                                <div class="col-12">-->
<!--    -->
<!--                                        <div class="card p-3">-->
<!--                                            <strong class="text-muted">Total Summary</strong>-->
<!--                                            <div class="shipping-details pl-0">-->
<!--                                                <div class="d-flex justify-content-between">-->
<!--                                                    <div class="span"><b class="text-muted font-12">Subtotal</b>:</div>-->
<!--                                                    <div class="span">-->
<!--                                                        {{money_sign}} {{parseFloat( order_view[0].total_amount ).toLocaleString()}}-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--    -->
<!--                                                <div class="d-flex justify-content-between">-->
<!--                                                    <div class="span"><b class="text-muted font-12">Discount</b>:</div>-->
<!--                                                    <div class="span">-->
<!--                                                        {{money_sign}} 0-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--    -->
<!--                                                <div class="d-flex justify-content-between">-->
<!--                                                    <div class="span"><b class="text-muted font-12">Delivery fee</b>:</div>-->
<!--                                                    <div class="span">-->
<!--                                                        {{money_sign}} {{order_view[0].delivery_fee ? parseFloat(order_view[0].delivery_fee).toLocaleString() : 0}}-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--    -->
<!--                                            </div>-->
<!--                                        </div>-->
<!--    -->
<!--                                </div>-->
<!--    -->
<!--                                <div class="col-12 mt-2">-->
<!--    -->
<!--                                        <div class="card p-3">-->
<!--                                                <div class="d-flex justify-content-between">-->
<!--                                                    <div class="span"><b class="text-muted font-12">Total</b>:</div>-->
<!--                                                    <div class="span">-->
<!--                                                        {{money_sign}} {{parseFloat(order_view[0].grand_total).toLocaleString()}}-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--    -->
<!--                                                <div class="d-flex justify-content-between">-->
<!--                                                    <div class="span"><b class="text-muted font-12">Amount Paid</b>:</div>-->
<!--                                                    <div class="span">-->
<!--                                                         {{money_sign}} {{  order_view[0].amount_paid ? parseFloat( order_view[0].amount_paid ).toLocaleString() : 0}}-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--    -->
<!--                                        </div>-->
<!--    -->
<!--                                </div>-->
<!--    -->
<!--    -->
<!--                            </div>-->
<!--    -->
<!--    -->
<!--                        </div>-->
<!--    -->
<!--                    </div>-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Loading from '../common/Loading.vue'
import Modal from '../common/Modal.vue'

export default {
  components: { Loading, Modal },
    data(){

        return {
            loading: true,
            orders: [],
            activeIndex: 0,
            ordersChunk: [],
            reviewModal : false,
            complaintModal : false,
            showUserOrderComplaintData : false,
            order_id: null,
            order_view: null,
            reviewInput : {
              'product_id' : null,
              'textarea' : null,
              'rating' : 5,
            },
            complaintInput : {
              'order_id' : null,
              'textarea' : null,
            },
            successMsg : false,
            errorMsg : false
        }
    },
    methods: {
        updateActiveIndex(index){
            this.activeIndex = index
        },
        parseDate(date){
                if(date == null){
                    return ''
                }
            const formated = new Date(date)

            return formated.toDateString('DD-MM-YYYY');

            return `${formated.getDay()}-${formated.getMonth()}-${formated.getFullYear()}`;
        },

        loadOrderView(order_id)
        {
            this.order_view = this.orders.length > 0 ? this.orders.filter((item) => item.id == order_id ) : null
        },


        reviewModalLoad(product_id){
          this.reviewModal = new Date()
          this.reviewInput = {
            'product_id' : product_id,
            'review' : null,
            'rating' : null,
          }
        },

        async reviewModalSubmit(){

          let formData = {
            product_id : this.reviewInput.product_id,
            user_id : this.$store.state.auth.user.id,
            review : this.reviewInput.textarea,
            rating :this.reviewInput.rating
          }

          let response = await this.$axios.post('/api/product/single-product-review-store', formData)

          if(response.data.status){
            this.successMsg = response.data.message;
          }else {
            this.errorMsg = response.data.message;
          }
          this.reviewModal = new Date()

        },

        reviewModalClose(){
          this.reviewModal = new Date()
        },


        //Order Update Status
         async wantToKnowOrderUpdate(order_id){
           const formData = {
             notification_for_id: order_id,
             notification_for: 'order',
             user_id : this.$store.state.auth.user.id,
             message: 'want to know order update',
             is_read: 0
           }
           const response = await this.$axios.post('/api/user/want-know-order-update', formData);
            if(response.data.status == 1){
                this.successMsg = 'We will contact you soon.'
            }
        },

        complaintModalLoad(order_id){
          this.complaintModal = new Date()
          this.complaintInput = {
            'order_id' : order_id,
            'review' : null,
          }
          this.userOrderComplaintDataLoad();
        },

      complaintModalClose(){
        this.complaintModal = new Date()
      },

      async orderComplaintModalSubmit(){
        const formData = {
          notification_for_id: this.complaintInput.order_id,
          notification_for: 'order-complaint',
          user_id : this.$store.state.auth.user.id,
          message: this.complaintInput.textarea,
          is_read: 0,
        }
        const response = await this.$axios.post('/api/user/want-know-order-update', formData);
        if(response.data.status == 1){
          this.complaintModalClose()
          this.successMsg = 'We will contact you soon.'
        }
      },

      async userOrderComplaintDataLoad(){
        const formData = {
          notification_for_id: this.$route.query.order_id,
          notification_for: 'order-complaint',
          user_id : this.$store.state.auth.user.id,
        }
        const response = await this.$axios.post('/api/user/get-user--order-complaint', formData);
        console.log(response.data);
        this.showUserOrderComplaintData = response.data.data;
      }

        //Modal

      //End
    },
    watch: {
        '$route': {
            deep: true,
            immediate: true,
            handler(){
                this.loadOrderView(this.$route.query.order_id)
            }
        }
    },
    async created(){
        this.loading = true

        await this.$store.dispatch('user/fetchOrders',{})
        this.orders = this.$store.state.user.ORDERS.orders
        this.ordersChunk = this.arrayChunk(this.orders,10)
        this.loading = false
        // console.log(this.orders)
        this.loadOrderView(this.$route.query.order_id)
    }
}
</script>

<style scoped>
    table{
        margin-bottom:0
    }
    th,td{
        /*text-align:center*/
    }
    thead th {
      padding: 0.5rem;
    }
    tbody tr {
      border: 0 solid;
      border-color: #dfe2e1;
      border-bottom-width: 1px;
      border-top: 0!important;
    }
    .border-top-0 {
      border-top: 0!important;
    }

    .order-details-summery strong{
        font-size: 12px;
    }
    .font-12 {
        font-size: 12px;
    }

    .rating {
      display: flex;
      margin-top: -10px;
      flex-direction: row-reverse;
      margin-left: -4px;
      float: left;
    }

    .rating>input {
      display: none
    }

    .rating>label {
      position: relative;
      width: 19px;
      font-size: 25px;
      color: #eda92c;
      cursor: pointer;
    }

    .rating>label::before {
      content: "\2605";
      position: absolute;
      opacity: 0
    }

    .rating>label:hover:before,
    .rating>label:hover~label:before {
      opacity: 1 !important
    }

    .rating>input:checked~label:before {
      opacity: 1
    }

    .rating:hover>input:checked~label:before {
      opacity: 0.4
    }
    /*  table */
    .table-light, .table-light>td, .table-light>th {
        background-color: #f0f3f2;
    }
    .bg-gray {
      background-color: #f0f3f2;
    }
    .valign-middle {
      vertical-align: middle;
    }

</style>
