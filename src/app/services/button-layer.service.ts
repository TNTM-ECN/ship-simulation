import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ButtonLayerService {

  private _subSystemView$ = new BehaviorSubject<string>("")
  get subSystemView$(): Observable<string> {
    return this._subSystemView$.asObservable()
  }

  public setSubsystemView(subSystemName: string): void {
    this._subSystemView$.next(subSystemName)
  }
  constructor() { }
}
