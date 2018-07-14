import { Injectable } from "@angular/core";
import { Grade } from "../commo-module/grade";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Options } from "../../../node_modules/@types/selenium-webdriver/edge";
import { HttpResponse } from "../../../node_modules/@types/selenium-webdriver/http";

/**
 * BaseService 这是一个普通服务类service
 */
@Injectable()
export class BaseService{
    phone: string;

    /**
     * 构造器 注入消息Service
     */
    constructor(private httpClient: HttpClient){}

    /**
     * ngOnInit 初始化方法
     */
    ngOnInit(){
        this.getStrDataFromGrade();
    }

    
    /**
     * getStrDataFromGrade 获取Grade中的属性值  
     * @return 返回一个字符串
     */
    getStrDataFromGrade(){         
        return new Grade().strData;
    }
    
}