import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsLayerComponent } from './buttons-layer.component';

describe('ButtonsLayerComponent', () => {
  let component: ButtonsLayerComponent;
  let fixture: ComponentFixture<ButtonsLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsLayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
