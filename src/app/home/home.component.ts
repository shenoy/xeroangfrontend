import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  user: Object;
  name: string;
  isLoggedIn: boolean;

  constructor(private http: HttpService, private cookie: CookieService) {}

  ngOnInit(): void {
    if (this.cookie.get('jwt').length > 20) {
      this.isLoggedIn = true;
      this.http.getData().subscribe((data) => {
        this.user = data;
        // this.isValid = this.reports.length > 0 ? true : false;
        this.name = this.user[0].name;
        console.log('USER FROM HOME>>>', this.name);
      });
    } else {
      this.isLoggedIn = false;
    }
  }

  onClick() {
    window.location.assign('https://xeroangular.netlify.app/reports');
  }

  onSignout() {
    window.location.assign('https://xeroangular.netlify.app/logout');
  }

  onLogin() {
    window.location.assign('https://xeroangular.netlify.app/login');
  }

  onProfileView() {
    window.location.assign('https://xeroangular.netlify.app/account');
  }
}
