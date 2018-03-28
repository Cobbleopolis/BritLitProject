// import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

// import usersModule from './modules/users'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//
//   },
//   getters: {
//
//   },
//   mutations: {
//
//   },
//   modules: {
//     users: usersModule
//   },
//   plugins: [createLogger()]
// })

const createStore = () => {
    return new Vuex.Store({
        state: {
            name: process.env.name,
            displayName: process.env.displayName,
            version: process.env.version,
            description: process.env.description,
            author: process.env.author,
        },
        getters: {},
        mutations: {},
        modules: {
            // users: usersModule
        },
        plugins: [createLogger()]
    })
}

export default createStore