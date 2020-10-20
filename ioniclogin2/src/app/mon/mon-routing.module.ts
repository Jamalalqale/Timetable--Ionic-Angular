import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonPage } from './mon.page';

const routes: Routes = [
  {
    path: '',
    component: MonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonPageRoutingModule {}
