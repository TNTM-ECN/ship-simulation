import {Component, OnInit} from '@angular/core';
import {ButtonLayerService} from "../../services/button-layer.service";
import {Observable, tap} from "rxjs";
import {SubSystemModel} from "../../models/sub-system.model";

import propellerSubsystem from '../../../assets/propulsion.json'
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-buttons-layer',
  templateUrl: './buttons-layer.component.html',
  styleUrls: ['./buttons-layer.component.sass']
})
export class ButtonsLayerComponent implements OnInit {
  emptyForm!: FormGroup
  emptySubSystem: SubSystemModel = new SubSystemModel({name: "empty", components:[]} )
  propulsion: SubSystemModel = new SubSystemModel(propellerSubsystem)
  propulsionForm!: FormGroup
  enableButtons$!: Observable<boolean>;
  subSystemView$!: Observable<string>;


  constructor(private buttonLayerService: ButtonLayerService,
              private formBuilder: FormBuilder) {
  }

  buttonView(system: string): void {
    this.buttonLayerService.updateView(system)
  }

  // propulsionView(): void {
  //   this.setView("propulsion", true)
  // }

  // saveSubSystem(value: any) {
  //   console.log(value)
  // }

  ngOnInit() {
    this.subSystemView$ = this.buttonLayerService.subSystemView$
    this.enableButtons$ = this.buttonLayerService.enableButtons$
    this.propulsionForm = this.formBuilder.group({})
    this.emptyForm = this.formBuilder.group({})
  }


}
