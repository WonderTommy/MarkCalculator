import {EventEmitter, Injectable} from '@angular/core';
import {DebugLoggingService} from './debug-logging.service';
import {CategoryService} from './category.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  public saveHistoryEvent = new EventEmitter<string>();

  /*public histories:
    {subject: string,
      currentMax: number,
      currentCumulative: number,
      currentLost: number,
      currentPercentage: number,
      highestPossible: number,
      finalCumulative: number}[] = [
        {subject: 'Math 235', currentMax: 55,
          currentCumulative: 41.55, currentLost: 13.41,
          currentPercentage: 75.55, highestPossible: 86.55,
          finalCumulative: 41.55}
          ];*/

  public histories:
    {subject: string,
      currentMax: number,
      currentCumulative: number,
      currentLost: number,
      currentPercentage: number,
      highestPossible: number,
      finalCumulative: number}[] = [];

  constructor(private debugLoggingService: DebugLoggingService) { }

  public addHistory(subject: string, currentMax: number, currentCumulative: number, currentLost: number,
                    currentPercentage: number, highestPossible: number, finalCumulative: number) {
    if (this.histories.length > 0 && this.histories[this.histories.length - 1].subject === subject) {
    } else {
      this.histories.push({subject, currentMax, currentCumulative, currentLost, currentPercentage,
      highestPossible, finalCumulative});
    }
    this.debugLoggingService.standardLog(
      'HistoryService',
      'addHistory',
      'history added' + ', length is: ' + this.histories.length
      );
  }

  public emitSaveHistoryEvent(subject: string) {
    this.debugLoggingService.tempLog('HistoryService', 'emitSaveHistoryEvent');
    this.saveHistoryEvent.emit(subject);
  }

  public getHistoryCount(): number {
    return this.histories.length;
  }

  public deleteHistory(index: number) {
    this.histories.splice(index, 1);
  }

  public clearHistory() {
    this.histories.splice(0, this.getHistoryCount());
  }
}
