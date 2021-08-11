import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaturaServiceService {

  private baseURL: string = "https://api.dev.grupogera.com/processo-seletivo"

  constructor(private _http: HttpClient) { }

  adicionarFaturaNaUnidade(fat: any): Observable<any> {
    return this._http.post<any>(`${this.baseURL}/fatura`,fat)
  }

  listagemFaturasDaUnidade(): Observable<any> {
    return this._http.get<any>(`${this.baseURL}/fatura`)
  } 

  informacaoFaturaId(id: number): Observable<any> {
    return this._http.get<any>(`${this.baseURL}/fatura/${id}`)
  }

  alterarFaturaDaUnidade(fat: any,id: number): Observable<any> {
    return this._http.put<any>(`${this.baseURL}/fatura/${id}`, fat)
  }

  excluirFaturaDaUnidade(id: number): Observable<any> {
    return this._http.delete<any>(`${this.baseURL}/fatura/${id}`)
  }

}
