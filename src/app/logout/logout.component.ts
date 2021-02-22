import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  SERVER_URL = 'https://xeronodejs.herokuapp.com/users/logout';
  value: string;
  isValid: boolean;

  constructor(private http: HttpClient, private cookie: CookieService) {}


    ngOnInit(): void {
      this.value = this.cookie.get('jwt');
      this.isValid = this.value.length > 20 ? true : false;
  }

  onLogout() {
    this.http.get(this.SERVER_URL).subscribe(
      (res) => {
        if (res['status'] === 'success') {
          this.cookie.set('userid', 'none');
          this.cookie.set('jwt', 'loggedout');
          window.location.href = window.location.href;
        }
      },
      (err) => alert(err.message)
    );
  }
}
