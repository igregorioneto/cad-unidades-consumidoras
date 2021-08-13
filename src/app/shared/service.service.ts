import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { map, catchError } from "rxjs/operators";
import { Unidade } from './interface/unidade';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private baseURL: string = "https://api.dev.grupogera.com/processo-seletivo"

  constructor(private _http: HttpClient) { }

  listarUnidades(): Observable<Unidade[]> {
    const url = this.baseURL

    return this._http.get<Unidade[]>(`${url}/unidadeConsumidora`).pipe(
      catchError(this.handleError)
    )
  }

  criarUnidades(u: Unidade): Observable<Unidade> {
    const url = this.baseURL

    return this._http.post<Unidade>(`${url}/unidadeConsumidora`, u).pipe(
      catchError(this.handleError)
    )
  }

  alterarUnidades(u: Unidade, id: number): Observable<Unidade> {
    const url = this.baseURL

    return this._http.put<Unidade>(`${url}/unidadeConsumidora/${id}`, u).pipe(
      catchError(this.handleError)
    )
  }

  excluirUnidades(u: Unidade): Observable<Unidade> {
    const url = this.baseURL

    return this._http.delete<Unidade>(`${url}/unidadeConsumidora/${u.id}`).pipe(
      catchError(this.handleError)
    )
  }

  informacaoUnidadeId(id: number): Observable<any> {
    const url = this.baseURL

    return this._http.get<Unidade>(`${url}/unidadeConsumidora/${id}`).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: any): Observable<any> {
    return throwError(error)
  }
  
}
