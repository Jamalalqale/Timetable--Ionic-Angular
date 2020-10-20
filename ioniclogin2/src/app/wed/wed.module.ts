import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WedPageRoutingModule } from './wed-routing.module';

import { WedPage } from './wed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WedPageRoutingModule
  ],
  declarations: [WedPage]
})
export class WedPageModule {}
