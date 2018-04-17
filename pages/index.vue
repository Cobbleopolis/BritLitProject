<template>
    <b-container fluid class="mt-3">
        <b-row align-h="center">
            <b-col cols="auto" class="text-center">
                <app-logo/>
                <h1 class="title">
                    {{$store.state.displayName}}
                </h1>
                <h2 class="subtitle">
                    {{$store.state.description}}
                </h2>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import AppLogo from '~/components/AppLogo.vue'

    export default {
        components: {
            AppLogo
        },
        fetch ({store}) {
            // store.dispatch('users/fetchUsers')
        },
    }
</script>

<style>
    /*.container {*/
        /*min-height: 100vh;*/
        /*display: flex;*/
        /*justify-content: center;*/
        /*align-items: center;*/
        /*text-align: center;*/
    /*}*/

    /*.title {*/
        /*font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; !* 1 *!*/
        /*display: block;*/
        /*font-weight: 300;*/
        /*font-size: 100px;*/
        /*color: #35495e;*/
        /*letter-spacing: 1px;*/
    /*}*/

    /*.subtitle {*/
        /*font-weight: 300;*/
        /*font-size: 42px;*/
        /*color: #526488;*/
        /*word-spacing: 5px;*/
        /*padding-bottom: 15px;*/
    /*}*/

    /*.links {*/
        /*padding-top: 15px;*/
    /*}*/
</style>
