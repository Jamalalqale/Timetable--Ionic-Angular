import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home2Page } from './home2.page';





const routes: Routes = [
  {
    path: 'home2',
    component: Home2Page,
    children:
      [
        {
          path: 'timetable',
          children:
            [
              {
                path: '',
                loadChildren: '../timetable/timetable.module#TimetablePageModule'
              }
            ]
        },
        {
          path: 'news',
          children:
            [
              {
                path: '',
                loadChildren: '../news/news.module#NewsPageModule'
              }
            ]
        },
        {
          path: 'profile',
          children:
            [
              {
                path: '',
                loadChildren: '../profile/profile.module#ProfilePageModule'
              }
            ]
        },



        {
          path: '',
          redirectTo: '/home2/timetable',
          pathMatch: 'full'
        }
      ]
  },
  {
    path: '',
    redirectTo: '/home2/home2/timetable',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home2PageRoutingModule {}
