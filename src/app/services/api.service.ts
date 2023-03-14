import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private API_URL = 'http://localhost:8000/user';
  constructor(private http: HttpClient, private router: Router) {}
  getClient() {
    return this.http.get(`${this.API_URL}/getUser`);
  }
  createUser(name: string, email: string, phone: string) {
    console.log('uphello');
    return this.http.post(`${this.API_URL}/createUser`, { name, email, phone });
  }
}
