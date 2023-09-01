import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { canConfirmGuard } from './can-confirm.guard';

describe('canConfirmGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canConfirmGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
