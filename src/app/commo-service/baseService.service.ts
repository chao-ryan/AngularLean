import { Injectable } from "@angular/core";
import { Grade } from "../commo-module/grade";
import { HttpClient } from '@angular/common/http';
import { HttpResponse } from '../../../node_modules/@angular/common/http';
import { LoggerService } from "./logger.service";

/**
 * BaseService 这是一个普通服务类service
 */
@Injectable()
export class BaseService{

    /**
     * 构造器 注入消息Service
     */
    constructor(
        private httpClient: HttpClient,
        private logger: LoggerService
    ){}

    /**
     * ngOnInit 初始化方法
     */
    ngOnInit(){
        
    }

    
    /**
     * getStrDataFromGrade 获取Grade中的属性值  
     * @return 返回一个字符串
     */
    getStrDataFromGrade(){         
        return new Grade().strData;
    }

    /**
     * getGradeData 获取属性gradeData
     */
    getGradeData(){
        this.logger.log("Welcome to use LoggerService, god bless you");
        return new Grade().gradeData;
    }

    /**
     * post http请求
     * @param controller 控制对象
     * @param callback  回调函数
     */
    post(controller, callback: any){
        // 要访问的远程服务器路径，这里的url只是虚拟路径，无实际意义
        const url = "http:192.168.1.104//8080/wechat/page/index.html";
        // http报文body
        const postBody = "";
        // 定义httpHeader
        const postHeader = {
            Accept: "*/*",
            "Content-Type": "application/x-www-form-urlencoded",
            Pragma: "no-cache"
        };
        // 调用HttpClient.post方法，用于向远程服务器发起请求
        return this.httpClient.post(url,postBody,{
            headers: postHeader,
            observe: "response",
            responseType: "text"
        })
        .subscribe((response: HttpResponse<string>) =>{// 在这里调用回调函数，对相应结果的处理在这里操作
            if(callback){
                callback(controller, response.body);
            }
        })
    }
    
}