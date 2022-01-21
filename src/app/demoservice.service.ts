import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor() { }
   
name="";
  dp(){
    console.log("hi"+this.name);
    // this.name=myname;
  }
  
}
