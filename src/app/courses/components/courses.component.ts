import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICourse } from '../interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, OnDestroy {
  private isDestroy$: Subject<void> = new Subject();
  public coursesList: ICourse[];

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.getCourses();
  }

  public getCourses() {
    this.coursesService
      .getAllCourses()
      .pipe(takeUntil(this.isDestroy$))
      .subscribe(course => {
        this.coursesList = course;
      });

    console.log('this.coursesList ', this.coursesList);
  }

  public ngOnDestroy(): void {
    this.isDestroy$.next();
    this.isDestroy$.complete();
  }
}
