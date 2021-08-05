import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { InputsComponent } from './pages/input/inputs.component';


@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule
  ]
})
export class FormModule { }
