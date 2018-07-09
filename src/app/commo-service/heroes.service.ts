import { Injectable } from '@angular/core';
import { Hero } from '../commo-module/hero';
import { HEROES } from '../const-def/hero-const-def';
import { Observable, of } from 'rxjs';
import { MessageService } from '../messageService.service';

@Injectable()
export class HeroService {

   
  constructor(private messagesService: MessageService) { }

   /**
     * getHeroes 拿到模拟的英雄列表,模拟从服务器返回数据
     */
    getHeroes(): Observable<Hero[]>{
        // 在获取到英雄数组时发送一条消息
        this.messagesService.add("heroService: fetched heroes");   
        // of(HEROES) 会返回一个 Observable<Hero[]>，它会发出单个值，这个值就是这些模拟英雄的数组
        return of(HEROES);
    }

    getHero(id: number): Observable<Hero>{
        // 反引号 ( ` ) 用于定义 JavaScript 的 模板字符串字面量，以便嵌入 id
        this.messagesService.add('HeroService: fetched hero id = ${id}');
        return of(HEROES.find(hero => hero.id === id));
    }

}