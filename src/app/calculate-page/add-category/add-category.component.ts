import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';
import {DebugLoggingService} from '../../debug-logging.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService: CategoryService,
              private debugLoggingService: DebugLoggingService) { }

  ngOnInit() {
  }

  onAddCategory(name: string, weight: string, grade: string) {
    this.categoryService.addCategory(name, Number(weight), Number(grade));
  }

  onClearCategories() {
    this.debugLoggingService.tempLog(
      'AddCategoryComponent',
      'onClearCategories'
    );
    this.categoryService.clearCategories();
  }
}
