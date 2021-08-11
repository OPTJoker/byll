import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { SetRootFontSize } from '@/utils/uitool';
import ElementPlus from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/styles/reset.scss';

SetRootFontSize();
const app = createApp(App);
app.use(router).use(ElementPlus).mount('#app');

window.addEventListener('resize', () => {
    SetRootFontSize();
});

window.addEventListener(
    'dblclick',
    function () {
        toggleFullScreen();
    },
    false
);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
