import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Level } from './level.model';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  public resourceUrl = 'http://localhost:8080/api/levels';

  constructor(private http: HttpClient) { }

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
