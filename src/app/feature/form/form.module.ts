import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { InputsComponent } from './pages/input/inputs.component';
import { FormModule as NgMattFormModule } from 'dist/ng-matt-tw-library';


@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    NgMattFormModule,
  ]
})
export class FormModule { }
