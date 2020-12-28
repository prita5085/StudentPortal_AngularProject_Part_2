import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id:number;
  user:User;
  submitted = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
      this.user = new User();

      this.id = this.route.snapshot.params['id'];

      this.userService.getUser(this.id)
      .subscribe(data=> {
        console.log(data)
        this.user = data;
        }, error=> console.log(error));
      }

      updateUser(){
        this.submitted = false;
        this.userService.updateUser(this.id, this.user)
        .subscribe(data => console.log(data), error=> console.log(error));
        this.user = new User();
        this.goto();
      }

      onSubmit(){
        this.submitted = true;
        this.updateUser();
      }

      goto(){
        this.router.navigate(['studentmodule', this.id])
      }


}
