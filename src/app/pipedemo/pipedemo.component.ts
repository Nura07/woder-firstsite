import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    }
    str:string ="hello Arun How are yoU"
    d2 =new Date();

    s1:string ="I am Fine"

    amount:string="123456"

    emp ={'Name':'Arun','age':22}
}
