import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fatura } from './interface/fatura';

@Injectable({
  providedIn: 'root'
})
export class FaturaServiceService {

  private baseURL: string = "https://api.dev.grupogera.com/processo-seletivo"

  constructor(private _http: HttpClient) { }

  adicionarFaturaNaUnidade(fat: Fatura[]): Observable<Fatura> {
    return this._http.post<Fatura>(`${this.baseURL}/fatura`,fat)
  }

  listagemFaturasDaUnidade(): Observable<Fatura[]> {
    return this._http.get<Fatura[]>(`${this.baseURL}/fatura`)
  } 

  informacaoFaturaId(id: number): Observable<Fatura> {
    return this._http.get<Fatura>(`${this.baseURL}/fatura/${id}`)
  }

  alterarFaturaDaUnidade(fat: Fatura[],id: number): Observable<Fatura> {
    return this._http.put<Fatura>(`${this.baseURL}/fatura/${id}`, fat)
  }

  excluirFaturaDaUnidade(id: number): Observable<Fatura> {
    return this._http.delete<Fatura>(`${this.baseURL}/fatura/${id}`)
  }

}
