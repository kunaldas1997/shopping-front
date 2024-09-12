import { TestBed } from '@angular/core/testing';

import { AllProdsService } from './all-prods.service';

describe('AllProdsService', () => {
  let service: AllProdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllProdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
