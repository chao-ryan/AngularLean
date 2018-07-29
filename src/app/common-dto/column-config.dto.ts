/**
 * 成绩列名dto
 */

export class ColumnConfigDto{
    index: string;                   // 列名index
    display: string;                 // 列表示·非表示
    width: string;                   // 列宽 单位: px
    columnDisplayName: string;       // 列表示名称
    type: string;                    // 列名所代表的值的类型
    cssName: string;                 // 列的style
}