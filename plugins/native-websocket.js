import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

export default ({ store }, inject) => {
  Vue.use(VueNativeSock, 'ws://localhost:3001', { store })
}
