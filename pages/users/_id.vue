<template>
    <div class="container mt-3">
        <h3>{{user.blogName}} <small class="text-muted">by {{user.name}}</small></h3>
        <b-card v-for="(post, index) in getUserPosts($route.params.id)"
                :post="post"
                :key="index"
                :title="post.title"
                class="mb-3">
            <div v-html="post.content"></div>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'


    export default {
        computed: {
            user()  {
                return this.$store.state.users.users[this.$route.params.id]
            },
            ...mapGetters('posts', ['getUserPosts'])
        }

    }
</script>

<style scoped>

</style>