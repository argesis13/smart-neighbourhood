import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';

import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import * as CapacitorVPPlugin from 'capacitor-video-player';
import {MockData} from '../../providers/mock-data.service';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import {CameraModel} from '../../interfaces/camera-model';
import {UserModel} from '../../interfaces/user-model';


const { CapacitorVideoPlayer, Device } = Plugins;


@Component({
  selector: 'video-player',
  templateUrl: './video-player.page.html',
  styleUrls: ['./video-player.page.scss'],
})
export class VideoPlayerPage implements OnInit {

  cameras: any[] = [];

  constructor(private videoPlayer: VideoPlayer, public confData: MockData, private streamingMedia: StreamingMedia) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.confData.getCameras().subscribe((cameras: any[]) => {
      for (const camera of cameras) {
        this.cameras.push(camera as CameraModel);
      }
    });
  }

  async play() {

    const options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played'); },
      errorCallback: (e) => { console.log('Error streaming'); },
      orientation: 'portrait',
      shouldAutoClose: true,
      controls: false
    };

    this.streamingMedia.playVideo('https://youtu.be/CdZuOhld91g', options);

    // let videoPlayer: any;
    // const info = await Device.getInfo();
    // if (info.platform === 'ios' || info.platform === 'android') {
    //   videoPlayer = CapacitorVideoPlayer;
    // } else {
    //   videoPlayer = CapacitorVPPlugin.CapacitorVideoPlayer;
    // }
    // const res: any  = await videoPlayer.play({url: 'https://youtu.be/CdZuOhld91g'});
  }

  playVideo() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }


}
