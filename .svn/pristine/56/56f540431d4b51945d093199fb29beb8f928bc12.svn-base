import * as types from '../mutation-types'

const state = {
  device: {
    isMobile: false
  },
  menu: {
    opened: false,
    hidden: false
  }
}

const mutations = {
  [types.TOGGLE_DEVICE] (state, device) {
    Object.assign(state.device, device)
  },

  [types.TOGGLE_MENU] (state, opened) {
    if (state.device.isMobile) {
      state.menu.opened = opened
    } else {
      state.menu.opened = true
    }
  },
}

export default {
  state,
  mutations
}
