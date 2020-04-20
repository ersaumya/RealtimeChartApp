import { Component, OnInit } from '@angular/core';
import { SignalrService } from './Services/signalr.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    public signalrService: SignalrService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.signalrService.startConnection();
    this.signalrService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get('http://localhost:5000/api/chart').subscribe((res) => {
      console.log(res);
    });
  };
}
