<template>
    <div id="app">
        <div class="slide" @mouseenter="stopover" @mouseleave="loop">
            <Show v-bind:index="index" v-bind:pics="pics"></Show>
            <button class="slide-button slide-left vertical-center" @click="stepleft">&lt;</button>
            <button class="slide-button slide-right vertical-center" @click="stepright">&gt;</button>
            <div class="slide-indicators">
                <Little v-bind:index="index" v-bind:pics="pics" @setindex="resetindex"></Little>
            </div>
        </div>
    </div>
</template>

<script>
    import Show from './show.vue'
    import Little from './little.vue'
    import img1 from './image/1.jpg'
    import img2 from './image/2.jpg'
    import img3 from './image/3.jpg'
    import img4 from './image/4.jpg'
    import img5 from './image/5.jpg'

    export default {
        data: function() {
            return {
                index: 0,
                pics: [
                    {img: img1},
                    {img: img2},
                    {img: img3},
                    {img: img4},
                    {img: img5},
                ],
            }
        },
        components: {
            Show: Show,
            Little: Little,
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
    }
</script>

<style>
    .slide {
        position: relative;
        width: 800px;
    }
    .slide-image {
        display: none;
        width: 800px;
        height: 480px;
    }
    .active {
        display: inline-block;
    }
    .slide-button {
        width: 30px;
        height: 50px;
        color: #fff;
        background: #000;
        opacity: 0.3;
        border: 0;
        outline: 0;
        cursor: pointer;
    }
    .slide-left {
        left: 0;
    }
    .slide-right {
        right: 0;
    }
    .vertical-center {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .slide-indicators {
        position: absolute;
        bottom: 10px;
        width: 100%;
        padding: 0 340px;
        text-align: center;
    }
    .slide-indi {
        float: left;
        width: 20px;
        height: 8px;
        border-radius: 4px;
        margin: 0 5px;
        cursor: pointer;
        opacity: 0.5;
        background: lightcoral;
    }
    .slide-indi:hover {
        background: gray;
    }
    .white {
        background: white;
    }
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
</style>
