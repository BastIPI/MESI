import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ElementImage } from './element_image.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElementImageService {

  public resourceUrl = 'http://localhost:8080/api/elementimages';

  constructor(private http: HttpClient) { }

  create(elementImage: ElementImage): Observable<HttpResponse<ElementImage>> {
    return this.http.post<ElementImage>(this.resourceUrl, elementImage, { observe: 'response' });
  }

  getAll(): Observable<HttpResponse<ElementImage[]>> {
    return this.http.get<ElementImage[]>(this.resourceUrl, { observe: 'response' });
  }
}
