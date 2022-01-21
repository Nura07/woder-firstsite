import { Component, OnInit } from '@angular/core';
import { DemoserviceService } from '../demoservice.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

  constructor(private serviceone:DemoserviceService) 
  { 
    
  }

  ngOnInit(): void
  {

  }
  open(myname:any){
    console.log("hi my name is"+ myname);
  }



  // open()
  // {
  //   this.serviceone.dp();
  // }
}
