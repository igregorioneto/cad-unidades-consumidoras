import { TestBed } from '@angular/core/testing';

import { FaturaServiceService } from './fatura-service.service';

describe('FaturaServiceService', () => {
  let service: FaturaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaturaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
