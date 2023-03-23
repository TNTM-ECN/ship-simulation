import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSystemCardComponent } from './sub-system-card.component';

describe('SubSystemCardComponent', () => {
  let component: SubSystemCardComponent;
  let fixture: ComponentFixture<SubSystemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubSystemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSystemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
