import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DebugLoggingService {

  constructor() { }

  private placeHolder = 'placeHolder';

  public tempLog(className: string, methodName: string) {
    this.standardLog(className, methodName, this.placeHolder);
  }

  public standardLog(className: string, methodName: string, message: string) {
    console.log(className + ': ' + methodName + ': ' + message);
  }
}
