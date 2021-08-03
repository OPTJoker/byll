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
                const l = 120;
                return String((Math.random() - 0.6) * l) + 'px';
            }),
            breathScale: computed(() => {
                return Math.random() / 5 + 1;
            }),
            marginTop: computed(() => {
                return String(Math.random() * -100) + 'px';
            }),
            breathTransY: computed(() => {
                return String(Math.random() * 10) + 'px';
            }),
            breathDelay: computed(() => {
                return String(Math.random() * 1) + 's';
            }),
            braethTimeInterval: computed(() => {
                return String(Math.random() * 2 + 4) + 's';
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
$itemW: 240;
$itemH: 240;

.body {
    overflow: hidden;
    border-width: 0.5px;
    border-style: double;
    border-color: rgba($color: white, $alpha: 0.7);
    border-radius: rem($itemW/2);
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
        background-color: rgba($color: cadetblue, $alpha: 0.35);
        transition: 0.5s ease-in;
    }

    animation: breath v-bind(braethTimeInterval) v-bind(breathDelay) infinite
        ease-in-out;
    @keyframes breath {
        from,
        to {
            transform: scale(1) translateY(0);
        }
        50% {
            transform: scale(v-bind(breathScale))
                translateY(v-bind(breathTraslate));
        }
    }
}
</style>
