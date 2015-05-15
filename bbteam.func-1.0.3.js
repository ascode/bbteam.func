/*!
 * bbteam JavaScript Library v1.0.3
 * http://bbteam.cn/
 *
 * Copyright 2014, Arthur.King
 * Released under the the Apache License Version 2.0.
 * http://bbteam.cn/license
 *
 * Includes jQuery.js
 * http://jquery.com/
 * Copyright 2011, John Resig
 * Released under the the MIT License.
 *
 * Date: Mon Nov 21 21:11:03 2011 -0500
 */
var smart_lodding;
var debug = true;
function AddDebugInfo(strInfo) {//添加页面下面的调试信息debug为其配置参数
    if (debug) {
        if (!document.getElementById("#debugDataDiv")) {
            $("body").append("<div id='debugDataDiv'></div>");
        }
        $("#debugDataDiv").html($("#debugDataDiv").html() + strInfo);
    }
    else {
        if (!document.getElementById("#debugDataDiv")) {
            $("body").remove("#debugDataDiv");
        }
    }
}

var dalert = function (s) {//用来取代alert做调试，使alert调试方式加入debug开关控制范围
    if (debug)
    alert(s);
}


//拒绝成为内页
function DenyToBeInnerPage() {
    if (window != top) {
        top.location.href = window.location.href;
    }
}

//拒绝成为top页
function DenyToBeTopPage() {
    if (window == top) {
        top.location.href = "/";
    }
}

function ShowLoadding(delay)
{
    var img = $("<img src='/Images/lodding1.gif' />");
    img.css("opacity", "0.9");
    smart_lodding = $("<div class='lodding' style='filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity: 0.5;opacity: 0.5;text-align:center;'></div>");
    smart_lodding.append(img);
    smart_lodding.css("height", window.screen.height);
    smart_lodding.css("width", window.screen.width);
    smart_lodding.css("opacity", "0.3");
    img.css("margin-top", window.screen.height / 2 - 100);
    smart_lodding.css("z-index", "998");
    img.css("z-index", "999");
    $("body").prepend(smart_lodding);

    //smart_lodding.delay(delay);
}

function HideLoadding(delay) {
    //$("body").remove(smart_lodding);
    smart_lodding.delay(delay).hide(0);
}

///处理json数据中日期带T的问题
function ChangeDateFormat(cellval) {
    //alert(cellval);
    if (cellval.indexOf('T') != -1) {
        try {
            var date = new Date(parseInt(cellval.replace("/Date(", "").replace(")/", ""), 10));
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var currentDate = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            return date.getFullYear() + "-" + month + "-" + currentDate;
        } catch (e) {
            return "";
        }
    }
    else {
        return cellval;
    }
}

/*
  * string:原始字符串
  * substr:子字符串
  * isIgnoreCase:忽略大小写
*/
function contains(string, substr, isIgnoreCase)
{
    if (isIgnoreCase)
    {
        string = string.toLowerCase();
        substr = substr.toLowerCase();
    }

    var startChar = substr.substring(0, 1);
    var strLen = substr.length;

    for (var j = 0; j<string.length - strLen + 1; j++)
    {
        if (string.charAt(j) == startChar)  //如果匹配起始字符,开始查找
        {
            if (string.substring(j, j+strLen) == substr)  //如果从j开始的字符与str匹配，那ok
            {
                return true;
            }   
        }
    }
    return false;
}



/*date begin*/

var myDate = new Date();
myDate.getYear();        //获取当前年份(2位)
myDate.getFullYear();    //获取完整的年份(4位,1970-????)
myDate.getMonth();       //获取当前月份(0-11,0代表1月)
myDate.getDate();        //获取当前日(1-31)
myDate.getDay();         //获取当前星期X(0-6,0代表星期天)
myDate.getTime();        //获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();       //获取当前小时数(0-23)
myDate.getMinutes();     //获取当前分钟数(0-59)
myDate.getSeconds();     //获取当前秒数(0-59)
myDate.getMilliseconds();    //获取当前毫秒数(0-999)
myDate.toLocaleDateString();     //获取当前日期
var mytime = myDate.toLocaleTimeString();     //获取当前时间
myDate.toLocaleString();        //获取日期与时间



////---------------------------------------------------  
//// 日期格式化  
//// 格式 YYYY/yyyy/YY/yy 表示年份  
//// MM/M 月份  
//// W/w 星期  
//// dd/DD/d/D 日期  
//// hh/HH/h/H 时间  
//// mm/m 分钟  
//// ss/SS/s/S 秒  
////---------------------------------------------------  
//Date.prototype.smartFormat = function (formatStr) {
//    var str = formatStr;
//    var Week = ['日', '一', '二', '三', '四', '五', '六'];

//    str = str.replace(/yyyy|YYYY/, this.getFullYear());
//    str = str.replace(/yy|YY/, (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString() : '0' + (this.getYear() % 100));

//    str = str.replace(/MM/, this.getMonth() > 9 ? this.getMonth().toString() : '0' + this.getMonth());
//    str = str.replace(/M/g, this.getMonth());

//    str = str.replace(/w|W/g, Week[this.getDay()]);

//    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString() : '0' + this.getDate());
//    str = str.replace(/d|D/g, this.getDate());

//    str = str.replace(/hh|HH/, this.getHours() > 9 ? this.getHours().toString() : '0' + this.getHours());
//    str = str.replace(/h|H/g, this.getHours());
//    str = str.replace(/mm/, this.getMinutes() > 9 ? this.getMinutes().toString() : '0' + this.getMinutes());
//    str = str.replace(/m/g, this.getMinutes());

//    str = str.replace(/ss|SS/, this.getSeconds() > 9 ? this.getSeconds().toString() : '0' + this.getSeconds());
//    str = str.replace(/s|S/g, this.getSeconds());

//    return str;
//}

