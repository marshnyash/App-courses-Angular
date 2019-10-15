import { Injectable } from '@angular/core';
import { ICourse } from '../interfaces/course';
import { of, Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  public courses: Array<ICourse> = [
    {
      title: 'Video 1',
      id: 0,
      duration: 3670,
      date: '2017-01-25',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    },
    {
      title: 'Video 2',
      id: 1,
      duration: 3600,
      date: '2019-03-27',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    },
    {
      title: 'Video 3',
      id: 2,
      duration: 5000,
      date: '2020-12-26',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    },
    {
      title: 'Video 4',
      id: 3,
      duration: 0,
      date: '2019-06-26',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae hic laborum voluptatibus sequi cumque accusantium. Voluptates ipsam distinctio dolor culpa debitis. Deleniti error eaque iure laborum, ipsa dicta modi eveniet? '
    }
  ];

  constructor(private http: HttpClient) {}

  public getAllCourses(): Observable<ICourse[]> {
    return of(this.courses);
  }

  public updateCourse(id: number) {}

  public deleteCourse(id: number): Observable<ICourse[]> {
    const newCourseList = [];
    return of(this.courses).pipe(
      map(courses => {
        return courses.filter(course => {
          if (course.id !== id) {
            newCourseList.push(course);
            this.courses = newCourseList;
            return this.courses;
          }
        });
      })
    );
    // return this.http.delete(`qwe${id}`);
  }
}
