import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'video-player',
        children: [
          {
            path: '',
            loadChildren: () => import('../video-player/video-player.module').then(m => m.VideoPlayerPageModule)
          }
        ]
      },
      {
        path: 'nfc',
        children: [
          {
            path: '',
            loadChildren: () => import('../nfc/nfc.module').then(m => m.NfcPageModule)
          }
        ]
      },
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'family-details',
        children: [
          {
            path: '',
            loadChildren: () => import('../family-details/family-details.module').then(m => m.FamilyDetailsPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

