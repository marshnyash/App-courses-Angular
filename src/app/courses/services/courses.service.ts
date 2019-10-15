import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: Array<ICourse> = [
    {
      title: 'Video 1',
      duration: 3670,
      date: 2019,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    },
    {
      title: 'Video 2',
      duration: 3600,
      date: 2019,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    },
    {
      title: 'Video 3',
      duration: 5000,
      date: 2019,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    },
    {
      title: 'Video 4',
      duration: 0,
      date: 2019,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    }
  ];

  constructor() {}

  public getAllCourses(): Observable<ICourse[]> {
    return of(this.courses);
  }

  public updateCourse(id: number) {}

  public deleteCourse(id: number) {}
}
