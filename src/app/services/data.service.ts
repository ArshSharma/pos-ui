import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private loginDetailGlobal = new BehaviorSubject("");
  sendLogin = this.loginDetailGlobal.asObservable();

  constructor() { }

  addLogin(message) {
    this.loginDetailGlobal=message;
  }

}