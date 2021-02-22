import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss'],
})
export class BalanceComponent implements OnInit {
  reports;  
  balances;
  isValid: boolean;
  isLoggedIn: boolean;
  

  constructor(private http: HttpService, private cookie: CookieService) {}
  ngOnInit(): void {
    if(this.cookie.get('jwt').length>20){
      this.isLoggedIn=true; 
      this.http.getData().subscribe((data) => {
        this.reports = data;
        this.balances=this.reports[1];
        this.isValid = this.balances.length > 0 ? true : false;
        console.log('reports in BALANCE COMPONENT>>', this.reports);
      });
    }else{
      this.isLoggedIn=false;
    }
  }
}
