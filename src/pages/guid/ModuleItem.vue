<template>
    <transition v-if="didLoad" name="breath">
        <div class="body">
            <div class="moduleItem" @click="jumpPage(item)">
                <p class="title">{{ item.pageName }}</p>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import {
    reactive,
    computed,
    ref,
    toRefs,
    defineComponent,
    onMounted
} from 'vue';
import { useRouter } from 'vue-router';

class ItemData {
    name: string;
    pageName: string;
    path: string;
    index: number;
    constructor(name, pageName, path, index) {
        this.name = name;
        this.pageName = pageName;
        this.path = path;
        this.index = index;
    }
}

export default defineComponent({
    props: {
        aa: ItemData,
        item: {
            type: ItemData,
            default: () => {
                return new ItemData('', '', '', 0);
            }
        }
    },
    setup(props) {
        let didLoad = ref(false);
        const state = reactive({
            breathTraslate: computed(() => {
                return props.item.index % 2 === 0
                    ? String(Math.random() * 30 + 20) + 'px'
                    : String(Math.random() * -20 - 30) + 'px';
            }),
            breathScale: computed(() => {
                return Math.random() / 4.0 + 1;
            }),
            marginTop: computed(() => {
                return String(Math.random() * -100) + 'px';
            }),
            breathTransY: computed(() => {
                return String(Math.random() * 10) + 'px';
            }),
            breathDelay: computed(() => {
                return props.item.index < 2
                    ? String(Math.random() * 2) + 's'
                    : String(Math.random() * 1) + 's';
            })
        });

        const router = useRouter();
        const jumpPage = (item: ItemData) => {
            const name = item.name;
            router.push(name);
        };
        onMounted(() => {
            didLoad.value = true;
        });
        return {
            ...toRefs(state),
            jumpPage,
            didLoad
        };
    }
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
$itemW: 180;
$itemH: 360;

.body {
    overflow: hidden;
    border-width: 0.5px;
    border-style: double;
    border-color: rgba($color: white, $alpha: 0.7);
    border-radius: rem($itemW/3);
    flex-direction: row;
    width: rem($itemW);
    height: rem($itemH);
    margin-top: v-bind(marginTop);

    .moduleItem {
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background-color: rgba($color: white, $alpha: 0.1);

        .title {
            pointer-events: none;
            font-size: 28px;
            font-weight: 400;
            color: white;
        }
    }

    .body :hover {
        background-color: rgba($color: cadetblue, $alpha: 0.3);
        transition: 1.5s ease-in;
    }

    animation: breath 8s v-bind(breathDelay) infinite ease-in-out;
    @keyframes breath {
        from,
        to,
        50% {
            transform: scale(1) translateY(0);
        }
        25% {
            transform: scale(v-bind(breathScale))
                translateY(v-bind(breathTraslate));
        }
        75% {
            transform: scale(v-bind(breathScale))
                translateY(calc(-1 * v-bind(breathTraslate)));
        }
    }
}
</style>
