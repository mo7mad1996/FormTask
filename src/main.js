import Vue from 'vue'
import App from './App.vue'

// Google maps
import VueGeolocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false
Vue.use(VueGeolocation)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDBFo8sND5qsKLEIh2hTKSWDWWt_W4oFpQ'
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
