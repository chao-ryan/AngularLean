import { Component , OnInit, Input} from '@angular/core';
import { BaseService } from '../../commo-service/baseService.service';

/**
 * GradeHeaderComponent 这是一个组件
 */
@Component({
  selector: 'app-grade-tab',
  templateUrl: './grade-tab.component.html',
  styleUrls: ['./grade-tab.component.css'],
  providers: [BaseService]                       // 注册服务提供商（如果要用服务，则必须注册）
})
export class GradeTabComponent implements OnInit {
// 带有单向输入@Input装饰器的属性--从GradeBtnComponent.originJsonObj获得
@Input() grade: any;


// 构造器
constructor() {}

// 页面初期化
ngOnInit() {
  }
}
