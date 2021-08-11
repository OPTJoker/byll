<template>
    <div class="body">
        <div class="content">
            <div v-for="(v, i) in data" class="item" :key="i">{{ v }}</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: '学习',
    setup() {
        const makeList = () => {
            const arr: number[] = [];
            for (let i = 0; i < 12; i++) {
                arr.push(i);
            }
            return arr;
        };
        return {
            data: makeList()
        };
    }
};
</script>

<style lang="scss" scoped>
.body {
    flex-direction: column;
    width: 100%;
    height: 100%;

    .content {
        width: 100%;

        box-sizing: border-box;
        border-width: 1px;
        border-style: solid;
        justify-content: space-between;
        flex-wrap: wrap;

        .item {
            width: 180px;
            height: 80px;
            background-color: lightsteelblue;
            margin-top: 8px;
        }

        .item:nth-last-child(-n + 2) {
            background-color: khaki;
        }
    }
}
</style>
