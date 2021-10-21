import { Store } from 'vuex';
import { OpendBookInfo, DownloadBookInfo } from './appState';

declare module '@vue/runtime-core' {
    interface AppInitialState {
        curOpendBook: OpendBookInfo;
        downloadingBook: DownloadBookInfo;
    }

    interface ComponentCustomProperties {
        $store: Store<AppInitialState>;
    }
}
