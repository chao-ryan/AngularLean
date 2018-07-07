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

@NgModule({
  declarations: [
    AppComponent,MockComponent,HeroesComponent,
    GradeTabComponent,GradeBtnComponent,HeroDetailComponent,
    GradeScoreComponent
  ],
  imports: [
    BrowserModule,FormsModule                //FormsModule是使用双向数据绑定必须要的，否则浏览器无法正常工作
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
