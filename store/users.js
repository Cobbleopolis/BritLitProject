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
        console.log('getUsers')
        const { data } = await axios.get("/users.json")
        commit('setUsers', data);
    }
}