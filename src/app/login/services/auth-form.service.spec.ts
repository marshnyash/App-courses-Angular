import { TestBed } from '@angular/core/testing';

import { AuthFormService } from './auth-form.service';

describe('AuthFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFormService = TestBed.get(AuthFormService);
    expect(service).toBeTruthy();
  });
});
