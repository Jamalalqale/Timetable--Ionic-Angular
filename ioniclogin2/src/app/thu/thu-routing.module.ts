import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThuPage } from './thu.page';

const routes: Routes = [
  {
    path: '',
    component: ThuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThuPageRoutingModule {}
