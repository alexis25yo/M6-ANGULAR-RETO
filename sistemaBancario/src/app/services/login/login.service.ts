import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/cuenta/transacciones/2';

  constructor(private httpClient: HttpClient) { }

  getHistorialCuenta(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }
}
