import { TestBed } from '@angular/core/testing';

import { ButtonLayerService } from './button-layer.service';

describe('ButtonLayerService', () => {
  let service: ButtonLayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ButtonLayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
