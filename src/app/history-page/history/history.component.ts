import {Component, Input, OnInit} from '@angular/core';
import {DebugLoggingService} from '../../debug-logging.service';
import {HistoryService} from '../../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  @Input() history: {subject: string, currentMax: number,
    currentCumulative: number, currentLost: number,
    currentPercentage: number, highestPossible: number,
    finalCumulative: number};
  @Input() index: number;

  private CURRENT_MAX_ROW_NAME = 'current max';
  private CURRENT_CUMULATIVE_ROW_NAME = 'current cumulative';
  private CURRENT_LOST_ROW_NAME = 'current lost';
  private CURRENT_PERCENTAGE_ROW_NAME = 'current percentate';
  private HIGHEST_POSSIBLE_ROW_NAME = 'highest possible';
  private FINAL_CUMULATIVE_ROW_NAME = 'final cumulative';

  constructor(private debugLoggingService: DebugLoggingService,
              private historyService: HistoryService) { }

  ngOnInit() {
  }

  public onDeleteHistory() {
    this.debugLoggingService.standardLog(
      'HistoryComponent',
      'onDeleteHistory',
      'delete history button clicked'
    );
    this.historyService.deleteHistory(this.index);
  }

}
