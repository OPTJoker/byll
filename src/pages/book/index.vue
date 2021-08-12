<template>
    <div class="container">
        <div class="window">
            <e-book-render
                @closeEBook="closeEBookImp"
                id="eBookPage"
                :show="showEBook"
                :rendition="renditionRef"
            />
            <div class="bookList">
                <div
                    :key="o.id"
                    :onClick="onBookClick(i)"
                    class="bookCard"
                    v-for="(o, i) in books"
                >
                    <div class="card-content-container">
                        <img :src="books[i].icon" class="coverImg" />
                        <span class="title">{{ books[i].name }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tabBar">
            <div class="tabItem" :onClick="onTabClick">书架</div>
            <div class="tabItem" />
            <div class="tabItem" :onClick="onTabClick">书城</div>
        </div>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import Epub from 'epubjs';
import EBookRender from './bookRender.vue';

export default {
    name: '电子书',
    components: {
        EBookRender
    },
    setup() {
        const bookObj = {
            id: '10011',
            name: '三体全集',
            icon: require('@/assets/imgs/book_icon_santi.png'),
            url: '/santi.epub'
        };
        const books = [bookObj];

        const renditionRef: any = ref();
        const percentage = ref(0);
        const showEBook = ref(false);
        const onBookClick = (i) => {
            const item = books[i];
            return () => {
                const url1 = window.location.origin + item.url;
                const book = Epub(url1);
                book.ready
                    .then(() => {
                        return book.locations.generate(0);
                    })
                    .then(() => {
                        const lastPer = percentage.value;
                        if (lastPer > 0.1) {
                            const loc = book.locations?.cfiFromPercentage(
                                lastPer / 100.0
                            );
                            renditionRef.value.display(loc);
                        }
                    });
                showEBook.value = true;

                const rendition = book.renderTo('eBookPage');
                rendition.themes.fontSize('18px');
                renditionRef.value = rendition;

                rendition.display();
            };
        };
        const closeEBookImp = (val: { percentage: number }) => {
            percentage.value = val.percentage;
            showEBook.value = false;
            renditionRef.value.destroy();
        };

        const onTabClick = () => {
            //todo
        };
        return {
            books,
            showEBook,
            onTabClick,
            onBookClick,
            renditionRef,
            closeEBookImp
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
            @media screen and (max-width: 420px) {
                &:after {
                    content: '';
                    flex: 1;
                }
            }

            .bookCard:nth-last-col {
                margin-bottom: 0;
            }
        }
    }

    .tabBar {
        flex-direction: row;
        width: 100%;
        height: rem(66);
        max-height: 68px;
        box-shadow: 0px -1px 12px rgba($color: #000000, $alpha: 0.1);

        .tabItem {
            flex-grow: 1;
            border-width: 1;
            border-style: solid;
            font-size: rem(18);
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
