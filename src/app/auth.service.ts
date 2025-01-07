import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { 

  }

  checkAuthStatus() {
    console.log('loginStatus', localStorage.getItem('loginStatus'))
    if (localStorage.getItem('loginStatus') === 'false') {
      this.router.navigate(['']);
    }
    // return localStorage.getItem('loginStatus')
  }

  setAuthStatus(status: boolean) {
    return localStorage.setItem('loginStatus', status as any as string)
  }
}
