import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data:NgForm)
  {
    console.log(data);
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
