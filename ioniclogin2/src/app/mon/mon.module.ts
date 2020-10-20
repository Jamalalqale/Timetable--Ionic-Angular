import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonPageRoutingModule } from './mon-routing.module';

import { MonPage } from './mon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonPageRoutingModule
  ],
  declarations: [MonPage]
})
export class MonPageModule {}
