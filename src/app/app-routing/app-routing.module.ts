import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router/src/config';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from '../home-page/home-page.component';
import {CalculatePageComponent} from '../calculate-page/calculate-page.component';
import {HistoryPageComponent} from '../history-page/history-page.component';

const pageRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'calculation', component: CalculatePageComponent},
  {path: 'history', component: HistoryPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
