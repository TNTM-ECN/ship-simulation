import {QuestionBaseModel} from "./question-base.model";
import {ComponentModel} from "./component.model";

export class SubSystemModel{
  name: string
  components: ComponentModel[]


  constructor(options: {
    name: string,
    components: ComponentModel[]
  }) {
    this.name = options.name
    this.components = options.components
  }
}
