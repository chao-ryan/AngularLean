import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule , Routes} from '@angular/router';
import * as RouterConstDef from "./const-def/routing-module-const-def";


@NgModule({
    imports:[                          // 通常不会在路由模块中声明组件,
        CommonModule ,
        RouterModule.forRoot(RouterConstDef.REUTES)   
    ],                                 
    declarations:[],
    exports:[ RouterModule ]           // 所以可以删除 @NgModule.declarations 并删除对 CommonModule 的引用
})                                     // 会使用 RouterModule 中的 Routes 类来配置路由器
export class AppRoutingModule{

}