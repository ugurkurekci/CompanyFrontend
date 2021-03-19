import { TestBed } from '@angular/core/testing';

import { ProductregistrationService } from './productregistration.service';

describe('ProductregistrationService', () => {
  let service: ProductregistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductregistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
