<template>
    <div v-show="show" class="body">
        <div class="op-mask">
            <div class="left" :onClick="prev"></div>
            <div class="center" :onClick="showOrHideSetting"></div>
            <div class="right" :onClick="next"></div>
        </div>
        <div class="nav" v-show="settingVisiable">
            <div :onClick="onBackClick(progress)" class="back">
                <span>🔙</span>
            </div>
        </div>
        <div class="bar" v-show="settingVisiable">
            <el-slider
                class="slider"
                v-model="progress"
                :format-tooltip="formatProgress"
                step="0.1"
                @change="onProgressChange"
            />
            <div class="control">
                <div class="fontBtn" :onClick="smallerFont">a</div>
                <div class="fontBtn" :onClick="biggerFont">A</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Rendition } from 'epubjs';
import { ref } from 'vue';

export default {
    name: 'EBookRender',
    props: {
        show: Boolean,
        rendition: Rendition
    },
    emits: ['closeEBook', 'biggerFont', 'smallerFont'],
    setup(props, ctx) {
        const renditionRef = () => {
            return props.rendition;
        };

        const settingVisiable = ref(false);
        const progress = ref(0);
        const onBackClick = (percentage: number) => {
            return () => {
                showOrHideSetting();
                ctx.emit('closeEBook', { percentage });
            };
        };
        const next = () => {
            !hideSetting() && renditionRef()?.next();
        };
        const prev = () => {
            !hideSetting() && renditionRef()?.prev();
        };
        const showOrHideSetting = () => {
            settingVisiable.value = !settingVisiable.value;
            settingVisiable.value &&
                (progress.value =
                    props.rendition?.currentLocation()?.start?.percentage *
                    100); //d.ts声明的数据结构已过时。这个才是对的
        };
        const hideSetting = () => {
            const res = settingVisiable.value;
            settingVisiable.value = false;
            return res;
        };

        const onProgressChange = (val) => {
            const percent = val / 100 || 0;

            const ref = renditionRef();
            const locations = ref?.book?.locations;
            const loc =
                percent > 0 ? locations?.cfiFromPercentage(percent) : '0';
            ref?.display(loc);
        };

        const formatProgress = (val: number) => {
            return val + ' %';
        };

        const biggerFont = () => {
            console.log('call big');
            ctx.emit('biggerFont');
        };

        const smallerFont = () => {
            console.log('call small');
            ctx.emit('smallerFont');
        };

        return {
            next,
            prev,
            progress,
            biggerFont,
            smallerFont,
            hideSetting,
            onBackClick,
            formatProgress,
            settingVisiable,
            onProgressChange,
            showOrHideSetting
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
.body {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: blanchedalmond;
    font-size: 24px;

    .op-mask {
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;

        .left,
        .right {
            width: 35%;
            height: 100%;
        }
        .center {
            height: 100%;
            flex-grow: 1;
        }
    }

    .nav {
        position: absolute;
        z-index: 3;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: rem(60);
        background-color: aquamarine;

        .back {
            width: rem(40);
            height: rem(40);
            padding: rem(8);
            font-size: rem(22);
        }
    }

    .bar {
        flex-direction: column;
        position: absolute;
        z-index: 3;
        align-content: center;
        align-items: center;
        justify-content: center;

        padding-top: rem(20);
        padding-bottom: rem(20);
        width: 100%;
        flex-shrink: 1;
        bottom: 0;
        background-color: aquamarine;

        .slider {
            display: block;

            width: 90%;
            height: rem(44);

            div {
                display: block;
            }
        }

        .control {
            width: 90%;
            height: rem(40);
            justify-content: space-between;

            .fontBtn {
                justify-content: center;
                align-items: center;
                border-style: solid;
                font-size: rem(18);
                height: rem(40);
                width: rem(40);
                border-radius: rem(20);
                box-shadow: 0px 0px 6px rgba($color: #000000, $alpha: 0.1);
            }

            &:nth-child(1) {
                font-size: rem(10);
            }
        }
    }
}
</style>
