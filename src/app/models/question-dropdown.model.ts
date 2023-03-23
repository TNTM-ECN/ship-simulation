import {QuestionBaseModel} from "./question-base.model";

export class DropdownQuestionModel extends QuestionBaseModel<string> {
  override controlType = "dropdown"
}
