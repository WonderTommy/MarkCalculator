import {EventEmitter, Injectable} from '@angular/core';
import {DebugLoggingService} from './debug-logging.service';

@Injectable()
export class CategoryService {
  /*categories: {name: string, weight: number, grade: number}[] = [
    {name: 'Assignment', weight: 20, grade: 90},
    {name: 'Midterm 1', weight: 20, grade: 60},
    {name: 'Midterm 2', weight: 15, grade: 77}
  ];*/

  categories: {name: string, weight: number, grade: number}[] = []

  public calculateEvent = new EventEmitter<null>();

  constructor(private debugLoggingService: DebugLoggingService) {}

  addCategory(name: string, weight: number, grade: number) {
    this.categories.push({name, weight, grade});
  }

  updateCategory(updateInfo: {index: number, weight: number, grade: number}) {
    this.categories[updateInfo.index].weight = updateInfo.weight;
    this.categories[updateInfo.index].grade = updateInfo.grade;
  }

  deleteCategory(index: number) {
    this.debugLoggingService.standardLog(
      'CategoryService',
      'deleteCategory',
      'length before is: ' + this.categories.length);
    this.debugLoggingService.standardLog(
      'CategoryService',
      'deleteCategory',
      'index is: ' + index);
    this.categories.splice(index, 1);
    // this.categories.pop();
    this.debugLoggingService.standardLog(
      'CategoryService',
      'deleteCategory',
      'length after is: ' + this.categories.length);
  }

  clearCategories() {
    this.categories.splice(0, this.getCategoriesCount());
  }

  private getCategoriesCount() {
    return this.categories.length;
  }

  emitCalculateEvent() {
    this.calculateEvent.emit();
  }
}
