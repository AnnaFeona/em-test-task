/* eslint-disable import/no-extraneous-dependencies */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { Post } from '../../model/posts.intefaces';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { STORAGE_KEY_PREFIX } from '../../../shared/constants';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  public dataSource!: MatTableDataSource<Post>;

  public displayedColumns: string[] = ['id', 'title', 'body'];

  public pageSize = 10;

  public page = 0;

  private readonly stateKey = `${STORAGE_KEY_PREFIX}-state`;

  constructor(
    private api: ApiService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.getState();
    this.api.getList().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator as MatPaginator;
    });
  }

  public preview(str: string): string {
    return `${str.slice(0, 100)}...`;
  }

  public show(row: Post) {
    this.saveState();
    this.router.navigate([`/posts/${row.id}`]);
  }

  private saveState(): void {
    const paginationState = JSON.stringify({
      pageSize: this.paginator?.pageSize,
      page: this.paginator?.pageIndex,
    });

    localStorage.setItem(this.stateKey, paginationState);
  }

  private getState(): void {
    const state = localStorage.getItem(this.stateKey);

    if (!state) return;

    this.pageSize = JSON.parse(state).pageSize;
    this.page = JSON.parse(state).page;
  }

  private removeState(): void {
    localStorage.removeItem(this.stateKey);
  }
}
