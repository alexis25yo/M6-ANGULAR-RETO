import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StateLoginService } from "src/app/states/stateLogin/state-login.service";

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private state: StateLoginService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    let email = '';
    this.state.userEmail$.subscribe((value) => {
      email = value
    });
    if (email == 'alexis@gmail.com') {
      
      return true;
    } else {
      //this.router.navigate(['/auth']);
      return true;
    }
  }
}