import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})
export class LoginStudentComponent implements OnInit {

  user= new User();
  msg='';
  id:Number;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    
  }

  loginStudent(){
    this.userService.loginStudent(this.user).subscribe(
      data => {
        let id = data['id'];
        console.log("response received");
        this.router.navigate(['studentmodule', id]);
      }, 
      error => {
        console.log("expection occured");
        this.msg='Invalid credentials. Please enter valid username and password';
      }
      )
  }
}
