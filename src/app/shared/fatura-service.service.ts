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

}
