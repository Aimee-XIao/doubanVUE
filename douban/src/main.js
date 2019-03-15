// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
var store = new Vuex.Store({
  state:{
    mark:'home',
    mark2:0
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created:function(){
    // console.log(location.hash.substr(2));
    this.$store.state.mark = location.hash.split('/')[1];
    this.$store.state.mark2 = location.hash.split('/')[2];
  }
})
var that = this;
window.addEventListener('hashchange',function(){
  store.state.mark = location.hash.split('/')[1];
  store.state.mark2 = location.hash.split('/')[2];
})

  var supportsOrientationChange = 'onorientationchange' in window ? 'orientationchange' : 'resize';
  var clientWidth = document.documentElement.clientWidth;
  var timer;
  function setRem() {
    clientWidth = document.documentElement.clientWidth;
    var nowPX = clientWidth / 375 * 100;
    document.documentElement.style.fontSize = nowPX + 'px';
  }
  clientWidth !== 375 && setRem();
  window.addEventListener(supportsOrientationChange, function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      setRem();
    }, 300);
  }, false);


