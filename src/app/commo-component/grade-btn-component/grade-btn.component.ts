import { Component , OnInit} from '@angular/core';
import { BaseService } from '../../commo-service/baseService.service';
import { HttpResponse } from '@angular/common/http';
import { ColumnConfigDto } from '../../common-dto/column-config.dto';
import * as GradeConstDef from '../../const-def/grade-const-def';
import { GradeDataDto } from '../../common-dto/grade-data.dto';
import { GradeDto } from '../../common-dto/grade.dto';

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
  // 响应数据中的属性column_config
   jsonObjColumn: any
  // 响应数据中的属性data
   jsonObjData: any;
  // 整个响应数据
   httpData: any;
  // 模拟数据临时变量 
   gradeData: any;
   // 模拟数据dto
   grade = new GradeDto();
   // tab页面表示、非表示flag   true--表示，false-- 非表示
   showFlag: boolean;

  // 
  /**
   * 构造器
   * @param baseService --构造一个服务组件（必须）
   */
  constructor(private baseService: BaseService){
    
  }
 
  /**
   * 页面初期化
   */
  ngOnInit(){
    // 成绩栏目list初期化为空
    this.grade.columnConfig = [];
    // 成绩data数据初期化为空
    this.grade.data = [];
    // 获取成绩数据
    this.gradeData = this.baseService.getGradeData();
    // 初期化成绩dto
    this.initGrade();
  }

  /**
   * initGrade 数据初期化
   */
  initGrade(){
    // tab页面表示、非表示flag 初期化为 false--非表示
    this.showFlag = false;
    // 成绩栏目数据dto初期化
    for(let i = 0; i < this.gradeData.column_config.length; i++){
      let column = new ColumnConfigDto();
      column.index = this.gradeData.column_config[i].index;
      column.width = this.gradeData.column_config[i].width;
      column.display = this.gradeData.column_config[i].display;
      column.columnDisplayName = this.gradeData.column_config[i].column_disp_name;
      column.type = this.gradeData.column_config[i].type;
      column.cssName = this.gradeData.column_config[i].css_name;
      this.grade.columnConfig.push(column);
    }
    // 成绩data数据dto初期化
    for(let j = 0; j < this.gradeData.data.length; j++){
      let dataTmp = new GradeDataDto();
      dataTmp.MyID = GradeConstDef.GRADE_BANK;
      dataTmp.MyName = GradeConstDef.GRADE_BANK;
      dataTmp.Math = GradeConstDef.GRADE_SCOE_0;
      dataTmp.English = GradeConstDef.GRADE_SCOE_0;
      dataTmp.mathFlag = false;
      dataTmp.englishFalg = false;
      this.grade.data.push(dataTmp);
    }
    
  }

  /**
   * getData Click事件：从AP服务器获取数据
   */
  getData(){
    // 使用post向远程服务器发起请求，这里的this指代GradeBtnComponent，因为是这个class需要对数据做处理
    // 传入callback，以便将对响应数据的处理挂载到http线路上，解决CPU空载问题
    // this.httpData = this.baseService.post(this, this.callback);
    for(let j = 0; j < this.gradeData.data.length; j++){
      this.getGradeData(j)
    }
    // tab页面表示、非表示flag 设置为 true-- 表示
    this.showFlag = true;
    console.log(this.grade);
  }

  /**
   * checkData Click事件：检查成绩是否大于60
   */
  checkData(){
    if(this.grade){
      for(let i = 0; i < this.grade.data.length; i++){
        // 判断数学分数是否及格
        if(this.grade.data[i].Math < 60){
          // 数学分数 < 60时，对应flag设置为true
          this.grade.data[i].mathFlag = true;
        }else{
          // 上述以外的情况，对应flag设置为false
          this.grade.data[i].mathFlag = false;
        }
        // 判断英语分数是否及格
        if(this.grade.data[i].English < 60){
          // 英语分数 < 60 时，对应flag设置为true
          this.grade.data[i].englishFalg = true;
        }else{
          // 上述以外的情况，对应flag设置为false
          this.grade.data[i].englishFalg = false;
        }
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
   * getGradeData 获取成绩data数据
   * @param idx 下标
   */
  getGradeData(idx: number){
    let dataTmp = new GradeDataDto();
    this.grade.data[idx].MyID = this.gradeData.data[idx].MyID;
    this.grade.data[idx].MyName = this.gradeData.data[idx].MyName;
    this.grade.data[idx].Math = this.gradeData.data[idx].Math;
    this.grade.data[idx].English = this.gradeData.data[idx].English;
  }

  /**
   * callback 回调函数，用于对接收到的http数据进行处理
   * @param ctroller 控制对象（自身）
   * @param response http响应体
   */
  callback(ctroller: GradeBtnComponent, response: HttpResponse<string>){
    // 获取http响应数据
    this.httpData = this.getJsonObj(response.body);
    // 获取响应数据中的column_config属性
    this.jsonObjColumn = this.httpData.column_config;
    // 获取响应数据中的data属性
    this.jsonObjData = this.httpData.data;
  }  
}
