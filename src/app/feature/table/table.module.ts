import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableRoutingModule} from './table-routing.module';
import {TableComponent} from './pages/table/table.component';
import {BootstrapTableModule} from 'ng-matt-tw-library';
import { PaginationTableComponent } from './pages/pagination-table/pagination-table.component';


@NgModule({
  declarations: [
    TableComponent,
    PaginationTableComponent
  ],
  imports: [
    CommonModule,
    TableRoutingModule,
    BootstrapTableModule,
  ]
})
export class TableModule {
}
