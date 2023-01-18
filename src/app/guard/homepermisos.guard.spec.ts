import { TestBed } from '@angular/core/testing';

import { HomepermisosGuard } from './homepermisos.guard';

describe('HomepermisosGuard', () => {
  let guard: HomepermisosGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HomepermisosGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
