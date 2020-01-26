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
  showLyrics: boolean = true;
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

  changeLyrics(checked) {
    this.showLyrics = checked;
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
    // choose between simple lyrics
    /*s.addSimpleLyrics(
      'Like you, be strong',
      'To hold the powers of the sun',
      'To dream, believe',
      'In strength now I’m the only one, only one',
      'I was an ordinary boy',
      'Until I broke the rules',
      'My life destroyed, life destroyed',
      'Until I woke awake',
      'Scream my mind I shout the ground shakes',
      'How much can I take?',
      'My mind will break',
      'Will it break?',
      'What can I take?',
      'Can I be your superhero?',
      'Superhero',
      'Can I be your Superhero?',
      'Superhero, Superhero, Superhero',
      'Fly up, away',
      'It’s the first time of today, today',
      'To dream, believe',
      'You are the strength, you’re all I need, need, need',
      'Oh, gonna give it a shot, only one of me',
      'To shield you all from the enemy',
      'Your superhero',
      'Your superhero',
      'Can I be your superhero?',
      'Superhero, superhero, superhero',
      'Can I be your superhero?'
    );*/
    // or synced lyrics
    s.addSyncedLyric(1,5, "Like you, be strong");
    s.addSyncedLyric(5,9, "To hold the powers of the sun");
    s.addSyncedLyric(14,17, "To dream, believe");
    s.addSyncedLyric(17,24, "In strength now I’m the only one, only one");
    s.addSyncedLyric(30,34, 'I was an ordinary boy');
    s.addSyncedLyric(35,38, 'Until I broke the rules');
    s.addSyncedLyric(37,44, 'My life destroyed, life destroyed');
    s.addSyncedLyric(46,48, 'Until I woke awake');
    s.addSyncedLyric(47,53, 'Scream my mind I shout the ground shakes');
    s.addSyncedLyric(54,57, 'How much can I take?');
    s.addSyncedLyric(57,60, 'My mind will break');
    s.addSyncedLyric(60,62, 'Will it break?');
    s.addSyncedLyric(63,65, 'What can I take?');
    s.addSyncedLyric(69,72, 'Can I be your superhero?');
    s.addSyncedLyric(73,77, 'Superhero');
    s.addSyncedLyric(88,92, 'Can I be your Superhero?');
    s.addSyncedLyric(92,105, 'Superhero, Superhero, Superhero');
    s.addSyncedLyric(109,114, 'Fly up, away');
    s.addSyncedLyric(114,121, 'It’s the first time of today, today');
    s.addSyncedLyric(122,126, 'To dream, believe');
    s.addSyncedLyric(127,133, 'You are the strength, you’re all I need, need, need');
    s.addSyncedLyric(134,139, 'Oh, gonna give it a shot, only one of me');
    s.addSyncedLyric(139,142, 'To shield you all from the enemy');
    s.addSyncedLyric(143,146, 'Your superhero');
    s.addSyncedLyric(147,150, 'Your superhero');
    s.addSyncedLyric(159,162, 'Can I be your superhero?');
    s.addSyncedLyric(162,171, 'Superhero, superhero, superhero');
    s.addSyncedLyric(171,175, 'Can I be your superhero?');
    this.mySongData = s;
  }

  statusEvent($event: StatusEvent) {
    console.log($event);
  }

  errorEvent($event: any) {
    console.log($event);
  }


}
