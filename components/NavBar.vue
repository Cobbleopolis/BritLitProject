<template>
    <b-navbar toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>{{$store.state.displayName}}</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                <b-nav-item href="#">Link</b-nav-item>
                <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

        </b-collapse>
    </b-navbar>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: 'nav-bar',
        created() {
            // console.log(this.$store.state)
        },
        computed: mapState({
            users: 'users.users'
        })
    }
</script>

<style scoped>

</style>
