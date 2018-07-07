import { Injectable } from "@angular/core";
import { Grade } from "../commo-module/grade";

/**
 * BaseService 这是一个普通服务类service
 */
@Injectable()
export class BaseService{
    /**
     * getStrDataFromGrade 获取Grade中的属性值
     * @return 返回一个字符串
     */
    getStrDataFromGrade(): string{        
        return new Grade().strData;
    }

    /**
     * 构造器 注入消息Service
     */
    constructor(){}

    /**
     * ngOnInit 初始化方法
     */
    ngOnInit(){
        this.getStrDataFromGrade();
    }
}