import {Component, OnInit} from '@angular/core';
import {ButtonLayerService} from "../../services/button-layer.service";
import {Observable} from "rxjs";
import {SubSystemModel} from "../../models/sub-system.model";

import propellerSubsystem from '../../../assets/propulsion.json'
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-buttons-layer',
  templateUrl: './buttons-layer.component.html',
  styleUrls: ['./buttons-layer.component.sass']
})
export class ButtonsLayerComponent implements OnInit {
  propeller: SubSystemModel = new SubSystemModel(propellerSubsystem)
  propellerForm!: FormGroup


  constructor(private buttonLayerService: ButtonLayerService,
              private formBuilder: FormBuilder) {
  }
  public subSystemView$!: Observable<string>;

  buttonView(system: string): void {
    this.buttonLayerService.setSubsystemView(system)
  }

  // propulsionView(): void {
  //   this.setView("propulsion", true)
  // }

  saveSubSystem(value: any) {
    console.log(value)
  }

  ngOnInit() {
    this.subSystemView$ = this.buttonLayerService.subSystemView$
    this.propellerForm = this.formBuilder.group({})
  }


}
