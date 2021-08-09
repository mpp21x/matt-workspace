import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BaseComponent} from './shared/layout/components/base/base.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: 'form',
        loadChildren: () => import('./feature/form/form.module').then(m => m.FormModule),
      },
      {
        path: 'table',
        loadChildren: () => import('./feature/table/table.module').then(m => m.TableModule),
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
