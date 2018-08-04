import { Component, OnInit } from "@angular/core";
import { viewFilterDataDto } from "../../common-dto/view-filter-data.dto";
import * as FilterConstDef from "../../const-def/filter-input-const-def";


  @Component({
      selector: 'app-view-filter',
      templateUrl: './view-filter.component.html',
      styleUrls: ['./view-filter.component.scss']
  })
  export class ViewFilterComponent implements OnInit{
      // filterData原始数据
      filterData: any;
      // viewFilterDataDto型
      viewFilterData = new viewFilterDataDto();


      constructor(){}

      ngOnInit(){
          // filterData初期化
          this.filterData = FilterConstDef.FILTER_DATA;
      }
  }