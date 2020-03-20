const log = console.log.bind(console)

Vue.component('show-pictures', {
    props: ['index', 'pics'],
    template: `
        <ul>
            <li v-for="(p, i) in pics">
                <img :src="p.img" class="slide-image" v-bind:class="{ active: i === index}" alt="" />
            </li>
        </ul>
    `,
})

Vue.component('little-round', {
    props: ['index', 'pics'],
    template: `
        <ul>
            <li v-for="(p, i) in pics">
                <div class="slide-indi" v-bind:class="{ white: i === index}" @click="actionClick(i)"></div>
            </li>
        </ul>
    `,
    methods: {
        actionClick: function(index) {
            this.$emit('setindex', index)
        }
    },
})

let app = new Vue({
    el: '#app',
    data: {
        index: 0,
        pics: [
            {img: './image/1.jpg'},
            {img: './image/2.jpg'},
            {img: './image/3.jpg'},
            {img: './image/4.jpg'},
            {img: './image/5.jpg'},
        ],
    },
    methods: {
        resetindex: function(index) {
            this.index = index
        },
        stepleft: function() {
            let pics = this.pics
            let l = pics.length
            let i = this.index
            this.index = (i - 1 + l) % l
        },
        stepright: function() {
            let pics = this.pics
            let l = pics.length
            let i = this.index
            this.index = (i + 1 + l) % l
        },
        stopover: function() {
            clearInterval(this.interval)
        },
        loop: function() {
            this.interval = setInterval(() => this.stepright(), 1000)
        },
    },
    created: function() {
        this.interval = setInterval(() => this.stepright(), 1000)
    },
})
