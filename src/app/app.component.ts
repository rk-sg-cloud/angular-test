import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RktestService } from './rktest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rk-tech-ui';
  
  routes = [
    { linkName: 'Show', url: "show"},
    { linkName: 'CheckPosts', url: "viewPosts"}
  ];

  constructor(private http: HttpClient,
    private mysvr: RktestService) {
    mysvr.printConsole("Got the Service");
  }

  ngOnInit() {
    let obs = this.http.get('https://gorest.co.in/public-api/posts');
    obs.subscribe(() => console.log("Got the response"));
  }
}
