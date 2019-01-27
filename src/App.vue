<template>
    <div id="app">
        <span @click="c">Open Modal</span>
        <Modal :open.sync="openModal"></Modal>
    </div>
</template>

<script>
    import Modal from './components/Modal'

    export default {
        data() {
            return {
                openModal: false
            }
        },
        methods: {
            c() {
                this.openModal = true;
            }
        },
        name: 'app',
        components: {
            Modal
        }
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
    span {
        padding: 10px;
        background: blue;
        display: inline-block;
        color: white;
        cursor: pointer;
    }
</style>
