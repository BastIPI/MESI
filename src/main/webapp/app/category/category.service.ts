import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  public resourceUrl = 'http://localhost:8080/api/categories';

  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<Category[]>> {
    return this.http.get<Category[]>(this.resourceUrl, { observe: 'response' });
  }

  create(category: Category): Observable<HttpResponse<Category>> {
    return this.http.post<Category>(this.resourceUrl, category, { observe: 'response' });
  }

  update(category: Category): Observable<HttpResponse<Category>> {
    return this.http.put<Category>(this.resourceUrl, category, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<Category>> {
    return this.http.get<Category>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  /*query(req?: any): Observable<HttpResponse<User[]>> {
    const options = createRequestOption(req);
    return this.http.get<User[]>(this.resourceUrl, { params: options, observe: 'response' });
  }*/

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
