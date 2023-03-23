import {Component, Input, OnInit} from '@angular/core';
import {SubSystemModel} from "../../models/sub-system.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {QuestionControlService} from "../../services/question-control.service";
import {SubsystemControlService} from "../../services/subsystem-control.service";
import {ComponentModel} from "../../models/component.model";
import {combineLatest, defaultIfEmpty, map, merge, Observable, of, shareReplay, tap} from "rxjs";
import {SubsystemCardService} from "../../services/subsystem-card.service";
import {QuestionBaseModel} from "../../models/question-base.model";

@Component({
  selector: 'app-sub-system-card',
  templateUrl: './sub-system-card.component.html',
  styleUrls: ['./sub-system-card.component.sass']
})
export class SubSystemCardComponent implements OnInit{
  @Input() subSystem: SubSystemModel = {components: [{label:"", key:"", attributes:[]}], name:""};
  form!: FormGroup;
  checkboxControls!: FormGroup;
  enabledComponents$!: Observable<ComponentModel[]>
  selectControl!: FormControl;
  enableSelect$!: Observable<boolean>
  showedAttributes$!: Observable<{ attributes: QuestionBaseModel<any>[], component_key: string } | null>

  constructor(private scs: SubsystemControlService,
              // private scards: SubsystemCardService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.scs.toFormGroup(this.subSystem)
    this.initFormCtrl();
    this.initObservable();
    console.log(this.form.value)
  }

  initObservable() {
    this.enabledComponents$ = this.checkboxControls.valueChanges.pipe(map(formValue => {  // On a un {key: value}
      return Object.entries(formValue)  // On a un [[key, value]]
        .filter(([component_key, enabled]) => enabled) // On a un [[key, value]] avec seulement les cas où value est true
        .map(([component_key, enabled]) =>
          this.subSystem.components.filter(component => component.key === component_key)[0]
        )
    }),
      shareReplay(1),
      // tap(value => {
      //   console.log("enabledComponents$");
      //   console.log(value)
      // })
    )
    // this.enableSelect$ = this.enabledComponents$.pipe(
    //   map(enabledComponents => enabledComponents.length > 0),
    //   tap(value => {
    //     console.log("enableSelect$");
    //     console.log(value)
    //   })
    // )

    this.showedAttributes$ = combineLatest([
      this.enabledComponents$,//.pipe(tap(value => console.log(value))),
      this.selectControl.valueChanges.pipe(map(component_key => {
        return {
          attributes: this.subSystem.components.filter(component => component.key === component_key)[0].attributes,
          component_key: component_key
        }
      }))
    ]).pipe(
      map(pair => (pair[0].length>0)? pair[1] : null),
    )
  }

  initFormCtrl(){
    let group: any = {};
    this.subSystem.components.forEach(component => {
      group[component.key] = false
    })
    this.checkboxControls = this.formBuilder.group(group)
    this.selectControl = this.formBuilder.control("")
  }

  onClose(){ console.log("closing") }

  // checkboxChange(value: boolean, component_key: string) {
  //   if (value){this.enabledComponents.push(component_key)}
  //   else {
  //     const index = this.enabledComponents.indexOf(component_key);
  //     if (index > -1) {
  //       this.enabledComponents.splice(index, 1)
  //     }
  //   }
  // }

  // getComponent(key: string): ComponentModel {
  //   return this.subSystem.components.filter(component => component.key === key)[0]
  // }


}
