<template>
    <font-awesome-icon :icon="icon"/>
</template>

<script>
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
    import {library, config, dom} from '@fortawesome/fontawesome-svg-core'
    import {faCoffee} from '@fortawesome/free-solid-svg-icons'

    library.add(faCoffee);

    // Make sure you tell Font Awesome to skip auto-inserting CSS into the <head>
    config.autoAddCss = false;

    const component = {
        name: 'fa',
        props: ['icon'],

        components: {
            FontAwesomeIcon
        },

        mounted() {
            // This will only work on your root Vue component since it's using $parent
            const {shadowRoot} = this.$parent.$options;
            const id = 'fa-styles';

            if (!shadowRoot.getElementById(`${id}`)) {
                const faStyles = document.createElement('style');
                faStyles.setAttribute('id', id);
                faStyles.textContent = dom.css();
                shadowRoot.appendChild(faStyles)
            }
        }
    };

    export default component
</script>

<style>
    font-awesome-icon {
        width: 16px;
        height: 16px;
    }
</style>