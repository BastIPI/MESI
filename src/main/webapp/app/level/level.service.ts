import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Level } from './level.model';
import { Category } from '../category/category.model';
import { Comment } from '../comment/comment.model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  public resourceUrl = 'http://localhost:8080/api/levels';

  constructor(private http: HttpClient ) { }

  getLevels(): Observable<Level[]>{
    const levels = new Array<Level>();

    levels.push(
      new Level({
        id: 1,
        title: 'game1',
        category: new Category({id:1,title:"titre",description:""}),
        description: 'description jeu 1',
        dateCreated: '10/01/1995',
        dateEdited: '10/01/1995',
        comments: [],
        evaluationPos: 4,
        evaluationNeg: 3
      })
    );
    levels.push(
      new Level({
        id: 2,
        title: 'game2',
        category: new Category({id:2,title:"titre",description:""}),
        description: 'description jeu 2',
        dateCreated: '11/01/1995',
        dateEdited: '11/01/1995',
        comments: [],
        evaluationPos: 4,
        evaluationNeg: 3
      })
    );
    levels.push(
      new Level({
        id: 3,
        title: 'game3',
        category: new Category({id:3,title:"titre",description:""}),
        description: 'description jeu 3',
        dateCreated: '13/01/1995',
        dateEdited: '13/01/1995',
        comments: [],
        evaluationPos: 4,
        evaluationNeg: 3
      })
    );
    levels.push(
      new Level({
        id: 4,
        title: 'game4',
        category: new Category({id:1,title:"titre",description:""}),
        description: 'description jeu 4',
        dateCreated: '14/01/1995',
        dateEdited: '14/01/1995',
        comments: [],
        evaluationPos: 4,
        evaluationNeg: 3
      })
    );
    levels.push(
      new Level({
        id: 5,
        title: 'game5',
        category: new Category({id:2,title:"titre",description:""}),
        description: 'description jeu 5',
        dateCreated: '15/01/1995',
        dateEdited: '15/01/1995',
        comments: [],
        evaluationPos: 4,
        evaluationNeg: 3
      })
    );
    levels.push(
      new Level({
        id: 6,
        title: 'game6',
        category: new Category({id:3,title:"titre",description:""}),
        description: 'description jeu 6',
        dateCreated: '16/01/1995',
        dateEdited: '16/01/1995',
        comments: [],
        evaluationPos: 4,
        evaluationNeg: 3
      })
    );
    return of(levels);
  }

  getAll(): Observable<HttpResponse<Level[]>> {
      return this.http.get<Level[]>(this.resourceUrl, { observe: 'response' });
  }

  create(level: Level): Observable<HttpResponse<Level>> {
    return this.http.post<Level>(this.resourceUrl, level, { observe: 'response' });
  }

  update(level: Level): Observable<HttpResponse<Level>> {
    return this.http.put<Level>(this.resourceUrl, level, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<Level>> {
    return this.http.get<Level>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  /*query(req?: any): Observable<HttpResponse<User[]>> {
    const options = createRequestOption(req);
    return this.http.get<User[]>(this.resourceUrl, { params: options, observe: 'response' });
  }*/

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
