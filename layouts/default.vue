<template>
  <div>
    <Header/>
    <Nuxt />
    <Footer/>
  </div>
</template>
<script>
import Footer from '~/components/globals/Footer.vue'
import Header from '~/components/globals/Header.vue'
export default {
  components: { Header, Footer },
  methods: {

  },
  head(){
    return {
      titleTemplate: '%s',
      script: [
        {
          hid: 'facebook-pixel',
          innerHTML: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '702462655198635');
          fbq('track', 'PageView');
          `,
        }
      ]
    }
  }

}
</script>
<style>

</style>
