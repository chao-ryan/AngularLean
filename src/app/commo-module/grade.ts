/**
 * Grade 这只是一个普通类，存放成绩等数据
 */
export class Grade{
    // 模拟gradeData
    gradeData: any =
    {
        "column_config": [
            {
                "index": 1,
                "width": 100,
                "display": "1",
                "column_disp_name": "MyID",
                "type": "number",
                "css_name": "css_my_id"
            },
            {
                "index": 2,
                "width": 100,
                "display": "1",
                "column_disp_name": "MyName",
                "type": "string",
                "css_name": "css_my_name"
            },
            {
                "index": 3,
                "width": 100,
                "display": "1",
                "column_disp_name": "Math",
                "type": "indicator",
                "css_name": "css_math"
            },
            {
                "index": 4,
                "width": 100,
                "display": "1",
                "column_disp_name": "English",
                "type": "indicator",
                "css_name": "css_english"
            },
        ],
        "data": [
            {
                "MyID": 123456,
                "MyName": "yangyan",
                "Math": 80,
                "English": 90
            },
            {
                "MyID": 123457,
                "MyName": "wanghuizhong",
                "Math": 70,
                "English": 80
            },
            {
                "MyID": 123458,
                "MyName": "dailijuan",
                "Math": 80,
                "English": 100
            },
        ]
    };
}
