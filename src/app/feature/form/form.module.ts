import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {InputsComponent} from './pages/input/inputs.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModule as MattFormModule, BootstrapFormModule} from 'ng-matt-tw-library';


@NgModule({
  declarations: [
    InputsComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    BootstrapFormModule,
    MattFormModule,
  ]
})
export class FormModule {
}
