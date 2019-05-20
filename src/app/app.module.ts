import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './calculate-page/input/input.component';
import { CategoryComponent } from './calculate-page/input/category/category.component';
import {CategoryService} from './category.service';
import { AddCategoryComponent } from './calculate-page/add-category/add-category.component';
import { ResultComponent } from './calculate-page/result/result.component';
import {FormsModule} from '@angular/forms';
import {DebugLoggingService} from './debug-logging.service';
import { CalculatePageComponent } from './calculate-page/calculate-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { TabsComponent } from './tabs/tabs.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { SaveComponent } from './calculate-page/result/save/save.component';
import {HistoryService} from './history.service';
import { HistoryComponent } from './history-page/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CategoryComponent,
    AddCategoryComponent,
    ResultComponent,
    CalculatePageComponent,
    HomePageComponent,
    TabsComponent,
    HistoryPageComponent,
    SaveComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    CategoryService,
    HistoryService,
    DebugLoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
