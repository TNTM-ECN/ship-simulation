import { TestBed } from '@angular/core/testing';

import { ComplexSubsystemControlService } from './complex-subsystem-control.service';

describe('SubsystemControlService', () => {
  let service: ComplexSubsystemControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplexSubsystemControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
