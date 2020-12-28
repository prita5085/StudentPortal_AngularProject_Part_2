import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-module',
  templateUrl: './student-module.component.html',
  styleUrls: ['./student-module.component.css']
})
export class StudentModuleComponent implements OnInit {

  id:number;
  user:User;

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

      updateUser(id: number) {
       this.router.navigate(['update', id])
    }
    }
  
  
  

  
     
