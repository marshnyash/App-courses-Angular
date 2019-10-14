import { Component, OnInit, Input } from '@angular/core';
import { ICourse } from '../courses/interfaces/course';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
  styleUrls: ['./details-course.component.scss']
})
export class DetailsCourseComponent implements OnInit {
  @Input() public course: any = 'course';
  @Input() public index: any = 'index';

  constructor() {}

  ngOnInit() {
    console.log('item', this.course);
    console.log('index', this.index);
  }
}
