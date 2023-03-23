import { Injectable } from '@angular/core';
import {QuestionBaseModel} from "../models/question-base.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  toFormGroup(questions: QuestionBaseModel<any>[]){
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    })
    return new FormGroup(group)
  };
  constructor() { }
}
