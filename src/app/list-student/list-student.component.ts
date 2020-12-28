import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  users: Observable<User[]>;

  constructor(private userService: UserService) { }

    ngOnInit() {
      this.reloadData();
    }
  
    reloadData() {
      this.users = this.userService.getUsersList();
    }
  
    deleteUser(id: number) {
      this.userService.deleteUser(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
  }

}
