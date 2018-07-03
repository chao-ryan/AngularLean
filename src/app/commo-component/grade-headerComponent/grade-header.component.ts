import { Component , OnInit} from '@angular/core';
import { BaseService } from '../../commo-service/baseService.service';

/**
 * GradeHeaderComponent 这是一个组件
 */
@Component({
  selector: 'gradeHeader-app',
  templateUrl: './grade-header.component.html',
  styleUrls: ['./grade-header.component.css'],
  providers:[BaseService]                       //注册服务提供商（如果要用服务，则必须注册）
})
export class GradeHeaderComponent implements OnInit {
  // 定义需要用到的变量，并将其类型设置为万能型any
  jsonObj:any;
  header:any;
  body:any;

  tmp:string = "我是傻子";
  // 构造器--构造一个服务组件（必须）
  constructor(private baseService: BaseService){}

  /**
   * getJson 获取json Object对象
   * @param str 需要转换的json字符串
   */
  getJsonObj(strJson:string): any{
    return JSON.parse(strJson);
  }

  // 初始化操作，所有的逻辑代码必须放置在方法体中
  ngOnInit(){
    // 将获取到的数据进行json转化，并赋值给变量jsonObj
    this.jsonObj = this.getJsonObj(this.baseService.getStrDataFromGrade());
    // 从json对象中取值
    this.header = this.jsonObj.header;
    this.body = this.jsonObj.data;
  }
}
