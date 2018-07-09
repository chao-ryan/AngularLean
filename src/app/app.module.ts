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
import { MessagesComponent } from './commo-component/messages-component/messages.component';

@NgModule({
  declarations: [
    AppComponent,MockComponent,
    GradeTabComponent,GradeBtnComponent,GradeScoreComponent,
    HeroesComponent,HeroDetailComponent,MessagesComponent    
  ],
  imports: [
    BrowserModule,FormsModule,AppRoutingModule       // FormsModule是使用双向数据绑定必须要的，否则浏览器无法正常工作
  ],                                                 // AppRoutingModule为添加的路由
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
