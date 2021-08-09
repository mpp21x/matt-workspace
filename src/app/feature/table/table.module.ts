import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableRoutingModule} from './table-routing.module';
import {TableComponent} from './pages/table/table.component';
import {BootstrapTableModule} from 'ng-matt-tw-library';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    BootstrapTableModule,
  ]
})
export class TableModule {
}
