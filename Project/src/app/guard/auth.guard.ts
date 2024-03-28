import { Injectable } from '@angular/core';
import { CanActivateChildFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild, CanLoad, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthComponent } from '../tools/auth/auth.component';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthComponent, private router: Router, private loginSheet: MatBottomSheetRef) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    throw new Error('Method not implemented.');
  }

  CanActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isAuthenticated()) {
      return true; // Allow navigation if user is authenticated
    } else {
      // Redirect to login page with returnUrl parameter
      this.router.navigate(['']).then(() => {
        this.router.navigate([''])
      });

      return false;
      ;
    }
  }
}
