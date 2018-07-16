import { Component , OnInit} from '@angular/core';
import { BaseService } from '../../commo-service/baseService.service';
import * as ConstDef from '../../const-def/grade-const-def';

/**
 * GradeBtnComponent 这是一个组件   <grade-btn-app>路由：http://localhost:4200/grade
 */
@Component({
  selector: 'grade-btn-app',
  templateUrl: './grade-btn.component.html',
  styleUrls: ['./grade-btn.component.css'],
  providers:[BaseService]                       //注册服务提供商（如果要用服务，则必须注册）
})
export class GradeBtnComponent implements OnInit {
  // 定义需要用到的变量，并将其类型设置为万能型any
  jsonObj: any;
  // 原始数据jsonObj--送给GradeTabComponent.jsonObj
  originJsonObj: Object;
  // 模拟数据json
  gradeJsonObj: any;
  // 成绩栏样式--送给GradeScoreComponent.scoreStyle
  scoreStyle: string;
    // 响应数据中的属性column_config
   jsonObjColumn: any
   // 响应数据中的属性data
   jsonObjData: any;
   // 整个响应数据
   httpData: any;
   // 成绩是否不合格 是：true，否：false
   mathFlag: Boolean;
   result: Array<number>;

  // 构造器--构造一个服务组件（必须）
  constructor(private baseService: BaseService){
    
  }

  // 初始化操作，所有的逻辑代码必须放置在方法体中
  ngOnInit(){
    
  }

  /**
   * getData Click事件：从AP服务器获取数据
   */
  getData(){
    // 使用post向远程服务器发起请求，这里的this指代GradeBtnComponent，因为是这个class需要对数据做处理
    // 传入callback，以便将对响应数据的处理挂载到http线路上，解决CPU空载问题
    // this.httpData = this.baseService.post(this, this.callback);
    this.getGradeMock();
  }

  /**
   * checkData Click事件：检查成绩是否大于60
   */
  checkData(){
    // 检查成绩是否合格
    this.scoreCheck();
    console.log("checkData事件： 检查表格中Math列中的成绩，小于60的变成红色");
  }

  /**
   * isGradeQualified 检查成绩是否合格
   */
  scoreCheck(){
    let data = this.jsonObj.data;
    console.log("jsonObj.data: ",data);
    for(let i = 0; i < data.length; i++){
      if(data[i].Score > 60){
        this.mathFlag = false;        
        console.log("结果是：",this.mathFlag);
        console.log("合格的分数是：",data[i].Score);
      }else{
        this.mathFlag = true;
        this.result.push(i);
        console.log("不合格的分数是：",data[i].Score);
        console.log("结果是： ",this.mathFlag);
      }
    }
  }

  /**
   * getJson 获取json Object对象
   * @param str 需要转换的json字符串
   */
  getJsonObj(strJson:any): any{
    return JSON.parse(strJson);
  }
  /**
   * getGradeMock 获取数据（模拟数据）
   */
  getGradeMock(){
    // 将获取到的数据originJsonObj放入与子组件属性绑定的数据对象data
    // 将获取到的数据进行json转化，并赋值给变量jsonObj
    this.gradeJsonObj = this.getJsonObj(this.baseService.getStrDataFromGrade());
    this.jsonObj = this.gradeJsonObj;
    // 初始化成绩栏样式
    this.scoreStyle = ConstDef.SCORE_ORIGIN_STYLE_MARK;
      console.log("getData事件： 从远程服务器获取数据");
  }
  /**
   * callback 回调函数，用于对接收到的http数据进行处理
   * @param ctroller 控制对象（自身）
   * @param response http响应体
   */
  callback(ctroller: GradeBtnComponent, response: any){
    // 将响应数据中的column_config属性解析
    this.jsonObjColumn = this.getJsonObj(response).column_config;
    // 将响应数据中的data属性解析
    this.jsonObjData = this.getJsonObj(response).data;
  }
}
