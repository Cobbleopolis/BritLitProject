import createLogger from 'vuex/dist/logger'

export const state = () => ({
    name: process.env.name,
    displayName: process.env.displayName,
    version: process.env.version,
    description: process.env.description,
    author: process.env.author,
})

export const getters = {}

export const mutations = {}

export const actions = {}

export const plugins = [createLogger()]