<template>
    <ul>
        <li v-for="(p, i) in pics">
            <div class="slide-indi" v-bind:class="{ white: i === index}" @click="actionClick(i)"></div>
        </li>
    </ul>   
</template>

<script>
    export default {
        name: "Little",
        props: ['index', 'pics'],
        methods: {
            actionClick: function(index) {
                this.$emit('setindex', index)
            }   
        },
    }
</script>
