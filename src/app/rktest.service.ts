import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RktestService {

  constructor() { }
  
  printConsole(arg) {
    console.log("my log--->" + arg)
  }
}
