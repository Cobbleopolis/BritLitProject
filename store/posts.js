import Post from '~/api/post'
import createLogger from 'vuex/dist/logger'
import algernonPosts from './posts/algernon'
import ladybracknellPosts from './posts/ladybracknell'
import earnestPosts from './posts/earnest'
import gwenPosts from './posts/gwen'

export const state = () => ({
    posts: {
        algernon: algernonPosts.posts.map(post => new Post(post.title, post.content)),
        ladybracknell: ladybracknellPosts.posts.map(post => new Post(post.title, post.content)),
        earnest: earnestPosts.posts.map(post => new Post(post.title, post.content)),
        gwen: gwenPosts.posts.map(post => new Post(post.title, post.content))
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