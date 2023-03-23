import {Component, Input} from '@angular/core';
import {QuestionBaseModel} from "../../models/question-base.model";
import {FormGroup} from "@angular/forms";
import {SubSystemModel} from "../../models/sub-system.model";

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.sass']
})
export class DynamicQuestionComponent {
  @Input() question!: QuestionBaseModel<any>;
  @Input() form!: FormGroup;
  @Input() component!: string;
  get isValid() {
    // console.log(this.form.controls)
    // console.log(this.component)
    // console.log(this.question)
    return this.form.controls[this.component + '_' + this.question.key].valid;
  }
}
