<template>
    <div class="container">
        <div class="window">
            <div class="bookList">
                <div class="bookCard" v-for="(o, i) in books" :key="o.id">
                    <div class="card-content-container">
                        <img :src="books[i].icon" class="coverImg" />
                        <span class="title">{{ books[i].name }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tabBar">
            <div class="tabItem" :onClick="onPress">书架</div>
            <div class="tabItem" />
            <div class="tabItem" :onClick="onPress">书城</div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: '电子书',
    setup() {
        const book = {
            id: '10011',
            name: '三体全集',
            icon: require('@/assets/imgs/book_icon_santi.png'),
            path: '@/assets/books/santi.epub'
        };
        const books = [book, book, book, book];
        const onPress = (e: any) => {
            console.log(e.target?.innerText);
        };
        return {
            books,
            onPress
        };
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/global.scss';
$coverImgScale: 1.331;

.container {
    flex-direction: column;
    width: 100%;
    flex-grow: 1;

    .window {
        flex-direction: column;
        width: 100%;
        height: 100%;

        .bookList {
            flex-direction: row;
            flex: 1;
            margin: rem(24);
            justify-content: space-between;
            align-content: flex-start;
            align-items: flex-start;
            flex-wrap: wrap;

            .bookCard {
                flex-direction: column;
                align-content: flex-start;
                overflow: hidden;
                align-items: center;
                padding: rem(6);
                margin-bottom: rem(10);
                box-shadow: 0px -1px 6px rgba($color: #000000, $alpha: 0.1);

                .card-content-container {
                    flex-direction: column;
                    flex-shrink: 1;
                    width: rem(80);
                    overflow: hidden;

                    .coverImg {
                        object-fit: fill;
                        width: inherit;
                        height: rem(calc(80 * #{$coverImgScale}));
                    }
                    .title {
                        margin-top: rem(4);
                        font-size: rem(14);
                        color: darkslategray;

                        white-space: nowrap; //文字不换行
                        overflow: hidden;
                        text-overflow: ellipsis; //超长打点
                    }
                }
            }
            &:after {
                content: '';
                flex: 1;
            }
            .bookCard:nth-last-col {
                margin-bottom: 0;
            }
        }
    }

    .tabBar {
        flex-direction: row;
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
            flex-grow: 0;
            width: rem(2);
            height: 40%;
            border-radius: rem(1);
            align-self: center;
            background-color: lightseagreen;
        }
    }
}
</style>
