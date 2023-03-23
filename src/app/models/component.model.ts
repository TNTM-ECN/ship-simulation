import {QuestionBaseModel} from "./question-base.model";

export class ComponentModel {
  label!: string;
  key!: string;
  attributes!: QuestionBaseModel<any>[];
}
