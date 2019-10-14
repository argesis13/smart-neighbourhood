import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'family-details',
  templateUrl: './family-details.page.html',
  styleUrls: ['./family-details.page.scss'],
})
export class FamilyDetailsPage implements OnInit {

  members = ['Ma-ta', 'Tac-tu'];

  constructor() { }

  ngOnInit() {
  }

  addMember() {
    console.log('add member');
  }

}
