import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  // a = 0;

  // incre() {
  //   console.log("hi" + this.a++)
  // }
  // decre() {
  //   console.log("hi" + this.a--)
  // }
  // user(name:string,pass:string){
  //   alert(name +":"+pass)
  // }

  // company="Wondersoft";
  // myimage="../../assets/confident-handsome-student.jpg"
  // myusername:any
  user(name: string, pass: string) {

    // localStorage.setItem("myname",name);
    // localStorage.setItem("mypass",pass);

   
    if (name == localStorage.getItem("myname") && pass == localStorage.getItem("mypass")) {
      alert("Login successfully");
      // this.user.navigateByUrl('/home');
      this.route.navigate(['/home']);

    }
    else {
      alert('please try again');
    }




  }



}

