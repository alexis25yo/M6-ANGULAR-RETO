import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaSaldoService {

    
  
    constructor(private httpClient: HttpClient) { }
  
    getConsultarCuenta(apiUrl: string): Observable<any> {
      return this.httpClient.get<any>(apiUrl);
    }
}
