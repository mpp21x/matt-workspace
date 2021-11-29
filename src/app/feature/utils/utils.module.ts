import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { UtilsIndexComponent } from './pages/utils-index/utils-index.component';


@NgModule({
  declarations: [
    UtilsIndexComponent
  ],
  imports: [
    CommonModule,
    UtilsRoutingModule
  ]
})
export class UtilsModule { }
