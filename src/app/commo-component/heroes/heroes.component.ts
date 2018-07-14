import { Component , OnInit} from '@angular/core';
import { Hero } from '../../commo-module/hero';
import { HeroService } from '../../commo-service/heroes.service';

/**
 * HeroesComponent 这是一个组件(类) 
 * 要显示该组件内容，可在浏览器URL栏输入：http://localhost:4200/heroes
 */
@Component({
  selector: 'hero-app',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers:[HeroService]
})
export class HeroesComponent implements OnInit {

  heroStyle: any;
  
  heroes: Hero[];
  selectedHero: Hero;
  
  

  // 构造器--构造一个服务组件（如果需要使用服务，则必须）
  constructor(private heroService: HeroService){}

 
  /**
   * ngOnInit 生命周期钩子
   * 初始化操作，所有的逻辑代码必须放置在方法体中
   */
  ngOnInit(){
    this.getHeroes();
  }

  /**
   * onSelect 点击英雄时触发
   * @param hero 页面中被点击的英雄对象
   */
  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

  // 添加点击事件
  heroClickEvent(heroStyle:any){
    alert(heroStyle);
  }

  /**
   * getHeroes 从服务中获取英雄数据
   */
  getHeroes(): void{
    // Observable.subscribe()使用异步方式,把英雄数组赋值给组件的 heroes 属性
    // this.heroService.getHeroes().subscribe(heroes  => this.heroes = heroes);
    this.heroes = this.heroService.getHeroes();
  }
}
