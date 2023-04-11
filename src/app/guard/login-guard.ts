import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(): boolean | Observable<boolean> {

        if (localStorage.getItem('userName') != null) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }
}