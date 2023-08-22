import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './pages/table/table.component';
import { DetailsComponent } from './pages/details/details.component';
import AuthGuard from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: ':id',
    component: DetailsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
