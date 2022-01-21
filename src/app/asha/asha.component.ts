import { Component, OnInit } from '@angular/core';
import { CharmsgService } from '../charmsg.service';

@Component({
  selector: 'app-asha',
  templateUrl: './asha.component.html',
  styleUrls: ['./asha.component.css']
})
export class AshaComponent implements OnInit {

  constructor(private var1:CharmsgService) { }

  ngOnInit(): void {
  }
  msgs=[];
  xyz(ashaname:any){
    // console.log("hi"+ashaname);
    this.msgs =this.var1.chat(ashaname)
  }
 
}
