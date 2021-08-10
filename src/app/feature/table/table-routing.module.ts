import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TableComponent} from './pages/table/table.component';
import {PaginationTableComponent} from './pages/pagination-table/pagination-table.component';

const routes: Routes = [
  {
    path: '',
    component: TableComponent
  },
  {
    path: 'pagination',
    component: PaginationTableComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule {
}
