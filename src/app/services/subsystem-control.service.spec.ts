import { TestBed } from '@angular/core/testing';

import { SubsystemControlService } from './subsystem-control.service';

describe('SubsystemControlService', () => {
  let service: SubsystemControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsystemControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
