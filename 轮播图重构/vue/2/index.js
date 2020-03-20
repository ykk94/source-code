import Vue from 'vue'
import App from './App.vue'

new Vue({
    el: '#app',
    template: '<fakeApp />',
    components: {
        fakeApp: App,
    }
})
