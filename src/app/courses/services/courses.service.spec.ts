import { TestBed } from '@angular/core/testing';

import { CoursesService } from '../services/courses.service';
import { HttpClientModule } from '@angular/common/http';

describe('CoursesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
