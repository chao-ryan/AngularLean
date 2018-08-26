import { Directive } from "@angular/core";

/**
 * 通过@NgModule 使用指令
 * 使用declarations数组声明指令。其步骤如下
 * 1. 从你编写的文件中导出它
 * 2. 把它导入到适当的模块中（这里是app.module.ts）
 * 3. 在 @NgModule的declarations数组中声明它
 */

@Directive({
    selector: '[appItem]'
})
export class ItemDirective{
    constructor(){}
}
