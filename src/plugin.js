import qs from 'query-string'

export default {
    install(Vue) {
        Vue.prototype.$params = qs.parse(location.search);
    }
};