import { NgModule } from "../../node_modules/@angular/core";
import { CommonModule } from "../../node_modules/@angular/common";
import { RouterModule , Routes} from '@angular/router';
import { HeroesComponent } from "./commo-component/heroes/heroes.component";
import { MockComponent } from "./commo-component/mock/mock-data.component";
import { GradeBtnComponent } from "./commo-component/grade-btn-component/grade-btn.component";

// 路由定义
const routes: Routes = [
    {path:'heroes', component: HeroesComponent},  // <hero-app>路由：http://localhost:4200/heroes
    {path:'mock', component: MockComponent},      // <mock-app>路由：http://localhost:4200/mock
    {path:'grade', component: GradeBtnComponent}  // <grade-btn-app>路由：http://localhost:4200/grade
];


@NgModule({
    imports:[                          // 通常不会在路由模块中声明组件,
        CommonModule ,
        RouterModule.forRoot(routes)   // 所以可以删除 @NgModule.declarations 并删除对 CommonModule 的引用
    ],                                 // 会使用 RouterModule 中的 Routes 类来配置路由器
    declarations:[],
    exports:[ RouterModule ]
})
export class AppRoutingModule{

}