import { Component , OnInit, Input} from '@angular/core';
import { Hero } from '../../commo-module/hero';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { HeroService } from '../../commo-service/heroes.service';
import { Location } from '@angular/common';

/**
 * HeroesComponent 这是一个组件(类)
 */
@Component({
  selector: 'hero-detail-app',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  providers:[HeroService]
})
export class HeroDetailComponent implements OnInit {
  // 添加一个带有 @Input() 装饰器的 hero 属性
  @Input() hero: Hero;

  heroTmp: Hero;

  heroes: Hero[] = [];
  
  constructor(
    // ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息
    private route: ActivatedRoute,
    // HeroService 从远端服务器获取英雄数据
    private heroService: HeroService,
    // location 是一个 Angular 的服务，用来与浏览器打交道
    private location: Location
  ){}

  ngOnInit(): void{
    this.getHero();
  }

  gpBack(): void{
    this.location.back();
  }

  getHero(): void{
    // route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后
    // paramMap 是一个从 URL 中提取的路由参数值的字典。 "id" 对应的值就是要获取的英雄的 id
    // 路由参数总会是字符串。 JavaScript 的 (+) 操作符会把字符串转换成数字，英雄的 id 就是数字类型
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroTmp =  this.heroService.getHero(id);
  }
}
