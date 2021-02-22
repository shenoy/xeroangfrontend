import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value:string;
  isValid:boolean;
  constructor(private cookie: CookieService) {}

  ngOnInit(): void {
    this.value = this.cookie.get('jwt');
    this.isValid=this.value.length>20?true:false;    
    console.log("COOKIE VALUE IN APP COMPONENT >>>", this.value);
  }
}
