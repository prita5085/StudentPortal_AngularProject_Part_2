import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  user: User = new User();
  submitted = false;
  msg='';

  constructor(private userService: UserService) { }

  ngOnInit(){
    
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userService.addUser(this.user)
      .subscribe(
        data => {
        console.log("response received");
        this.user = new User();
        this.onSubmit();
        }, 
        error => {
        console.log("exception occured");
        this.msg='This student already exist';
        }
        );
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
