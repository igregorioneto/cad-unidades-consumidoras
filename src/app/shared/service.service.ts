import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  listarUnidades(): Observable<any> {
    return this._http.get<any>(`${environment.baseURL}/unidadeConsumidora`)
  }
}
