import { AppInitialState } from 'vue';

export interface BookInfo {
    id: string;
    name: string;
}

export interface OpendBookInfo extends BookInfo {
    progress: number;
}

enum DownLoadState {
    DownLoadState_Loading = 0,
    DownLoadState_Success,
    DownLoadState_Failure
}

export interface DownloadBookInfo extends BookInfo {
    url: string;
    loadProgress: number;
    savedPath?: string;
    loadState: DownLoadState;
}

export function makeAppInitialState() {
    const s: AppInitialState = {
        curOpendBook: {} as OpendBookInfo,
        downloadingBook: {} as DownloadBookInfo
    };
    return s;
}
