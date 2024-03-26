import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthComponent } from "../auth/auth.component";
import { AppComponent } from "src/app/app.component";

@Injectable({ providedIn: 'root' })

export class AuthActivate implements CanActivate {
    constructor(private userService: AuthComponent) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.userService.isLoggedIn) {
            return true
        } else {
            return false;
        }
    }
}