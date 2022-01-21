import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit 
{

  constructor() { }

  ngOnInit(): void {
  }

  //if
  condition=true;

  //for loop 
  fruitsnull = " ";
  
  fruits:Array<string>=["apple","orange","Banana","grey"];

  addfruit(fruit:any){
    this.fruits.push(fruit);
    this.fruitsnull= " ";
  }

  days:Array<string>=["Sunday","Moday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
//switch case

// myval=2;

clr:string = "red"


selected= {
  name: 'Red',
  color: 'red'
}

data = [{
  name: 'Red',
  color: 'red'
}, {
  name: 'green',
  color: '#008000'
}, {
  name: 'yello',
  color: 'yellow'
}, {
  name: 'pink',
  color: 'pink'
}]

// <select [(ngModel)]="selected">
//     <option *ngFor="let datas of data" [ngStyle]="{'color': datas.color}" 
//     [ngValue]="datas">{{datas.name}}</option>
    
//    </select>
  
//   <div [ngStyle]="{'background-color': selected.color}">{{selected.name}}</div>












}
