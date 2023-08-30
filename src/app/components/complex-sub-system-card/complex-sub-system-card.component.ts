import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {SubSystemModel} from "../../models/sub-system.model";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ComplexSubsystemControlService} from "../../services/complex-subsystem-control.service";
import {ComponentModel} from "../../models/component.model";
import {combineLatest, delay, map, Observable, shareReplay, tap} from "rxjs";
import {QuestionBaseModel} from "../../models/question-base.model";


/**
 * This component manages all the sub-system parametrization. It
 */
@Component({
  selector: 'app-complex-sub-system-card',
  templateUrl: './complex-sub-system-card.component.html',
  styleUrls: ['./complex-sub-system-card.component.sass']
})
export class ComplexSubSystemCardComponent implements OnInit {
  /**
   * Is the input representing all the parameters to set up for the sub system
   */
  @Input() subSystem: SubSystemModel = {components: [{label:"", key:"", attributes:[]}], name:""};
  /**
   * Is the output to close the menu and this component.
   */
  @Output() close: EventEmitter<string> = new EventEmitter<string>()
  /**
   * Is the form passed down by the button layer component.
   */
  @Input() fullForm!: FormGroup;
  /**
   * Is the updated form we give back to button layer component. It contains the parameters fixed by the user and the state of the card (enabled components and selected component)
   */
  @Output() fullFormChange: EventEmitter<FormGroup> = new EventEmitter<FormGroup>()

  /**
   * Is used to store the result of the form initialization, and eventually store previous values.
   */
  private resultInit!: any

  /**
   * Holds the parameters for the subsystems
   */
  form!: FormGroup;
  /**
   * Holds the fields for the parameters
   */
  checkboxControls!: FormGroup;
  /**
   * Holds the enabled components of the subsystem
   */
  enabledComponents$!: Observable<ComponentModel[]>
  /**
   * Is used to select a component inside a subsystem to set it up.
   */
  selectControl!: FormControl;
  enableSelect$!: Observable<boolean>
  /**
   * Is used to show the attributes of the component stored in selectControl.
   */
  showedAttributes$!: Observable<{ attributes: QuestionBaseModel<any>[], component_key: string } | null>


  constructor(private scs: ComplexSubsystemControlService,
              private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.resultInit = this.initFormCtrl();
    this.initObservable();
    const timer = new Observable((subscriber) => {
      setTimeout(() => subscriber.next(1), 10)
    }).pipe(tap(() => {
      if (!this.resultInit.newForm) {
        this.checkboxControls.setValue(this.resultInit.checkbox)
        this.selectControl.setValue(this.resultInit.select)
      }
    }))
    timer.subscribe()  // This subscription is here to have the formControl for checboxes and select to reresh and get the card in the state it was before closing
  }

  initFormCtrl(): any {
    const newForm = (Object.keys(this.fullForm.value).length === 0);  // Will be used to know if we need to load data from the service or if we need to create them.
    let checkboxControlsValue, selectControlValue: any;
    let group: any = {};
    this.subSystem.components.forEach(component => {
      group[component.key] = 0
    })
    this.checkboxControls = this.formBuilder.group(group)
    this.selectControl = this.formBuilder.control("")
    if (newForm){ // if there is no previous data, we build the form following the subsystem
      this.form = this.scs.toFormGroup(this.subSystem)
    } else { // else we load the previous state
      selectControlValue = this.fullForm.get("selectControl")?.value
      checkboxControlsValue = this.fullForm.get("checkboxControls")?.value
      this.form = this.fullForm.get("form")! as FormGroup
    }
    this.fullForm = this.formBuilder.group({
      form: this.form,
      checkboxControls: this.checkboxControls,
      selectControl: this.selectControl  // If a component is parametrized then unselected, the value will be filtered out when sending the data
    })
    // }
    return {newForm: newForm, select: selectControlValue, checkbox: checkboxControlsValue}
  }

  initObservable() {
    this.enabledComponents$ = this.checkboxControls.valueChanges.pipe(tap(value => {console.log("control"); console.log(this.checkboxControls)}),
      map(formValue => {  // On a un {key: value}
        return Object.entries(formValue)  // On a un [[key, value]]
          .filter(([_, enabled]) => enabled) // On a un [[key, value]] avec seulement les cas où value est true // on pourra ajouter un mécanisme pour desactiver le select
          .map(([component_key, _]) =>
              this.subSystem.components.filter(component => component.key === component_key)[0]
          )
      }),
      shareReplay(1),  // Le shareReplay permet de propager l'émission à showAttributes$ ci-dessous
      tap(enabledComponents => {
        if (!enabledComponents.map(enabledComponent => enabledComponent.key).includes(this.selectControl.value)){
          this.form.get(this.selectControl.value)?.reset()
          this.selectControl.setValue("")
        }
      }),
      tap(value => {console.log("enabledComponents");console.log(value)})
    )
    this.showedAttributes$ = combineLatest([
      this.enabledComponents$.pipe(tap(value => console.log(value))),
      this.selectControl.valueChanges.pipe(map(component_key => {
        try {
          return {
            attributes: this.subSystem.components.filter(component => component.key === component_key)[0].attributes,
            component_key: component_key
          }
        } catch {
          return {
            attributes: [],
            component_key: ''
          }
        } // This try catch is here to make sure that if we enable a component, then close, then re-open, the observable is still properly created and everything works
      }))
    ]).pipe(tap(value => {console.log("showedAttributes");console.log(value)}),
      map(pair => (pair[0].length>0)? pair[1] : null), // We keep only the attributes emitted by the combineLatest usage
    )
    console.log("Observable set")
  }

  onClose(){
    this.dump()
    console.log("alaid")
    this.close.emit("")
  }

  dump(){
    console.log(this.form.getRawValue())
    this.fullFormChange.emit(this.fullForm)
  }

}
