import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { EqualizerBar } from './models/equalizer-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { EqualizerStyle } from './models/equalizer-style';
import { SongData } from './models/song-data';
import { StatusEvent } from './models/status-event';
import { SyncedLyric } from './models/synced-lyric';

@Component({
  selector: 'ng-openaudio',
  templateUrl: './ng-openaudio.component.html',
  styleUrls: ['./ng-openaudio.component.css']
})
export class NgOpenaudioComponent implements OnInit {

  @Output('errorsEvent')
  public errorEmitter: EventEmitter<any> = new EventEmitter();

  @Output('statusEvent')
  public statusEmitter: EventEmitter<StatusEvent> = new EventEmitter();

  private statusEvent: StatusEvent = new StatusEvent();

  private _showLyrics = false;

  @Input()
  public set showLyrics(v: boolean) {
    this._showLyrics = v;
  }

  public get showLyrics() {
    return this._showLyrics;
  }

  private _controls = true;

  @Input()
  public set controls(v: boolean) {
    this._controls = v;
    this.audio.controls = v;
  }

  public get controls() {
    return this._controls;
  }

  private _visualContainerHeight: string = '30vh';

  @Input()
  public set visualContainerHeight(v: string) {
    this._visualContainerHeight = v;
  }

  public get visualContainerHeight() {
    return this._visualContainerHeight;
  }

  private _songData: SongData;

  @Input()
  public set songData(v: SongData) {
    this._songData = v;
    if(v.audioSource) {
      if(this._isPlaying) {
        this.audio.pause();
        this.btnPlayPauseClass = 'controls-play-pause';
        this._isPlaying = false;
      }
      this.loadSound(v.audioSource);
    }
  }

  public get songData(): SongData {
    return this._songData;
  }

  private _barAmount = 32;

  @Input()
  public set barAmount(v: number) {
    if(v >= 0 && v <= 96) {
      this._barAmount = v;
      const e = [];
      for (let index = 0; index < v; index++) {
        e.push(new EqualizerBar(1));
      }
      this.equalizerBar = e;
    }
  }

  public get barAmount() {
    return this._barAmount;
  }

  private _barGradient = 'linear-gradient(0deg, rgba(255, 255, 0, 0.719), rgba(255, 50, 0, 0.521), transparent)';

  @Input()
  public set barGradient(v: string) {
    this._barGradient = v;
  }

  public get barGradient() {
    return this._barGradient;
  }

  private _backgroundColor = 'black';

  @Input()
  public set backgroundColor(v: string) {
    this._backgroundColor = v;
  }

  public get backgroundColor() {
    return this._backgroundColor;
  }
  
  private _accentColor = '#FFA000';

  @Input()
  public set accentColor(v: string) {
    this._accentColor = v;
  }

  public get accentColor() {
    return this._accentColor;
  }

  private _visualStyle: string; 

  @Input()
  public set visualStyle(v: string) {
    this.visualStyles.forEach( (element, idx) => {
      if(v === element) {
        this.visualStyleIdx = idx;
        this._visualStyle = v;
      }
    });
  }

  public get visualStyle() {
    return this._visualStyle;
  }

  private visualStyles = [];
  private visualStyleIdx = 0;
  circularStyle = new EqualizerBar(1);

  equalizerBar = [];
  progress = 0;
  // total duration
  duration = 0;

  private _current = 0;

  @Input()
  public set current(v: number) {
    if(this.audio.src) {
      if(v >= 0 && v <= this.audio.duration) {
        this.audio.currentTime = v;
      }
    }
  }

  public get current() {
    return this._current;
  }

  private _isPlaying = false;

  @Input()
  public set playing(v: boolean) {
    if(this.audio.src) {
      if(v === true) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
    }
  }

  public get playing() {
    return this._isPlaying;
  }

  private intervalId;
  private _volume: number;

  @Input()
  public set volume(v: number) {
    if(v >= 0 && v <= 100) {
      this.audio.volume = v / 100;
      // this._volume = v;
    }
  }

  public get volume() {
    return this._volume;
  }

  private context: AudioContext;
  private source: MediaElementAudioSourceNode;
  private audio: HTMLAudioElement;
  private analyser: AnalyserNode;
  private frequency;

  @ViewChild('controlsProgressBar', { static: true})
  controlsProgressBar: ElementRef;

  @ViewChild('controlsVolumeBar', { static: true})
  controlsVolumeBar: ElementRef;

  btnPlayPauseClass = 'controls-play-pause';
  displaySeekBar = '';

  constructor(private sanitizer: DomSanitizer) {
    try {
      this.context = new AudioContext();
      this.audio = new Audio();
      this.source = this.context.createMediaElementSource(this.audio);
      this.analyser = this.context.createAnalyser();
      this.visualStyles = Object.keys(EqualizerStyle).filter(key => isNaN(Number(EqualizerStyle[key])));
      this._visualStyle = this.visualStyles[this.visualStyleIdx];
      for (let index = 0; index < this._barAmount; index++) {
        this.equalizerBar.push(new EqualizerBar(1));
      }
    }
    catch(e) {
      this.errorEmitter.emit(e);
      console.log('Web Audio API is not supported in this browser');
    }  
  }

  ngOnInit() {
  }

  triggerStatusEvent(event: string) {
    this.statusEvent.event = event;
    this.statusEvent.duration = this.audio.duration;
    this.statusEvent.current = this.audio.currentTime;
    this.statusEvent.isPlaying = this._isPlaying;
    this.statusEvent.songData = this._songData;
    this.statusEvent.style = this.visualStyles[this.visualStyleIdx];
    this.statusEvent.volume = this.audio.volume * 100;
    this.statusEmitter.emit(this.statusEvent);
  }

  getVisualStyle() {
    switch (this._visualStyle) {
      case EqualizerStyle.BARS_UP:
        return 'flex-start';
        break;
      case EqualizerStyle.BARS_DOWN:
        return 'flex-end';
        break;
      case EqualizerStyle.BARS_MIDDLE:
        return 'center';
      default:
        return '';
        break;
    }
  }

  getLyrics() {
    if(this._songData.lyrics) {
      return this._songData.lyrics;
    }
  }

  getLyric(value: string | SyncedLyric) {
    if(value instanceof SyncedLyric) {
      return value.lyric;
    } else {
      return value;
    }
  }

  getLyricStyle(value: string | SyncedLyric) {
    if(value instanceof SyncedLyric) {
      if(this.audio.currentTime >= value.timeStart && this.audio.currentTime <= value.timeEnd) {
        return 'block';
      }
      return 'none';
    }
    return 'block';
  }

  isCircularStyle() {
    if(this._visualStyle == "CIRCULAR") {
      return true;
    } else {
      return false;
    }
  }

  isCoverStyle() {
    if(this._visualStyle == "COVER") {
      return true;
    } else {
      return false;
    }
  }

  isBarStyle() {
    if(this._visualStyle == "BARS_DOWN"
      || this._visualStyle == "BARS_UP"
      || this._visualStyle == "BARS_MIDDLE" ) {
        return true;
      } else {
        return false;
      }
  }

  getCoverImg() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this._songData.coverImgUrl);
  }

  getBackgroundStyle() {
    return this.sanitizer.bypassSecurityTrustStyle(this._barGradient);
  }

  getControlsStatus() {
    if(this._controls === true) {
      return 'block';
    }
    return 'none';
  }

  switchStyle() {
    if(this._controls === true) {
      this.visualStyleIdx = (++this.visualStyleIdx) % this.visualStyles.length;
      this._visualStyle = this.visualStyles[this.visualStyleIdx];
    }
  }

  switchState() {
    if(this.audio.src && this._controls === true) {
      if(this._isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
    }
  }

  private loadSound(src) {
    try {
      this.audio.src = src;
      this.audio.load();
      this.source.connect(this.analyser);
      this.analyser.connect(this.context.destination);
      this.analyser.fftSize = 512;
      this.frequency = new Uint8Array(this.analyser.frequencyBinCount);
      this._volume = this.audio.volume * 100;
      this.audio.onloadedmetadata = (d) => {
        this.duration = this.audio.duration;
        if(this.audio.duration + "" === 'Infinity') {
          // disable seeking since duration is not available: streams
          this.displaySeekBar = 'none';
        } else {
          this.displaySeekBar = '';
        }
        this.triggerStatusEvent('songLoaded');
      }
      this.audio.onvolumechange = (v) => {
        this._volume = this.audio.volume * 100;
        this.triggerStatusEvent('volumeChanged');
      };
      this.audio.onended = (v) => {
        this.audio.pause();
        this._current = 0;
        this.progress = 0;
        this.audio.load();
        this.triggerStatusEvent('songEnded');
      };
      this.audio.onpause = (v) => {
        this._isPlaying = !this._isPlaying;
        this.btnPlayPauseClass = 'controls-play-pause';
        clearInterval(this.intervalId);
        this.triggerStatusEvent('songPaused');
      };
      this.audio.onplay = (v) => {
        this._isPlaying = !this._isPlaying;
        this.btnPlayPauseClass = 'controls-play-pause paused';
        this.startAnimation();
        this.intervalId = setInterval(
          () => this.updateProgress(),
        1000);
        this.triggerStatusEvent('songPlayed');
      };
      this.audio.onseeking = (v) => {
        this.updateProgress();
        this.triggerStatusEvent('songProgressUpdated');
      }
    }catch(e) {
      this.errorEmitter.emit(e);
    }
  }

  private startAnimation() {
    if(this.audio.src) {
      try {
        this.analyser.getByteFrequencyData(this.frequency);
      }catch(e) {
        this.errorEmitter.emit(e);
      }
      if(this.isBarStyle() || this.isCircularStyle()) {
        let h = 1;
        for(var i = 0; i < this._barAmount; i++) {
          h += this.frequency[i] % 10; 
          this.equalizerBar[i].height = this.frequency[i] * (this._volume / 100);
          this.equalizerBar[i].transitionDuration = 0;
        }
        this.circularStyle.height = h % 25;
      }
      if(this._isPlaying === true) {
        requestAnimationFrame(() => this.startAnimation());
      } else {
        this.circularStyle.height = 1;
        this.equalizerBar.forEach((b) => { b.transitionDuration = 2; b.height = 1; });
      }
    }
  }

  private updateProgress() {
    this.progress = (this.audio.currentTime / this.audio.duration) * 100;
    this._current = this.audio.currentTime;
  }


  changeTime(event) {
    if(this.audio.src && this._controls === true) {
      const e = this.controlsProgressBar.nativeElement;
      const selection = event.x - e.offsetLeft;
      //@ts-ignore
      let jumpTo = (selection / e.offsetWidth);
      if(jumpTo < 0) {
        jumpTo = 0;
      } else if (jumpTo > 100) {
        jumpTo = 100;
      }
      this.audio.currentTime = jumpTo * this.audio.duration;
    }
  }

  changeVolume(event) {
    if(this.audio.src && this._controls === true) {
      const e = this.controlsVolumeBar.nativeElement;
      const selection = event.x - e.offsetLeft;
      //@ts-ignore
      let volume = Math.round((selection / e.offsetWidth) * 100);
      if(volume < 0) {
        volume = 0;
      } else if(volume > 100) {
        volume = 100;
      }
      this.audio.volume = volume / 100;
    }
  }

}
