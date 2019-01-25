import Vue from 'vue'
import App from './App.vue'
import qs from './qs'

Vue.mixin({
    computed: {
        params() {
            return qs.get();
        }
    }
});

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')



