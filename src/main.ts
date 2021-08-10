import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles/reset.scss';
import { SetRootFontSize } from '@/utils/uitool';
// import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';

SetRootFontSize();
const app = createApp(App);
app.use(router).mount('#app');

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
