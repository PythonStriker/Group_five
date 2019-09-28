var mouthZH = { 'Jan': '一', 'Feb': '二 ', 'Mar': '三', ' Apr': '四', 'May': '五', 'Jun': '六', 'Jul': '七', 'Aug': '八', 'Sep': '九', 'Oct': '十', 'Nov': '十一', 'Dec': '十二' }
var mouthNU = { 'Jan': '01', 'Feb': '02 ', 'Mar': '03', ' Apr': '04', 'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08', 'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12' }

var x = document.getElementById('select');
var d = new Date();

var time1 = document.getElementById('time1')
var time2 = document.getElementById('time2')
var time3 = document.getElementById('time3')
var runtime3;
var runtime2;
var runtime1;
var xc;

rutntim1 = setInterval(function() {
    var d = new Date();
    time1.innerHTML = d.toString();
}, 1000);
runtime2 = setInterval(function() {
    var d = new Date();
    time2.innerHTML = d.getTime();
}, 1);

x.onclick = function() {
    if (runtime3) {
        clearInterval(runtime3);
    }
    xc = x.value;
    switch (xc) {
        case "yyyy年MM月dd日":
            time3.innerHTML = d.toString().slice(11, 15) + '年' + mouthZH[d.toString().slice(4, 7)] + '月' + d.toString().slice(8, 10) + '日';
            break;
        case "MM/dd/yyyy":
            time3.innerHTML = mouthNU[d.toString().slice(4, 7)] + '/' + d.toString().slice(8, 10) + '/' + d.toString().slice(11, 15);
            break;
        case "yyyyMMdd":
            time3.innerHTML = d.toString().slice(11, 15) + ' ' + mouthNU[d.toString().slice(4, 7)] + ' ' + d.toString().slice(8, 10);
            break;
        default:
            runtime3 = setInterval(function() {
                var d = new Date();
                time3.innerHTML = d.toString().slice(11, 15) + '-' + mouthNU[d.toString().slice(4, 7)] + '-' + d.toString().slice(8, 10) + '  ' + d.toString().slice(16, 25);
            }, 1000);
    }
}