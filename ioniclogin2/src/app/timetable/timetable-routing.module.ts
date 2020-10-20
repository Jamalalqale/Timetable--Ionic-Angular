import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimetablePage } from './timetable.page';

const routes: Routes = [
  {
    path: 'timetable',
    component: TimetablePage,
    children:
      [
        {
          path: 'mon',
          children:
            [
              {
                path: '',
                loadChildren: '../mon/mon.module#MonPageModule'
              }
            ]
        },
        {
          path: 'tue',
          children:
            [
              {
                path: '',
                loadChildren: '../tue/tue.module#TuePageModule'
              }
            ]
        },
        {
          path: 'wed',
          children:
            [
              {
                path: '',
                loadChildren: '../wed/wed.module#WedPageModule'
              }
            ]
        },

        {
          path: 'wed',
          children:
            [
              {
                path: '',
                loadChildren: '../wed/wed.module#WedPageModule'
              }
            ]
        },

        {
          path: '',
          redirectTo: '/timetable/mon',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/timetable/timetable/mon',
    pathMatch: 'full'
  }
];

@NgModule({
  imports:
    [
      RouterModule.forChild(routes)
    ],
  exports:
    [
      RouterModule
    ]
})
export class TimetablePageRoutingModule {}