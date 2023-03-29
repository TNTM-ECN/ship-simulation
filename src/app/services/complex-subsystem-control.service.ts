import { Injectable } from '@angular/core';
import {SubSystemModel} from "../models/sub-system.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ComplexSubsystemControlService {


  toFormGroup(sub_system: SubSystemModel) : FormGroup{
    let group: any = {};
    let subgroup: any = {};
    sub_system.components.forEach(component => {
      component.attributes.forEach(question => {
        subgroup[question.key] = new FormControl(question.value, Validators.required);
      });
      group[component.key] = new FormGroup(subgroup)
      subgroup = {}
    })
    return new FormGroup(group)
  }
  constructor() { }
}
