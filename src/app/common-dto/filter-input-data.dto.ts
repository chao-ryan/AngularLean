/**
 * FilterInputData filterData
 */
import { FilterInputCol } from "./filter-input-col.dto";
import { FilterInputCondCom } from "./filter-input-condCom.dto";
import { FilterInputContent } from "./filter-input-content.dto";

export class FilterInputData{
    FilterInputColList: Array<FilterInputCol>;                 // filter检索对象数组
    FilterInputCondComList: Array<FilterInputCondCom>;         // filter检索条件数组
    FilterInputContentList: Array<FilterInputContent>;         // filter检索文字列数组
}