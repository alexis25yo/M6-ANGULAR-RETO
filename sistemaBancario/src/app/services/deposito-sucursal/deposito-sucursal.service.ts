import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DepositoSucursalService {
  private apiUrl = 'http://localhost:8080/cuenta/deposito/sucursal/1';

  constructor(private httpClient: HttpClient) {}

  postSucursalBancaria(apiUrl: string, monto: number): Observable<any> {
    const params = new HttpParams().set('monto', monto.toString());
    return this.httpClient.post<any>(apiUrl, null, { params });
  }
}
