<template>
    <HomePage />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HomePage from '@/pages/home/HomePage.vue';

@Options({
    components: {
        HomePage
    }
})
export default class App extends Vue {}
</script>

<style>
body {
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
