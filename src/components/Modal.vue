<template>
    <div class="modal" v-if="modalOpen">
        <div class="content">
            This is the modal
            <span class="close" @click="close">Close Modal</span>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['open'],
        data() {
            return {}
        },
        computed: {
            modalOpen: function () {
                return this.open;
            }
        },
        methods: {
            close() {
                this.$history.popState();
            }
        },
        watch: {
            modalOpen: function () {
                if (this.open) {
                    this.$history.addBackObserver(() => {
                        this.$emit("update:open", false);
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .3);
        text-align: center;

        .content {
            background: white;
            margin: 100px auto;
            width: 300px;
            padding: 10px;
        }
        .close {
            display: block;
            padding: 10px;
            background: blue;
            margin-top: 10px;
            color: white;
            cursor: pointer;
        }
    }
</style>