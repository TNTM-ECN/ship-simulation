import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SubSystemModel} from "../../models/sub-system.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SubsystemControlService} from "../../services/subsystem-control.service";
import {ComponentModel} from "../../models/component.model";
import {combineLatest, map, Observable, shareReplay} from "rxjs";
import {QuestionBaseModel} from "../../models/question-base.model";

@Component({
  selector: 'app-sub-system-card',
  templateUrl: './sub-system-card.component.html',
  styleUrls: ['./sub-system-card.component.sass']
})
export class SubSystemCardComponent implements OnInit{
  @Input() subSystem: SubSystemModel = {components: [{label:"", key:"", attributes:[]}], name:""};
  @Output() close: EventEmitter<string> = new EventEmitter<string>()
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
    this.form = this.scs.toFormGroup(this.subSystem) // On va rajouter un test pour savoir si on n'a pas déjà des valeurs sauvegardées
    this.initFormCtrl();
    this.initObservable();
    // console.log(this.form.value)
  }

  initObservable() {
    this.enabledComponents$ = this.checkboxControls.valueChanges.pipe(map(formValue => {  // On a un {key: value}
      return Object.entries(formValue)  // On a un [[key, value]]
        .filter(([_, enabled]) => enabled) // On a un [[key, value]] avec seulement les cas où value est true
        .map(([component_key, _]) =>
          this.subSystem.components.filter(component => component.key === component_key)[0]
        )
    }),
      shareReplay(1),  // Le shareReplay permet de propager l'émission à showAttributes$ ci-dessous
    )

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

  onClose(){
    this.dump()
    this.close.emit("")
  }

  dump(){
    console.log(JSON.stringify(this.form.getRawValue()))
  }

}
