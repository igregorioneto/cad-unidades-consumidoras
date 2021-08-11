import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseURL: string = "https://api.dev.grupogera.com/processo-seletivo"

  constructor(private _http: HttpClient) { }

  listarUnidades(): Observable<any> {
    const url = this.baseURL

    return this._http.get<any>(`${url}/unidadeConsumidora`).pipe(
      catchError(this.handleError)
    )
  }

  criarUnidades(u: any): Observable<any> {
    const url = this.baseURL

    return this._http.post<any>(`${url}/unidadeConsumidora`, u).pipe(
      catchError(this.handleError)
    )
  }

  alterarUnidades(u: any, id: number): Observable<any> {
    const url = this.baseURL

    return this._http.put<any>(`${url}/unidadeConsumidora/${id}`, u).pipe(
      catchError(this.handleError)
    )
  }

  excluirUnidades(u: any): Observable<any> {
    const url = this.baseURL

    return this._http.delete<any>(`${url}/unidadeConsumidora/${u.id}`).pipe(
      catchError(this.handleError)
    )
  }

  informacaoUnidadeId(id: number): Observable<any> {
    const url = this.baseURL

    return this._http.get<any>(`${url}/unidadeConsumidora/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<any> {
    return throwError(error)
  }
  
}
