import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { TableComponent } from './pages/table/table.component';
import { DetailsComponent } from './pages/details/details.component';
import { TableItemComponent } from './components/table-item/table-item.component';

@NgModule({
  declarations: [TableComponent, DetailsComponent, TableItemComponent],
  imports: [CommonModule, PostsRoutingModule],
})
export class PostsModule {}
