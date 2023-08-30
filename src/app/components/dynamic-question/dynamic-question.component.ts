import {Component, Input} from '@angular/core';
import {QuestionBaseModel} from "../../models/question-base.model";
import {FormGroup} from "@angular/forms";


/**
 * This component is used to manage the validity state of a field inside a complex-sub-system-card component.
 * It is hydrated by the complex-sub-system-card with the question and can be used to implement different type of field
 * such as number field, slider field or whatever can be imagined, using the attributes of `question`.
 *
 *  */
@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.sass']
})
export class DynamicQuestionComponent {
  /**
   * A local copy of the attribute of the component
   */
  @Input() question!: QuestionBaseModel<any>;
  /**
   * A local copy of complexSubSystemCardComponent.form
   */
  @Input() form!: FormGroup;
  /**
   * The key to access the component inside form
   */
  @Input() system!: string;
  get isValid() {
    return this.form.get(this.system + '.' + this.question.key)?.valid;
  }
}
