import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropulsionMenuComponent } from './propulsion-menu.component';

describe('PropulsionMenuComponent', () => {
  let component: PropulsionMenuComponent;
  let fixture: ComponentFixture<PropulsionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropulsionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropulsionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
