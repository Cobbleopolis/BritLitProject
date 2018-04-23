import Post from '~/api/post'
import createLogger from 'vuex/dist/logger'
import algernonPosts from './posts/algernon'
import ladybracknellPosts from './posts/ladybracknell'

export const state = () => ({
    posts: {
        algernon: algernonPosts.posts.map(post => new Post(post.title, post.content)),
        ladybracknell: ladybracknellPosts.posts.map(post => new Post(post.title, post.content))
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