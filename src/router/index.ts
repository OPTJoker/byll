import { createRouter, createWebHashHistory } from 'vue-router';

const Home = () => import('@/pages/guid/index.vue');
const Book = () => import('@/pages/book/index.vue');
const Study = () => import('@/pages/study/index.vue');
const Empty = () => import('@/pages/empty/index.vue');

function makeRoute(path: string, name: string, component: any) {
    return {
        path,
        name,
        component
    };
}
function makeRoutes(paths: string[], comps: any[], routeNames: string[]) {
    const arr: any[] = [];
    paths.map((path, idx) => {
        arr.push(makeRoute(path, routeNames[idx], comps[idx]));
    });
    return arr;
}

export const routePaths = ['/book', '/study', '/game', '/tools'];
export const routeNames = ['book', 'study', 'game', 'tools'];
const comps = [Book, Study, Empty, Empty];

const routes = makeRoutes(
    ['/', ...routePaths],
    [Home, ...comps],
    ['home', ...routeNames]
);

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
