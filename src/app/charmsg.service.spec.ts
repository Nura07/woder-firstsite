import { TestBed } from '@angular/core/testing';

import { CharmsgService } from './charmsg.service';

describe('CharmsgService', () => {
  let service: CharmsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharmsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
