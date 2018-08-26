import { Injectable } from "@angular/core";
import { MockData } from "../commo-module/mock-data";


/**
 * MockService 这是一个服务组件
 * @Injectable 表示依赖注入
 */
@Injectable()
export class MockService{
    /**
     * getJsonStr 获取json字符串
     * @return 返回一个string
     */
    getJsonStr(): string{
        return new MockData().strData;
    }

    constructor(){}
}
