import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../courses/services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.scss']
})
export class DetailsCourseComponent implements OnInit {
  @Input() public course: any = 'course';
  @Output() public deleteCourse: EventEmitter<void> = new EventEmitter();

  constructor(private coursesService: CoursesService, private router: Router) {}

  public ngOnInit() {
    console.log('item', this.course);
  }

  public onDelete(): void {
    if (window.confirm('Are you sure?')) {
      this.deleteCourse.emit(this.course.id);
    }
  }

  public onEdit() {
    this.router.navigate(['/courses', this.course.id]);
  }
}
