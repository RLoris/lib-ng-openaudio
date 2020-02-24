
# Openaudio

Openaudio is an Angular library component developped to manipulate audio source and visualize the sound. Openaudio uses flexbox, it's responsive no matter the height and width of the device.

# Demo

Try it out here: [DEMO](https://rloris.github.io/lib-ng-openaudio/) or clone this [repo](https://github.com/RLoris/lib-ng-openaudio) and run `ng serve` for a full demo of openaudio. Angular version 8.2.14.

# Features

* Play an audio source
* Visual effects based on audio source frequency (BARS, CIRCULAR)
* Player visual controls available (Play/Pause, seek, volume, switch visual style)
* Customize effects (gradient style, accent color, background color, bars amount)
* Displays song cover, artist, album, name, lyrics
* Add synced (karaoke) or simple lyrics
* Play audio stream (radio, podcast) 

Some audio source cannot be rendered for visualization, openaudio will still be able to play them !
# How to use

```
<ng-openaudio
    [visualContainerHeight='this.visualContainerHeight'
    [accentColor]='this.myAccentColor'
    [backgroundColor='this.myBackgroundColor'
    [barGradient]='this.myGradient'
    [barAmount]='this.barAmount'
    [songData]='this.mySongData'
    [controls]='this.playerControls'
    [visualStyle]='this.visualStyle'
    [volume]='this.volume'
    [playing]='this.playerPlaying'
    [current]='this.currentPosition'
    [showLyrics]='this.showLyrics'
    (statusEvent)='this.statusEvent($event)'
    (errorsEvent)='this.errorEvent($event)'
>
</ng-openaudio>
```
## Inputs
| Property | Type | Note |
| -------- | ---- | ---- |
| [visualContainerHeight]| string | Height of the visual area |
| [accentColor] | string | Accent color across the player |
| [backgroundColor] | string | Background color across the player |
| [barGradient] | string | Gradient style for bars frequency visual |
| [barAmount] | number | Amount of bars (min: 0, max: 96) for the bars frequency visual 
| [songData] | SongData | Song data containing the name, album, artist, cover image and audio source url (local or distant) |
| [controls] | boolean | Enable/disable the visual controls for the user |
| [visualStyle] | EqualizerStyle | Specify the visual style for the player (BARS_DOWN, BARS_UP, BARS_MIDDLE, CIRCULAR, COVER) |
| [volume] | number | Volume of the player (min: 0, max: 100) |
| [playing] | boolean | Specify the player status for the current song (true: play, false: pause) |
| [current] | number | Specify the current progress position of the song |
| [showLyrics] | boolean | Display the lyrics (synced or simple) if provided in songData |

## Outputs
| Event | Type | Note |
| -------- | ---- | ---- |
| (StatusEvent) | StatusEvent | Emits these events (songLoaded: audio source was loaded, volumeChanged: player volume was changed, songEnded: current track has ended, songPaused: the current track was paused, songPlayed: the current track was played, songProgressUpdated: the current track playback position was updated ) |
| (errorEvent) | any | Emits all errors |

# To-Do / Improvements

-   Queue for songs
    -   add next/prev feature
    -   add loop/random feature
-   add electric wave style
-   add ring bar style
-   add lyrics karaoke style -> DONE
-   add spotify support

# NPM

  This package is on `npm` https://www.npmjs.com/package/ng-openaudio

# License

  This package is under the MIT license

