<template>
  <div>
    <Breadcrumb />
    <div class="container">
      <div class="registration_form">
        <form method="POST" action="#" class="form-horizontal account-register clearfix" id="web_signup"
              @submit.prevent="registration">
          <div class="row">
            <div id="content" class="col-md-12">
              <div class="section-title">
                <h2 class="title">Register Account</h2>
                <p>If you already have an account with us, please login at the
                  <nuxt-link to="/user/login">login page</nuxt-link>
                  .
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div id="content" class="col-md-10 col-xl-9 col-sm-12">
              <div id="account">
                <div class="card">
                  <div class="card-header">
                    Your Personal Details
                  </div>
                  <div class="card-body">
                    <div class="form-group required" style="display: none;">
                      <label for="customer_group" class="control-label">Customer Group</label>
                      <div class="">
                        <div class="radio">
                          <label>
                            <input type="radio" name="customer_group" value="8" checked="checked">
                            Default
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group required">
                          <label for="name" class=" control-label">Full Name</label>
                          <div class="">
                            <input required="" class="form-control" id="name" placeholder="Enter Full Name" name="name"
                                   type="text" v-model="user.name">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('name')"
                                  class="message-error">{{ regResponse.name[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group required">
                          <label for="email" class=" control-label">Email Address</label>
                          <div class="">
                            <input class="form-control" placeholder="Enter Email Address" name="email" type="email"
                                   id="email" v-model="user.email">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('email')"
                                  class="message-error">{{ regResponse.email[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback required ">
                          <label for="telephone" class=" control-label">Contact Number</label>
                          <div class="input-group ">
                            <div class="input-group-prepend">
                              <div class="input-group-text">+88</div>
                            </div>
                            <input class="form-control" placeholder="Telephone" name="telephone" type="tel"
                                   id="telephone" v-model="user.telephone">
                          </div>
                          <span v-if="formSubmit && error && regResponse.hasOwnProperty('telephone')"
                                class="message-error">{{ regResponse.telephone[0] }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group has-feedback required">
                          <label for="emergency_contact_number" class=" control-label">Emergency Contact Number</label>
                          <div class="input-group mb-2">
                            <div class="input-group-prepend">
                              <div class="input-group-text">+88</div>
                            </div>
                            <input class="form-control" placeholder="Emergency Contact Number"
                                   name="emergency_contact_number" type="tel" id="emergency_contact_number"
                                   v-model="user.emergency_contact_number">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('name')"
                                  class="message-error">{{ regResponse.emergency_contact_number[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group required">
                          <label for="password" class=" control-label">Password</label>
                          <div class="">
                            <input class="form-control" placeholder="Password" name="password" type="password" value=""
                                   id="password" v-model="user.password">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('password')"
                                  class="message-error">{{ regResponse.password[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group required">
                          <label for="password_confirmation" class=" control-label">Password Confirm</label>
                          <div class="">
                            <input class="form-control" placeholder="Password Confirm" name="password_confirmation"
                                   type="password" value="" id="password_confirmation"
                                   v-model="user.password_confirmation">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="address">
                <div class="card">
                  <div class="card-header">Your Address</div>
                  <div class="card-body">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="company" class=" control-label">Company</label>
                          <div class="">
                            <input class="form-control" placeholder="Enter company" name="company" type="text"
                                   id="company" v-model="user.company">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('company')"
                                  class="message-error">{{ regResponse.company[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="district" class=" control-label">District</label>
                          <div class="">
                            <select name="district" class="form-control" id="district" v-model="user.district">
                              <option value="">Choose your district</option>
                              <option value="Dhaka" id="Dhaka">
                                Dhaka
                              </option>
                              <option value="Outside Dhaka" id="Outside Dhaka">
                                Outside Dhaka
                              </option>
                            </select>
                          </div>
                          <span v-if="formSubmit && error && regResponse.hasOwnProperty('district')"
                                class="message-error">{{ regResponse.district[0] }}</span>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="post_code" class=" control-label">Post Code</label>
                          <div class="">
                            <input class="form-control" placeholder="Enter post code" name="post_code" type="text"
                                   id="post_code" v-model="user.post_code">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('post_code')"
                                  class="message-error">{{ regResponse.post_code[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="address_1" class=" control-label">Address 1</label>
                          <div class="">
                            <input class="form-control" placeholder="Enter Address 1" name="address_1" type="text"
                                   id="address_1" v-model="user.address_1">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('address_1')"
                                  class="message-error">{{ regResponse.address_1[0] }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="address_2" class=" control-label">Address 2</label>
                          <div class="">
                            <input class="form-control" placeholder="Enter Address 2" name="address_2" type="text"
                                   id="address_2" v-model="user.address_2">
                            <span v-if="formSubmit && error && regResponse.hasOwnProperty('address_2')"
                                  class="message-error">{{ regResponse.address_2[0] }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>
          <br>
          <div class="row">
            <div id="content" class="col-md-10 col-xl-9 col-sm-12">
              <div class="card card_258">
                <div class="card-footer card-footer_258">
                  <div class="buttons">
                    <div class="pull-left card-foofewrf">
                      <input id="agree" class="box-checkbox" type="checkbox" name="agree" v-model="user.agree">
                      <label for="agree">I have read and agree to the <a href="#" target="__blank" class="agree">
                        <b>Terms &amp; Condition</b>
                      </a></label>
                      <span v-if="formSubmit && error && regResponse.hasOwnProperty('agree')"
                            class="agree-txt">{{ regResponse.agree[0] }}</span>
                    </div>
                    <input type="submit" value="Continue" class="btn btn-back-one pull-right">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
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
      user: {
        name: '',
        email: '',
        telephone: '',
        emergency_contact_number: '',
        company: '',
        agree: false,
        address: '',
        address_2: '',
        district: '',
        device_name: 'web_browser',
        password: '',
        password_confirmation: '',
        post_code: ''
      },
      formSubmit: false,
      error: false,
      regResponse: []
    }
  },
  methods: {
    async registration() {

      this.formSubmit = true
      await this.$store.dispatch('user/fetchRegistration', this.user)
      const response = this.$store.state.user.REGISTRATION
      this.error = response.type != undefined && response.type != 'success'
      this.regResponse = response.messages
      console.log(this.regResponse)
      const that = this
      setTimeout(function() {
        that.formSubmit = false
      }, 120000)

      if (this.formSubmit && !this.error) {

        // if (typeof dataLayer != undefined) {
        //   dataLayer.push({
        //     event: 'sign_up',
        //     method: 'email'
        //   })
        // }

        try {
          let response = await this.$auth.loginWith('local', {
            data: {
              email: this.user.email,
              password: this.user.password,
              device_name: 'web_browser'
            }
          })
        } catch (err) {
          console.log(err)
        }

      }
    }
  }
}
</script>

<style scoped>
.account-register,
.input-group-text,
input {
  color: #606060;
  font-size: 15px;
  font-weight: 400;
}

.account-register .section-title {
  margin-bottom: 15px;
}

.account-register h2.title {
  padding-bottom: 12px;
}

.account-register p {
  font-size: 15px;
  color: #606060;
  line-height: 25px;
}

.account-register a {
  color: #333;
  font-weight: 600;
}

.account-register a:hover {
  color: black;
  text-decoration: underline;
}

div#account {
  margin-bottom: 20px;
}

.card-header {
  padding: 10px 10px;
}

label.control-label {
  font-size: 15px;
  color: #333;
}

.pull-left.card-foofewrf label {
  margin-bottom: 0;
}

.card.card_258 {
  margin-bottom: 0;
}

</style>
