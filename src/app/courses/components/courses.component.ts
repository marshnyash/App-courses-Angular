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
  public searchText: string;

  constructor(private coursesService: CoursesService) {}

  public ngOnInit() {
    this.getCourses();
  }

  public onSearchCourses(): void {
    this.getCourses();
    if (this.searchText) {
      const newCoursesList = [];
      this.coursesList.forEach(data => {
        if (data.title.toLowerCase().includes(this.searchText.toLowerCase())) {
          newCoursesList.push(data);
          this.coursesList = newCoursesList;
        }
      });
    }
  }

  public getCourses(): void {
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
