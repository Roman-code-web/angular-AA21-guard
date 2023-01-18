import { TestBed } from '@angular/core/testing';

import { RegistropermisoGuard } from './registropermiso.guard';

describe('RegistropermisoGuard', () => {
  let guard: RegistropermisoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegistropermisoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
