import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThuPageRoutingModule } from './thu-routing.module';

import { ThuPage } from './thu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThuPageRoutingModule
  ],
  declarations: [ThuPage]
})
export class ThuPageModule {}
