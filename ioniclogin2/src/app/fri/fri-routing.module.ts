import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriPage } from './fri.page';

const routes: Routes = [
  {
    path: '',
    component: FriPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriPageRoutingModule {}
