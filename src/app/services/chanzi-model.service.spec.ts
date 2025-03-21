import { TestBed } from '@angular/core/testing';

import { ChanziModelService } from './chanzi-model.service';

describe('ChanziModelService', () => {
  let service: ChanziModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChanziModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
