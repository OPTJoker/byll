<template>
    <div class="container">
        <div class="header">
            <!-- <span class="title">吧 台</span> -->
            <img
                :src="require('@/assets/imgs/header-bg.jpeg')"
                alt=""
                class="hImg"
            />
        </div>
        <div class="body">
            <div v-for="(item, idx) in modules" :key="idx">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
const modules = [
    { name: '看书' },
    { name: '学习' },
    { name: '游戏' },
    { name: '工具' }
];

export default {
    name: 'HomePage',
    props: {
        title: String
    },

    data() {
        return {
            modules: modules
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.container {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: gray;
    color: black;
}

.header {
    display: flex;
    height: rem(480);
    overflow: hidden;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: #f0fdff;
}

.hImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.title {
    font-size: 28px;
    font-weight: 600;
    color: seagreen;
}

.body {
    display: flex;
    flex: 1;
    background-color: skyblue;
}
</style>
