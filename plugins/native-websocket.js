import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

export default ({ store }, inject) => {
  Vue.use(VueNativeSock, 'ws://192.168.86.34:3000/', { store })
}
