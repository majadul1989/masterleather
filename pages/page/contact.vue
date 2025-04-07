<template>
  <div>
    <Breadcrumb />
    <div class="container">
      <div class="contact-wrapper">
        <div class="row">
          <div class="col-xl-11 col-sm-12 m-auto">
            <div class="row">
              <div class="col-md-6">
                <div class="address-info">
                  <div class="contact-form_title">
                    <h4>Our Address</h4>
                  </div>
                  <br>
                  <div class="address-details">
                    <div class="address-details_description form-group">
                      <div class="icon">
                        <i class="icon-location common-btn_color"></i>
                      </div>
                      <div class="text">
                        <strong>Master Leather BD,</strong> <br> 93 Chadpur Tannery, Hazaribagh, <br />Jigatola,
                        Dhanmondi, Dhaka, Bangladesh<br>
                      </div>
                    </div>
                    <div class="address-details_description form-group">
                      <div class="icon">
                        <i class="icon-location common-btn_color"></i>
                      </div>
                      <div class="text">
                        <span>Phone:</span> 01757757235
                      </div>
                    </div>
                    <div class="address-details_description form-group">
                      <div class="icon">
                        <i class="icon-location common-btn_color"></i>
                      </div>
                      <div class="text"><span>Email:</span> info@masterleatherbd.com</div>
                    </div>
                    <div class="address-details_description form-group">
                      <div class="icon">
                        <i class="icon-location common-btn_color"></i>
                      </div>
                    </div>
                  </div>
                  <div class="map-wrap">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0473435891204!2d90.42337821498191!3d23.78132838457413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c796c76c1a8b%3A0x7ff1d179fba4c47c!2sPRAN-RFL+GROUP!5e0!3m2!1sen!2sbd!4v1550134663381"
                      style="border:0" allowfullscreen="" width="100%" height="280" frameborder="0"></iframe>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="contact-form">
                  <div class="contact-form_title">
                    <h4>Our Location</h4>
                  </div>
                  <br>
                  <div v-if="message">
                    <div v-bind:class="messageClass">{{ message }}</div>
                  </div>
                  <div v-else="">
                    <form @submit.prevent="submistContactForm">
                      <div class="form-group required">
                        <input v-bind:class="errors.name == true ? 'border-danger' :  null" class="form-control"
                               placeholder="Enter your name..." required="" v-model="contactForm.name" name="name"
                               type="text">
                      </div>
                      <div class="form-group required">
                        <input v-bind:class="errors.email == true ? 'border-danger' :  null" class="form-control"
                               placeholder="Enter your email..." required="" v-model="contactForm.email" name="email"
                               type="email">
                      </div>
                      <div class="form-group required">
                        <input class="form-control" placeholder="Enter your mobile number..."
                               v-model="contactForm.phone" required="" name="number" type="number">
                      </div>
                      <div class="form-group required">
                        <textarea class="form-control" id="input-enquiry" placeholder="Enter your message..."
                                  v-model="contactForm.message" required="" name="description" cols="50"
                                  rows="10"></textarea>
                      </div>
                      <div class="form-btn">
                        <button type="submit" class="common-btn_color" @click="submistContactForm">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/common/Breadcrumb.vue'

export default {
  auth: false,
  data() {
    return {
      contactForm: {
        'name': null,
        'email': null,
        'phone': null,
        'message': null
      },
      messageClass: '',
      message: false,
      errors: {}
    }
  },
  methods: {
    // async dataLayerGenerateLead() {
    //   dataLayer.push({
    //     event: 'generate_lead',
    //     currency: 'BDT',
    //     value: 0
    //   })
    //
    // },

    async submistContactForm(e) {
      // e.preventDefault();
      let hasError = false
      let error = []
      error.push = this.contactForm
      let arr = Object.keys(this.contactForm)

      if (!this.contactForm.name) {
        error.name = true
        hasError = true
      }
      if (!this.contactForm.email) {
        error.email = true
        hasError = true
      }
      if (!this.contactForm.phone) {
        error.email = true
        hasError = true
      }
      if (!this.contactForm.message) {
        error.email = true
        hasError = true
      }
      this.errors = error

      if (hasError == false) {
        const res = await this.$axios.post('/api/common/submit-contact-form', this.contactForm)
        this.messageClass = res.data.status == 1 ? 'alert alert-success' : 'alert alert-danger'
        this.message = res.data.message
        console.log(res.data)
      }
    }
  }
}
</script>

<style>
.contact-form form input {
  height: 32px;
  font-size: 14px;
  color: #495057;
}

.form-btn button {
  border: 0;
  color: #FFF;
  font-weight: 700;
  font-size: 15px !important;
  line-height: 0;
  height: 32px;
  padding: .375rem .75rem;
  border-radius: .25rem;
}

.contact-form form textarea {
  height: 130px;
}

.contact-form_title h4 {
  padding: 5px 0;
  color: #444;
  font-weight: 600;
  border-bottom: 1px solid #EEE;
  margin-bottom: 8px;
  font-size: 21px;
}

.address-details_description {
  display: flex;
}

.address-details_description .icon i {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 50%;
  font-size: 15px;
  margin-right: 11px;
  display: block;
}

.address-details_description span {
  color: #333;
  font-weight: 500;
  margin-right: 6px;
}

.map-wrap {
  margin-top: 30px;
}
</style>
