import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalpopupPage } from './modalpopup.page';

const routes: Routes = [
  {
    path: '',
    component: ModalpopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalpopupPageRoutingModule {}
