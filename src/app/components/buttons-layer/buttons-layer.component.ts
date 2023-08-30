import {Component, OnInit} from '@angular/core';
import {ButtonLayerService} from "../../services/button-layer.service";
import {Observable, tap} from "rxjs";
import {SubSystemModel} from "../../models/sub-system.model";

import propellerSubsystem from '../../../assets/propulsion.json'
import {FormBuilder, FormGroup} from "@angular/forms";

/**
  * This component is the root component for the interface.
 * It contains the ship silhouette and the buttons to open the component menus.
 * When clicking on a button, it hydrates a complex-sub-system-card component with data coming from a json asset.
 * There is one existing for the propulsion.
 */
@Component({
  selector: 'app-buttons-layer',
  templateUrl: './buttons-layer.component.html',
  styleUrls: ['./buttons-layer.component.sass']
})
export class ButtonsLayerComponent implements OnInit {
  /**
   * This is used to have all buttons working. It will need to be replaced with all the different sub systems.
   */
  emptyForm!: FormGroup
  /**
   * This contain an empty sub system. Same as emptyForm, it is to be replaced with all the different sub systems assets.
   */
  emptySubSystem: SubSystemModel = new SubSystemModel({name: "empty", components:[]} )
  /**
   * This is used to store the subsystem parameters defined in the asset.
   */
  propulsion: SubSystemModel = new SubSystemModel(propellerSubsystem)
  /**
   * This holds the parameters for the propulsion subsystem.
   */
  propulsionForm!: FormGroup
  /**
   * This is a local reference of enableButton$ in button-layer.service.
   */
  enableButtons$!: Observable<boolean>;
  /**
   * This is a local reference of subSystemView$ in button-layer.service.
   */
  subSystemView$!: Observable<string>;


  constructor(private buttonLayerService: ButtonLayerService,
              private formBuilder: FormBuilder) {
  }

  /**
   * This updates the interface by either loading a menu and disabling buttons, or abling buttons and closing menu.
   * @param system
   */
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
