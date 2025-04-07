import Vue from 'vue'
const emitter = new Vue()

Vue.prototype.$eventBus = {
  $on: function (name,callback) {
    return emitter.$on(name,callback);
  },
  $off: function () {
    return;
  },
  $emit: function (name,value) {
    return emitter.$emit(name,value);
  }
}