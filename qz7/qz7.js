let text =  '{"data": ['+
'{"stationNo": "C0AD1","stationName": "八里","recTime": "202204271600", "rain": 0},'+
'{"stationNo": "C0AD0","stationName": "三芝","recTime": "202204271600","rain": 0},'+
'{"stationNo": "C0AD4","stationName": "土城","recTime": "202204271600","rain": 0},'+
'{"stationNo": "318","stationName": "大安福州山","recTime": "202204271602","rain": 0},'+
'{"stationNo": "01A17","stationName": "坪林","recTime": "201911130140","rain": 0}]}';


'{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
var item = document.getElementById("contain");
var item2 = document.createElement;


$(document).ready(function(){
    for(var i = 0; i < 5; i++){
        $("#contain").append($("<h2>", {id: i}));
        $("#" + i).append(obj.data[i].stationName + "(" + obj.data[i].stationNo + ")");
        $("#contain").append($("<h3>", {id: i}));
        $("#" + i).append(obj.data[i].recTime +"及時雨量" + obj.data[i].rain);
    }
})