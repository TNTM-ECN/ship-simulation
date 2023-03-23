import { TestBed } from '@angular/core/testing';

import { SubsystemCardService } from './subsystem-card.service';

describe('SubsystemCardService', () => {
  let service: SubsystemCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsystemCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
