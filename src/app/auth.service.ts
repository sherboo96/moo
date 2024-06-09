import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  login() {
    this.isLoggedIn = true;
    // Simulate setting an access token (for example, in localStorage)
    localStorage.setItem('accessToken', 'dummy-access-token');
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('accessToken');
  }
}
