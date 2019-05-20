import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  private histories: {subject: string, currentMax: number,
    currentCumulative: number, currentLost: number,
    currentPercentage: number, highestPossible: number,
    finalCumulative: number}[] = [];

  constructor(private historyService: HistoryService) {
    // this.histories = this.historyService.histories;
  }

  ngOnInit() {
    this.syncronizeHistory();
  }

  onClearHistory() {
    this.historyService.clearHistory();
  }

  syncronizeHistory() {
    this.histories = this.historyService.histories;
  }

}
