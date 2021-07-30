<template>
    <div></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
    components: {
        name: HomeModuleItem
    }
})
export default class HomeModuleItem extends Vue {
    data() {
        return {};
    }
}
</script>

<style lang="scss" scoped>

</style>
