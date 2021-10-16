import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (private router: Router){ }

  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    const token = window.localStorage.getItem('token');
    if(token){
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
