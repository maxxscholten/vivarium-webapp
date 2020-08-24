import VueNativeSock from 'vue-native-websocket'
import Vue from 'vue'

export default ({ store, env }, inject) => {
  console.log(process.env)
  console.log(env)
  Vue.use(VueNativeSock, env.wsUrl, { store })
}
