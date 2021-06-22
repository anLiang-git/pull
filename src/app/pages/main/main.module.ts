import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../common/shared.module';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NodeListComponent } from './nodes/node-list/node-list.component';
import { CurrencyComponent } from './currency/currency.component';




@NgModule({
  declarations: [
    MainComponent,
    NodeListComponent,
    CurrencyComponent    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
