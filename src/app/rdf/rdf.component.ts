import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  loginForm =new FormGroup({
    e1:new FormControl('',Validators.required),
    p1:new FormControl('',Validators.required)
  })
  get e1(){
  return this.loginForm.controls;

  }
  get p1(){
    return this.loginForm.controls;
  
    }
}
