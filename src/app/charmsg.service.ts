import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharmsgService {

  constructor() { }

  chatmsg:any=[];
  chat(mymsg:any){
    this.chatmsg.push(mymsg)
    return this.chatmsg;
  }

  // comman(myname:any){
  //   console.log("hi service"+myname)
  // }


}
