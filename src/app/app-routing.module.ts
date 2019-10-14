import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/components/login.component';
import { CoursesComponent } from './courses/components/courses.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { AuthGuard } from './login/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: AddEditCourseComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
