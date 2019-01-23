import Vue from 'vue'
import HelloWorld from './HelloWorld.vue'
import MyInput from './Input.vue'

const Components = {
    HelloWorld,
    MyInput
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components