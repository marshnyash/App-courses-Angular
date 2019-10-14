import { TestBed } from '@angular/core/testing';

import { CoursesService } from '../services/courses.service';

describe('CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });
});
