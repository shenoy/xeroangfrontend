import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {

  SERVER_URL='https://xeronodejs.herokuapp.com';
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get('https://xeronodejs.herokuapp.com/users/data');
  }

  getUserData() {
    return this.http.get('https://xeronodejs.herokuapp.com/users/userData');
  }

  onLogin(email, password) {
    console.log(email, password);
    return this.http.post('https://xeronodejs.herokuapp.com/users/login', {
      email,
      password,
    });
  }

  onSignup(name, company, email, password, passwordConfirm) {
    console.log(name, company, email, password, passwordConfirm);
    return this.http.post('https://xeronodejs.herokuapp.com/users/signup', {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm,
    });
  }

  onLogout() {
    return this.http.get('https://xeronodejs.herokuapp.com/users/logout');
  }
}
