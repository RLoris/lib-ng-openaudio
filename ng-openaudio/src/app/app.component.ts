import { Component } from '@angular/core';
import { SongData, EqualizerStyle, StatusEvent } from 'projects/ng-openaudio/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-openaudio';

  visualContainerHeight = '30vh';
  myAccentColor = 'red';
  myBackgroundColor = 'black';
  myGradient = 'linear-gradient(0deg, rgba(255, 255, 0, 0.719), rgba(255, 50, 0, 0.521), transparent)';
  barAmount: number = 32;
  playerControls = true;
  playerPlaying = false;
  volume: number = 50;
  currentPosition: number = 0;
  visualStyle: string = EqualizerStyle.CIRCULAR;
  mySongData = new SongData();

  constructor() {}

  loadAudioFile(event) {
    if(event.type == 'audio/mp3') {
      const s = new SongData();
      s.audioSource = URL.createObjectURL(event);
      s.name = event.name;
      // default image you want
      s.coverImgUrl = 'https://images.pexels.com/photos/2746823/pexels-photo-2746823.jpeg?cs=srgb&dl=black-and-gray-vinyl-record-2746823.jpg&fm=jpg';
      this.mySongData = s;
    } 
  }

  loadImageFile(event) {
    const e = event.type.match('^image\/(gif|png|jpeg|jpg)$');
    if(e) {
      this.mySongData.coverImgUrl = URL.createObjectURL(event);
    }
  }

  changeControls(checked) {
    this.playerControls = checked;
  }

  changePlaying(checked) {
    this.playerPlaying = checked;
  }

  getVisualStyles(): string[] {
    return Object.keys(EqualizerStyle).filter(key => isNaN(Number(EqualizerStyle[key])));  
  }

  playDemo() {
    const s = new SongData();
    s.audioSource = 'assets/UnknownBrain_Superhero.mp3';
    s.name = 'Superhero';
    s.artist = 'Unknown Brain';
    s.album = 'No Copyright Song';
    s.coverImgUrl = 'assets/ncs_superhero_cover.jpg';
    this.mySongData = s;
  }

  statusEvent($event: StatusEvent) {
    console.log($event);
  }

  errorEvent($event: any) {
    console.log($event);
  }


}
