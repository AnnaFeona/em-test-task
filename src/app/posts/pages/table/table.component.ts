/* eslint-disable import/no-extraneous-dependencies */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../model/posts.ntefaces';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  // private list = new MatTableDataSource<Post[]>([]);
  public dataSource!: Post[];

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getList().subscribe((res) => {
      this.dataSource = res;
    });
    console.log();
  }
}
