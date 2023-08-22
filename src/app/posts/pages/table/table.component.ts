/* eslint-disable import/no-extraneous-dependencies */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../model/posts.intefaces';
import { Router } from '@angular/router';
// import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  // private list = new MatTableDataSource<Post[]>([]);
  public dataSource!: Post[];

  public displayedColumns: string[] = ['id', 'title', 'body'];

  constructor(
    private api: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    this.api.getList().subscribe((res) => {
      this.dataSource = res;
    });
    console.log();
  }

  public preview(str: string): string {
    return `${str.slice(0, 100)}...`;
  }

  public show(row: Post) {
    console.log('row click:', row.id);
    this.router.navigate([`/posts/${row.id}`]);
  }
}
