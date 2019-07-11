import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../user/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    
    public resourceUrl = 'http://localhost:8080/api/users';

    constructor(private http: HttpClient) { }

    getAll(): Observable<HttpResponse<User[]>> {
        return this.http.get<User[]>(this.resourceUrl, { observe: 'response' });
    }

    create(user: User): Observable<HttpResponse<User>> {
      return this.http.post<User>(this.resourceUrl, user, { observe: 'response' });
    }
  
    update(user: User): Observable<HttpResponse<User>> {
      return this.http.put<User>(this.resourceUrl, user, { observe: 'response' });
    }
  
    find(userName: string): Observable<HttpResponse<User>> {
      return this.http.get<User>(`${this.resourceUrl}/${userName}`, { observe: 'response' });
    }
  
    /*query(req?: any): Observable<HttpResponse<User[]>> {
      const options = createRequestOption(req);
      return this.http.get<User[]>(this.resourceUrl, { params: options, observe: 'response' });
    }*/
  
    delete(userName: string): Observable<HttpResponse<any>> {
      return this.http.delete(`${this.resourceUrl}/${userName}`, { observe: 'response' });
    }
  
    authorities(): Observable<string[]> {
      return this.http.get<string[]>('http://localhost:8080/api/users/authorities');
    }
}