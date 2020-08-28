import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rk-check',
  templateUrl: './rk-check.component.html',
  styleUrls: ['./rk-check.component.css']
})
export class RkCheckComponent implements OnInit {
  showIt : boolean = true;

  constructor() { }

  hideButton() {
    
    this.showIt = !this.showIt;
  }

  ngOnInit(): void {
  }
  
}
