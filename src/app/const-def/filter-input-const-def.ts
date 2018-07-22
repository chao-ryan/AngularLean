// 当前index的检索文字列存在状态 0--不存在
export const FILTER_DATA_CONTENT_EXIST_0 = '0';
// 当前index的检索文字列存在状态 1--存在
export const FILTER_DATA_CONTENT_EXIST_1 = '1';
// filterData对象
export const FILTER_DATA = {
    col: [
        {code: '0', name: 'コード'},
        {code: '0', name: '商品区分'},
        {code: '0', name: '商品名称'},
        {code: '0', name: '商品略称'},
        {code: '0', name: '开始时间'}
    ],
    condCom: [
        {code: '0', name: 'と等しい'},
        {code: '1', name: '以上'},
        {code: '1', name: '以下'},
        {code: '1', name: '以外'},
        {code: '1', name: '其他'},
        {code: '1', name: '空白'}
    ],
    content: [
        {
            filterCol: 'Col1',
            filterColCode: '0',
            filterCondCode: '0',
            filterInput: "'100'",
            isEdit: '1'
        },
        {
            filterCol: 'Col2',
            filterColCode: '0',
            filterCondCode: '0',
            filterInput: "'200'",
            isEdit: '1'
        },
        {
            filterCol: 'Col3',
            filterColCode: '0',
            filterCondCode: '0',
            filterInput: "'300'",
            isEdit: '1'
        },
        {
            filterCol: 'Col4',
            filterColCode: '0',
            filterCondCode: '0',
            filterInput: "'400'",
            isEdit: '1'
        },
        {
            filterCol: 'Col5',
            filterColCode: '0',
            filterCondCode: '0',
            filterInput: "'500'",
            isEdit: '1'
        },
        {
            filterCol: 'Col6',
            filterColCode: '0',
            filterCondCode: '0',
            filterInput: "'600'",
            isEdit: '1'
        },
        {
            filterCol: 'Col7',
            filterColCode: '',
            filterCondCode: '',
            filterInput: "''",
            isEdit: '0'
        },
        {
            filterCol: 'Col8',
            filterColCode: '',
            filterCondCode: '',
            filterInput: "''",
            isEdit: '0'
        },
        {
            filterCol: 'Col9',
            filterColCode: '',
            filterCondCode: '',
            filterInput: "''",
            isEdit: '0'
        },
        {
            filterCol: 'Col10',
            filterColCode: '',
            filterCondCode: '',
            filterInput: "''",
            isEdit: '0'
        }
    ]
}