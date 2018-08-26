import { Component , OnInit, Input} from '@angular/core';
import * as GradeConstDef from '../../const-def/grade-const-def';

/**
 * GradeHeaderComponent 这是一个组件
 */
@Component({
  selector: 'app-grade-score',
  templateUrl: './grade-score.component.html',
  styleUrls: ['./grade-score.component.css']
})
export class GradeScoreComponent implements OnInit {
// 成绩--从从GradeTabComponent.data.Score获得
@Input() score: number;
// data对象，从GradeTabComponent
@Input() dataObj: any;
// 数组下标
@Input() index: any;
// 现在表示名称
@Input() columnIndex: any;
// 现在分数是否不合格flag   true--否，false--是
@Input() flag: boolean;


// 构造器--构造一个服务组件（必须）
constructor() {}

  // 初始化操作，所有的逻辑代码必须放置在方法体中
  ngOnInit() {}

/**
 * incScoreClick 加-点击事件处理
 * 思路1：页面中是动态获取属性值，所以需要从页面中将当前操作对象作为param传回后台方法，
 *       为了确保当前操作对象是我们所需要的，在执行加1操作前需要根据唯一性属性MyID进行判断定位
 * 思路2：在页面中是从数组中取值，所以可以将当前操作对象的索引值（下标）index作为参数传回，
 *        然后将index与获取的数据源的数组索引（下标）判断
 * @param dataObj 需要操作的当前对象
 */
//   incScoreClick(dataObj: any){
//     // 遍历数据源中获取的data数组
//     for(let i = 0; i < this.body.length; i++){
//       // 判断定位当前操作对象在数据源数组中的位置（这里使用“===”，它表示内容、类型和内存大小完全一致）
//       if(this.body[i].MyID === dataObj.MyID){
//         console.log("减之前的Score: " + this.body[i].Score);
//         // 对当前对象的Score属性值执行加1操作（这里操作的是number类型，如果属性值Score是any，则会被默认为
//         // string类型，这里的“+”会作为字符串拼接符）
//         this.body[i].Score = dataObj.Score + 1;
//         console.log("加之后的Score: " + this.body[i].Score);
//       }
//     }
//   }

incScoreClick() {
    if (this.score >= 0 && this.score < 100) {
        for (let i = 0; i < this.dataObj.data.length; i++) {
            if (this.index === i && this.columnIndex === GradeConstDef.GRADE_COLUMN_INDEX_3) {
                this.dataObj.data[i].Math++;
            }
            if (this.index === i && this.columnIndex === GradeConstDef.GRADE_COLUMN_INDEX_4) {
                this.dataObj.data[i].English++;
            }
        }
    }
}

  /**
   * decScoreClick 减-点击事件处理
   * @param dataObj 需要操作的当前对象
   */
//   decScoreClick(dataObj: any){
//     // 遍历数据源中获取的data数组
//     for(let i = 0; i < this.body.length; i++){
//       // 判断定位当前操作对象在数据源数组中的位置
//       if(this.body[i].MyID === dataObj.MyID){
//         console.log("减之前的Score: " + this.body[i].Score);
//         // 对当前对象的Score属性值执行减1操作
//         this.body[i].Score = dataObj.Score - 1;
//         console.log("减之后的Score: " + this.body[i].Score);
//       }
//     }
//   }
decScoreClick() {
    if (this.score >= 0 && this.score <= 100) {
        for (let i = 0; i < this.dataObj.data.length; i++) {
            if (this.index === i && this.columnIndex === GradeConstDef.GRADE_COLUMN_INDEX_3) {
                this.dataObj.data[i].Math--;
            }
            if (this.index === i && this.columnIndex === GradeConstDef.GRADE_COLUMN_INDEX_4) {
                this.dataObj.data[i].English--;
            }
        }
    }
}

// checkScore(){
//     if(this.mathFlag){
//         for(let i = 0; i < this.dataObj.length; i++){
//             if(this.index === i && this.dataObj[i].Score < 60){
//                 this.result = true;
//                 console.log(this.dataObj[i].Score,"is",this.result);
//             }
//         }
//     }
// }

}
