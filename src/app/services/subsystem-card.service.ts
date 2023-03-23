import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ComponentModel} from "../models/component.model";

@Injectable({
  providedIn: 'root'
})
export class SubsystemCardService {

  private _enabledComponent$: BehaviorSubject<ComponentModel[]> = new BehaviorSubject<ComponentModel[]>([
    {
      key: "",
      label: "",
      attributes: []
    }
  ])
  get enabledComponent$(): Observable<ComponentModel[]> {
    return this._enabledComponent$.asObservable()
  }
  setEnabledComponent(value: ComponentModel[]){
    this._enabledComponent$.next(value)
  }

  private _selectedComponent$: BehaviorSubject<ComponentModel> = new BehaviorSubject<ComponentModel>({
    key: "",
    label: "",
    attributes: []
  })
  get selectedComponent$(): Observable<ComponentModel>{
    return this._selectedComponent$.asObservable()
  }
  setSelectedComponent(value: ComponentModel){
    this._selectedComponent$.next(value)
  }

  constructor() { }
}
