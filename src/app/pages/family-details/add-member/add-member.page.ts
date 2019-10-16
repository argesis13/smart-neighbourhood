import { Component, OnInit } from '@angular/core';
import {UserModel} from '../../../interfaces/user-model';
import {map} from 'rxjs/operators';
import {FamilyDetailsService} from '../../../providers/family-details.service';
import {UserData} from '../../../providers/user-data';

@Component({
  selector: 'add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

  queryText = '';
  members: UserModel[] = [];

  constructor(private familyService: FamilyDetailsService, private userService: UserData) { }

  ngOnInit() {
  }

  search() {
    this.familyService.searchMember(this.queryText).pipe(
      map(res => {
        this.members = [];
        console.log(res);
        for (const member of res as UserModel[]) {
          member['imageUrl'] = '../../assets/img/speakers/bear.jpg';
          this.members.push(member);
        }
      })
    ).subscribe();
  }

  addToFamily(member: UserModel) {
    this.userService.getFamilyId().then(res => {
      console.log(res);
    });
    // this.userService.getUsername().then(
    //   username => {
    //     this.userService.getFamilyId().then(familyId => {
    //       this.familyService.addFamilyMember(username, familyId, member);
    //     });
    //   }
    // );
  }
}
