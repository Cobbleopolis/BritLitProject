<template>
    <div class="container mt-4">
        <h3>Blogs</h3>
        <b-card v-for="(value, key) in users"
                :value="value"
                :key="key"
                :title="value.blogName"
                :subTitle="`by ${value.name} (${value.username})`"
                class="mb-3">
            <b-button variant="primary" :to="'users/' + key">Visit</b-button>
        </b-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            users: 'users/getUsers'
        }),
        fetch ({store}) {
            store.dispatch('users/fetchUsers')
        },
    }
</script>

<style scoped>

</style>