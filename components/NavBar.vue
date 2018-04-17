<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand :to="{ name: 'index'}">{{$store.state.displayName}}</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item :to="{ name: 'users'}">Blogs</b-nav-item>
                <b-nav-item :to="{ name: 'about'}">About</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: 'nav-bar',
        computed: mapGetters({
            users: 'users/getUsers'
        })
    }
</script>

<style scoped>

</style>
