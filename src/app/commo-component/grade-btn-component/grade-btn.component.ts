import { Component , OnInit} from '@angular/core';
import { BaseService } from '../../commo-service/baseService.service';

/**
 * GradeBtnComponent 这是一个组件
 */
@Component({
  selector: 'grade-btn-app',
  templateUrl: './grade-btn.component.html',
  styleUrls: ['./grade-btn.component.css'],
  providers:[BaseService]                       //注册服务提供商（如果要用服务，则必须注册）
})
export class GradeBtnComponent implements OnInit {
  // 定义需要用到的变量，并将其类型设置为万能型any
  jsonObj:any;
  header:any;
  body:any;

  // 构造器--构造一个服务组件（必须）
  constructor(private baseService: BaseService){}

  getData(){
      console.log("getData事件： 从远程服务器获取数据");
  }

  checkData(){
      console.log("checkData事件： 检查表格中Math列中的成绩，小于60的变成红色");
  }
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
