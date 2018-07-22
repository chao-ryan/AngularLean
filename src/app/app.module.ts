import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MockComponent } from './commo-component/mock/mock-data.component';
import { HeroesComponent } from './commo-component/heroes/heroes.component';
import { GradeBtnComponent } from './commo-component/grade-btn-component/grade-btn.component';
import { HeroDetailComponent } from './commo-component/hero-detail/hero-detail.component';
import { GradeTabComponent } from './commo-component/grade-tabComponent/grade-tab.component';
import { GradeScoreComponent } from './commo-component/grade-score-component/grade-score.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './commo-component/dash-board-component/dash-board.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterInputComponent } from './commo-component/filter-input/filter-input.component';

@NgModule({
  declarations: [
    AppComponent,MockComponent,
    GradeTabComponent,GradeBtnComponent,GradeScoreComponent,
    HeroesComponent,HeroDetailComponent,DashboardComponent,
    FilterInputComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule,
    HttpClientModule       // FormsModule是使用双向数据绑定必须要的，否则浏览器无法正常工作
  ],                                                 // AppRoutingModule为添加的路由
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
