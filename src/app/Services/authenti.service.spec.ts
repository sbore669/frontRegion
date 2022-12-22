import { TestBed } from '@angular/core/testing';

import { AuthentiService } from './authenti.service';

describe('AuthentiService', () => {
  let service: AuthentiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthentiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
