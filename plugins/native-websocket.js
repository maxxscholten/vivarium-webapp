import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

export default ({ store, env }, inject) => {
  Vue.use(VueNativeSock, env.wsUrl, { store })
}
