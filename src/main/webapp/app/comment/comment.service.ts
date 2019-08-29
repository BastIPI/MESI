import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public resourceUrl = 'http://localhost:8080/api/comments';

  constructor(private http: HttpClient) { }
  getAll(): Observable<HttpResponse<Comment[]>> {
    return this.http.get<Comment[]>(this.resourceUrl, { observe: 'response' });
}
}
