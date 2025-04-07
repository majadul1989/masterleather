import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.use(VueFbCustomerChat, {
  page_id: 1661363064107838, //  change 'null' to your Facebook Page ID,
  // page_id: null,
  theme_color: '#333333', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})


// window.$_REVECHAT_API || (function(d, w) { var r = $_REVECHAT_API = function(c) {r._.push(c);}; w.__revechat_account='20148';w.__revechat_version=2;
// r._= []; var rc = d.createElement('script'); rc.type = 'text/javascript'; rc.async = true; rc.setAttribute('charset', 'utf-8');
// rc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'static.revechat.com/widget/scripts/new-livechat.js?'+new Date().getTime();
// var s = d.getElementsByTagName('script')[0]; s.parentNode.insertBefore(rc, s);
// })(document, window);