import { Injectable } from '@angular/core';
import {SubSystemModel} from "../models/sub-system.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class SubsystemControlService {


  toFormGroup(sub_system: SubSystemModel) : FormGroup{
    let group: any = {};
    sub_system.components.forEach(component => {
      component.attributes.forEach(question => {
        group[component.key +'_'+question.key] = new FormControl(question.value, Validators.required);
      })
    })
    return new FormGroup(group)
  }
  constructor() { }
}
