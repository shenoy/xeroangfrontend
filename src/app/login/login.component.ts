import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  SERVER_URL = 'https://xeronodejs.herokuapp.com/users/login';
  email: '';
  password: '';

  tokenSource;
  currentToken;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  ngOnInit(): void {
    this.tokenSource = new BehaviorSubject('default token');
    this.currentToken = this.tokenSource.asObservable();
    this.currentToken.subscribe((val) => console.log('VAL : ', val));
  }

  onLogin() {
    this.http
      .post<any>(this.SERVER_URL, {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res) => {
          console.log(res);
          if (res.status === 'success') {
            this.cookie.set('userid', res.data.user._id);
            this.cookie.set('jwt', res.token);
            this.tokenSource.next(res.token);
            window.setTimeout(() => location.assign('https://xeroangular.netlify.app/reports'), 1000);
          }
        },
        (err) => alert(err.message)
      );
  }
}


