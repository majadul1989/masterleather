<template>
    <div>
       <div class="dashboard_profile_wrap d-none">
            <div class="container">
                <div class="dashboard-site_part">
                    <div class="left_side  max-768-none">
                        <SidebarUser/>
                    </div>
                    <div class="sidebaruser-mobile max-768-show">
                        <sidebar-user-mobile/>
                    </div>
                    <div class="right_side" id="user-right-view">
                        <component :is="$route.params.view" />
                    </div>
                </div>
            </div>
       </div>



      <!-- new -->
      <section class="dashboard_profile_wrap">
        <div class="xcontainer py-0">
          <div class="bg-white xshadow rounded-lg d-block d-sm-flex px-lg-5">
            <div class="profile-tab-nav xborder-right ">
<!--              <div class="p-4">-->
<!--                <div class="img-circle text-center mb-3">-->
<!--&lt;!&ndash;                  <img src="img/user2.jpg" alt="Image" class="shadow">&ndash;&gt;-->
<!--                   <h1> <i class="icon-user-o shadow"></i></h1>-->
<!--                </div>-->
<!--                <h3 class="text-center">{{$store.state.auth.user.name}}</h3>-->
<!--              </div>-->
              <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                <div class="left_side  d-lg-none mobile_user_menu pt-4">
                  <SidebarUser/>
                </div>

                <div class="left_side  max-768-none  pt-4">
                  <SidebarUser/>
                </div>
              </div>
            </div>
            <div class="tab-content p-4 p-md-5" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="account" role="tabpanel" aria-labelledby="account-tab">
                <div class="right_side" id="user-right-view">
                  <component :is="$route.params.view" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End -->



    </div>
</template>

<script>

import Dashboard from '~/components/user/Dashboard.vue'
import Profile from '~/components/user/Profile.vue'
import All_address from '~/components/user/Address.vue'
import Cancellations from '~/components/user/Cancellations.vue'
import Orders from '~/components/user/Orders.vue'
import Payment from '~/components/user/Payment.vue'
import Vouchers from '~/components/user/Vouchers.vue'
import Wishlist from '~/components/user/Wishlist.vue'
import Returns from '~/components/user/Returns.vue'
import Reviews from '~/components/user/Reviews.vue'
import SidebarUser from '~/components/user/SidebarUser.vue'
import SidebarUserMobile from '~/components/user/SidebarUserMobile.vue'
export default {
  components: { Dashboard, Profile, All_address, Cancellations, Orders, Payment, Vouchers, Wishlist, Returns, Reviews, SidebarUser, SidebarUserMobile },
//   middleware:


    watch: {

        '$route': {

            deep: true,
            immediate: true,
            handler(){

                if(typeof window != "undefined"){

                    this.$nextTick(() => {
                        //  const ele = document.getElementById('user-right-view')
                        //  ele.scrollIntoView({behavior: "smooth", block: "center"});
                        //  console.log(ele)
                        if(window.innerWidth < 576){

                                    window.scroll({
                                            top: 400,
                                            left: 100,
                                            behavior: 'smooth'
                                    });

                        }


                    })

                // const ele = document.getElementById('user-right-view')

                // ele.scrollIntoView({behavior: "smooth", block: "end"});

                }



            }
        }
    }
}
</script>


<style>


.shadow {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
}

.profile-tab-nav {
  min-width: 335px;
}

.tab-content {
  flex: 1;
}

.form-group {
  margin-bottom: 1.5rem;
}

.nav-pills a.nav-link {
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  border-radius: 0;
  color: #333;
}
.nav-pills a.nav-link i {
  width: 20px;
}

.img-circle img {
  height: 100px;
  width: 100px;
  border-radius: 100%;
  border: 5px solid #fff;
}
.section-title {
  padding-left: 0.25rem!important;
}

.mobile_user_menu {
  margin: 0px 20px;
  text-align: center;
}
.mobile_user_menu ul.nav-container {
  background: #e5e5e5;
  border-radius: 5px;
}
.mobile_user_menu ul li {
  width: 30%;
  display: inline-block;
  text-align: center;
  border: 0px solid #ddd;
  height: 50px;
  vertical-align: middle;
}
.mobile_user_menu ul li i {
  display: block;
}
.mobile_user_menu ul li i {
  display: block;
}
.mobile_user_menu ul li a.group-head{
  border-right: 0px solid #ddd;
  border-top: 0px solid #ddd;
  border-bottom: 0px solid #ddd;
  border-radius: 0;
  padding: 10px 0px;
  display: block;
  color: #5b5b5b;
  font-weight: 600;
  font-size: 13px;
}
</style>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css";
</style>
