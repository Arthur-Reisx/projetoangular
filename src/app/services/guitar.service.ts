import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuitarService {
  private apiUrl = 'http://localhost:3000/guitars';  // URL do json-server

  constructor(private http: HttpClient) {}

  getGuitars(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
