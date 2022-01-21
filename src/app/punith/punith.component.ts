import { Component, OnInit } from '@angular/core';
import { CharmsgService } from '../charmsg.service';

@Component({
  selector: 'app-punith',
  templateUrl: './punith.component.html',
  styleUrls: ['./punith.component.css']
})
export class PunithComponent implements OnInit {

  constructor(private var2:CharmsgService) { }

  ngOnInit(): void {
  }
  msgs=[];
  xyz(ashaname:any){
    // console.log("hi"+ashaname);
    this.msgs =this.var2.chat(ashaname)
  }
}
