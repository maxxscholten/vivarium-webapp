import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

export default ({ store }, inject) => {
  Vue.use(VueNativeSock, 'wss://68.199.47.113:3001/', { store })
}
