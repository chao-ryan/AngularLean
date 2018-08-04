export class ViewFilterContentDto{
    join: string;                 // filter连接条件
    col: string;                  // filter检索对象
    cond: string;                 // filter检索条件
    input: string;                // filter输入文字列
    isEdit: string;               // filter可否编集 "0":否  "1":可
    filterName: string;           // filter名称
}