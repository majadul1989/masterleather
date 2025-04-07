import Vue from 'vue'

const methods = {
  getEle(ele, all = false){
    return all == false ? document.querySelector(ele) : document.querySelectorAll(ele)
  },
  inview(elx) {
    let el = this.getEle(elx)
    var r, html;
    if ( !el || 1 !== el.nodeType ) { return false; }
    html = document.documentElement;
    r = el.getBoundingClientRect();

    return ( !!r
      && r.bottom >= 0
      && r.right >= 0
      && r.top <= html.clientHeight
      && r.left <= html.clientWidth
    );
  },

  listenScroll(callback,ele = null){
    if(ele != null){
      ele.addEventListener('scroll',callback)
    }else{
      document.addEventListener('scroll',callback)
    }
  },

  arrayChunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size) );
  },

}

const mixin = {
    methods,
    data() {
        return {
          money_sign: '৳'
        }
    },
    watch:
        {


        },

  mounted(){
    // console.log(localStorage)
  }

}

Vue.mixin(mixin)


/*
Author: Asoftware Ltd
Web: https://www.asoftwareltd.com
Done By: Abdul Alim Jewel
*/