import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { 

  }

  checkAuthStatus() {
  
    if (typeof window !== 'undefined') {
      console.log('loginStatus', localStorage.getItem('loginStatus'))
    }

    if (typeof window !== 'undefined' && localStorage.getItem('loginStatus') === 'false') {
      this.router.navigate(['']);
    }
  }

  setAuthStatus(status: boolean) {
    return localStorage.setItem('loginStatus', status as any as string)
  }
}
