import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    // username
    // status
    // picture
    console.log('add member');
  }

}
