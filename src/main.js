import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messagePlugin from './utils/message.plugin'
import Loader from './components/app/Loader.vue'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)  
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyCv2i6YchBqODb9LXeCyFr8CpxFQYw1yiU",
  authDomain: "vue-crm-72e49.firebaseapp.com",
  databaseURL: "https://vue-crm-72e49.firebaseio.com",
  projectId: "vue-crm-72e49",
  storageBucket: "vue-crm-72e49.appspot.com",
  messagingSenderId: "585144621855",
  appId: "1:585144621855:web:e49dbcff367097c4542e2a",
  measurementId: "G-QGC346L86J"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
