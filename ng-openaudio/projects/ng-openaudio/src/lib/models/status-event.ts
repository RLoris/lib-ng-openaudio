import { SongData } from './song-data';
import { EqualizerStyle } from './equalizer-style';

export class StatusEvent {
    event: string;
    songData: SongData;
    current: number;
    duration: number;
    volume: number;
    style: EqualizerStyle;
    isPlaying: boolean;
}