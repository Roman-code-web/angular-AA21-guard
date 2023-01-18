import { TestBed } from '@angular/core/testing';

import { LoginpermisosGuard } from './loginpermisos.guard';

describe('LoginpermisosGuard', () => {
  let guard: LoginpermisosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginpermisosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
