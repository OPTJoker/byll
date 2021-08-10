<template>
    <div class="container">
        <div class="window">窗口</div>
        <div class="tabBar">
            <div class="tabItem" :onClick="onPress">书架</div>
            <div class="tabItem" :onClick="onPress">我的</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: '电子书',
    setup() {
        const onPress = (e: any) => {
            console.log(e.target?.innerText);
        };
        return {
            onPress
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.container {
    flex-direction: column;
    width: 100%;
    flex-grow: 1;

    .window {
        flex-direction: column;
        flex-grow: 1;
        width: 100%;
    }

    .tabBar {
        width: 100%;
        height: rem(49);
        max-height: 68px;
        box-shadow: 0px -1px 12px rgba($color: #000000, $alpha: 0.1);

        .tabItem {
            flex-grow: 1;
            border-width: 1;
            border-style: solid;
            font-size: rem(16);
            color: lightseagreen;
            align-items: center;
            justify-content: center;
        }

        .tabItem:active {
            background-color: rgba($color: lightseagreen, $alpha: 0.2);
        }

        .tabItem:nth-child(2) {
            border-left-width: 0.5px;
        }
    }
}
</style>
