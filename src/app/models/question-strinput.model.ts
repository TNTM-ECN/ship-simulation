import {QuestionBaseModel} from "./question-base.model";

export class TextboxQuestionModel extends QuestionBaseModel<string>{
  override controlType = 'textbox'
}
