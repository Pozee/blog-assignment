import { TestBed } from '@angular/core/testing';

import { ArtikelServiceService } from './artikel-service.service';

describe('ArtikelServiceService', () => {
  let service: ArtikelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtikelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
