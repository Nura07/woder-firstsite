import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit {

  constructor() { 
    console.log("welcome to all")
  }

  ngOnInit(): void {
    console.log("how are you")
  }

}