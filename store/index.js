const state = () => ({
  humiture: {},
})

const getters = {
  humiture: (state) => state.humiture,
}

const mutations = {
  SOCKET_ONOPEN(state, value) {},
  SOCKET_ONMESSAGE(state, msg) {
    console.log(msg)
    const data = JSON.parse(msg.data)
    if (data.humiture) {
      state.humiture = data.humiture
    }
  },
  SOCKET_ONERROR(state, value) {
    console.log(value)
  },
  SOCKET_ONCLOSE(state, value) {
    console.log(value)
  },
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
