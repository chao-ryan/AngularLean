import { Component , OnInit, Input} from '@angular/core';
import { Hero } from '../../commo-module/hero';

/**
 * HeroesComponent 这是一个组件(类)
 */
@Component({
  selector: 'hero-detail-app',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 添加一个带有 @Input() 装饰器的 hero 属性
  @Input() hero: Hero;
  
  constructor(){}

  ngOnInit(){

  }
}
