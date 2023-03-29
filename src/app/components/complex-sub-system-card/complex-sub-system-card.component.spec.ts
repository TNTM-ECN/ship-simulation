import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSubSystemCardComponent } from './complex-sub-system-card.component';

describe('SubSystemCardComponent', () => {
  let component: ComplexSubSystemCardComponent;
  let fixture: ComponentFixture<ComplexSubSystemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexSubSystemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexSubSystemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
