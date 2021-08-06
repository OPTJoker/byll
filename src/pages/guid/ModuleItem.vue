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
import { rem } from '@/utils/uitool';
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
    setup() {
        let didLoad = ref(false);
        const state = reactive({
            breathTraslate: computed(() => {
                const l = 120;
                const val = (Math.random() - 0.6) * l;
                return rem(val);
            }),
            breathScale: computed(() => {
                return Math.random() / 5 + 1;
            }),
            marginTop: computed(() => {
                const val = Math.random() * -100;
                return rem(val);
            }),
            breathDelay: computed(() => {
                return String(Math.random() * 1) + 's';
            }),
            braethTimeInterval: computed(() => {
                return String(Math.random() * 3 + 3) + 's';
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
    border-style: solid;
    border-color: rgba($color: white, $alpha: 0.4);
    border-radius: 0;
    width: rem($itemW);
    height: rem($itemH);
    min-width: 80px;
    min-height: 80px;
    margin-top: v-bind(marginTop);

    .moduleItem {
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba($color: white, $alpha: 0.1);

        .title {
            pointer-events: none;
            font-size: rem(40);
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
