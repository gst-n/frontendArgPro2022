import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './servicios/token.service';

@Injectable({
  providedIn: 'root'
})
export class GuardSeguridadGuard implements CanActivate {

  constructor(private tokenService:TokenService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.tokenService.getToken()){
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }
  
}
