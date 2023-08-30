import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexSubSystemCardComponent } from './complex-sub-system-card.component';
import {MaterialModule} from "../../material.module";
import {DynamicQuestionComponent} from "../dynamic-question/dynamic-question.component";

describe('ComplexSubSystemCardComponent', () => {
  let component: ComplexSubSystemCardComponent;
  let fixture: ComponentFixture<ComplexSubSystemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterialModule ],
      declarations: [ ComplexSubSystemCardComponent, DynamicQuestionComponent ]
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
