import {Component, OnInit} from '@angular/core';
import {ButtonLayerService} from "../../services/button-layer.service";
import {Observable} from "rxjs";
import {FormBuilder, FormControl} from "@angular/forms";
import {PropellerModel} from "../../models/propeller.model";

@Component({
  selector: 'app-propulsion-menu',
  templateUrl: './propulsion-menu.component.html',
  styleUrls: ['./propulsion-menu.component.sass']
})
export class PropulsionMenuComponent implements OnInit {
  public propulsionView$!: Observable<boolean>
  public formPropellerCtrl!: FormControl<PropellerModel>


  constructor(private buttonLayerService: ButtonLayerService,
              private formBuilder: FormBuilder) {
  }

  initForm(): void {
    // this.formPropellerCtrl = this.formBuilder.control()
  }

  ngOnInit() {
    this.propulsionView$ = this.buttonLayerService.propulsionView$

  }

  onClose(): void {
    this.buttonLayerService.setPropulsionView(false)
  }




}
