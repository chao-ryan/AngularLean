import { Injectable } from "@angular/core";

/**
 * 服务类，用于将日志记录到浏览器的控制台
 */
@Injectable({
    providedIn: 'root',
})
export class LoggerService{
    /**
     * 输出日志信息
     * @param msg 一般日志信息
     */
    log(msg: any) {
        console.log(msg);        
    }

    /**
     * 输出错误日志信息
     * @param msg 错误日志信息
     */
    error(msg: any){
        console.error(msg);        
    }

    /**
     * 输出警告日志信息
     * @param msg 警告日志信息
     */
    warn(msg: any){
        console.warn(msg);        
    }
}