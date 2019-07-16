import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evaluation } from './evaluation.model';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  public resourceUrl = 'http://localhost:8080/api/evaluations';

  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<Evaluation[]>> {
    return this.http.get<Evaluation[]>(this.resourceUrl, { observe: 'response' });
  }

  create(evaluation: Evaluation): Observable<HttpResponse<Evaluation>> {
    return this.http.post<Evaluation>(this.resourceUrl, evaluation, { observe: 'response' });
  }

  update(evaluation: Evaluation): Observable<HttpResponse<Evaluation>> {
    return this.http.put<Evaluation>(this.resourceUrl, evaluation, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<Evaluation>> {
    return this.http.get<Evaluation>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  /*query(req?: any): Observable<HttpResponse<User[]>> {
    const options = createRequestOption(req);
    return this.http.get<User[]>(this.resourceUrl, { params: options, observe: 'response' });
  }*/

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}

