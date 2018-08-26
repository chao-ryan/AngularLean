import { FilterInputCol } from "./filter-input-col.dto";
import { FilterInputCondCom } from "./filter-input-condCom.dto";
import { ViewFilterContentDto } from "./view-filter-content.dto";


export class ViewFilterDataDto {
    viewFilterColList: Array<FilterInputCol>;                 // filter检索对象数组
    viewFilterCondComList: Array<FilterInputCondCom>;         // filter检索条件数组
    viewFilterContentList: Array<ViewFilterContentDto>;         // filter检索文字列数组
}
