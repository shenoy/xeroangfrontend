import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  SERVER_URL = 'https://xeronodejs.herokuapp.com/users/signup';
  name: '';
  company: '';
  email: '';
  password: '';
  passwordConfirm: '';

  constructor(private http: HttpClient, private cookie: CookieService) {}

  ngOnInit(): void {}

  onSignup() {
    this.http
      .post<any>(this.SERVER_URL, {
        name: this.name,
        company: this.company,
        email: this.email,
        password: this.password,
        passwordConfirm: this.passwordConfirm,
      })
      .subscribe(
        (res) => {
          console.log(res);
          this.cookie.set('userid', res.data.user._id);
          this.cookie.set('jwt', res.token);
          alert('Signup successful. Please login');
          window.setTimeout(() => location.assign('https://xeroangular.netlify.app/login'),1000);
        },
        (err) => console.log(err)
      );
  }
}
