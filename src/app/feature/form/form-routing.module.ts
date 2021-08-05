import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InputsComponent} from './pages/input/inputs.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inputs',
    pathMatch: 'full',
  },
  {
    path: 'inputs',
    component: InputsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
