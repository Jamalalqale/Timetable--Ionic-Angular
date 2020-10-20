import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TuePage } from './tue.page';

const routes: Routes = [
  {
    path: '',
    component: TuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TuePageRoutingModule {}
