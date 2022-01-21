import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css']
})
export class S2Component implements OnInit {

  constructor(private servicetwo:DemoserviceService) { }

  ngOnInit(): void {
  }
  // open(){
  //   this.servicetwo.dp();
  // }
  name="";
  dbsername="";
  open(){
    this.servicetwo.dp();
    // this.dbsername =this.servicetwo.name;
  }

}
