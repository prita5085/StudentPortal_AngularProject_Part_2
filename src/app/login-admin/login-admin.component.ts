import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  user = new User();
  msg='';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  loginAdmin(){
    this.userService.loginAdmin(this.user).subscribe(
      data => {
        console.log("response received");
        this.router.navigate(['/adminmodule']);
      }, 
      error => {
        console.log("expection occured");
        this.msg='Invalid credentials. Please enter valid username and password';
      }
      )
  }
}
