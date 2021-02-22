import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  allData: Object;
  name;
  user;
  id;
  email;
  company;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getData().subscribe((data) => {
      this.allData = data;
      this.user = this.allData[0];
    
      console.log('USER DATA IN ACCOUNT', this.user);
    });
  }
}
