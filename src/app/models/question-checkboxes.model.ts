import {QuestionBaseModel} from "./question-base.model";

export class CheckboxesQuestionModel extends QuestionBaseModel<string>{
  override controlType = 'checkbox'
}
