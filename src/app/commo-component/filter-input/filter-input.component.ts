/**
 * FilterInputComponent filter输入的数组取得对应对象
 */
import { Component, OnInit } from '@angular/core';
import * as ConstDef from '../../const-def/filter-input-const-def';
import { FilterInputData } from '../../common-dto/filter-input-data.dto';
import { FilterData } from '../../common-dto/filter-data.dto';


@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: [ './filter-input.component.css' ]
})
export class FilterInputComponent implements OnInit{
  // filterName
  filterName: string;
  // flag显示 true--显示，false--不显示
  showFlag: boolean;
  // flag值的取得，通过单选按钮设定flag值
  flag: boolean;
  // filter对象临时变量，主要用于显示
  contents: any;
  // 当前filter检索文字列选中状态，true--选中,false--未选中
  styleFlag: boolean;
  // filterData，用于向子组件传递
  filterData = new FilterData();  
  // filterData，主要用于filter对象的处理
  filterInputData = new FilterInputData();

  /**
   * constructor 构造器
   */  
   constructor(){}

  /**
   * ngOnInit 生命周期钩子
   */
  ngOnInit(){
    // 当前filter检索文字列选中状态初始化为false--未选中
    this.styleFlag = false;
    // filterData的检索文字列对象初始化
    this.filterData.content = [];
    // filterData的检索文字列数组初始化
    this.filterInputData.FilterInputContentList = [];
    // 临时filterData的检索文字列对象初始化
    this.contents = ConstDef.FILTER_DATA.content;
  }

  /**
   * onKey 单选按钮鼠标点击监听事件
   * @param value 指定单选按钮元素对应的vlaue
   */
  onKey(value: string){
    // filterName值的设定
    this.filterName = value;
  }
    
  /**
   * openFilterInput 打开filterInput弹出框
   */
  openFilterInput(){
    console.log("The flag: ",this.flag);
    // 根据获得的flag值，设定flag显示
    if(this.flag){
      // flag显示的值的设定
      this.showFlag = this.flag;
    }
    // 传递用filterData的检索对象的设定
    this.filterData.col = ConstDef.FILTER_DATA.col;
    // 传递用filterData的检索条件的设定
    this.filterData.condCom = ConstDef.FILTER_DATA.condCom;
    console.log("filterData: ",this.filterData);
    console.log("filterData2: ",ConstDef.FILTER_DATA);
    console.log("The showFlag: ",this.showFlag);
  }

  /**
   * getFilterContent 获取filter检索文字列
   * @param idx 
   */
  getFilterContent(idx: number){
    // 当前index的检索文字列存在状态 0--不存在，1--存在
    let result = ConstDef.FILTER_DATA_CONTENT_EXIST_0;
    // 根据传递用filterData的检索文字列，判断是否当前index的检索文字列是否存在
    for(let i = 0; i < this.filterData.content.length; i++){
      // 当前idnex的检索文字列存在时
      if(this.filterData.content[i] === ConstDef.FILTER_DATA.content[idx]){
        // 当前index的检索文字列存在状态设定为存在--'1'
        result = ConstDef.FILTER_DATA_CONTENT_EXIST_1;
        // 更新当前filter检索文字列选中状态初始化
        this.styleFlag = !this.styleFlag;
      }
    }
    // 当前index的检索文字列存在状态为不存在时
    if(result === ConstDef.FILTER_DATA_CONTENT_EXIST_0){
      // 向传递用filterData检索文字列数组中添加检索文字列对象
      this.filterData.content.push(ConstDef.FILTER_DATA.content[idx]);
      console.log("new content: ",this.filterData.content);
    }
  }
}