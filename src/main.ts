import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import router from './router';
import { SetRootFontSize } from '@/utils/uitool';
import { ElSlider } from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';

import '@/assets/styles/reset.scss';

const app = createApp(App);
const store = makeStore();
app.use(store).use(router).use(ElSlider).mount('#app');
ConfigUpApp();

function ConfigUpApp() {
    SetRootFontSize();
    window.addEventListener('resize', () => {
        SetRootFontSize();
    });
}

function makeStore() {
    const store = createStore({
        state() {
            return {
                bookInfo: {
                    id: 0,
                    name: '',
                    progress: 0
                }
            };
        },
        mutations: {
            saveBookProgress(state: any, bookInfo) {
                state.info = bookInfo;
            }
        }
    });
    return store;
}
