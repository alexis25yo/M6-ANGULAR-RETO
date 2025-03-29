import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateLoginService {

  private _userEmail = new BehaviorSubject<string>('');
  private _contraseña = new BehaviorSubject<string>('');

  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable();
  }

  set userEmail(value: string) {
    this._userEmail.next(value);
  }

  get contraseña$(): Observable<string> {
    return this._contraseña.asObservable();
  }

  set contraseña(value: string) {
    this._contraseña.next(value);
  }
}
