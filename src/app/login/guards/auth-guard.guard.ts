import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // if (localStorage.getItem('currentUser')) {
    //   console.log('canActivate');
    //   return true;
    // }
    // console.log('canActivate2');
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return true;
  }
}
