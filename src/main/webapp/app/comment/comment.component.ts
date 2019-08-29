import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService
    .getAll()
    .subscribe(
      (res: HttpResponse<Comment[]>) => this.onSuccess(res.body, res.headers),
      (res: HttpResponse<any>) => this.onError(res.body));
}

private onSuccess(data, headers) {
  this.comments = data;
}

private onError(error) {
  //this.alertService.error(error.error, error.message, null);
}

}
