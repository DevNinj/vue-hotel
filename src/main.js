import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import _ from 'lodash'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './styles.scss'
import 'normalize.css/normalize.css'
import VCalendar from 'v-calendar'
import faq from './data/faq'
import rooms from './data/rooms'
import offers from './data/offers'
import roomType from './data/roomType'
import addOns from './data/checkout/addOns'
import roomsIntro from './data/checkout/roomsIntro'
import countries from './data/checkout/countries'

// Use element-ui component
Vue.use(ElementUI, { locale })
// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'v'
})

Vue.config.productionTip = false
// Define prototype for Lodash
Vue.prototype._ = _

// Define prototype for preload data
Vue.prototype.$faq = faq
Vue.prototype.$roomCardsInfo = rooms
Vue.prototype.$roomsInfo = roomType
Vue.prototype.$offersInfo = offers
Vue.prototype.$checkoutRooms = roomsIntro
Vue.prototype.$checkoutAddOns = addOns
Vue.prototype.$countriesList = countries

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
