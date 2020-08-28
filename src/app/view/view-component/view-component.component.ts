import { Component, OnInit } from '@angular/core';
import { RktestService } from 'src/app/rktest.service';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {
  response : any;
  postId : string = "";
  isPostIdAvailable: boolean = false;

  constructor(private http: HttpClient,
    private mysvr: RktestService) {
    mysvr.printConsole("Got Innner Module-- Service");
  }

  searchPost() {
    this.http.get('https://gorest.co.in/public-api/posts/' + this.postId)
             .subscribe((response) => {
               if ( response != null ) {
                this.response = response;
                this.isPostIdAvailable = true;
               }
             }, (error: HttpErrorResponse)  => {
                console.log("li");
            });
  }

  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  ngOnInit(): void {
  }
}
