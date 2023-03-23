import {Component, OnInit} from '@angular/core';
import {ButtonLayerService} from "../../services/button-layer.service";
import {Observable} from "rxjs";
import {SubSystemModel} from "../../models/sub-system.model";

import propellerSubsystem from '../../../assets/propulsion.json'
import {QuestionBaseModel} from "../../models/question-base.model";

@Component({
  selector: 'app-buttons-layer',
  templateUrl: './buttons-layer.component.html',
  styleUrls: ['./buttons-layer.component.sass']
})
export class ButtonsLayerComponent implements OnInit {
  propeller: SubSystemModel = new SubSystemModel(propellerSubsystem)


  constructor(private buttonLayerService: ButtonLayerService) {
  }
  public subSystemView$!: Observable<string>;

  buttonView(system: string, value: boolean): void {
    this.buttonLayerService.setSubsystemView(system)
  }

  // propulsionView(): void {
  //   this.setView("propulsion", true)
  // }

  ngOnInit() {
    this.subSystemView$ = this.buttonLayerService.subSystemView$
  }


}
