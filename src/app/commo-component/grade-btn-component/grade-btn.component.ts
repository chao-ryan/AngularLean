import { Component , OnInit} from '@angular/core';
import { BaseService } from '../../commo-service/baseService.service';
import * as ConstDef from '../../const-def/grade-const-def';
import { Config } from '../../../../node_modules/protractor';
import { HttpResponse } from '../../../../node_modules/@angular/common/http';

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
  jsonObj:any;
  // 原始数据jsonObj--送给GradeTabComponent.jsonObj
  originJsonObj:any;
  // 成绩栏样式--送给GradeScoreComponent.scoreStyle
  scoreStyle: string;
   // 需要检查的成绩--从GradeScoreComponent.score获得
   checkScore:number;
   config: any;
  
   jsonObjColumn: any
   jsonObjData: any;

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
    // 将获取到的数据originJsonObj放入与子组件属性绑定的数据对象data
    // 将获取到的数据进行json转化，并赋值给变量jsonObj
    this.jsonObj = this.getJsonObj(this.baseService.getStrDataFromGrade());
    // 将初始jsonObj放入originJsonObj
    this.originJsonObj = this.jsonObj;
    // 初始化成绩栏样式
    this.scoreStyle = ConstDef.SCORE_ORIGIN_STYLE_MARK;
      console.log("getData事件： 从远程服务器获取数据");
  }

  /**
   * checkData Click事件：检查成绩是否大于60
   */
  checkData(){
    // 检查成绩是否合格
    this.isGradeQualified(this.checkScore);
      console.log("checkData事件： 检查表格中Math列中的成绩，小于60的变成红色");
  }

  /**
   * isGradeQualified 检查成绩是否合格
   * @param score 需要检查的成绩
   */
  isGradeQualified(score:number){
    if(score){
      if(score < 60){
          this.scoreStyle = ConstDef.SCORE_NOT_QUALIFIED_STYLE_MARK;
      }
    }
  }

  /**
   * getJson 获取json Object对象
   * @param str 需要转换的json字符串
   */
  getJsonObj(strJson:string): any{
    return JSON.parse(strJson);
  }
}
