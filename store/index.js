const state = () => ({
  vivStore: {
    humiture: {},
    water: {
      sensor: {
        state: 1,
      },
      pump: {
        state: 0,
        runtime: 0,
        countdown: 3600000 * 3,
        automate: 1,
      },
    },
    mister: {
      state: 0,
      countdown: 3600000,
      runtime: 0,
      automate: 1,
    },
    lights: {
      automate: 1,
      countdown: 0,
      runtime: 0,
      sunset: 0,
      sunrise: 0,
      state: 0,
      LED_whitered: {
        state: 0,
      },
      LED_white: {
        state: 0,
      },
      LED_blue: {
        state: 0,
      },
    },
  },
})

const getters = {
  vivStore: (state) => state.vivStore,
}

const mutations = {
  SOCKET_ONOPEN(state, value) {},
  SOCKET_ONMESSAGE(state, msg) {
    const data = JSON.parse(msg.data)
    if (data) {
      state.vivStore = data
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
