import { Component, OnInit, Input } from '@angular/core';
import {CategoryService} from '../../../category.service';
import {DebugLoggingService} from '../../../debug-logging.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: {name: string, weight: number, grade: number};
  @Input() index: number;

  constructor(private categoryService: CategoryService,
              private debugLoggingService: DebugLoggingService) { }

  ngOnInit() {
    this.categoryService.calculateEvent.subscribe(
      () => {
        this.confirmChange();
      }
    );
  }

  confirmChange() {
    this.debugLoggingService.standardLog(
      'CategoryComponent',
      'confirmChange',
      'index: ' + this.index + ', weight: ' + this.category.weight + ', grade: ' + this.category.grade);
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.index);
  }

}
