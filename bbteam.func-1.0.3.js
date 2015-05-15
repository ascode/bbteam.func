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
function AddDebugInfo(strInfo) {//���ҳ������ĵ�����ϢdebugΪ�����ò���
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

var dalert = function (s) {//����ȡ��alert�����ԣ�ʹalert���Է�ʽ����debug���ؿ��Ʒ�Χ
    if (debug)
    alert(s);
}


//�ܾ���Ϊ��ҳ
function DenyToBeInnerPage() {
    if (window != top) {
        top.location.href = window.location.href;
    }
}

//�ܾ���Ϊtopҳ
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

///����json���������ڴ�T������
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
  * string:ԭʼ�ַ���
  * substr:���ַ���
  * isIgnoreCase:���Դ�Сд
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
        if (string.charAt(j) == startChar)  //���ƥ����ʼ�ַ�,��ʼ����
        {
            if (string.substring(j, j+strLen) == substr)  //�����j��ʼ���ַ���strƥ�䣬��ok
            {
                return true;
            }   
        }
    }
    return false;
}



/*date begin*/

var myDate = new Date();
myDate.getYear();        //��ȡ��ǰ���(2λ)
myDate.getFullYear();    //��ȡ���������(4λ,1970-????)
myDate.getMonth();       //��ȡ��ǰ�·�(0-11,0����1��)
myDate.getDate();        //��ȡ��ǰ��(1-31)
myDate.getDay();         //��ȡ��ǰ����X(0-6,0����������)
myDate.getTime();        //��ȡ��ǰʱ��(��1970.1.1��ʼ�ĺ�����)
myDate.getHours();       //��ȡ��ǰСʱ��(0-23)
myDate.getMinutes();     //��ȡ��ǰ������(0-59)
myDate.getSeconds();     //��ȡ��ǰ����(0-59)
myDate.getMilliseconds();    //��ȡ��ǰ������(0-999)
myDate.toLocaleDateString();     //��ȡ��ǰ����
var mytime = myDate.toLocaleTimeString();     //��ȡ��ǰʱ��
myDate.toLocaleString();        //��ȡ������ʱ��



////---------------------------------------------------  
//// ���ڸ�ʽ��  
//// ��ʽ YYYY/yyyy/YY/yy ��ʾ���  
//// MM/M �·�  
//// W/w ����  
//// dd/DD/d/D ����  
//// hh/HH/h/H ʱ��  
//// mm/m ����  
//// ss/SS/s/S ��  
////---------------------------------------------------  
//Date.prototype.smartFormat = function (formatStr) {
//    var str = formatStr;
//    var Week = ['��', 'һ', '��', '��', '��', '��', '��'];

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

