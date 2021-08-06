import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { SetRootFontSize } from '@/utils/uitool';

SetRootFontSize();
createApp(App).use(router).mount('#app');

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
