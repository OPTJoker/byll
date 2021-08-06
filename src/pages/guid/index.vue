<template>
    <div class="container">
        <div class="bgContainer">
            <video
                class="bgVideo"
                :src="require('@/assets/videos/man_coffie.mp4')"
                autoplay
                muted
                loop
                playsinline=""
                webkit-playsinline=""
            />
            <div class="videoMask"></div>
        </div>

        <div class="guidBody">
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

    .bgContainer {
        top: 0;
        margin: 0;
        bottom: 0;
        position: absolute;
        z-index: -1;
        width: 100vw;
        height: 100vh;

        .bgVideo {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
        .videoMask {
            position: absolute;
            left: 0;
            z-index: 2;
            float: left;
            width: 100%;
            height: 100%;
            background-color: rgba($color: #000000, $alpha: 0.6);
        }
    }
    .guidBody {
        height: 100%;
        width: 100%;
        top: 0;
        bottom: 0;
        justify-content: space-evenly;
        align-content: center;
        align-items: flex-end;
        margin-bottom: rem(80);
        margin-top: rem(120);
    }
}
</style>
