import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'family-details',
  templateUrl: './family-details.page.html',
  styleUrls: ['./family-details.page.scss'],
})
export class FamilyDetailsPage implements OnInit {

  mom = {
    'username': 'mom',
    'imageUrl': '../../assets/img/speakers/bear.jpg',
    'status': 'IN'
  };

  dad = {
    'username': 'dad',
    'imageUrl': '../../assets/img/speakers/bear.jpg',
    'status': 'OUT'
  };

  members = [this.mom, this.dad];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  remove(member) {
    this.members.pop();
  }

  contact(member) {
    console.log('contact');
  }

  addMember() {
    console.log('add member');
  }
}
