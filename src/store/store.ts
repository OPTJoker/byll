import { AppInitialState } from 'vue';
import { createStore } from 'vuex';
import { OpendBookInfo, makeAppInitialState } from './appState';

export default function makeStore() {
    const store = createStore({
        state() {
            return makeAppInitialState();
        },
        mutations: {
            saveBookInfo(state: AppInitialState, curBookInfo: OpendBookInfo) {
                state.curOpendBook = curBookInfo;
            }
        }
    });
    return store;
}
