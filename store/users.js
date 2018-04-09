import createLogger from 'vuex/dist/logger'

export const state = () => ({
    users: {}
})

export const getters = {}

export const mutations = {
    addUser(state, user) {
        state.users[user.username] = user;
    },
    setUsers(state, usersArr) {
        usersArr.forEach(user => state.users[user.username] = user)
    }
}

export const actions = {
    async getUsers({commit}) {
        const { data } = await this.$axios.get("/users.json")
        commit('setUsers', data.users);
    }
}

export const plugins = [createLogger()]