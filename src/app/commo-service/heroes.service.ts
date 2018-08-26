import { Injectable } from '@angular/core';
import { Hero } from '../commo-module/hero';
import { HEROES } from '../const-def/hero-const-def';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HeroService {
    // URL to web API
    private heroUrl = "api/heroes";

  constructor(private http: HttpClient) { }

   /**
     * getHeroes 拿到模拟的英雄列表,模拟从服务器返回数据
     */
    getHeroes(): Array<Hero>{
        return HEROES;
    }

    getHero(id: number): Hero{
        let hero: Hero;
        const heroes = HEROES;
        for (let i = 0; i < heroes.length; i++){
            if (heroes[i].id === id){
                hero = heroes[i];
            }
        }
        return hero;
    }
}
