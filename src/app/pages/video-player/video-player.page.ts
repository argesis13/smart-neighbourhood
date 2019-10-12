import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import * as CapacitorVPPlugin from 'capacitor-video-player';

const { CapacitorVideoPlayer, Device } = Plugins;


@Component({
  selector: 'video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {

  constructor(private videoPlayer: VideoPlayer) { }

  ngOnInit() {
  }

  async play() {
    let videoPlayer: any;
    const info = await Device.getInfo();
    if (info.platform === 'ios' || info.platform === 'android') {
      videoPlayer = CapacitorVideoPlayer;
    } else {
      videoPlayer = CapacitorVPPlugin.CapacitorVideoPlayer;
    }
    const res: any  = await videoPlayer.play({url: 'https://clips.vorwaerts-gmbh.de/VfE_html5.mp4'});
  }

  playVideo() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }


}
