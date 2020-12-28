import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { StudentModuleComponent } from './student-module/student-module.component';
import { UpdateUserComponent } from './update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginAdminComponent,
    AddStudentComponent,
    ListStudentComponent,
    AdminModuleComponent,
    LoginStudentComponent,
    StudentModuleComponent,
    UpdateUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
