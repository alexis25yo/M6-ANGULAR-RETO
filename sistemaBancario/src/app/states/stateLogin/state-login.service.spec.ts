import { TestBed } from '@angular/core/testing';

import { StateLoginService } from './state-login.service';

describe('StateLoginService', () => {
  let service: StateLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
