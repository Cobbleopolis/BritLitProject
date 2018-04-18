import Post from '~/api/post'
import createLogger from 'vuex/dist/logger'
import cobblePosts from './posts/cobbleopolis'

export const state = () => ({
    posts: {
        cobbleopolis: cobblePosts.posts.map(post => new Post(post.title, post.content))
    }
})

export const getters = {
    getUserPosts: (state) => (id) => state.posts[id] || []
}

export const mutations = {

}

export const actions = {

}

export const plugins = [createLogger()]