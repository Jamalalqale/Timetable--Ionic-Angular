import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdatemodalpopupPage } from './updatemodalpopup.page';

const routes: Routes = [
  {
    path: '',
    component: UpdatemodalpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdatemodalpopupPageRoutingModule {}
