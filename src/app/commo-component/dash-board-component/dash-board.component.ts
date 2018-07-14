import { Component, OnInit } from '@angular/core';
import { Hero } from '../../commo-module/hero';
import { HeroService } from '../../commo-service/heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dash-board.component.html',
  styleUrls: [ './dash-board.component.css' ],
  providers:[HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  /**
   * constructor 构造器
   * @param heroService 
   */
  constructor(private heroService: HeroService) { }

  /**
   * ngOnInit 生命周期钩子
   */
  ngOnInit() {
    this.getHeroes();
  }
  
  /**
   * getHeroes 获取英雄数据
   */
  getHeroes() {
    // 把要显示的英雄的数量缩减为四个（第二、第三、第四、第五）
    this.heroes =  this.heroService.getHeroes();
  }
}