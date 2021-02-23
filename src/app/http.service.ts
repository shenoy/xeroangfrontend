import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  SERVER_URL = 'https://assetmanpro.herokuapp.com';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.SERVER_URL}/users/data`);
  }

  getUserData() {
    return this.http.get(`${this.SERVER_URL}/users/userData`);
  }

  onLogin(email, password) {
    console.log(email, password);
    return this.http.post(`${this.SERVER_URL}/users/login`, {
      email,
      password,
    });
  }

  onSignup(name, company, email, password, passwordConfirm) {
    console.log(name, company, email, password, passwordConfirm);
    return this.http.post(`${this.SERVER_URL}/users/signup`, {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    });
  }

  onLogout() {
    return this.http.get(`${this.SERVER_URL}/users/logout`);
  }
}
