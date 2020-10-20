import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TuePageRoutingModule } from './tue-routing.module';

import { TuePage } from './tue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TuePageRoutingModule
  ],
  declarations: [TuePage]
})
export class TuePageModule {}
