import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

import app from './modules/app'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    actions,
    getters,
    modules: {
        app
    },
    state: {
    },
    mutations: {
    }
})

export default store
