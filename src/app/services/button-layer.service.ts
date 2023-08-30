import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ButtonLayerService {

  private _subSystemView$ = new BehaviorSubject<string>("")
  private _enableButtons$ = new BehaviorSubject<boolean>(true)
  get subSystemView$(): Observable<string> {
    return this._subSystemView$.asObservable()
  }

  get enableButtons$(): Observable<boolean> {
    return this._enableButtons$.asObservable()
  }

  public setSubsystemView(subSystemName: string): void {
    this._subSystemView$.next(subSystemName)
  }

  public setEnableButtons(value: boolean): void {
    this._enableButtons$.next(value)
  }

  /**
   * This update the view of the button-layer-component.
   * @param subSystemName could be restricted to an empty string ("") and the available values for the subsystem
   */
  public updateView(subSystemName: string): void {
    this.setEnableButtons(subSystemName === "");
    this.setSubsystemView(subSystemName)
  }
  constructor() { }
}
