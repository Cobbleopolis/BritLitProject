import User from '~/api/user'
import createLogger from 'vuex/dist/logger'

export const state = () => ({
    users: {}
})

export const getters = {
    getUsers: state => state.users,
    getUser: (state) => (id) => state.users[id]
}

export const mutations = {
    addUser(state, user) {
        state.users[user.username] = user;
    },
    setUsers(state, usersArr) {
        usersArr.forEach(user => state.users[user.username] = new User(
            user.username,
            user.name,
            user.blogName,
            user.userPostsUrl
        ))
    }
}

export const actions = {
    fetchUsers({state, commit}) {
        if (Object.keys(state.users).length !== 0) return;
        this.$axios.get("/BritLitProject/users.json")
            .then((res) => commit('setUsers', res.data.users))
    }
}

export const plugins = [createLogger()]