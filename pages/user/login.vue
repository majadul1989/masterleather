<template>
  <div>
    <Breadcrumb />
    <div class="container">
      <div class="login_form">
        <div class="row">
          <div class="col-md-4 customer-login m-auto">


            <div class="well">
              <div class="icone-login"><i class="icon-user-o"></i></div>
              <h2>Returning Customer</h2>
              <p v-if="message != null" class="text-danger">{{ message }}</p>
              <div v-if="doLogin=='email'">
                <div class="text-center">
                  <a style="background-color: #ebebeb !important;"
                     class="btn btn-default btn-outline-dark text-dark my-2 text-center" @click="loginMethod('mobile')"
                     href="javascript:void(0)">Login With Mobile Number</a>
                </div>
                <form method="POST" @submit.prevent="userLogin">
                  <div class="form-group">
                    <label for="email" class="title">Email Address</label>
                    <input required="" class="form-control" placeholder="Enter Email" name="email" type="text"
                           id="email" v-model="login.email">
                  </div>
                  <div class="form-group">
                    <label for="password" class="sub_title">Password</label>
                    <input class="form-control" placeholder="Enter Password" name="password" type="password" value=""
                           id="password" v-model="login.password">
                  </div>
                  <nuxt-link to="/user/forgot_password" class="forgot">Forgotten Password</nuxt-link>
                  <div class="bottom-form">
                    <input class="btn btn-default sign-in_btn common-btn_color" type="submit" value="Sign In">
                  </div>
                </form>
              </div>

              <div v-if="doLogin=='mobile'">

                <div class="text-center">
                  <a style="background-color: #ebebeb !important;"
                     class="btn btn-default btn-outline-dark text-dark my-2 text-center" @click="loginMethod('email')"
                     href="javascript:void(0)">Login With Email</a>
                </div>

                <div class="form-group">

                  <form method="POST" @submit.prevent="otpGenerate">
                    <label for="phone" class="title">Mobile Number</label>
                    <div class="input-group mb-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">+88</div>
                      </div>
                      <input required="" class="form-control" placeholder="Enter Mobile Number" name="phone" type="text"
                             id="phone" v-model="loginMobileValue">
                    </div>
                    <div v-if="otpCode.status" class="form-group mb-2">
                      <label for="phone" class="title">Verification Code</label>
                      <input required="" class="form-control" placeholder="Enter Verification Code"
                             name="verification_code" type="text" id="verification_code" v-model="otpCode.input">
                    </div>
                    <div class="bottom-form text-center">
                      <input class="btn btn-default sign-in_btn common-btn_color mb-2" type="submit"
                             :value="otpCode.status ? 'Verify' : 'Send OTP'">
                      <a v-if="otpCode.status" href="javascript:void(0)" class="text-primary font-weight-bold"
                         @click="resendOtpSend()">Don't get the code? Resend OTP</a>
                    </div>
                  </form>
                </div>

              </div>

              <div class="social-login_btn">
                <h5>Or login with </h5>
                <a class="fb-login-btn" href="javascript:void(0)" @click="facebookLogin">
                  <i class="icon-facebook-circled"></i>
                </a>
                <a class="google-login-btn" href="javascript:void(0)" @click="googleLogin">
                  <i class="icon-twitter"></i>
                </a>
              </div>
              <nuxt-link to="/user/registration" class="btn btn-default sign_up ">Sign Up</nuxt-link>
            </div>

            <div v-if></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'

export default {
  auth: 'guest',
  data() {

    return {
      doLogin: 'email',
      message: null,
      loginMobileValue: null,
      otpCode: {
        status: false,
        input: ''
      },
      login: {
        email: '',
        password: '',
        device_name: 'web_browser'
      }
    }
  },

  methods: {
    async userLogin() {
      const self = this
      try {

        let response = await this.$auth.loginWith('local', { data: this.login })
        self.setErrorMessage(response.data.messages)
        // console.log(response.data)
        // if (typeof dataLayer != undefined) {
        //   dataLayer.push({
        //     event: 'login',
        //     loginMethod: 'email'
        //   })
        // }

      } catch (err) {
        console.log(err)
        self.setErrorMessage('Something wrong, please try again')
      }
    },

    async loginMethod(method) {
      this.doLogin = method
    },

    async otpGenerate() {
      let formData = {
        phone: this.loginMobileValue,
        verification_code: this.otpCode.input
      }
      let resposne = await this.$axios.post('/api/auth/otp-generate', formData)
      this.message = resposne.data.messages
      if (resposne.data.status == 2) {
        this.otpCode.status = true
      }
      if (resposne.data.status == 1) {
        await this.$auth.setUserToken(resposne.data.token)
      }
    },

    async resendOtpSend() {
      this.otpCode.input = ''
      await this.otpGenerate()
    },

    async facebookLogin() {
      await this.$auth.loginWith('facebook')
    },


    async googleLogin() {
      await this.$auth.loginWith('google')
    },

    setErrorMessage(msg = null) {
      this.message = msg
      const self = this

      setTimeout(() => {
        self.message = null
      }, 10000)
    }

  },


  mounted() {

  }

}
</script>

<style scoped>
.login_form {
  font-size: 15px;
}

.login_form .col-md-4 {
  flex: 38%;
  max-width: 38%
}

.login_form .well {
  background: #FFF;
  min-height: 295px;
  padding: 20px;
  border: 1px solid #e7e7e7;
  border-radius: 7px 7px 0px 0px;
}

.icone-login i {
  text-align: center;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 1px solid;
  border-radius: 50%;
  font-size: 26px;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -30px;
  background: #FFF;
}

.login_form h2 {
  font-size: 18px;
  padding-bottom: 10px;
  font-weight: bold;
  text-align: center;
  margin-top: 22px;
}

.login_form p {
  text-align: center;
  font-size: 15px;
  margin-bottom: 15px;
  color: #606060;
}

.bottom-form {
  overflow: hidden;
  /* background: #EEE; */
  /* padding: 10px 9px; */
  font-size: 14px;
}

a.forgot {
  display: inline-block;
  text-align: right;
  color: #555;
  font-size: 13px;
  width: 100%;
}

a.forgot:hover {
  color: #000;
}

.pull-right.btn-default.btn {
  font-size: 14px;
}

.btn.btn-default.btn-back-two.pull-right {
  padding: 6px 13px;
}

.sign-in_btn {
  width: 100%;
  max-width: 250px;
  display: block;
  margin: 30px auto;
}

.social-login_btn {
  text-align: center;
}

.social-login_btn h5 {
  font-size: 15px;
  color: #999999;
  margin-bottom: 15px;
}

.social-login_btn a i {
  width: 45px;
  height: 45px;
  line-height: 45px;
  font-size: 20px;
  box-shadow: 0 5px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: inline-block;
  margin-right: 7px;
  transition: all 0.3s ease;
}

.social-login_btn a i:hover {
  background: #000;
  color: #fff;
}

.social-login_btn a.fb-login-btn {
  color: #3b5998;
}

.sign_up {
  text-align: center;
  display: inherit;
  margin-top: 50px;
  font-size: 16px;
  color: #4b2354;
}
</style>
