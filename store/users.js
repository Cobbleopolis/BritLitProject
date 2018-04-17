import User from '~/api/user'
import createLogger from 'vuex/dist/logger'
import UserData from './users.json'

let UserState = {}

UserData.users.forEach(user => UserState[user.username] = new User(
    user.username,
    user.name,
    user.blogName
))

export const state = () => ({
    users: UserState
})

export const getters = {
    getUsers: state => state.users,
    getUser: (state) => (id) => state.users[id]
}

export const mutations = {

}

export const actions = {

}

export const plugins = [createLogger()]