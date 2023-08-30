import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQuestionComponent } from './dynamic-question.component';
import {MaterialModule} from "../../material.module";
import {UnitPipe} from "../../pipes/unit.pipe";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {QuestionBaseModel} from "../../models/question-base.model";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";

describe('DynamicQuestionComponent', () => {
  let component: DynamicQuestionComponent;
  let fixture: ComponentFixture<DynamicQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MaterialModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule ],
      declarations: [ DynamicQuestionComponent, UnitPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicQuestionComponent);
    component = fixture.componentInstance;
  });

  describe("with number question", () => {
    beforeEach( () => {
      component.question = new QuestionBaseModel<any>({
          "label": "Diameter",
          "key": "diameter",
          "value": null,
          "controlType": "number",
          "required": true,
          "order": 1,
          "type": "",
          "options": [],
          "unit": "m"
        });
        component.form = new FormGroup<any>({
          "propulsion" : new FormGroup({"diameter": new FormControl()})
        });
        component.system = "propulsion";
        fixture.detectChanges();
    });
    it('creates', () => {
      expect(component).toBeTruthy();
    });

    it('renders an input', () => {
      const input = fixture.debugElement.query(By.css('#diameter'))
      expect(input.name).toEqual("input")
    })
  })

});
