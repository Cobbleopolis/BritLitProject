<template>
    <div class="container mt-3">
        <h3>{{user.blogName}} <small class="text-muted">by {{user.name}}</small></h3>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'


    export default {
        fetch({store}) {
            // store.dispatch('users/fetchUsers')
        },
        computed: {
            user()  {
                return this.$store.state.users.users[this.$route.params.id]
            }
        }
    }
</script>

<style scoped>

</style>