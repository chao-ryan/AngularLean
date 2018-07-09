import { Injectable } from "@angular/core";

@Injectable()
export class MessageService{
    messages: string[] = [];

    /**
     * add 往缓存中添加一条消息
     * @param message 需要添加的消息内容 
     */
    add(message:string){
        this.messages.push(message);
    }

    /**
     * clear 清空缓存
     */
    clear(){
        this.messages = [];
    }
}