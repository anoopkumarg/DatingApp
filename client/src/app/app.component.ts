import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  data$: Observable<any>;

  constructor(private http: HttpClient) {

  }

  ngOnInit(){
   this.data$ =  this.http.get('https://localhost:5001/api/users');
  }
}
