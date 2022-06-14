import { TestBed } from '@angular/core/testing';

import { DefaultAuthGuard } from './default-auth.guard';

describe('DefaultAuthGuard', () => {
  let guard: DefaultAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DefaultAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
