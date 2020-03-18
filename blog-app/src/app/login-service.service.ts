import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loggedInStatus: BehaviorSubject<boolean>;
  constructor() { 
    this.loggedInStatus = new BehaviorSubject<boolean>(false);
  }
  setValue(newValue:boolean): void {
    this.loggedInStatus.next(newValue);
  }
  getValue(): Observable<boolean> {
    return this.loggedInStatus.asObservable();
  }
}
