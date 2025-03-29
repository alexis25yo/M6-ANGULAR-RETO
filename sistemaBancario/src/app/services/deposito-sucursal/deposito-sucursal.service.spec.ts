import { TestBed } from '@angular/core/testing';

import { DepositoSucursalService } from './deposito-sucursal.service';

describe('DepositoSucursalService', () => {
  let service: DepositoSucursalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositoSucursalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
