<template>
    <div id="app">
        {{test}}asdf
    </div>
</template>

<script>
    export default {
        data() {
            return {
                test: this.$params.test || "1"
            }
        },
        created() {
        },
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
