import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LevelMechanic } from './level_mechanic.model';

@Injectable({
  providedIn: 'root'
})
export class LevelMechanicService {

  public resourceUrl = 'http://localhost:8080/api/levelMechanics';

  constructor(private http: HttpClient) { }

  getAll(): Observable<HttpResponse<LevelMechanic[]>> {
      return this.http.get<LevelMechanic[]>(this.resourceUrl, { observe: 'response' });
  }

  create(levelMechanic: LevelMechanic): Observable<HttpResponse<LevelMechanic>> {
    return this.http.post<LevelMechanic>(this.resourceUrl, levelMechanic, { observe: 'response' });
  }

  update(levelMechanic: LevelMechanic): Observable<HttpResponse<LevelMechanic>> {
    return this.http.put<LevelMechanic>(this.resourceUrl, levelMechanic, { observe: 'response' });
  }

  find(id: number): Observable<HttpResponse<LevelMechanic>> {
    return this.http.get<LevelMechanic>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  /*query(req?: any): Observable<HttpResponse<User[]>> {
    const options = createRequestOption(req);
    return this.http.get<User[]>(this.resourceUrl, { params: options, observe: 'response' });
  }*/

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }
}
