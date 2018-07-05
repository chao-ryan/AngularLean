import { Injectable } from "../../../node_modules/@angular/core";
import { Grade } from "../commo-module/grade";
import { MessageService } from "./messageService.service";

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
        this.messageService.add("baseService: fetched Grade");
        return new Grade().strData;
    }

    /**
     * 构造器 注入消息Service
     */
    constructor(private messageService:MessageService){}

    /**
     * ngOnInit 初始化方法
     */
    ngOnInit(){
        this.getStrDataFromGrade();
    }
}