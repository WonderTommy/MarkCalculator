import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {HistoryService} from '../../history.service';
import {DebugLoggingService} from '../../debug-logging.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  private CURRENT_MAX_ROW_NAME = 'current max';
  private CURRENT_CUMULATIVE_ROW_NAME = 'current cumulative';
  private CURRENT_LOST_ROW_NAME = 'current lost';
  private CURRENT_PERCENTAGE_ROW_NAME = 'current percentate';
  private HIGHEST_POSSIBLE_ROW_NAME = 'highest possible';
  private FINAL_CUMULATIVE_ROW_NAME = 'final cumulative';

  private PLACEHOLDER = 'placeholder';

  private currentMax: number;
  private currentCumulative: number;
  private currentLost: number;
  private currentPercentage: number;

  private highestPossible: number;
  private finalCumulative: number;


  constructor(private categoryService: CategoryService,
              private historyService: HistoryService,
              private debugLoggingService: DebugLoggingService) {
    this.resetFigures();
  }

  ngOnInit() {
    this.historyService.saveHistoryEvent.subscribe(
      (s: string) => {
        this.debugLoggingService.standardLog('ResultComponent',
          'saveHistoryEveng subscrib', 'none');
        this.historyService.addHistory(s, this.currentMax,
          this.currentCumulative, this.currentLost,
          this.currentPercentage, this.highestPossible,
          this.finalCumulative);
        console.log('currentMax is: ' + this.currentMax);
      }
    );
  }

  private outputResult() {
    this.resetFigures();
    this.categoryService.emitCalculateEvent();
    this.calculateResult();
  }

  private resetFigures() {
    this.currentMax = 0;
    this.currentCumulative = 0;
    this.currentLost = 0;
    this.currentPercentage = 0;

    this.highestPossible = 100;
    this.finalCumulative = 0;
  }

  private calculateResult() {
    this.categoryService.categories.forEach(category => {
      this.currentMax += category.weight;
      this.currentCumulative += (category.weight * category.grade) / 100;
      this.finalCumulative += (category.weight * category.grade) / 100;
    });
    this.currentLost = this.currentMax - this.currentCumulative;
    this.currentPercentage = (this.currentCumulative / this.currentMax) * 100;
    this.highestPossible = this.currentCumulative + (100 - this.currentMax);

    this.currentMax = +this.currentMax.toFixed(2);
    this.currentCumulative = +this.currentCumulative.toFixed(2);
    this.currentLost = +this.currentLost.toFixed(2);
    this.currentPercentage = +this.currentPercentage.toFixed(2);

    this.highestPossible = +this.highestPossible.toFixed(2);
    this.finalCumulative = +this.finalCumulative.toFixed(2);
  }

  private currentMode(): number {
    let result: number;
    if (this.currentMax < 100) {
      result = 0;
    } else if (this.currentMax === 100) {
      result = 1;
    } else if (this.currentMax > 100) {
      result = 2;
    }
    return result;
  }

  private modeUnder(): boolean {
    return (this.currentMode() === 0) ?  true : false;
  }

  private modeFull(): boolean {
    return (this.currentMode() === 1) ?  true : false;
  }

  private modeOver(): boolean {
    return (this.currentMode() === 2) ?  true : false;
  }


}
