import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../category.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  categories: {name: string, weight: number, grade: number}[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.synchronizeCategories();
  }

  synchronizeCategories() {
    this.categories = this.categoryService.categories;
  }
}
