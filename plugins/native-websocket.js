import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

export default ({ store }, inject) => {
  Vue.use(VueNativeSock, process.env.WS_URL, { store })
}
