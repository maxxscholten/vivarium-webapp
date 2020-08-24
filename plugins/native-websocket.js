import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

export default ({ store }, inject) => {
  console.log(process.env.wsUrl)
  Vue.use(VueNativeSock, process.env.wsUrl, { store })
}
