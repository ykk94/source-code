<template>
    <ul>
        <li v-for="(p, i) in pics">
            <img :src="p.img" class="slide-image" v-bind:class="{ active: i === index}" alt="" />
        </li>
    </ul>
</template>

<script>
    export default {
        name: "Show",
        props: ['index', 'pics'],
    }
</script>
