const state = () => ({
  humiture: {},
})

const getters = {
  humiture: (state) => state.humiture,
}

const mutations = {
  SOCKET_ONOPEN(state, value) {},
  SOCKET_ONMESSAGE(state, msg) {
    const data = JSON.parse(msg.data)
    if (data.humiture) {
      state.humiture = data.humiture
    }
  },
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions,
}
