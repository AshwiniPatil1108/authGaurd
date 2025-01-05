import { TestBed } from '@angular/core/testing';

import { CompDeactivateGuard } from './comp-deactivate.guard';

describe('CompDeactivateGuard', () => {
  let guard: CompDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
