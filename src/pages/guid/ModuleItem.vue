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
        item: {
            type: ItemData,
            default: () => {
                return new ItemData('', '', '', 0);
            }
        }
    },
    setup() {
        let didLoad = ref(false);
        const l = 80;
        const state = reactive({
            breathTraslate: computed(() => {
                const val = Math.random() * l;
                return val + 'px';
            }),
            breathScale: computed(() => {
                return Math.random() / 3 + 0.8;
            }),
            breathDelay: computed(() => {
                return String(Math.random()) + 's';
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
$itemSize: 80;

.body {
    flex-shrink: 1;
    border-width: 0.5px;
    border-style: solid;
    border-color: rgba($color: white, $alpha: 0.4);

    .moduleItem {
        justify-content: center;
        align-items: center;
        width: rem($itemSize);
        height: rem($itemSize);
        background-color: rgba($color: white, $alpha: 0.2);

        .title {
            pointer-events: none;
            font-size: rem(18);
            font-weight: 300;
            color: white;
        }
    }

    animation: breath v-bind(braethTimeInterval) infinite ease-in-out;
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

.body :hover {
    background-color: rgba($color: cadetblue, $alpha: 0.6);
    transition: 0.5s ease-in;
}
</style>
