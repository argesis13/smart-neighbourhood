import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) { }

  goToFamilyDetails() {
    this.router.navigateByUrl('/app/tabs/family-details');
  }

}
