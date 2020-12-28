import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { StudentModuleComponent } from './student-module/student-module.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full'  },
  { path: 'welcome', component: HomePageComponent },
  { path: 'loginadmin', component: LoginAdminComponent },
  { path: 'loginstudent', component: LoginStudentComponent},
  { path: 'adminmodule', component: AdminModuleComponent},
  { path: 'studentmodule/:id', component: StudentModuleComponent},
  { path: 'add', component: AddStudentComponent },
  { path: 'students', component: ListStudentComponent },
  { path: 'update/:id', component: UpdateUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
