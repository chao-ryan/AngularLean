import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule , Routes} from '@angular/router';
import { HeroesComponent } from "./commo-component/heroes/heroes.component";
import { MockComponent } from "./commo-component/mock/mock-data.component";
import { GradeBtnComponent } from "./commo-component/grade-btn-component/grade-btn.component";
import { DashboardComponent } from "./commo-component/dash-board-component/dash-board.component";
import { HeroDetailComponent } from "./commo-component/hero-detail/hero-detail.component";
import { FilterInputComponent } from "./commo-component/filter-input/filter-input.component";

// 路由定义
const routes: Routes = [
    {path:'heroes', component: HeroesComponent},  // <hero-app>路由：http://localhost:4200/heroes
    {path:'mock', component: MockComponent},      // <mock-app>路由：http://localhost:4200/mock
    {path:'grade', component: GradeBtnComponent}, // <grade-btn-app>路由：http://localhost:4200/grade
    {path:'dashboard', component:DashboardComponent},
    // {path:'', redirectTo: '/dashboard', pathMatch: 'full'},  // 把一个与空路径“完全匹配”的 URL 重定向到路径为 '/dashboard' 的路由
    {path:'detail/:id', component: HeroDetailComponent},
    {path:'filter-input', component: FilterInputComponent}
];


@NgModule({
    imports:[                          // 通常不会在路由模块中声明组件,
        CommonModule ,
        RouterModule.forRoot(routes)   
    ],                                 
    declarations:[],
    exports:[ RouterModule ]           // 所以可以删除 @NgModule.declarations 并删除对 CommonModule 的引用
})                                     // 会使用 RouterModule 中的 Routes 类来配置路由器
export class AppRoutingModule{

}