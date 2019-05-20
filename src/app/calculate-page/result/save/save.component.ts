import { Component, OnInit } from '@angular/core';
import {DebugLoggingService} from '../../../debug-logging.service';
import {HistoryService} from '../../../history.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  private subject: string;
  private showWarning: boolean;

  constructor(private debugLoggingService: DebugLoggingService,
              private historyService: HistoryService) {
    this.subject = '';
    this.showWarning = false;
  }

  ngOnInit() {
  }

  onSave() {
    this.debugLoggingService.standardLog(
      'SaveComponent',
      'onSave',
      this.subject);
    if (this.subject === '') {
      this.showWarning = true;
    } else {
      this.historyService.emitSaveHistoryEvent(this.subject);
      // this.historyService.histories[this.historyService.getHistoryCount() - 1].subject = this.subject;
      if (this.showWarning === true) {
        this.onCloseWarning();
      }
    }
    this.subject = '';
  }

  onCloseWarning() {
    this.debugLoggingService.standardLog(
      'SaveComponent',
      'onCloseWarning',
      'close warning message');
    this.showWarning = false;
  }
}
