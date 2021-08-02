<template>
    <div class="container">
        <div class="bgContainer">
            <video
                class="bgVideo"
                :src="require('@/assets/videos/man_coffie.mp4')"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
            />
            <div class="videoMask"></div>
        </div>
        <div class="body">
            <ModuleItem
                v-for="(item, idx) in modules"
                :key="idx"
                :item="{
                    name: item.routeName,
                    pageName: item.pageName,
                    path: item.path,
                    index: idx
                }"
            >
            </ModuleItem>
        </div>
    </div>
</template>

<script lang="ts">
import ModuleItem from './ModuleItem.vue';
import { routePaths, routeNames } from '@/router/index';

const pageNames = ['看书', '学习', '游戏', '工具'];

interface ModuleConfig {
    routeName: string;
    path: string;
    pageName: string;
    desc: string;
}

const createModule = (routeName: string, path: string, pageName: string) => {
    const m: ModuleConfig = {
        routeName,
        path,
        pageName,
        desc: '页面描述信息'
    };
    return m;
};

const createModules = () => {
    return routePaths.map((path, i) => {
        return createModule(routeNames[i], path, pageNames[i]);
    });
};

export default {
    name: 'HomePage',
    components: {
        ModuleItem
    },
    setup() {
        const modules = createModules();
        return {
            modules
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';

.container {
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: black;

    .bgContainer {
        position: absolute;
        z-index: -1;
        width: inherit;
        height: inherit;

        .bgVideo {
            object-fit: cover;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }

        .videoMask {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 2;
            background-color: rgba($color: #000000, $alpha: 0.6);
        }
    }

    .body {
        background-color: transparent;
        justify-content: space-evenly;
        align-items: center;
    }
}
</style>
