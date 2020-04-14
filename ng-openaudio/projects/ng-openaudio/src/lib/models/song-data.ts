import { SyncedLyric } from './synced-lyric';

export class SongData {
    name: string = '';
    artist: string = '';
    album: string = '';
    coverImgUrl: any = null;
    lyrics: SyncedLyric[] = [];
    audioSourceUrl: any = null;

    addSyncedLyric(startTime, endTime, lyric) {
        this.lyrics.push(new SyncedLyric(startTime, endTime, lyric));
    }

    addSimpleLyrics(...lyrics: string[]) {
        lyrics.forEach(l => {
            this.lyrics.push(new SyncedLyric(0, Number.MAX_SAFE_INTEGER, l));
        });
    }
}