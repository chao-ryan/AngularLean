import { Component , OnInit, Input} from '@angular/core';
import { BaseService } from '../../commo-service/baseService.service';
import { Grade } from '../../commo-module/grade';

/**
 * GradeHeaderComponent 这是一个组件
 */
@Component({
  selector: 'grade-tab-app',
  templateUrl: './grade-tab.component.html',
  styleUrls: ['./grade-tab.component.css'],
  providers:[BaseService]                       //注册服务提供商（如果要用服务，则必须注册）
})
export class GradeTabComponent implements OnInit {
// 带有单向输入@Input装饰器的属性--从GradeBtnComponent.originJsonObj获得
@Input() jsonObj:any;
// 成绩栏字体颜色--从从GradeBtnComponent.scoreStyle获得
@Input() scoreStyle: string;

// json对象中的header数组
headers:any;
// json对象中的data数组--间接送给送给GradeScoreComponent.score
datas:any;
// 用于向下一子组件传递样式值--送给GradeScoreComponent.scoreStyle
scoreStyleTmp:string;
  
// 构造器
constructor(){}

// 初始化操作，所有的逻辑代码必须放置在方法体中
ngOnInit(){
    this.headers = this.jsonObj.header;
    this.datas = this.jsonObj.data;
    this.scoreStyleTmp = this.scoreStyle;
  }
}
