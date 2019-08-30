import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment.model'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public resourceUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) { }

  create(comment: Comment): Observable<HttpResponse<Comment[]>> {
    return this.http.post<Comment[]>(this.resourceUrl, comment, { observe: 'response' });
  }
}
