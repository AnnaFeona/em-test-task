/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../model/posts.intefaces';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private isLoading$ = new BehaviorSubject(true);

  private id!: number;

  private userId!: number;

  public post!: Observable<Post>;

  public author!: Observable<string>;

  public title!: string;

  public body!: string;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.post = this.api.getPost(this.id);
    this.post.subscribe({
      next: (res) => {
        this.title = res.title;
        this.body = res.body;
        this.userId = res.userId;
        this.author = this.api
          .getUser(this.userId)
          .pipe(map((user) => user.name));
        this.isLoading$.next(false);
      },
      error: (err) => {
        console.log(err.cause);
      },
      complete: () => console.log('complete'),
    });
  }

  ngOnDestroy() {
    this.isLoading$.unsubscribe();
  }
}
